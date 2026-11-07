'use strict';
const assert = require('node:assert/strict');
const {launchHeadlessBrowser} = require('./e2e.test.js');
const {createStaticServer} = require('../scripts/serve.js');

async function run() {
 const server=createStaticServer();
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 let browser;
 try {
  browser=await launchHeadlessBrowser('C:/Program Files/Google/Chrome/Application/chrome.exe');
  const c=browser.cdp, base=`http://127.0.0.1:${server.address().port}`;
  await c.navigate(base+'/repo-prueba/#/inicio');
  const outcome=await c.evaluate(`(async()=>{
   const S=EstadisticaApp.Storage;
   const valid={app:'estadistica-paso-a-paso',schemaVersion:1,profile:{alias:'Práctica',progress:{exercises:{}}}};
   const encoded=JSON.stringify(valid).replace('Práctica','\\\\u003cimg src=x onfocus=alert(1)\\\\u003e');
   const rejected=!S.validateImportJson(encoded).ok;
   const idRejected=!S.validateImportJson(JSON.stringify({...valid,profile:{...valid.profile,progress:{exercises:{UNKNOWN:{}}}}}),new Set(['G1-01'])).ok;
   window.__auditExecuted=false;
   const script=document.createElement('script');script.textContent='window.__auditExecuted=true';document.body.append(script);
   let blocked=false;
   try {await fetch('http://127.0.0.1:1/never-send');}catch(e){blocked=true;}
   const aliases=S.exportProgressData();
   return {rejected,idRejected,scriptBlocked:!window.__auditExecuted,externalBlocked:blocked,hasApp:!!document.querySelector('main'),exportWorks:!!aliases};
  })()`);
  for(const [key,value] of Object.entries(outcome)) assert.equal(value,true,key);
  await c.navigate(base+'/repo-prueba/#/laboratorio');
  const dom=await c.evaluate(`(()=>{const x=EstadisticaApp.Charts.renderBarChartSvg({title:'<img src=x onerror=alert(1)>',bars:[{label:'<script>bad()</script>',value:2}]});const div=document.createElement('div');div.innerHTML=x;return !div.querySelector('script,img')})()`);
  assert.equal(dom,true);
  await c.navigate(base+'/repo-prueba/#/inicio');
  await c.evaluate(`(()=>{EstadisticaApp.Storage.createProfile('Alias prueba');return true})()`);
  await c.navigate(base+'/#/inicio');
  assert.equal(await c.evaluate(`EstadisticaApp.Storage.getActiveProfile().alias`),'Mi práctica');
  assert.equal(c.pageErrors.length,0,c.pageErrors.join(';'));
  console.log('PASS: browser import defenses, CSP script/network blocking, SVG DOM escaping, root/subpath progress isolation.');
 } finally {if(browser)browser.cleanup();server.close();}
}
run().catch(e=>{console.error(e);process.exitCode=1});
