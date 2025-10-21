'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "528ec42e72b1177cf45cb0f41b37dbd0",
"version.json": "027c7d237039cc49b8fa33571b9f4af4",
"index.html": "ad2227fcd156d796b8f60213e05c5eb6",
"/": "ad2227fcd156d796b8f60213e05c5eb6",
"main.dart.js": "ef4f2b86616578d33cb38399e04b817c",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "b7b00a31001fb9f353b519372c8f465a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3718f717bb8d4c8fc22ff06c8e00520c",
"assets/AssetManifest.json": "06305f45c1946af68ab6243475774ea8",
"assets/NOTICES": "d7459cd9ce7b743e5aa2c0fca4b4effd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "390fe7d454d3c55745e8faa18ba0ad4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2694fa52cbbeee5883e5dfa9a6990f01",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4e9e7b097d8ebcb819066ac1d289bf0d",
"assets/fonts/MaterialIcons-Regular.otf": "7ac61f8aa9f0fb4fe7c9b55e933e8393",
"assets/assets/images/common/ic_gift.webp": "6a31333c83ea974207fdf3af68f9a3d6",
"assets/assets/images/common/ic_call_28.webp": "27abee25dc63a63e6383c5fbdab67e39",
"assets/assets/images/common/ic_copy.webp": "b4011a277ad1ed3584c510d6aae14161",
"assets/assets/images/common/2.0x/ic_gift.webp": "6667b6ca216b4595458a467a7c2652ca",
"assets/assets/images/common/2.0x/ic_call_28.webp": "5e71071c78ceb9da0cb915a3ce617f59",
"assets/assets/images/common/2.0x/ic_copy.webp": "ea35f61ed48730cb919bd5aea3191f80",
"assets/assets/images/common/2.0x/bg_invite.webp": "b261822cd1ad06a4023e51127947eac6",
"assets/assets/images/common/2.0x/ic_google_24.webp": "036512e8053983ec329d75f71cf3e00d",
"assets/assets/images/common/2.0x/ic_credits_28.webp": "712c93f3f2e962b1a1b3dc3ceb217ff6",
"assets/assets/images/common/2.0x/ic_apple_24.webp": "2d6b2b8178bbcf250d031a382f00ddab",
"assets/assets/images/common/2.0x/ic_diamond.webp": "295c69ba01cd045dcc3bc00408313a4c",
"assets/assets/images/common/2.0x/ic_star.webp": "16b47347c4a0cc4a54df4dd32a7660eb",
"assets/assets/images/common/2.0x/ic_approximately_20.webp": "96f9dbb36f39ee5a0623a363263262ee",
"assets/assets/images/common/bg_invite.webp": "68a7cdbf3a270bb65582fd3ed24af95f",
"assets/assets/images/common/ic_google_24.webp": "bff11e80507bbe4a25d229cc20b3df68",
"assets/assets/images/common/3.0x/ic_gift.webp": "3e1db75362b36eacd59e0a9d78ecac72",
"assets/assets/images/common/3.0x/ic_call_28.webp": "f6e29238223b7403e2fce50a6de40ed5",
"assets/assets/images/common/3.0x/ic_copy.webp": "1ed6298ae77c694de1dec8330223e75d",
"assets/assets/images/common/3.0x/bg_invite.webp": "10684de88f4c334ac73acbd110f7a331",
"assets/assets/images/common/3.0x/ic_google_24.webp": "04ce996af8c47aa7688f7ab9195f69f7",
"assets/assets/images/common/3.0x/ic_credits_28.webp": "d012560c0e7509d9e48af7d02227a3fd",
"assets/assets/images/common/3.0x/ic_apple_24.webp": "e7f56abd0f3c6c130aea54165c87e25b",
"assets/assets/images/common/3.0x/ic_diamond.webp": "9fd0ac14d4229926fe3971f54f238305",
"assets/assets/images/common/3.0x/ic_star.webp": "25a9c5beeaaddfec65abdae8876b5721",
"assets/assets/images/common/3.0x/ic_approximately_20.webp": "e650e89625e2971652f0520f2d37f6b5",
"assets/assets/images/common/ic_logo.webp": "5bbc8de190bd2baee5ad992bf3918c9c",
"assets/assets/images/common/ic_credits_28.webp": "a751efd5506e9fbe6bcc40e9209fe20c",
"assets/assets/images/common/ic_apple_24.webp": "70d6432856626c770124092dae1daa45",
"assets/assets/images/common/ic_diamond.webp": "2391beabaf3dcd313dd0062ffb470cf8",
"assets/assets/images/common/ic_star.webp": "8765c8b51db77b77d8bfb613fc5220b0",
"assets/assets/images/common/ic_approximately_20.webp": "2f588e215e1ff3de46ec2f598c58756c",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
