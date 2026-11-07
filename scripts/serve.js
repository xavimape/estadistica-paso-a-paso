'use strict';

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const SITE_DIR = path.join(__dirname, '..', 'site');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip',
  '.ico': 'image/x-icon'
};

function createStaticServer() {
  return http.createServer((req, res) => {
    try {
      const reqUrl = new URL(req.url || '/', 'http://127.0.0.1');
      let pathname = decodeURIComponent(reqUrl.pathname);

      // Support both root `/` and GitHub Pages subpath `/repo-prueba/` or `/estadistica-paso-a-paso/`
      for (const prefix of ['/repo-prueba', '/estadistica-paso-a-paso']) {
        if (pathname === prefix) {
          res.writeHead(302, { Location: `${prefix}/` });
          res.end();
          return;
        }
        if (pathname.startsWith(`${prefix}/`)) {
          pathname = pathname.slice(prefix.length);
          break;
        }
      }

      if (pathname === '/' || pathname === '') {
        pathname = '/index.html';
      }

      const safeRel = path.normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, '');
      const fullPath = path.join(SITE_DIR, safeRel);

      if (!fullPath.startsWith(SITE_DIR + path.sep) || (fs.existsSync(fullPath) && !fs.realpathSync(fullPath).startsWith(fs.realpathSync(SITE_DIR) + path.sep))) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Acceso denegado');
        return;
      }

      if (!fs.existsSync(fullPath) || fs.statSync(fullPath).isDirectory()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`No encontrado: ${pathname}`);
        return;
      }

      const ext = path.extname(fullPath).toLowerCase();
      const mime = MIME_TYPES[ext] || 'application/octet-stream';
      const stream = fs.createReadStream(fullPath);
      res.writeHead(200, {
        'Content-Type': mime,
        'Cache-Control': 'no-cache'
      });
      stream.pipe(res);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Solicitud inválida o error interno');
    }
  });
}

if (require.main === module) {
  const port = Number(process.env.PORT) || 4173;
  const server = createStaticServer();
  server.listen(port, '127.0.0.1', () => {
    console.log(`Servidor local activo en:`);
    console.log(`  - Raíz:    http://127.0.0.1:${port}/`);
    console.log(`  - Subruta: http://127.0.0.1:${port}/repo-prueba/`);
  });
}

module.exports = { createStaticServer };
