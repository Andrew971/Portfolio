"use strict";var precacheConfig=[["/index.html","8b4aa07994ffbeb5165921f945058a62"],["/static/css/main.3c2cbb67.css","565c7e42926c090796dbb32b3da95e5b"],["/static/js/0.76801f7f.chunk.js","513300b498f27a133185ce7f3606c467"],["/static/js/1.9089e975.chunk.js","da52a60f07ab5ef8216e8feb84b68412"],["/static/js/main.48dc1cb8.js","f1ebcc44ba224a2256e1420c173c74c5"],["/static/media/aws.cbe0e3eb.png","cbe0e3ebf9231c457a8053daa346fda8"],["/static/media/bootstrap.979e569f.png","979e569f64f7c8818d8e08a86720c144"],["/static/media/code.a14ba989.svg","a14ba989ab0290d8b7dd99a3ad29c70a"],["/static/media/codeO.bd933620.svg","bd93362041bfa0a44dc761e8e3c25d24"],["/static/media/css.2f312f8e.png","2f312f8e75b1d998d84e60a9c03e8a66"],["/static/media/default.59e6a012.png","59e6a01226594b3762c07efb29a098a9"],["/static/media/footerx1.497eaf61.jpg","497eaf611463d37c6582bcc9429dac6c"],["/static/media/footerx2.80caa441.jpg","80caa44170014eee3542522f64edcf00"],["/static/media/french.3f74c1fe.png","3f74c1fe48145e3074657c2ba4e1a479"],["/static/media/git.db2a23f6.svg","db2a23f682e0e812974f385c8de6f915"],["/static/media/github.76d344f0.svg","76d344f08412543c74ccd1fb2493d607"],["/static/media/graphql.442f6ff6.png","442f6ff6fde0ed5039c22266644806ef"],["/static/media/headerHomex1.66d7c3d0.jpg","66d7c3d0261c95dac1120cb13f2fb1c7"],["/static/media/headerSkillsx1.50cf78b5.jpg","50cf78b5cb08a4a3ec586e8ba1eef5bc"],["/static/media/headerSkillsx2.c8204060.jpg","c820406025dd7ea7464bda8247f960d6"],["/static/media/html.4499b8a2.png","4499b8a20c0a71037fe37644734a1a5a"],["/static/media/javascript.ac3fd0ef.png","ac3fd0ef394c96849d919959a093766a"],["/static/media/lang.e567e0ea.png","e567e0ea51460eef0b4c4ba48e2ee14c"],["/static/media/logo.1ca03a8a.svg","1ca03a8a9a9ba270ab6b15c4c77e7e1e"],["/static/media/marketing.87afba54.svg","87afba54786ba231d99bfa62272bcce6"],["/static/media/marketingO.63756f2c.svg","63756f2c85c6d23de41dc9c425f8bd82"],["/static/media/materialui.412894ef.png","412894ef863c6d8072434775481a363c"],["/static/media/mongodb.4e74e673.png","4e74e6730fa2b7f22900d84f1bf1ef07"],["/static/media/node.18938840.png","18938840776a8a48133b2cea33e81870"],["/static/media/pandahug.b339d9a8.png","b339d9a84904c9acde5218784e4bd182"],["/static/media/postgresql.eebf52eb.png","eebf52eb8128c287ccc6b544f4c2681b"],["/static/media/profilex1.9f85e47d.jpg","9f85e47d4e9fb40109ab1c9faed95a14"],["/static/media/profilex2.8f2f72e7.jpg","8f2f72e7d0072c58f46e56a6dcb35a5e"],["/static/media/react.2ffcf2e8.png","2ffcf2e8a1a613ade52fc382d4570526"],["/static/media/redux.b758c647.png","b758c647417c20f1acb9112ab87e63b8"],["/static/media/sales.c8f4c8eb.svg","c8f4c8eb1e950df34e197a95c4e5546d"],["/static/media/salesO.69c0df7d.svg","69c0df7d290416287b1478dd53dae822"],["/static/media/sass.29435cf1.png","29435cf1bffc073e2791a0ae0d7450ed"],["/static/media/styled-components.ba89a077.png","ba89a077fa04e6750153e76f12477a67"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});