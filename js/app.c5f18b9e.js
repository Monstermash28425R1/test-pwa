(function(){"use strict";var e={8012:function(e,n,t){var o=t(9242),r=t(3396),i=t(7139);const u=(0,r.Uk)("Home"),a=(0,r.Uk)(" | "),c=(0,r.Uk)("About");function s(e,n,t,o,s,f){const l=(0,r.up)("metainfo"),d=(0,r.up)("router-link"),p=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l,null,{title:(0,r.w5)((({content:e})=>[(0,r.Uk)((0,i.zw)(e?`${e} | PWA Test`:"PWA Test"),1)])),_:1}),(0,r._)("nav",null,[(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[u])),_:1}),a,(0,r.Wm)(d,{to:"/about"},{default:(0,r.w5)((()=>[c])),_:1})]),(0,r.Wm)(p)],64)}var f=t(7929),l={setup(){(0,f.jq)({title:"",htmlAttrs:{lang:"en",amp:!0}})}},d=t(89);const p=(0,d.Z)(l,[["render",s]]);var v=p,m=t(5431);(0,m.z)("/test-pwa/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=t(2483);function h(e,n,t,o,i,u){return(0,r.wg)(),(0,r.iD)("h1",null,"This is the home page")}var b={setup(){(0,f.jq)({title:"Home"})},components:{}};const w=(0,d.Z)(b,[["render",h]]);var y=w;const k=[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,9914))}],j=(0,g.p7)({history:(0,g.r5)(),routes:k});var O=j,A=t(65),T=(0,A.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(v).use(T).use(O).use((0,f.Bg)()).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(f=0;f<e.length;f++){o=e[f][0],r=e[f][1],i=e[f][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(f--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.c6fc95a5.js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="test-pwa:";t.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=o),e[o]=[r];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/test-pwa/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(n),a=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],a=o[1],c=o[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var f=c(t)}for(n&&n(o);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(f)},o=self["webpackChunktest_pwa"]=self["webpackChunktest_pwa"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(8012)}));o=t.O(o)})();
//# sourceMappingURL=app.c5f18b9e.js.map