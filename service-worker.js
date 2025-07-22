const CACHE_NAME = "funatrace-cache-v1";
const urlsToCache = [
  "/funatrace/",
  "/funatrace/index.html",
  "/funatrace/style.css",
  "/funatrace/app.js",
  "/funatrace/install.js",
  "/funatrace/ft_logo.png",
  "/funatrace/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      )
    )
  );
});