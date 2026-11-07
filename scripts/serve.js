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
  '.mp4': 'video/mp4',
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
      const headers = {
        'Content-Type': mime,
        'Cache-Control': 'no-cache'
      };
      let status = 200;
      let streamOptions;
      if (ext === '.mp4') {
        const size = fs.statSync(fullPath).size;
        headers['Accept-Ranges'] = 'bytes';
        headers['Content-Length'] = size;
        const range = req.method === 'GET' && req.headers.range;
        if (range) {
          const match = /^bytes=(\d*)-(\d*)$/.exec(range);
          const start = match?.[1] ? Number(match[1]) : Math.max(0, size - Number(match?.[2]));
          const end = match?.[1] && match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
          if (!match || (!match[1] && !match[2]) || !Number.isSafeInteger(start) || start > end) {
            res.writeHead(416, { ...headers, 'Content-Range': `bytes */${size}`, 'Content-Length': 0 });
            res.end();
            return;
          }
          status = 206;
          headers['Content-Range'] = `bytes ${start}-${end}/${size}`;
          headers['Content-Length'] = end - start + 1;
          streamOptions = { start, end };
        }
      }
      res.writeHead(status, headers);
      if (req.method === 'HEAD') {
        res.end();
        return;
      }
      const stream = fs.createReadStream(fullPath, streamOptions);
      res.on('close', () => stream.destroy());
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
