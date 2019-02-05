importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/4412fa2674079e5b238b.js",
    "revision": "fa45cb73162145d4a980a48a9218b219"
  },
  {
    "url": "/_nuxt/7554581d53994d38f06e.js",
    "revision": "876aa2b088d6068d133704bc201fc3c8"
  },
  {
    "url": "/_nuxt/7c900f47ba77635e06b8.js",
    "revision": "8355e734b02008fa4fdb16847a3d0e94"
  },
  {
    "url": "/_nuxt/96a70630545f544c28e1.js",
    "revision": "43ab2d3e67370d0589cb9c862e350b1e"
  },
  {
    "url": "/_nuxt/9e251bc63a23d3d8c2c1.js",
    "revision": "1e91b12f52edc18d151bc83acf98839c"
  },
  {
    "url": "/_nuxt/b949616fde6ca856d6fe.js",
    "revision": "b3dc7b5839941d5e494fe2b0c2732717"
  },
  {
    "url": "/_nuxt/d91c3ec93b9cb0c4daba.js",
    "revision": "201b61fcafed0c3b21aea6b28976465a"
  },
  {
    "url": "/_nuxt/f84c5c2b42fc03291f9c.js",
    "revision": "92b3484d43ff2f0f3a4789fd9c240690"
  }
], {
  "cacheId": "gyoza.or.jp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
