'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "37f6a13e8be12e09de0f780d54b0dbf7",
"version.json": "4abaa1a6ea88b4db4dc79b420fbe67de",
"index.html": "6fb863f9334bd10bedb330099b36d6b5",
"/": "6fb863f9334bd10bedb330099b36d6b5",
"main.dart.js": "0f4be3521754776aa05a5a229f545ea4",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e78982b2fb53a0b7fcc42c4cccf87e18",
"assets/AssetManifest.json": "5a5f14c5d54443c454faedcc94457268",
"assets/NOTICES": "fb2cd96858d394b40d838d51faba418a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d687ef1f24e8a9afbdfb77cc2c8bca68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8758ef009d04ac04e725cbd26cd63a68",
"assets/fonts/MaterialIcons-Regular.otf": "bd3025552e96d32c3bb0fd411046c67c",
"assets/assets/memory/icon3.webp": "70199b867fa39ea224594fdb48890b8f",
"assets/assets/memory/cover.webp": "69be2bd216cc42828c387a7ea0428c8e",
"assets/assets/memory/icon8.svg": "5146e379939d6c6f7e882456bb86bc9e",
"assets/assets/memory/icon2.webp": "f871b375bfc7610ac1ce7afd0e8c0f7e",
"assets/assets/memory/icon5.webp": "143335362c2f34e8363561b7e32f8839",
"assets/assets/memory/icon4.webp": "74a37f157aa9c4f6c22eb34eae1c811c",
"assets/assets/memory/icon.webp": "f5727578eedc691177617324571e3b9b",
"assets/assets/memory/icon8.webp": "64ae680c61187b2c8c199a4d3181207c",
"assets/assets/memory/icon7.webp": "6e1cf05ea36b4494d1983c5e416509ac",
"assets/assets/memory/icon6.webp": "c3728669b6da4c45a8ba46719d206286",
"assets/assets/memory/icon4.svg": "49c0e0f0ba83c4aaa54edad2c5175a49",
"assets/assets/memory/icon5.svg": "47f81192642509b8caf871add62e5c32",
"assets/assets/memory/icon1.webp": "ed24751628392066f97c1cac1ed8a0f5",
"assets/assets/memory/icon7.svg": "8edda23178a4713453342174e7c28ab6",
"assets/assets/memory/background.webp": "93e5179d04ab9b5cbfff3c32c3cdcc9f",
"assets/assets/memory/icon6.svg": "46cd755ea8db50a0b330063e8b80ab1f",
"assets/assets/memory/icon2.svg": "7a11dbc32393cce514f46d6046dd325b",
"assets/assets/memory/icon3.svg": "7bbe9517c1927205c36fba2fa17d86ff",
"assets/assets/memory/icon1.svg": "8939e23e9c074a790d06cefbe3463b2c",
"assets/assets/puzzle/puzzle3.webp": "14d253c40577a427f1f7a100a70e4d64",
"assets/assets/puzzle/puzzle2.webp": "78eba39a7601f446a6e470013e606275",
"assets/assets/puzzle/puzzle1.webp": "984837ce46016bc8faf995b889e43702",
"assets/assets/puzzle/background.webp": "3411026c4a7519db6337568bc624b7a4",
"assets/assets/menu/maskottchen.png": "eb04f693c74a6064ca7df944e4edd560",
"assets/assets/menu/bubble.webp": "bead59a0eea7ffb18a618e0f4f869e02",
"assets/assets/menu/puzzle.webp": "c6593ac6c117c33628790e00ad9d98dc",
"assets/assets/menu/memory.webp": "5765ef9b15353b3f3d7703e94c399e54",
"assets/assets/menu/cover.svg": "7519ed65fdb0160f5cfcaa899002c51d",
"assets/assets/menu/background.webp": "241f5856b870eda8b5f348da355e0902",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
