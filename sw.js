const SW_VERSION = 'v1';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js?v=' + SW_VERSION);
}

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('readme-gen-' + SW_VERSION).then(function(cache) {
      return cache.addAll([
        '.',
        'index.html',
        'css/style.css',
        'js/core.js',
        'js/sections.js',
        'js/templates.js',
        'js/ui.js',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(function(cached) {
      var fetched = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open('readme-gen-' + SW_VERSION).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return cached;
      });
      return cached || fetched;
    })
  );
});
