'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "80d3e8a770d55261e229a86545b26dca",
".git/config": "2ebc5cec89b569ddeaae55a81dca4735",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fb682e08464f537ff5c22b8a934e7699",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a7600f44916096fca640864807e42f1d",
".git/logs/refs/heads/main": "0fa468de4872f2d900a939cb57c268f6",
".git/logs/refs/remotes/origin/main": "3acbd3b280aaa3bc126b6ff72f31061e",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/14/2ae62678d45c238abbb7efe89514555f55ae4f": "2b95f8bcf37507fbd39d20b2e38fbfa4",
".git/objects/18/1d238abc137ad1c887499a479bfe4270616a6c": "1ad6d41b520d2ce7fc5cb881c75217c4",
".git/objects/1d/8f6a9447f590d02917b2b4c121d560c4031183": "e37ca4ffddff55645a6adeeb6373b44a",
".git/objects/21/19236a30a344bd3e9f41c64ca0f6e6b319d80b": "1cf113f02459207a8b2ef62bb4cf14b2",
".git/objects/29/5e93863eb5e15cab4821a4300e52f01652a5ec": "04b9069db0711ebd65680b870cedd3c8",
".git/objects/2d/38a3b9b5e4893fd88d492511ad3e0d07cd2993": "4375dfbe601d3be5ea0e6f36ae4d0126",
".git/objects/30/5c8cf0c47ec03b8acabd0e45e24f0f52b1d850": "b5a7a68d4b5a28547a612f6c30125256",
".git/objects/30/a9961b5e312d984f24068d07e7bc50ada823cc": "327a77fd82464d1b432293617663d943",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/9c3f00ddada58b14eda5ce2fac097f4b1644cb": "9d08de52793c498c4eafba2382c4e3c7",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/88822bf6f3c44a34e868cf8f36f5f57f87eeaa": "071466f969546111b2ccc8604b6eeceb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/5d466d028dcda008900fd86a680537015c92fa": "085b94f45d00cadc80cad373414ccc5c",
".git/objects/3f/abe560837d6f278b5e850efc2fe390565f00f6": "7c4e7525f319927551cc3d86221e41d7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/700c28d661a489ecedb7f767633d2ca5f8f3b7": "35f49b20bfcd0ddb895e529d2e80e368",
".git/objects/42/e4bf1aaa7fdaeeb88ce540e2e308cf93edd37f": "17aa669b31f7f0202deb917f79e15c72",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/6498b1cc20c9522a1af2f9312b86d234c64220": "0bcc8d2f0f8cca48a9f0a3f9a349077c",
".git/objects/52/b236eab9c80db3ea6d649dc2502c3969e191d8": "e44e1885fb359c7873188df11f866d96",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5e/c3f046ed7b7f975c13486ac6fa33a62cf58dd5": "29831f8c3e595fe8fb7ff37eb52bf007",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/61/69d2de797f4531fd495feab4c2a2675d289143": "3e4b53d74847e9646207161a7d48e359",
".git/objects/62/2b27d5849555ebd4b51700ba7cf03878390737": "512bc91bb66929c2ded9814429eab0b9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/68/a8607a2314ca6d6c34e874115e9dddb123290d": "1aaedfe01d7f36a72ed3b6b238f5df30",
".git/objects/6b/ab613b50dbbb94ead8f17ebb731c9000be960e": "f80079453403cbb9425253dc4fe11bbd",
".git/objects/7a/58ae6f3cd6fb13912418dc1b754d8774b3eab1": "041939947befbb8cd582b5e31da33f8e",
".git/objects/7d/0c75e5d2630430d26536e02f413e63b736acd6": "aaa80e66b5075beee15ad148ce65d354",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/ebb3359c59653b7222accb3f3083f2438a061c": "4ee1370d186858ceded41364bf4c716d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/bc9c6a239a89475c1f82a74dbf4398448d2384": "ea95767b37e5105226e6b79d7ef24a73",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/4e48ccaf7d9c45f6fdf617c57ac1e3284d35be": "2ded1cb180e61c6c067c8bfed2e8a50b",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/ad8cb3608f4117fc391fab435c31a5f0580643": "925c84276adc0f6d97656cc1c11c36a6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/b8f03e2f02efbeda923b0195530f52086a6c99": "cd4a9f3d116491d6802adb19e03b2d22",
".git/objects/aa/e7da69b0b78a50821b863f35654df797115c72": "0117cd4066bfe15640c5b11d2e465331",
".git/objects/b2/017beedc241bc01d6926bf90932278bb5cc808": "74cbec86bd8c691d6770745a0e8cf820",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/4c88db0ba0de27da1f08dcc921fbe2c9106bea": "da9487ce98587ac9887cee46d776d496",
".git/objects/cd/d6aa841bcddd0bbe0a6cabfa8d8be06acdd379": "86c3bfccab49791a7b42934381ed6094",
".git/objects/cf/946a77895a8250e62b2efe1229874e1b39d4e2": "82411cc5b225088242a7ca6368b0757f",
".git/objects/d1/5d9a12b0db6015df3d6afdfa8fa30ab31eea24": "96c012c61a4315f33d4b5fbf4796684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/46761993c75db261bffad9b4c9c6591a5d3a22": "02f1e5a2f944bece8bca962336d38427",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/a28021f4a74dcece4d9c7ded179eb53aa7a3d1": "ad18fb4062d19e90f2f8ae1047ead303",
".git/objects/f8/76d57914676a485af6754f0d431872ce2e94dd": "bbb3cef44a8e7108387a7616d2563cc5",
".git/refs/heads/main": "cea9d0cdd6d58b239e44d9cb6d963a70",
".git/refs/remotes/origin/main": "cea9d0cdd6d58b239e44d9cb6d963a70",
"assets/AssetManifest.bin": "ac7171e0fde770d97fb32cb5dabbe934",
"assets/AssetManifest.bin.json": "8d9ff794249132214ea038ca482b96f1",
"assets/AssetManifest.json": "186caadbc6a78a875962c7acd4cb71c9",
"assets/assets/iconos/icono1.png": "ef61acf8691cb34c44ef817bd7e96895",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c4f6e4822c2ea41701bce32a6ec3abc2",
"assets/NOTICES": "39eb52331b7de185276da9fe42e8b271",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "713ca0ed39858c842c969e2a53629c52",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "759363a13eac5452181b03c3f0a8db38",
"/": "759363a13eac5452181b03c3f0a8db38",
"main.dart.js": "4e56685831504dd23a6f4036ba8a2223",
"manifest.json": "d41517f1edd2de2e0a58fd65e59b6c1d",
"version.json": "7a4877281b8187d09015ed5230a45d9f"};
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
