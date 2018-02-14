importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "kawan-dana-admin",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4a982b80c587bdd33965.js",
    "revision": "c2b65e8dfa9f3fc8afe9117684a2f225"
  },
  {
    "url": "/_nuxt/layouts/default.fa010cdc67fffa0348ce.js",
    "revision": "e737d597a5a5b049b6f0a5bfc8cff59e"
  },
  {
    "url": "/_nuxt/manifest.45dc3192fda0e678034d.js",
    "revision": "8cf2a54810b900065831a9396ce89384"
  },
  {
    "url": "/_nuxt/pages/_id.c0af6c48ffccb5682434.js",
    "revision": "ac7a31ac01416fa8fdf0515e27f1da77"
  },
  {
    "url": "/_nuxt/pages/Borrowers/index.cc370899c65a6ec17d64.js",
    "revision": "8bf3a5fdbc6256c88e35106c9c878726"
  },
  {
    "url": "/_nuxt/pages/Edit/index.ccd3b42ccc7808029d6b.js",
    "revision": "443ca973e67630f5571d190e88ec8039"
  },
  {
    "url": "/_nuxt/pages/index.4e96344c6267f95483b1.js",
    "revision": "e2a03f64cbe18993eb24d8bc1857ea5a"
  },
  {
    "url": "/_nuxt/pages/LenderBalance/index.229743f786fc4ee79847.js",
    "revision": "dc77f91c00627254048de8162c6caa3e"
  },
  {
    "url": "/_nuxt/pages/LenderInvestment/index.b2ea680c425384c5d7d3.js",
    "revision": "9541d8b0ac05d7c4cfb52149c0ea8e77"
  },
  {
    "url": "/_nuxt/pages/Lenders/index.89af582908d53d267813.js",
    "revision": "edb50cda8fc61ddc7ec76991beee5981"
  },
  {
    "url": "/_nuxt/pages/Loans/index.595038b68a5812350a9c.js",
    "revision": "14afc75e3e33508cb4c7e85f2dcb4f01"
  },
  {
    "url": "/_nuxt/pages/Login/index.ec5711be519208173782.js",
    "revision": "4be79f9234c9a8a683e5ec336f881b3e"
  },
  {
    "url": "/_nuxt/pages/Payers/index.b09f36bcc8a4b04fa0b6.js",
    "revision": "5e5bc90b3edb4649d99600735ae69d43"
  },
  {
    "url": "/_nuxt/pages/Users/index.7561e5a7ae45ebef9beb.js",
    "revision": "1cd86edfea58bfe4dc530cd4db60004f"
  },
  {
    "url": "/_nuxt/vendor.8e47b8ef28ecab283ec0.js",
    "revision": "13359bb87cbcbe4fad2d7bfcb695ef5f"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

