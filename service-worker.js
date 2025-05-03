
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('naija-stream-cache-v1').then(function(cache) {
      return cache.addAll([
        './NaijaEduStream_BrowserDemo.html',
        './style.css'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
