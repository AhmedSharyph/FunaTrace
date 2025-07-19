const CACHE_NAME = 'funatrace-v1';
const ASSETS_TO_CACHE = [
  '/p/funatrace-v3.html',
  'https://ahmedsharyph.github.io/funatrace/ft_logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
