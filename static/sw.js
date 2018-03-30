importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.bec4c3737ac862e9d612.js",
    "revision": "205093430f1b5d9c977b751c2a6850b7"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.e97ce1d06d50570fc486.js",
    "revision": "479a489e331ae922bef98d1bf6fefd2a"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.54848eabff326398c219.js",
    "revision": "a9ded468257119682e455149a5646369"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.cc51f73853f5f8295be2.js",
    "revision": "c70f74e0e8b48109db4b1018e56c8a2d"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.bf61dadbeaae9c1488e3.js",
    "revision": "be9dd853ef69bd2b2dd73ed2df73bc6e"
  },
  {
    "url": "/_nuxt/13.nuxt.bundle.a821aea3bd132f3990dd.js",
    "revision": "08aa220cb70e59d04bcb3eddf9c8514f"
  },
  {
    "url": "/_nuxt/14.nuxt.bundle.36f01a3218b953b75889.js",
    "revision": "5f3ad1224d77896a65741bc1baa536a3"
  },
  {
    "url": "/_nuxt/15.nuxt.bundle.09e8e8810fa9bf10ee22.js",
    "revision": "3c237598418bc5e53e4aeac9ffa68323"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.da16309c16dccfb2e259.js",
    "revision": "d193aadb99d8bcf7430fb6aa7c0c347d"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.f15f9f95902c8fba57dd.js",
    "revision": "b879eb44569fd4df7115292c895f93e7"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.3f48f5181eff02f6bc3e.js",
    "revision": "4e877433aef0d1d53daf94d1b9a71014"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.235cba7558d8d331fce8.js",
    "revision": "1c473e5ab860896f0003dfc017588eff"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.dd8360091c4ad9b00ebc.js",
    "revision": "d2a88575379b5a87915e49ad0bedbd1e"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.e16da44ca0a04b3be883.js",
    "revision": "1ebb87d64e398cc7403f0ce60c8c242d"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.c4b5a7def1006eb8a93a.js",
    "revision": "e5ab0b129bac8ded151dc8d381b034a5"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.120ada48f27f40d7c9b0.js",
    "revision": "976fbb27660261e1c1a8bc9def5e50af"
  },
  {
    "url": "/_nuxt/manifest.254071b442d764fc709c.js",
    "revision": "363789e71867c632bec671d49c5aa095"
  },
  {
    "url": "/_nuxt/nuxt.bundle.640192ec18e5137ae015.js",
    "revision": "646c938a75476df594919b0613da6b35"
  },
  {
    "url": "/_nuxt/vendor.bundle.87427ac992f7ce2c4b6c.js",
    "revision": "00c6d3b4e01f99b5ae73d63ddd6a086f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "304demoproject_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
