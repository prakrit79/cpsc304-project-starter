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
    "url": "/_nuxt/0.nuxt.bundle.920a7e05a9465226748d.js",
    "revision": "0c8ab2c5bebadc17c92b53aaed0bd417"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.9c12d898e909e5529223.js",
    "revision": "1cca32950c17e7cb1f2f4fdb1bfed848"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.a17b852f1861d8981479.js",
    "revision": "c88ff35c3f3cbbcd9381458a1753f770"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.acdd498e7a613875ee1c.js",
    "revision": "3db2e01cf5fe1d369a7cf2e901012df8"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.08f9aa29b0ca8b30a869.js",
    "revision": "33a6dc71968c176b1dab0f8df952eddd"
  },
  {
    "url": "/_nuxt/13.nuxt.bundle.2bd4d80b95e819c2fe7f.js",
    "revision": "8160e999be899f46267aa2c712d01abc"
  },
  {
    "url": "/_nuxt/14.nuxt.bundle.50ea19c4bda7354fc4e9.js",
    "revision": "fcfaded6e291b34e61f66d8d799c8021"
  },
  {
    "url": "/_nuxt/15.nuxt.bundle.9abdb9c5e5957b05afbb.js",
    "revision": "f5491917634e21642e1b6da96c39d418"
  },
  {
    "url": "/_nuxt/16.nuxt.bundle.3c33fe9aa7e9859c5b87.js",
    "revision": "27f34819a25b5d8c0c3dfe17583465a7"
  },
  {
    "url": "/_nuxt/17.nuxt.bundle.26fd1e65702fa1d64389.js",
    "revision": "c4957abcb21ef4b963e47e2f77800086"
  },
  {
    "url": "/_nuxt/18.nuxt.bundle.4b59f6e8a720ef0efbd1.js",
    "revision": "7d64a57a93236d301c954384d48fcc9d"
  },
  {
    "url": "/_nuxt/19.nuxt.bundle.d9555b98457aeb4d33e3.js",
    "revision": "3b75fecf4ba1791b1d52c16e67e31d7c"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.6257a4e796eaf08cdc3e.js",
    "revision": "a7119129da4eaef74b94ed94b24ce17d"
  },
  {
    "url": "/_nuxt/20.nuxt.bundle.834b280d9c38201d9497.js",
    "revision": "437d3451df3d20ac2a4e948734b850dd"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.14cbc394dad898e6fe35.js",
    "revision": "998cd333bd241f2b93fd3c01de6ff150"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.45e6f19542b7b81392d5.js",
    "revision": "d572906b05e4aca2d3ccc02f653dd84a"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.c693989f1164d9eb9cfc.js",
    "revision": "51e927f61ea5b184355e6d559e38dbdf"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.0375371cc6b32c6f9a23.js",
    "revision": "1e4f41c02e52d98d3b5d93e0d8b2a997"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.49a5057055ef3ab593f0.js",
    "revision": "3239ad4bebc473e9221f188bf3e47697"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.5f569f628ea79ae19be2.js",
    "revision": "bfbf0906548c4e6eba0ad73ff6df7341"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.6c164fc6ecda1f4283ca.js",
    "revision": "016be1794b81322d5681837fe6aaa914"
  },
  {
    "url": "/_nuxt/manifest.9dca5657afa78885eca8.js",
    "revision": "e0d2275aaba4e8e7dcf9b3913a49d83b"
  },
  {
    "url": "/_nuxt/nuxt.bundle.2893960c93866a899b87.js",
    "revision": "6034ddd143e97e4f286bea3af7e422ad"
  },
  {
    "url": "/_nuxt/vendor.bundle.4ecf2efb9c82db959105.js",
    "revision": "e1355b35f13b12640d92d805710d92e3"
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
