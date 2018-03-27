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
    "url": "/_nuxt/0.nuxt.bundle.df1c515b23dd4fa4c461.js",
    "revision": "3ec27062b82f631ef2b5f240e9ae9807"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.e076756816971d16e19b.js",
    "revision": "bc5801cb13dea771b19c6d11ab621451"
  },
  {
    "url": "/_nuxt/10.nuxt.bundle.202f5b51acd3484de011.js",
    "revision": "6d57d5623a5ff18151d836f83ba44193"
  },
  {
    "url": "/_nuxt/11.nuxt.bundle.4edd53245147e2ca951e.js",
    "revision": "8bc414abcae0961d96700c386e94ad10"
  },
  {
    "url": "/_nuxt/12.nuxt.bundle.c81cf725e5aaee80006e.js",
    "revision": "839af100230c6558022e34a406485381"
  },
  {
    "url": "/_nuxt/13.nuxt.bundle.16b20e412b484cb01918.js",
    "revision": "c1626ef2af3ef34f350932d04fdebc81"
  },
  {
    "url": "/_nuxt/14.nuxt.bundle.e8111bf205c373dbbba3.js",
    "revision": "aab6e30f6eb93c4f01177344378a02c7"
  },
  {
    "url": "/_nuxt/15.nuxt.bundle.7a1ae0ffdbc15bfbf314.js",
    "revision": "8a6471bdecc048324b6eca21b02b05ce"
  },
  {
    "url": "/_nuxt/16.nuxt.bundle.7a1f6bb981759bd0ba44.js",
    "revision": "47fffcbb6e73bdbb60055cc7fd7535ef"
  },
  {
    "url": "/_nuxt/17.nuxt.bundle.a8844c3ca3a3e4429edf.js",
    "revision": "430da5169e8fdcb87615fe0957e1ae08"
  },
  {
    "url": "/_nuxt/18.nuxt.bundle.d292abcc4ff7a35ad923.js",
    "revision": "e16b4143af2cfa5427fa818c0d1c5a14"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.c0ccb1768887a19b2c42.js",
    "revision": "386e18ee8285cd706475cb5f7d6346c4"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.0cf21a86ff9fec42a275.js",
    "revision": "d7fb6be93cc9941c1aa3a7669de74a89"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.7fee25aa185df7cb4afb.js",
    "revision": "746f4f33b6b89a49ca895f4c029e8251"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.3db4f43488042381c82c.js",
    "revision": "7c114cb773181f80b4ff0abdd3f16531"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.ef9bf4c9217b454e8c37.js",
    "revision": "ad5cdbead766a4fb8b326110249491a6"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.2a880951e9c65af4165f.js",
    "revision": "e5ab472f91c74c2ddb9e0046cba7c2cd"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.05d3a3d458a2a823464f.js",
    "revision": "9da81b8d36dbfc94e72a03e022b39723"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.08ade068c16f0246cfe5.js",
    "revision": "9fd53e56c0382dd5a58b8af08d7dda22"
  },
  {
    "url": "/_nuxt/manifest.693aa040d17da1d65923.js",
    "revision": "93d4a5b0c0ca2115f804183ee4a15b7b"
  },
  {
    "url": "/_nuxt/nuxt.bundle.67b6003fa674a4014fb0.js",
    "revision": "975d51ef7071b59c20139b4520e85986"
  },
  {
    "url": "/_nuxt/vendor.bundle.3dad221ad73132031a91.js",
    "revision": "d52d7b69cff3894e24948f8c7a7574cc"
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
