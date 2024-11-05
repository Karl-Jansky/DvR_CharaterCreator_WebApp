'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3ec78f15a2534449258986a1e92677f7",
"assets/AssetManifest.bin.json": "0a648a2e9e97e9fae0148e5b87bc4df2",
"assets/AssetManifest.json": "99b1c25808fef97b485b61f9e946454d",
"assets/assets/default/d10.png": "10d1222c1fcf45c7a280f9eb9b2b8426",
"assets/assets/default/d12.png": "e5fee8e23cdfbac58dda4da9cf099f65",
"assets/assets/default/d20.png": "c2595f3d4350c1fcad48aa1a194b7560",
"assets/assets/default/d4.png": "64416752b42248dff1dcb2fca354e8a5",
"assets/assets/default/d6.png": "d93ddb3c5d9a5e4440f7bbb9048fe39e",
"assets/assets/default/d8.png": "908644d4c024a5fd17af8dd26af072ac",
"assets/assets/DvR_SRD.md": "b9d8e21641a16df407e588df019ce1d5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "149247e102db658266c77d89f8988e8b",
"assets/NOTICES": "343460859b8f1365faeba70043d05f8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "2db53e70894f11e2423c23f07769d190",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "ab362c98ce225afbff38e50f312b2a47",
"icons/android-icon-192x192.png": "9967a834a71c1e385aabe2ce6d1daa5a",
"icons/android-icon-36x36.png": "2aeaa40b6a11b59490771df5e16a91c3",
"icons/android-icon-48x48.png": "7a0f42d1c557ee3b052f58553ab04d75",
"icons/android-icon-72x72.png": "f07e5dd88cc3321a31cd894ed5311c60",
"icons/android-icon-96x96.png": "fb83a2c7f81f39ad4f0ac80951daa00b",
"icons/apple-icon-114x114.png": "9d8f965bf0cae400ebf6a3d31d3a42b2",
"icons/apple-icon-120x120.png": "30cf4ed63e6cc9ebbf467e6d1be01cfe",
"icons/apple-icon-144x144.png": "ab362c98ce225afbff38e50f312b2a47",
"icons/apple-icon-152x152.png": "ab6780850c07134d10d63738061dd5d9",
"icons/apple-icon-180x180.png": "0d962fd19e5870c9c2c57b8e7dfaf7bf",
"icons/apple-icon-57x57.png": "d8939c0c3069c280e476d4c81745a609",
"icons/apple-icon-60x60.png": "251a2566b1b12ef5da06e7167027fc5f",
"icons/apple-icon-72x72.png": "f07e5dd88cc3321a31cd894ed5311c60",
"icons/apple-icon-76x76.png": "7cd79d6c313158ca356ed492d8823518",
"icons/apple-icon-precomposed.png": "370585892919aec6bc731d07e52b6c9f",
"icons/apple-icon.png": "370585892919aec6bc731d07e52b6c9f",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "d1849757aa8142a595d98c53e5872171",
"icons/favicon-32x32.png": "cc8e9fc52c29da02e4eefa4e38ac3dd3",
"icons/favicon-96x96.png": "fb83a2c7f81f39ad4f0ac80951daa00b",
"icons/favicon.ico": "2db53e70894f11e2423c23f07769d190",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "ab362c98ce225afbff38e50f312b2a47",
"icons/ms-icon-150x150.png": "afeb7963e4005e9b1ed560c3bb36c2bb",
"icons/ms-icon-310x310.png": "a755b948871cf038d329bfc54c20ad35",
"icons/ms-icon-70x70.png": "38e0c971c6c881b459c994cabbe2baed",
"index.html": "c8dc7f277c20ff21948d1a7efbfc3b03",
"/": "c8dc7f277c20ff21948d1a7efbfc3b03",
"main.dart.js": "0e6daf805d65ba33f028a04f8e907d12",
"manifest.json": "5e035e602f5f29255bad42d592e815fc",
"version.json": "5a21ca691828ba3ce657153fc2e1a036"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
