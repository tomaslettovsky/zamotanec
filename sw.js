// Zamotanec: offline mezipaměť. Při změně souborů zvýšit VERSION.
const VERSION = 'zamotanec-v13';
const FILES = [
  './',
  './index.html',
  './manifest.webmanifest',
  './img/logo-kurzy-venku.png',
  './img/apple-touch-icon.png',
  './img/icon-192.png',
  './img/icon-512.png',
  './img/icon-maskable-512.png',
  './img/favicon-32.png',
  './media/awake.mp4',
  './audio/limb-lr.m4a',
  './audio/limb-pr.m4a',
  './audio/limb-ln.m4a',
  './audio/limb-pn.m4a',
  './audio/color-red.m4a',
  './audio/color-orange.m4a',
  './audio/color-yellow.m4a',
  './audio/color-green.m4a',
  './audio/color-blue.m4a',
  './audio/color-purple.m4a',
  './audio/color-pink.m4a',
  './audio/color-white.m4a',
  './audio/color-black.m4a',
  './audio/hold-madlo.m4a',
  './audio/hold-lista.m4a',
  './audio/hold-spodak.m4a',
  './audio/hold-oblina.m4a',
  './audio/hold-stisk.m4a',
  './audio/hold-bocak.m4a',
  './audio/hold-dirka.m4a',
  './audio/cheer-1.m4a',
  './audio/cheer-2.m4a',
  './audio/cheer-3.m4a',
  './audio/cheer-4.m4a',
  './audio/cheer-5.m4a',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(VERSION).then((cache) => cache.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Nejdřív síť (aby se projevily úpravy), bez signálu mezipaměť.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (event.request.headers.has('range')) return; // video: nechat na prohlížeči
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && response.status === 200) {
          const copy = response.clone();
          caches.open(VERSION).then((cache) => cache.put(event.request, copy)).catch(() => {});
        }
        return response;
      })
      .catch(() => caches.match(event.request, { ignoreSearch: true }))
  );
});
