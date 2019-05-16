const APP_NAME = '180-stereo-photo-viewer';
const VERSION = '1.0.0';
const CACHE_NAME = `${APP_NAME}-cache-v${VERSION}`;

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll([
                        './',
                        './index.html',
                        './scripts/exif-js-v2.3.0-added-support-for-extended-xmp.js',
                        './scripts/180-stereo-photo-viewer.js',
                        './scripts/offline-support.js',
                        'https://aframe.io/releases/0.9.2/aframe.min.js',
                        'https://cdn.aframe.io/fonts/Roboto-msdf.json',
                        'https://cdn.aframe.io/fonts/Roboto-msdf.png'
                    ]
                );
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(cacheNames.map(cacheName => {
                    if (cacheName.startsWith(APP_NAME) && cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                }));
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                return fetch(event.request);
            })
    );
});
