"use strict";
var appShorts = appShorts || {};

appShorts.indexedDB = null;

appShorts.initializeDB = function(callback) {
    var request = window.indexedDB.open("appShorts", 6);

    request.onerror = function(event) {
        console.log("error: " + event);
    };

    request.onsuccess = function(event) {
        appShorts.indexedDB = request.result;
        if (callback) callback();
    };

    request.onupgradeneeded = function(event) {
        appShorts.indexedDB = event.target.result;
        try {
            appShorts.indexedDB.createObjectStore("posts", { keyPath: "id" });
        } catch (e) {};

        try {
            appShorts.indexedDB.createObjectStore("categories", { keyPath: "id" });
        } catch (e) {};
    };
};

appShorts.getDataFromDB = function(objectStore, callback) {
    var posts = [];
    if (appShorts.indexedDB) {
        var transaction = appShorts.indexedDB.transaction([objectStore], "readonly");
        var request = transaction.objectStore(objectStore).openCursor();
        transaction.oncomplete = function(evt) {
            callback(posts);
        };
        request.onsuccess = function(event) {
            var cursor = event.target.result;
            if (cursor) {
                posts.push(cursor.value)
                cursor.continue();
            }
        };
    } else {
        var func = function() {
            appShorts.getDataFromDB(objectStore, callback);
        };
        appShorts.initializeDB(func);
    }
};

appShorts.saveDataInDB = function(objectStore, data_json) {
    if (appShorts.indexedDB) {
        var objectStore = appShorts.indexedDB.transaction([objectStore], "readwrite")
            .objectStore(objectStore);

        var count = 0;
        if (Array.isArray(data_json)) {
            data_json.forEach(function(json) {
                count++;
                json.id = count;
                var request = objectStore.put(json);
                request.onerror = function(event) {
                    console.log(event);
                };
            });
        } else if (typeof data_json === "object") {
            var keys = Object.keys(data_json);
            keys.forEach(function(key) {
                count++;
                var obj = {};
                obj[key] = data_json[key];
                obj.id = count;
                var request = objectStore.put(obj);
                request.onerror = function(event) {
                    console.log(event);
                };
            });
        }

    } else {
        var callback = function() {
            appShorts.saveDataInDB(objectStore, data_json);
        };
        appShorts.initializeDB(callback);
    }
};