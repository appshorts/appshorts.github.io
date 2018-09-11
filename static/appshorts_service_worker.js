"use strict";
var appShorts = appShorts || {};

appShorts.registerDevice = function() {
    if ('serviceWorker' in navigator) {
        appShorts.registerServiceWorker();
    }
};

appShorts.registerServiceWorker = function() {
    var getDevice = function(subscription) {
        subscription = JSON.parse(JSON.stringify(subscription));
        var url = "https://android.googleapis.com/gcm/send/";
        var endpoint = subscription.endpoint;
        var obj = {};
        obj.deviceId = endpoint.replace(url, "");
        obj.keys = {};
        obj.keys.p256dh = subscription.keys.p256dh;
        obj.keys.auth = subscription.keys.auth;

        return obj;
    };

    var saveDevice = function(device) {
        appShorts.apiCall("POST", 'https://34.228.255.247/registerDevice/', device).then(function() {
            console.log("Device Id Registered ");
        }).catch(function(e) {
            console.log("Device Id Registration Error " + e)
        });
    };

    var urlBase64ToUint8Array = function(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };

    navigator.serviceWorker.register('sw.js', { scope: './' }).then(function(registration) {
        var vapidPublicKey = 'BMqjdFAkcCw3MjPNAWKY4BlAn-rggk3oa2Dn1lTKNKqWGns01DB-hAkTaGOiUbGHsjIlckOhqqlyrCRGUDbWtSM';
        console.log('Service worker registration succeeded:', registration);
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            var convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);
            serviceWorkerRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: convertedVapidKey
                })
                .then(function(subscription) {
                    console.log("Subscription for Push successful");
                    var device = getDevice(subscription);
                    saveDevice(device);
                })
                .catch(function(error) {
                    console.log("Subscription for Push failed", error);
                });
        });
    }).catch(function(error) {
        console.log('Service worker registration failed:', error);
    });
};

appShorts.askForNotificationPermission = function() {
    return window.Notification && window.Notification.permission === "default";
};