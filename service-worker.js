/* eslint-disable no-console */
self.addEventListener('install', event => {
    console.log('WORKER: install event in progress.');
    event.waitUntil(
        caches
        .open('v1')
        .then(cache => cache.addAll([
            '/',
            '/css/style.css',
            '/img/jscompress-logo-square.png',
            '/js/app.js',
            '/js/app.js.map'
        ]))
        .then(() => {
            console.log('WORKER: install completed');
        })
        .catch(console.error.bind(console))
    );
});

self.addEventListener('fetch', event => {
    console.log('WORKER: fetch event in progress.');

    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches
        .match(event.request)
        .then(cached => fetch(event.request).catch(() => cached))
    );
});
