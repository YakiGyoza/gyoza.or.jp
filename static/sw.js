importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7c900f47ba77635e06b8.js",
    "revision": "8355e734b02008fa4fdb16847a3d0e94"
  },
  {
    "url": "/_nuxt/9289d31d3f09ed8ae416.js",
    "revision": "a6b9a012d7be44e20c137c82edf63046"
  },
  {
    "url": "/_nuxt/96a70630545f544c28e1.js",
    "revision": "43ab2d3e67370d0589cb9c862e350b1e"
  },
  {
    "url": "/_nuxt/99ae7ff3fa8361cee238.js",
    "revision": "104873e4d8579911bf50f58458682cd4"
  },
  {
    "url": "/_nuxt/9e251bc63a23d3d8c2c1.js",
    "revision": "1e91b12f52edc18d151bc83acf98839c"
  },
  {
    "url": "/_nuxt/acd71762f31f86eef9b5.js",
    "revision": "54a074d255294db32e25e5712e77eada"
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
