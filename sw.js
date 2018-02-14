importScripts('/kawan-dana-admin/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "kawan-dana-admin",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/kawan-dana-admin/_nuxt/app.2f3b3a8ee94fd4abd09d.js",
    "revision": "2402e714af4cf4fef1ab67a1c8e0e2ee"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/layouts/default.4850f7916aae46733d18.js",
    "revision": "bb8c5451e40ac6c58fa50d6198f93398"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/manifest.208076985ad70b4cb86a.js",
    "revision": "b0f0bfe57aa4b553a3dcd52fdc11f931"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/_id.280e319ce60765b07bda.js",
    "revision": "6b9a4c29a05bb5e6b5c824046718b0c9"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Borrowers/index.ec84077827d6f982bf4a.js",
    "revision": "94332a5d987ac36854319473ec0e7649"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Edit/index.db38b81a2bf328a185a5.js",
    "revision": "f455b09c431b36fc968e97e23fe23f85"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/index.94b07112e84e19e5446d.js",
    "revision": "f056d9ab45fbf464fab5104c3005e3ab"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/LenderBalance/index.2b79dcfb7e0184d50d16.js",
    "revision": "81456ae36b21231395eeecb8c6e64fe7"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/LenderInvestment/index.bbbf78cb88a0b6be1506.js",
    "revision": "e5a0858a2af4ea2d857cd03c301aec26"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Lenders/index.1ab9247c0b592433569b.js",
    "revision": "a4c0d00ba615f89f412ff9186ac77776"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Loans/index.50ee8cb56b8fa0898d10.js",
    "revision": "86189c8acf97647efdd9978352153cb1"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Login/index.86ea19a7d8b89b2e23c0.js",
    "revision": "35ff8d850492a86187f5c6af4935f3d5"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Payers/index.2d4c6c1943b91466342b.js",
    "revision": "86784dd3540557f076dbb789baa86f64"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/pages/Users/index.7155b1b469b4bb2a2dfd.js",
    "revision": "bb10bdcc356a72ca3d1f5c74aae82f22"
  },
  {
    "url": "/kawan-dana-admin/_nuxt/vendor.8e47b8ef28ecab283ec0.js",
    "revision": "13359bb87cbcbe4fad2d7bfcb695ef5f"
  }
])


workboxSW.router.registerRoute(new RegExp('/kawan-dana-admin/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/kawan-dana-admin/.*'), workboxSW.strategies.networkFirst({}), 'GET')

