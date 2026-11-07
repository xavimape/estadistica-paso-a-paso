'use strict';

const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const assert = require('node:assert/strict');
const { spawn, execFileSync } = require('node:child_process');
const { createStaticServer } = require('../scripts/serve.js');

const ROOT_DIR = path.join(__dirname, '..');
const CAPTURAS_DIR = path.join(ROOT_DIR, 'docs', 'capturas');

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
];
const EDGE_PATHS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
];

function findExecutable(candidates) {
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

class CdpSession {
  constructor(wsUrl) {
    this.ws = new WebSocket(wsUrl);
    this.nextId = 1;
    this.pending = new Map();
    this.consoleErrors = [];
    this.pageErrors = [];
  }

  async connect() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
    });

    this.ws.addEventListener('message', (event) => {
      const msg = JSON.parse(String(event.data));
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message || JSON.stringify(msg.error)));
        else resolve(msg.result);
      } else if (msg.method === 'Runtime.exceptionThrown') {
        const desc =
          (msg.params &&
            msg.params.exceptionDetails &&
            msg.params.exceptionDetails.exception &&
            msg.params.exceptionDetails.exception.description) ||
          'Excepción JS en página';
        this.pageErrors.push(desc);
      } else if (msg.method === 'Runtime.consoleAPICalled') {
        if (msg.params && msg.params.type === 'error') {
          const text = (msg.params.args || []).map((a) => a.value || a.description || '').join(' ');
          this.consoleErrors.push(text);
        }
      }
    });

    await this.send('Page.enable');
    await this.send('Runtime.enable');
    await this.send('DOM.enable');
    await this.send('Network.enable');
  }

  send(method, params = {}) {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true
    });
    if (res.exceptionDetails) {
      throw new Error(`Error al evaluar en página: ${JSON.stringify(res.exceptionDetails)}`);
    }
    return res.result ? res.result.value : undefined;
  }

  async setViewport(width, height, mobile = false) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile
    });
  }

  async navigate(url, waitMs = 450) {
    await this.send('Page.navigate', { url });
    await new Promise((r) => setTimeout(r, waitMs));
  }

  async screenshotPng(destPath) {
    const res = await this.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(destPath, Buffer.from(res.data, 'base64'));
  }

  close() {
    try {
      this.ws.close();
    } catch (_e) {}
  }
}

async function launchHeadlessBrowser(exePath) {
  const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'est-cdp-'));
  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--allow-file-access-from-files',
    '--remote-debugging-port=0',
    `--user-data-dir=${userDataDir}`,
    'about:blank'
  ];

  const proc = spawn(exePath, args, { stdio: ['ignore', 'pipe', 'pipe'] });

  const wsBrowserUrl = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Timeout esperando DevTools listening')), 12000);
    let stderrAcc = '';
    proc.stderr.on('data', (chunk) => {
      stderrAcc += chunk.toString();
      const match = stderrAcc.match(/DevTools listening on (ws:\/\/[^\r\n]+)/);
      if (match) {
        clearTimeout(timeout);
        resolve(match[1]);
      }
    });
    proc.on('exit', (code) => {
      clearTimeout(timeout);
      reject(new Error(`El navegador terminó prematuramente (código ${code})`));
    });
  });

  // Fetch page target WebSocket URL from /json/list
  const parsedUrl = new URL(wsBrowserUrl);
  const listRes = await fetch(`http://${parsedUrl.host}/json/list`);
  const targets = await listRes.json();
  const pageTarget = targets.find((t) => t.type === 'page') || targets[0];

  const cdp = new CdpSession(pageTarget.webSocketDebuggerUrl);
  await cdp.connect();

  return {
    cdp,
    cleanup: () => {
      cdp.close();
      try {
        proc.kill();
      } catch (_e) {}
    }
  };
}

async function runE2E() {
  console.log('=== Iniciando pruebas E2E multi-dispositivo y captura de evidencias ===');
  fs.mkdirSync(CAPTURAS_DIR, { recursive: true });

  const server = createStaticServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const rootUrl = `http://127.0.0.1:${port}`;
  const subpathUrl = `http://127.0.0.1:${port}/repo-prueba`;

  try {
    // 1. Verify HTTP endpoints both at root `/` and subpath `/repo-prueba/`
    for (const base of [rootUrl, subpathUrl]) {
      for (const rel of [
        '/',
        '/index.html',
        '/manifest.webmanifest',
        '/sw.js',
        '/assets/css/styles.css',
        '/assets/js/app.js',
        '/assets/fichas/ficha-01-variables.png',
        '/assets/fichas/thumbs/ficha-01-variables.png',
        '/assets/documentos/guia-estudio-estadistica-2do-anio.pdf',
        '/downloads/fichas-estadistica-2do-anio.zip',
        '/downloads/estadistica-paso-a-paso-portatil.zip'
      ]) {
        const res = await fetch(`${base}${rel}`);
        assert.equal(res.status, 200, `Fallo HTTP en ${base}${rel}: ${res.status}`);
      }
    }
    console.log('✓ Rutas HTTP verificadas en raíz (/) y en subruta (/repo-prueba/) sin enlaces rotos.');

    // 2. Primary Browser: Headless Chrome E2E across viewports, themes, routes, keyboard & offline
    const chromeExe = findExecutable(CHROME_PATHS);
    assert.ok(chromeExe, 'No se encontró Google Chrome para pruebas E2E');
    const chrome = await launchHeadlessBrowser(chromeExe);

    try {
      const { cdp } = chrome;

      // 2a. Desktop 1440x900 on Inicio (Claro)
      await cdp.setViewport(1440, 900, false);
      await cdp.navigate(`${rootUrl}/#/inicio`, 500);
      await cdp.evaluate(`window.EstadisticaApp.Storage.updateAppearance({ theme: 'claro', fontSize: 100, focusMode: false })`);
      const homeTitle = await cdp.evaluate(`document.querySelector('#home-heading')?.textContent || ''`);
      assert.ok(homeTitle.includes('Bienvenida'), 'No se renderizó la vista Inicio');
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '01-inicio-escritorio-claro.png'));

      // 2b. Test all required viewports (320, 360, 390, 768, 1024, 1440) for absence of horizontal overflow
      const viewports = [
        { w: 320, h: 568, mobile: true },
        { w: 360, h: 800, mobile: true },
        { w: 390, h: 844, mobile: true },
        { w: 768, h: 1024, mobile: true },
        { w: 1024, h: 768, mobile: false },
        { w: 1440, h: 900, mobile: false }
      ];

      for (const vp of viewports) {
        await cdp.setViewport(vp.w, vp.h, vp.mobile);
        await cdp.navigate(`${subpathUrl}/#/aprende/L04`, 350);
        const overflow = await cdp.evaluate(
          `document.documentElement.scrollWidth > window.innerWidth + 2`
        );
        assert.equal(overflow, false, `Desborde horizontal detectado en resolución ${vp.w}x${vp.h}`);
        if (vp.w === 360) {
          await cdp.screenshotPng(path.join(CAPTURAS_DIR, '02-aprende-leccion-movil-360.png'));
        }
      }
      console.log('✓ 6 resoluciones (320, 360, 390, 768, 1024 y 1440 px) verificadas en subruta /repo-prueba/ sin desborde horizontal.');

      // 2c. Solve critical exercise G4-05 in Practicá and capture screenshot
      await cdp.setViewport(1280, 900, false);
      await cdp.navigate(`${subpathUrl}/#/practica/medidas/G4-05`, 450);
      await cdp.evaluate(`
        (function() {
          function setVal(id, val) {
            const el = document.getElementById(id);
            el.value = val;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }
          setVal('input-G4-05-suma', '127');
          setVal('input-G4-05-media', '7,94');
          setVal('input-G4-05-mediana', '8');
          setVal('input-G4-05-moda', '8');
          setVal('input-G4-05-tipo_moda', 'unimodal');
          document.querySelector('[data-check-ex="G4-05"]').click();
        })()
      `);
      await new Promise((r) => setTimeout(r, 200));
      const g405Status = await cdp.evaluate(`window.EstadisticaApp.Storage.getExerciseRecord('G4-05').status`);
      assert.equal(g405Status, 'solved', 'G4-05 debería quedar marcado como resuelto al ingresar 127 y 7,94');
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '03-practica-G4-05-resuelto.png'));

      // 2d. Solve critical exercise G4-07 (medians 1 and 0,5) in Practicá
      await cdp.navigate(`${subpathUrl}/#/practica/medidas/G4-07`, 400);
      await cdp.evaluate(`
        (function() {
          function setVal(id, val) {
            const el = document.getElementById(id);
            el.value = val;
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
          }
          setVal('input-G4-07-media_11', '1,82');
          setVal('input-G4-07-mediana_11', '1');
          setVal('input-G4-07-media_10', '0,9');
          setVal('input-G4-07-mediana_10', '0,5');
          setVal('input-G4-07-comparacion', 'ambas_cambian_mediana_resistente');
          document.querySelector('[data-check-ex="G4-07"]').click();
        })()
      `);
      await new Promise((r) => setTimeout(r, 200));
      const g407Status = await cdp.evaluate(`window.EstadisticaApp.Storage.getExerciseRecord('G4-07').status`);
      assert.equal(g407Status, 'solved', 'G4-07 debería quedar marcado como resuelto con medianas 1 y 0,5');
      console.log('✓ Ejercicios críticos G4-05 (127; ≈ 7,94) y G4-07 (medianas 1 y 0,5) resueltos y verificados en DOM.');

      // 2e. Laboratorio in Oscuro theme at 1024x768 with Antes/Después comparator
      await cdp.setViewport(1024, 768, false);
      await cdp.navigate(`${subpathUrl}/#/laboratorio`, 450);
      await cdp.evaluate(`
        window.EstadisticaApp.Storage.updateAppearance({ theme: 'oscuro' });
        document.documentElement.setAttribute('data-theme', 'oscuro');
        document.getElementById('btn-lab-toggle-compare').click();
      `);
      await new Promise((r) => setTimeout(r, 250));
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '04-laboratorio-oscuro-1024.png'));

      // 2f. Simulacro at 768x1024 (Tablet)
      await cdp.setViewport(768, 1024, true);
      await cdp.evaluate(`
        window.EstadisticaApp.Storage.updateAppearance({ theme: 'claro' });
        document.documentElement.setAttribute('data-theme', 'claro');
      `);
      await cdp.navigate(`${subpathUrl}/#/simulacro`, 450);
      await cdp.evaluate(`document.getElementById('btn-sim-start').click()`);
      await new Promise((r) => setTimeout(r, 250));
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '05-simulacro-tablet-768.png'));

      // 2g. Recursos & Fichas in Sepia theme + Service Worker Offline Pack verification
      await cdp.setViewport(1280, 900, false);
      await cdp.evaluate(`
        window.EstadisticaApp.Storage.updateAppearance({ theme: 'sepia' });
        document.documentElement.setAttribute('data-theme', 'sepia');
      `);
      await cdp.navigate(`${subpathUrl}/#/recursos`, 500);
      await cdp.evaluate(`document.getElementById('btn-prepare-offline')?.click()`);
      await new Promise((r) => setTimeout(r, 1200));
      const offlineReady = await cdp.evaluate(`
        Boolean(window.EstadisticaApp.UIViews.recursosState.offlineStatus.coreReady &&
                window.EstadisticaApp.UIViews.recursosState.offlineStatus.mediaReady)
      `);
      assert.equal(offlineReady, true, 'El paquete offline completo (núcleo + 10 fichas + PDF) debe verificarse en caché');
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '06-recursos-fichas-sepia.png'));

      // 2h. Test real offline navigation via Network.emulateNetworkConditions
      await cdp.send('Network.emulateNetworkConditions', {
        offline: true,
        latency: 0,
        downloadThroughput: 0,
        uploadThroughput: 0
      });
      await cdp.navigate(`${subpathUrl}/#/aprende/L08`, 400);
      const offlineLessonTitle = await cdp.evaluate(`document.querySelector('#lesson-heading')?.textContent || ''`);
      assert.ok(offlineLessonTitle.includes('L08'), 'La navegación offline mediante Service Worker debe funcionar sin red');
      await cdp.send('Network.emulateNetworkConditions', {
        offline: false,
        latency: 0,
        downloadThroughput: -1,
        uploadThroughput: -1
      });
      console.log('✓ Service Worker y funcionamiento offline real comprobados.');

      // 2i. Alto contraste + 150% font size + WAI-ARIA keyboard navigation
      await cdp.evaluate(`
        window.EstadisticaApp.Storage.updateAppearance({ theme: 'contraste', fontSize: 150, lineHeight: 'amplio' });
        document.documentElement.setAttribute('data-theme', 'contraste');
        document.documentElement.setAttribute('data-size', '150');
        document.documentElement.setAttribute('data-line', 'amplio');
      `);
      await cdp.navigate(`${subpathUrl}/#/aprende/L10`, 400);
      const overflow150 = await cdp.evaluate(`document.documentElement.scrollWidth > window.innerWidth + 2`);
      assert.equal(overflow150, false, 'No debe haber desborde horizontal con tamaño de letra al 150 %');
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '07-accesibilidad-contraste-150pct.png'));

      // 2j. Portable ZIP extracted and opened via `file://`
      const tempZipExtractDir = fs.mkdtempSync(path.join(os.tmpdir(), 'est-portable-'));
      const portableZipPath = path.join(ROOT_DIR, 'entrega', 'estadistica-paso-a-paso-portatil.zip');
      execFileSync(
        'python',
        [
          '-c',
          `import zipfile; zipfile.ZipFile(r"""${portableZipPath}""").extractall(r"""${tempZipExtractDir}""")`
        ],
        { encoding: 'utf-8' }
      );
      const fileUrl = 'file:///' + path.join(tempZipExtractDir, 'index.html').replace(/\\/g, '/') + '#/recursos';
      await cdp.evaluate(`
        window.EstadisticaApp.Storage.updateAppearance({ theme: 'claro', fontSize: 100, lineHeight: 'normal' });
      `);
      await cdp.navigate(fileUrl, 600);
      const isFileDetected = await cdp.evaluate(`
        window.location.protocol === 'file:' &&
        document.body.innerText.includes('Modo archivo local (portátil) detectado')
      `);
      assert.equal(isFileDetected, true, 'Al abrir desde el ZIP extraído por file:// debe detectarse el modo portátil sin errores');
      await cdp.screenshotPng(path.join(CAPTURAS_DIR, '08-modo-portatil-file-protocol.png'));
      console.log('✓ Apertura local por protocolo file:// desde el ZIP portátil extraído comprobada sin errores.');

      assert.equal(cdp.pageErrors.length, 0, `Excepciones JS inesperadas en Chrome: ${cdp.pageErrors.join('; ')}`);
    } finally {
      chrome.cleanup();
    }

    // 3. Secondary Browser Verification: Microsoft Edge (or Firefox)
    const edgeExe = findExecutable(EDGE_PATHS);
    if (edgeExe) {
      const edge = await launchHeadlessBrowser(edgeExe);
      try {
        await edge.cdp.setViewport(1280, 800, false);
        await edge.cdp.navigate(`${subpathUrl}/#/practica/frecuencias/G2-01`, 500);
        const exTitle = await edge.cdp.evaluate(`document.querySelector('#ex-heading')?.textContent || ''`);
        assert.ok(exTitle.includes('Tabla completa de faltas'), 'Edge debe renderizar correctamente la vista Practicá');
        assert.equal(edge.cdp.pageErrors.length, 0, `Excepciones JS en Edge: ${edge.cdp.pageErrors.join('; ')}`);
        console.log('✓ Segundo navegador real (Microsoft Edge) verificado sin errores.');
      } finally {
        edge.cleanup();
      }
    }

    console.log('=== Todas las pruebas E2E y las 8 capturas en docs/capturas/ finalizaron con éxito ===');
  } finally {
    server.close();
  }
}

if (require.main === module) {
  runE2E().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { runE2E, launchHeadlessBrowser, CdpSession };
