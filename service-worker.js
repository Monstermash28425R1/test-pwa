if(!self.define){let e,s={};const t=(t,r)=>(t=new URL(t+".js",r).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const l=e=>t(e,n),u={module:{uri:n},exports:o,require:l};s[n]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(i(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"test-pwa"}),self.skipWaiting(),e.precacheAndRoute([{url:"/test-pwa/css/app.128f1208.css",revision:null},{url:"/test-pwa/index.html",revision:"9118ecbd399b39d90c8aced4bb10fba3"},{url:"/test-pwa/js/about.e41fa8d4.js",revision:null},{url:"/test-pwa/js/app.e08482d1.js",revision:null},{url:"/test-pwa/js/chunk-vendors.57511e34.js",revision:null},{url:"/test-pwa/manifest.json",revision:"6b6a9cb28fd5d797f55d1438210678f9"},{url:"/test-pwa/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
