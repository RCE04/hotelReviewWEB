'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5e5541ffe834383600c93c66bccf65e9",
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
".git/index": "45822f1e67c78254549dad6497667ad5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5fadc25bc5991dfc29ec5c8c3a6ffc79",
".git/logs/refs/heads/main": "b74598f0c71cbcfbb96e863b5f3be636",
".git/logs/refs/remotes/origin/main": "3f1ec25504a6396d5fe44a0046458cd4",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/14/2ae62678d45c238abbb7efe89514555f55ae4f": "2b95f8bcf37507fbd39d20b2e38fbfa4",
".git/objects/14/6cc7596ef806f07d179824fb76299d85f3d151": "d01333809e12ffb80fe86d59cb57a099",
".git/objects/15/9756c1a7c5c976798444645610cc55374d0159": "35e5bca882208c9101ad34ad7d4dad62",
".git/objects/18/1d238abc137ad1c887499a479bfe4270616a6c": "1ad6d41b520d2ce7fc5cb881c75217c4",
".git/objects/19/3e5d0e4eaf5945b8676babdfa965afeaf394c0": "69569c7f1e745a6a17de6b67cc4ca815",
".git/objects/19/a86ee9a29de740eb3897b33a1f4e70f0fe382b": "fd992b755dcbfcf1389bee9fc11d20f9",
".git/objects/1d/8f6a9447f590d02917b2b4c121d560c4031183": "e37ca4ffddff55645a6adeeb6373b44a",
".git/objects/21/19236a30a344bd3e9f41c64ca0f6e6b319d80b": "1cf113f02459207a8b2ef62bb4cf14b2",
".git/objects/27/92067510b3af1f5a79ef82bc671fe81aa03060": "4e439df1cf6489478f4affc42e2df9fc",
".git/objects/29/5e93863eb5e15cab4821a4300e52f01652a5ec": "04b9069db0711ebd65680b870cedd3c8",
".git/objects/2b/fbaee24dc4ae617d76de0127fdce3c9328af79": "f9c881848206cb0d164c19e9ee348549",
".git/objects/2d/38a3b9b5e4893fd88d492511ad3e0d07cd2993": "4375dfbe601d3be5ea0e6f36ae4d0126",
".git/objects/30/042058658e021548e1450789a05a3c9b900a88": "9f80685e4fd5f25201f701ef3b276142",
".git/objects/30/5c8cf0c47ec03b8acabd0e45e24f0f52b1d850": "b5a7a68d4b5a28547a612f6c30125256",
".git/objects/30/a9961b5e312d984f24068d07e7bc50ada823cc": "327a77fd82464d1b432293617663d943",
".git/objects/32/0c13ab21858b3c297b5b68979f4c4a00fe395d": "c61b46d41eae6a7ebdb7924c0b13069c",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/34/9c3f00ddada58b14eda5ce2fac097f4b1644cb": "9d08de52793c498c4eafba2382c4e3c7",
".git/objects/34/d95a76cc4d42c3f9d5db3179aaba15d57f101d": "c2095220769005b15f4885a1a8ee4bc7",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/39/88822bf6f3c44a34e868cf8f36f5f57f87eeaa": "071466f969546111b2ccc8604b6eeceb",
".git/objects/3a/b9d10228ff2468ba13fefe27bc9a237d8e9bf6": "85560b3a5f58209b1e7d5483f838462c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/54311d357aa760081a1b9d91eb22837a3e4fb9": "a9cf43bdee8f045166598ed14ebb7a14",
".git/objects/3d/5d466d028dcda008900fd86a680537015c92fa": "085b94f45d00cadc80cad373414ccc5c",
".git/objects/3f/abe560837d6f278b5e850efc2fe390565f00f6": "7c4e7525f319927551cc3d86221e41d7",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/700c28d661a489ecedb7f767633d2ca5f8f3b7": "35f49b20bfcd0ddb895e529d2e80e368",
".git/objects/42/b9b28bd1a93bc98108a825dfd00f5a99acd98b": "543e8a69759cbb5ec7ef635ceff629d3",
".git/objects/42/e4bf1aaa7fdaeeb88ce540e2e308cf93edd37f": "17aa669b31f7f0202deb917f79e15c72",
".git/objects/4a/27a7a3812ac09559a0c1131bcf504f26109872": "c9ce6a5f5daf4d540c4f659d272bb3a3",
".git/objects/4a/92d215dcd4f74dcaf98290f21d90730948c5e0": "cf3a43a7c67c5f041f2ffe1aebe7d17c",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/6498b1cc20c9522a1af2f9312b86d234c64220": "0bcc8d2f0f8cca48a9f0a3f9a349077c",
".git/objects/52/b236eab9c80db3ea6d649dc2502c3969e191d8": "e44e1885fb359c7873188df11f866d96",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5b/99ebf8a4992baa8a67cd7ce9352e16707cb74c": "b965c70781920de15e69afad76ddd1ca",
".git/objects/5e/c3f046ed7b7f975c13486ac6fa33a62cf58dd5": "29831f8c3e595fe8fb7ff37eb52bf007",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/60/c8899487c671dd71fcf7fac96c654107f5a209": "1406c02e75c50f285fea3692e79adff5",
".git/objects/61/69d2de797f4531fd495feab4c2a2675d289143": "3e4b53d74847e9646207161a7d48e359",
".git/objects/62/2b27d5849555ebd4b51700ba7cf03878390737": "512bc91bb66929c2ded9814429eab0b9",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/66/a5c8a18daebe33f9f462b15b11e42131dca775": "c8850df7008b97b0eab2c25e764fbd74",
".git/objects/67/990ffd09acb837d3b485a09f215713d3f27d78": "5e87de21546b02a869fdb6923914e066",
".git/objects/68/a8607a2314ca6d6c34e874115e9dddb123290d": "1aaedfe01d7f36a72ed3b6b238f5df30",
".git/objects/6b/ab613b50dbbb94ead8f17ebb731c9000be960e": "f80079453403cbb9425253dc4fe11bbd",
".git/objects/70/a67edaf21d51fd9413ca644a0fba12255ccb14": "262ad896ce17c1d28cc835e6d78272bc",
".git/objects/76/4fa9775e26ee33c983f81c9e77d9bd81310c78": "b4277a10c6d79bc869f932ecda1c2318",
".git/objects/7a/58ae6f3cd6fb13912418dc1b754d8774b3eab1": "041939947befbb8cd582b5e31da33f8e",
".git/objects/7a/6213855dd0d7cdeb069f61303545de5e986a15": "c6390b9c5c9216c3e2a48e8f8465c2ec",
".git/objects/7d/0c75e5d2630430d26536e02f413e63b736acd6": "aaa80e66b5075beee15ad148ce65d354",
".git/objects/7d/a7931de850e0566459fddea7f0e698dd4d8a23": "42fa5f7c905424098fdd69293d80251a",
".git/objects/7e/4b1bc40c534f574ba3b5089746525a5a3e429e": "dc2220d5ce75e1aba9b7cdce76edab56",
".git/objects/7f/ba7586f1dc2fe54738c91edc2d7b8c0befc3e2": "aaf8677298ff5293858fe7360ad2e0e3",
".git/objects/84/5d60800c09af5b9c13e8cf912bd75793ba122c": "65461c6ad22a87e76eea377c9288b021",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/ebb3359c59653b7222accb3f3083f2438a061c": "4ee1370d186858ceded41364bf4c716d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/32eb10e4822deb82b4e7ffd726ff265b35627b": "61097e5daa377a0f26840679b0183d00",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b86c56c317605b3c8125fc3af7b6161924ad71": "edcd0654a92c1cf6535334c88bdb2ded",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/93/a4ef41c9ee18e7864f46abab187eb6e9e58706": "97494c573cbddc2783877c84dae23ee3",
".git/objects/94/993507fa6925b117fa4a488d26c4c5ff66e8ea": "7403b79751cec63549bc85b6fc2fd2dd",
".git/objects/94/bc9c6a239a89475c1f82a74dbf4398448d2384": "ea95767b37e5105226e6b79d7ef24a73",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/4e48ccaf7d9c45f6fdf617c57ac1e3284d35be": "2ded1cb180e61c6c067c8bfed2e8a50b",
".git/objects/9f/65314c747cadf61ca2bc74da0254310d6104df": "d5f1fa05fceaa61a257ec66589341bfa",
".git/objects/a3/074320d9580590fcb15d1c2f3146666b059da3": "cd96eeac80a137e321ac1a95d2b4ce03",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/ad8cb3608f4117fc391fab435c31a5f0580643": "925c84276adc0f6d97656cc1c11c36a6",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/b8f03e2f02efbeda923b0195530f52086a6c99": "cd4a9f3d116491d6802adb19e03b2d22",
".git/objects/aa/e7da69b0b78a50821b863f35654df797115c72": "0117cd4066bfe15640c5b11d2e465331",
".git/objects/ac/da74a1a049ebb9fe6f32f9af89aa9336bdace6": "8a3332aafb02790a8b4de10de9b98b80",
".git/objects/b2/017beedc241bc01d6926bf90932278bb5cc808": "74cbec86bd8c691d6770745a0e8cf820",
".git/objects/b5/853fab26de1528f77a6bebecbe9c4d6692fd3f": "1c01e96fd0d92b3f0bbbe03abd8ce701",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/d7081e8d4e5c2d6842f05499b22734719ebb59": "72c9bb514a6a2dfdd203168ce5fcaeba",
".git/objects/be/e70b01d4a73f7d4ed838deee41f5d159cf1da8": "c9e8c49457440aa1d4b19910aba53bdf",
".git/objects/c1/da1afeced3438dfa56869829da9b6334efeb70": "af71363d70c04142018ee6d3faae943a",
".git/objects/c2/f83c68751b2f10a0065cd8c4ccc1054a482849": "eeada99895a8d3c814eddbdb96d4c488",
".git/objects/c3/4c88db0ba0de27da1f08dcc921fbe2c9106bea": "da9487ce98587ac9887cee46d776d496",
".git/objects/cb/1526a8e6255fa7f126724336f1d56d70c02eb8": "4ccd8e0bdb8a6b7940b2acd5e8146923",
".git/objects/cc/8ddb82bc524584345b39ab16228721df423495": "403c212f4c7cf66f73941b74ed9a56e7",
".git/objects/cd/d6aa841bcddd0bbe0a6cabfa8d8be06acdd379": "86c3bfccab49791a7b42934381ed6094",
".git/objects/cf/946a77895a8250e62b2efe1229874e1b39d4e2": "82411cc5b225088242a7ca6368b0757f",
".git/objects/d1/5d9a12b0db6015df3d6afdfa8fa30ab31eea24": "96c012c61a4315f33d4b5fbf4796684e",
".git/objects/d1/9c1a3d06e8fd131d19dcd78671b08f154beb21": "4cc1caa249c072ea5ad109e62a086370",
".git/objects/d2/5cf335df5b502fa2eedf8dda8d3ce9369f1715": "60b0da693459c29eac329220b99191c5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/92ae2d49e1e490deec118d505126ed822fd04c": "f949f8573373ead0d7c85b1060a1e300",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/da/27bb541505f4fdca99497ffdd9bebd4d54e9ef": "1846d0fcd07294af1e6ab236d1176702",
".git/objects/de/101ecde3a8dd5e8c3f8274b79324184af089eb": "1e6647c1b28439c7f6eb6c630837e036",
".git/objects/e1/3cdeddceb7eb6786e12f501f24fe4bb979496f": "cc6adfe3eb16e0bdf7ea1bfc49db1b3f",
".git/objects/e6/7935789e9abc3a8409ad69cf88cf123d78f571": "7860f834e7bd211afc3b050a4ee7c5f0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/32331afac60cd49a00ac681a6ec831849f726c": "c4de9fe45daf3a14b20df0b1154aabf1",
".git/objects/ed/46761993c75db261bffad9b4c9c6591a5d3a22": "02f1e5a2f944bece8bca962336d38427",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/54741ccc876591c09f7007159d0f075232bbcb": "92379db41b115726266c3ec9847b9675",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/a28021f4a74dcece4d9c7ded179eb53aa7a3d1": "ad18fb4062d19e90f2f8ae1047ead303",
".git/objects/f8/76d57914676a485af6754f0d431872ce2e94dd": "bbb3cef44a8e7108387a7616d2563cc5",
".git/objects/f8/93fe61fbbde685d6451f58973373d5f069f6fe": "4f86e9a1f49f5545242ab406c8621502",
".git/refs/heads/main": "139ab3683bd33969eb3bdb99d9a336c2",
".git/refs/remotes/origin/main": "139ab3683bd33969eb3bdb99d9a336c2",
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
"flutter_bootstrap.js": "b03eed8e4a6a93a772a98f34824bb34f",
"icono1.png": "ef61acf8691cb34c44ef817bd7e96895",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e5e2be9e0f2f86460b6524ed85ec07c",
"/": "4e5e2be9e0f2f86460b6524ed85ec07c",
"main.dart.js": "5973af439005a3acc8dfe748c1ff539a",
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
