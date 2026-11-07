/* ==========================================================================
   Service Worker — Estadística paso a paso
   Alcance relativo al proyecto; limpieza exclusiva de cachés propias.
   ========================================================================== */

'use strict';

const CACHE_PREFIX = 'estadistica-paso-a-paso-' + encodeURIComponent(self.registration.scope) + '-';
const CORE_CACHE = `${CACHE_PREFIX}core-v2`;
const MEDIA_CACHE = `${CACHE_PREFIX}media-v2`;

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/css/styles.css',
  './assets/js/math-engine.js',
  './assets/js/lessons-data.js',
  './assets/js/exercises-data.js',
  './assets/js/storage.js',
  './assets/js/charts.js',
  './assets/js/ui-views.js',
  './assets/js/app.js',
  './assets/icons/icon.svg',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/fichas/thumbs/ficha-01-variables.png',
  './assets/fichas/thumbs/ficha-02-frecuencia-absoluta.png',
  './assets/fichas/thumbs/ficha-03-frecuencia-relativa-porcentaje.png',
  './assets/fichas/thumbs/ficha-04-frecuencia-acumulada.png',
  './assets/fichas/thumbs/ficha-05-grafico-de-barras.png',
  './assets/fichas/thumbs/ficha-06-media.png',
  './assets/fichas/thumbs/ficha-07-mediana.png',
  './assets/fichas/thumbs/ficha-08-moda.png',
  './assets/fichas/thumbs/ficha-09-elegir-la-medida.png',
  './assets/fichas/thumbs/ficha-10-simbolos.png'
];

const EXTRA_MEDIA_ASSETS = [
  './assets/fichas/ficha-01-variables.png',
  './assets/fichas/ficha-02-frecuencia-absoluta.png',
  './assets/fichas/ficha-03-frecuencia-relativa-porcentaje.png',
  './assets/fichas/ficha-04-frecuencia-acumulada.png',
  './assets/fichas/ficha-05-grafico-de-barras.png',
  './assets/fichas/ficha-06-media.png',
  './assets/fichas/ficha-07-mediana.png',
  './assets/fichas/ficha-08-moda.png',
  './assets/fichas/ficha-09-elegir-la-medida.png',
  './assets/fichas/ficha-10-simbolos.png',
  './assets/documentos/guia-estudio-estadistica-2do-anio.pdf'
];

function resolveAssetUrl(relPath) {
  return new URL(relPath, self.registration.scope).href;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CORE_CACHE);
      for (const rel of CORE_ASSETS) {
        const url = resolveAssetUrl(rel);
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res || !res.ok || res.status !== 200) {
          throw new Error(`No se pudo precachear recurso esencial: ${rel}`);
        }
        await cache.put(url, res);
      }
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (key.startsWith(CACHE_PREFIX) && key !== CORE_CACHE && key !== MEDIA_CACHE) {
            return caches.delete(key);
          }
          return Promise.resolve();
        })
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const reqUrl = new URL(req.url);
  // Only handle requests within our registration scope
  if (!reqUrl.href.startsWith(self.registration.scope)) return;

  event.respondWith(
    (async () => {
      const cached = await caches.match(req, { ignoreSearch: true });
      if (cached) {
        return cached;
      }

      try {
        const netRes = await fetch(req);
        if (netRes && netRes.ok && netRes.status === 200 && netRes.type === 'basic') {
          const isExtraMedia = EXTRA_MEDIA_ASSETS.some((rel) => reqUrl.href === resolveAssetUrl(rel));
          if (isExtraMedia) {
            const mediaCache = await caches.open(MEDIA_CACHE);
            mediaCache.put(req, netRes.clone());
          }
        }
        return netRes;
      } catch (_err) {
        // Fallback ONLY for HTML navigation requests, never for images, scripts, PDFs or ZIPs
        const accept = req.headers.get('accept') || '';
        if (req.mode === 'navigate' || accept.includes('text/html')) {
          const indexCached = await caches.match(resolveAssetUrl('./index.html'));
          if (indexCached) return indexCached;
        }
        return new Response('Recurso no disponible sin conexión.', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' }
        });
      }
    })()
  );
});

async function getDetailedCacheStatus() {
  const coreReadyList = await Promise.all(
    CORE_ASSETS.map(async (rel) => {
      const m = await caches.match(resolveAssetUrl(rel));
      return Boolean(m && m.ok);
    })
  );
  const coreReady = coreReadyList.every(Boolean);

  const mediaStatus = {};
  let mediaCount = 0;
  for (const rel of EXTRA_MEDIA_ASSETS) {
    const m = await caches.match(resolveAssetUrl(rel));
    const ok = Boolean(m && m.ok);
    mediaStatus[rel] = ok;
    if (ok) mediaCount++;
  }

  return {
    coreReady: coreReady,
    mediaReady: mediaCount === EXTRA_MEDIA_ASSETS.length,
    mediaCount: mediaCount,
    mediaTotal: EXTRA_MEDIA_ASSETS.length,
    mediaStatus: mediaStatus
  };
}

self.addEventListener('message', (event) => {
  const data = event.data || {};
  const replyPort = event.ports && event.ports[0];

  if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
    return;
  }

  if (data.type === 'CHECK_OFFLINE_STATUS') {
    event.waitUntil(
      (async () => {
        const status = await getDetailedCacheStatus();
        if (replyPort) replyPort.postMessage({ ok: true, status: status });
      })()
    );
    return;
  }

  if (data.type === 'CACHE_OFFLINE_PACK') {
    event.waitUntil(
      (async () => {
        try {
          const mediaCache = await caches.open(MEDIA_CACHE);
          let cachedNow = 0;
          for (const rel of EXTRA_MEDIA_ASSETS) {
            const url = resolveAssetUrl(rel);
            const existing = await mediaCache.match(url);
            if (existing && existing.ok) {
              cachedNow++;
              continue;
            }
            const res = await fetch(url, { cache: 'no-cache' });
            if (!res || !res.ok || res.status !== 200) {
              throw new Error(`Fallo al descargar ${rel} (HTTP ${res ? res.status : 'red'})`);
            }
            await mediaCache.put(url, res);
            cachedNow++;
          }
          const status = await getDetailedCacheStatus();
          if (replyPort) {
            replyPort.postMessage({
              ok: status.coreReady && status.mediaReady,
              cachedNow: cachedNow,
              status: status
            });
          }
        } catch (err) {
          const status = await getDetailedCacheStatus();
          if (replyPort) {
            replyPort.postMessage({
              ok: false,
              error: err && err.message ? err.message : 'Error de red al descargar recursos.',
              status: status
            });
          }
        }
      })()
    );
  }
});
