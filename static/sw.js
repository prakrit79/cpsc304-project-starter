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
    "url": "/_nuxt/0.nuxt.bundle.b28109ee5d768b7ba276.js",
    "revision": "fe04507441297973ed57b0ee80793b69"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.490605e13e09f5e24148.js",
    "revision": "25f0985dc83c7d9aabaed1a5683ef0ee"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.c07ce3b20ca07948b9f1.js",
    "revision": "b3d93767d8add70100a0d6d0cfaea79f"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.0af389dad797e0bdf468.js",
    "revision": "cc3254967bc7f54439b0c3e3193447db"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.d7aa57db7870eebe606c.js",
    "revision": "0c46622000cc4944fc9dff2b7026ac0e"
  },
  {
    "url": "/_nuxt/13.nuxt.bundle.e996df17ce16e5af153f.js",
    "revision": "72d3b4a3344d80aec1b35d0b6e0f34ca"
  },
  {
    "url": "/_nuxt/14.nuxt.bundle.538d1cbc263654241ad0.js",
    "revision": "c27cc0c5125527200b4f771b60c35d07"
  },
  {
    "url": "/_nuxt/15.nuxt.bundle.764c5c9a3d8d97885162.js",
    "revision": "dc5a81b19ae5e9786c5e3194209e6017"
  },
  {
    "url": "/_nuxt/16.nuxt.bundle.5d85f1b7a74f7fed08d1.js",
    "revision": "e902d427d707b2f77ae2181787feadac"
  },
  {
    "url": "/_nuxt/17.nuxt.bundle.d100348cb331f2deffba.js",
    "revision": "094242c77f9d9042ee65b36a90c0a0c8"
  },
  {
    "url": "/_nuxt/18.nuxt.bundle.e6ec3c41be505bbf3c42.js",
    "revision": "39ffd317e9e0c2d73368e553283846b3"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.a24dbc2a8ce928124023.js",
    "revision": "2a6abf11e15cf93d3e537eba54c4ab75"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.0b104e663507f02cf188.js",
    "revision": "bd57bab03a00bf7ad021d9dbcef8b283"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.6120634050db8ad1601b.js",
    "revision": "fc3338bed0a2ef5fd3b019fb8f41065f"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.0c908aaf242c9b3448aa.js",
    "revision": "d9c19ee19e5d2e4db70319bba1c29c85"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.ba809c527b75e377303f.js",
    "revision": "065eb60114b3bd7d13f7816e1058b395"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.7010938997c7efaa5809.js",
    "revision": "2b590ed4b9ab956e0d2fb17fb16b10ae"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.e2950f71fb582ec82baf.js",
    "revision": "5dd8a39e8249c0aae8d0fc73c2da358e"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.cbf4c98585ec02c95dac.js",
    "revision": "2df823058fb4dff1da6b759d898b6ded"
  },
  {
    "url": "/_nuxt/manifest.d17040b3e412dcb63657.js",
    "revision": "cb1e8448d2fda550f3ce3786bad4165d"
  },
  {
    "url": "/_nuxt/nuxt.bundle.0282c4e51b98f0758239.js",
    "revision": "00ebbf6aeb98ff3d5df45d42faf9595a"
  },
  {
    "url": "/_nuxt/vendor.bundle.83131cf1c01fd903fe9f.js",
    "revision": "a9270399c9285fe6f89320a0bd124364"
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
