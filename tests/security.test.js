'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const Storage = require('../site/assets/js/storage.js');
require('../site/assets/js/math-engine.js');
const Charts = require('../site/assets/js/charts.js');

function payload() { return {app:'estadistica-paso-a-paso',schemaVersion:1,profile:{alias:'Práctica',progress:{exercises:{}}}}; }
test('Import rejects decoded markup, prototype keys, excessive depth and unknown exercise IDs', () => {
  const valid = payload();
  assert.equal(Storage.validateImportJson(JSON.stringify(valid),new Set(['G1-01'])).ok,true);
  const encoded = JSON.stringify(valid).replace('Práctica','\\u003cimg src=x onfocus=alert(1)\\u003e');
  assert.equal(Storage.validateImportJson(encoded).ok,false);
  assert.equal(Storage.validateImportJson(JSON.stringify(valid).replace('"exercises":{}','"exercises":{"__proto__":{}}')).ok,false);
  valid.profile.progress.exercises.UNKNOWN = {};
  assert.equal(Storage.validateImportJson(JSON.stringify(valid),new Set(['G1-01'])).ok,false);
  const deep = payload(); let obj=deep; for(let i=0;i<30;i++){ obj.child={}; obj=obj.child; }
  assert.equal(Storage.validateImportJson(JSON.stringify(deep)).ok,false);
});
test('CSV protects whitespace-prefixed formulas and SVG escapes user labels', () => {
  for(const value of ['=1+1',' +cmd','\n@sum(1)','\t=1',' -cmd']) assert.ok(Charts.sanitizeCsvCell(value).includes("'"));
  const svg=Charts.renderBarChartSvg({title:'<img src=x>',bars:[{label:'<script>bad()</script>',value:2}]});
  assert.ok(!svg.includes('<script>')); assert.ok(!svg.includes('<img'));
});
test('CSP permits only hashed bootstrap and self scripts, with no eval or external endpoints', () => {
  const html=fs.readFileSync('site/index.html','utf8');
  const inline=html.match(/<script>([\s\S]*?)<\/script>/)[1];
  const hash=crypto.createHash('sha256').update(inline).digest('base64');
  assert.ok(html.includes(`'sha256-${hash}'`));
  assert.ok(html.includes("connect-src 'self'"));
  assert.ok(!html.includes("'unsafe-eval'"));
  assert.ok(!html.includes("script-src 'self' 'unsafe-inline'"));
});

test('Preview server denies path escape and does not disclose exception paths', async () => {
  const {createStaticServer}=require('../scripts/serve.js');
  const server=createStaticServer();
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  try {
    const base=`http://127.0.0.1:${server.address().port}`;
    for(const path of ['/..%5cpackage.json','/%ZZ','/repo-prueba/..%5cpackage.json']) {
      const res=await fetch(base+path); const text=await res.text();
      assert.ok(res.status>=400);
      assert.ok(!text.includes(process.cwd()));
      assert.ok(!text.includes('"scripts":'));
    }
  } finally {await new Promise(r=>server.close(r));}
});
