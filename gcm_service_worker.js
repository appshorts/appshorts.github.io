var wigzoConf = { "host": 'https://tracker.wigzopush.com/', "orgtoken": "39ca9237-b79a-44ee-a4d7-cb66f5642410", "orgIcon": "https://app.wigzo.com/assets/img/profiles/noimage.jpeg", "failSafeTitle": "Snap! We could not fetch the notification", "failSafeBody": "Due to some error the notification that was sent could not be displayed.", "failSafeUrl": "https://www.wigzo.com/", }
var dataCacheName = 'DataShellCache_wigzoConf.orgtoken';
var cacheName = 'AppShellCache_wigzoConf.orgtoken';
var dataUrl = '';
var showNotification = function(title, data, notifData) { var data = data || {}; var url = data.url; var icon = data.icon || wigzoConf.host + "assets/img/notification_v1.png"; var options = notifData; return self.registration.showNotification(title, options); }
var failSafeNotification = function(errorString, registrationId) {
    var failSafeNotifData = {};
    var prevData = {};
    var actions = [];
    failSafeNotifData.title = wigzoConf.failSafeTitle;
    failSafeNotifData.actions = actions;
    failSafeNotifData.body = wigzoConf.failSafeBody;
    if (wigzoConf.hasOwnProperty("orgIcon") && !!wigzoConf.orgIcon) { failSafeNotifData.icon = wigzoConf.orgIcon; } else { failSafeNotifData.icon = wigzoConf.host + "assets/img/notification_v1.png"; }
    failSafeNotifData.tag = "notification-error";
    failSafeNotifData.requireInteraction = false;
    failSafeNotifData.image = "";
    failSafeNotifData.data = {};
    failSafeNotifData.data.actions = actions;
    failSafeNotifData.data.url = wigzoConf.failSafeUrl;
    return showNotification(failSafeNotifData.title, prevData, failSafeNotifData);
};
self.addEventListener('install', function(event) {
    self.skipWaiting();
    event.waitUntil(caches.open(cacheName).then(function(cache) { fetch('').then(function(response) { if (response.status === 200) { cache.add(""); } else { console.log('Could not find file: . Please make sure you have entered the correct path. Status Code: ' + response.status); } }); return cache; }));
});
self.addEventListener('activate', function(event) { event.waitUntil(caches.keys().then(function(keyList) { return Promise.all(keyList.map(function(key) { if (key !== cacheName && key !== dataCacheName) { /*console.log('[ServiceWorker] Removing old cache', key);*/ return caches.delete(key); } })); })); return self.clients.claim(); });
self.addEventListener('fetch', function(e) { /*console.log('[Service Worker] Fetch', e.request.url);*/ if (e.request.url.indexOf(dataUrl) > -1) { /* * When the request URL contains dataUrl, the app is asking for fresh * data. In this case, the service worker always goes to the * network and then caches the response. This is called the "Cache then * network" strategy */ e.respondWith(caches.open(dataCacheName).then(function(cache) { return fetch(e.request).then(function(response) { cache.put(e.request.url, response.clone()); return response; }); })); } else { /* * The app is asking for app shell files. In this scenario the app uses the * "Cache, falling back to the network" offline strategy: */ e.respondWith(caches.match(e.request).then(function(response) { return response || fetch(e.request); })); } });
self.addEventListener('push', function(event) {
    event.waitUntil(self.registration.pushManager.getSubscription().then(function(registration) {
        var registrationId = null;
        if ('subscriptionId' in registration) { registrationId = registration.subscriptionId; } else { registrationId = registration.endpoint.split("/").reverse()[0]; }
        return fetch(wigzoConf.host + "push/fetch-notification?ver=v2&orgtoken=" + wigzoConf.orgtoken + "®istrationId=" + registrationId).then(function(response) {
            if (response.status != 200) { return failSafeNotification(err.toString(), registrationId); }
            return response.json().then(function(json) {
                var promises = [];
                if (!json.notifications) { return Promise.all(promises); }
                if (json.notifications.length == 0) { return Promise.all(promises); }
                for (var i = 0; i < json.notifications.length; i++) {
                    var notification = json.notifications[i];
                    promises.push(showNotification(notification.title, notification.data, notification.options));
                }
                return Promise.all(promises);
            }).catch(function(err) { return failSafeNotification(err.toString(), registrationId); });
        }).catch(function(err) { return failSafeNotification(err.toString(), registrationId); });
    }));
});
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    var url = "";
    if (event.notification.data && event.notification.data.url && event.notification.data.url.includes("push/track/beam")) { url = event.notification.data && wigzoConf.host + event.notification.data.url; } else { url = event.notification.data.url; }
    var action = event.notification.data.actions || [];
    if (action.length != 0) {
        if (event.action == 'action1') {
            url = event.notification.data && wigzoConf.host + event.notification.data.actions[0].pushctaUrl
            return clients.openWindow(url);
        } else if (event.action == 'action2') {
            url = event.notification.data && wigzoConf.host + event.notification.data.actions[1].pushctaUrl
            return clients.openWindow(url);
        }
    }
    event.waitUntil(clients.matchAll({ type: "window" }).then(function(clientList) { for (var i = 0; i < clientList.length; i++) { var client = clientList[i]; if (client.url == '/' && 'focus' in client) return client.focus(); } if (clients.openWindow && url) { return clients.openWindow(url); } }));
});