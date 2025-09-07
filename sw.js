const CACHE_NAME = 'yobumah-taxi-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/taxi1.jpg',
    '/airport-pickup.png',
    '/qrcode.png',
    '/sample-brochure.pdf'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});