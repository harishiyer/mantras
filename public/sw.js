if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>n(e,c),d={module:{uri:c},exports:i,require:r};s[c]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"64afa81c984a065678a64b5dd488308a"},{url:"/_next/static/PGgdQpqZjJhm-YFZoK6p6/_buildManifest.js",revision:"d7af164afef0e5b53876e60fab863dba"},{url:"/_next/static/PGgdQpqZjJhm-YFZoK6p6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-f486727ef1d3a3c7.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/0efc396d-6770002793d888a6.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/13b76428-fb119cac1c6c3c2d.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/143.0774d8dd87de00d2.js",revision:"0774d8dd87de00d2"},{url:"/_next/static/chunks/15.70ad11eb0c1459ec.js",revision:"70ad11eb0c1459ec"},{url:"/_next/static/chunks/241.46f32a9b850f227c.js",revision:"46f32a9b850f227c"},{url:"/_next/static/chunks/266.493b069aa43e5171.js",revision:"493b069aa43e5171"},{url:"/_next/static/chunks/280.090db7b0c4534ec8.js",revision:"090db7b0c4534ec8"},{url:"/_next/static/chunks/309-b70b3eec2db046cf.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/351-e8dcb90a0a3504d3.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/3627521c-92f8d6a8983259a5.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/3d9553d5-7ec2d940e461edb3.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/403-ea980e41cadab354.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/450-03f0ed72e4cfd5d3.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/4509ffe6-ad4a88c69932ca52.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/559-f4fb32ff986cd127.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/6-aa841f854f0267a4.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/70-25b1b067b7f3c610.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/730.729da3b604c4839d.js",revision:"729da3b604c4839d"},{url:"/_next/static/chunks/82deed28-1a22591b0aba453c.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/864-8a322e4be75c818b.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/8ace8c09-f1d4498a29c614c2.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/9081a741-04a35aee582cdc7f.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/969c1769-b7b51a1b947a63df.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/974-7c62acd0bf57defb.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/989-3236fd902626a935.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/_not-found-434eae1af5501491.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/admin/%5B%5B...admin%5D%5D/page-25d58f329574c174.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/browse/page-b4b33e1ea98c076f.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/layout-548eabb4299a4397.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/login/page-2757a3cd0c439b6d.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/mantras/%5Bmantra%5D/page-697c0d9ff6b4efe8.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/page-217fa63e217e6dc0.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/app/signup/page-72c8a5256c9e79dd.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/bc9c3264-66017f3fe88bdf83.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/ccd63cfe-8e4c3daf21874138.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/fd9d1056-5e40d6ece76b4be3.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/main-a6f7138d2d7e29c0.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/main-app-823d06989bb6fc12.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/pages/_app-6ca4a4ec31e39f3d.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/pages/_error-9de0d1f4f4d1fcb4.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-eadbd737aa6d1efb.js",revision:"PGgdQpqZjJhm-YFZoK6p6"},{url:"/_next/static/css/1c82996331f4fe9c.css",revision:"1c82996331f4fe9c"},{url:"/_next/static/css/b440c4aad652d7d8.css",revision:"b440c4aad652d7d8"},{url:"/_next/static/media/17e0992af308dbf5-s.woff2",revision:"b92c9644ca8bccea1b797ab9893d61b6"},{url:"/_next/static/media/5e34f549e172cb28-s.woff2",revision:"174e70bd2ff97df7718c6b9793a81ca8"},{url:"/_next/static/media/8347d131139854e0-s.p.woff2",revision:"db235c96e5df0c39322142a0b89903b4"},{url:"/_next/static/media/ajeet-mestry-BtURpnC-J3U-unsplash.cd345c49.jpg",revision:"69299257da8d2c835ff3bca4276b969c"},{url:"/_next/static/media/raju-sharma-0gbnZU9KwBA-unsplash.7c98e50b.jpg",revision:"f953b6eb05a915bc93a43d0bbb937fbc"},{url:"/image/ajeet-mestry-BtURpnC-J3U-unsplash.jpg",revision:"69299257da8d2c835ff3bca4276b969c"},{url:"/image/anand-shetye-ot2654qRnNU-unsplash.jpg",revision:"961becd1ba94ed6c8f65032ba6ae687f"},{url:"/image/raju-sharma-0gbnZU9KwBA-unsplash.jpg",revision:"f953b6eb05a915bc93a43d0bbb937fbc"},{url:"/manifest.json",revision:"6a296ee9b86d3c816f3515f7d0ae67d6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
