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
    "url": "/_nuxt/0.nuxt.bundle.31c2deb3b62468bfd106.js",
    "revision": "a39e01f607c73eca5fc55088547acf8c"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.36db0828846fe775ce15.js",
    "revision": "b19cf24ff867dcf695dba500aa3d4132"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.be982c5880f6d95f46a0.js",
    "revision": "6206f77a33d5c01488f9a69f9361004b"
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
    "url": "/_nuxt/13.nuxt.bundle.268bfe456fef0480e5d3.js",
    "revision": "8873a7f398f688944cf0f3659f64c57d"
  },
  {
    "url": "/_nuxt/14.nuxt.bundle.5c46e52416902cde1597.js",
    "revision": "6313166bdbcc27299b3e820d63186e83"
  },
  {
    "url": "/_nuxt/15.nuxt.bundle.1ff434fddbded54ad6a4.js",
    "revision": "946aacf0aff29ae507e39fd459d80cb5"
  },
  {
    "url": "/_nuxt/16.nuxt.bundle.24db43b32e42781191f3.js",
    "revision": "03b661627b161fccd03b0f080bf8540f"
  },
  {
    "url": "/_nuxt/17.nuxt.bundle.629ed01917e20bef6cfa.js",
    "revision": "7c7826ca60cef25a427c764ce1eeba8f"
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
    "url": "/_nuxt/7.nuxt.bundle.00fc185bc3492684a70f.js",
    "revision": "ff151bdc2e5f4d68578a997eeab87e0d"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.1da03b3877ae344c9e5f.js",
    "revision": "b20c26c9ff9a215587eec3b8ea9f7122"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.ed0baaef9df2b189e48d.js",
    "revision": "2d8a9820d819878de5b863541481f784"
  },
  {
    "url": "/_nuxt/manifest.1af29b3d19c1527d6716.js",
    "revision": "b1f24c221704d6e29ab6a135aee724a9"
  },
  {
    "url": "/_nuxt/nuxt.bundle.d607da9947ebeba5c862.js",
    "revision": "964e6c3352b006e5a129694e97fa98b6"
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
