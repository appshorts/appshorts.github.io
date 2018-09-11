var CACHE_NAME = 'appshorts-cache';
var urlsToCache = [
    '/',
    '/static/appshorts-min-style.css',
    '/static/appshorts-min-script.js'
];

var url = "https://public-api.wordpress.com/rest/v1.1/sites/124915882/posts/";
var postId, title;

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {

            // Cache hit - return response
            if (response) {
                return response;
            }

            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});


self.addEventListener('activate', function(event) {

    var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('push', function(event) {
    postId = event.data.text();
    var showNotification = function(postId, title) {
        event.waitUntil(
            self.registration.showNotification(title)
        );
    };

    fetch(url + postId).then(function(response) {
        return response.json()
    }).then(function(post) {
        title = post.title;
        showNotification(postId, post.title);
    });

});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow("https://www.appshorts.com/#title=" + title +
            "&id=" + postId)
    );
});