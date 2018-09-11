"use strict";
var appShorts = appShorts || {};
!function() {
    appShorts.refs.ajaxLoader = document.querySelector("#ajaxLoader"),
    appShorts.refs.body = document.querySelector("html, body"),
    appShorts.refs.mobile_main_menu = document.querySelector("#mobile_main_menu"),
    appShorts.refs.overlay_background = document.querySelector("#overlay_background"),
    appShorts.refs.footerBar = document.querySelector(".footer_bar")
}(),
appShorts.skip = 0,
appShorts.limit = 10,
appShorts.getSinglePost = function(t, e) {
    appShorts.fetchResp.singlePostResp || (appShorts.data_json.every(function(o) {
        if (o.slug === e)
            return appShorts.populateSinglePost(t, e, o),
            !0
    }),
    appShorts.apiCall("GET", appShorts.url.base + appShorts.url.apiGetSinglePost + "?slug=" + e).then(function(o) {
        appShorts.populateSinglePost(t, e, o)
    }))
}
,
appShorts.removeSinglePost = function() {
    appShorts.refs.mainPost.innerHTML = ""
}
,
appShorts.getList = function(t) {
    if (!appShorts.fetchResp.postResp) {
        appShorts.addEvent.ajaxStart();
        var e = appShorts.url.base + appShorts.url.apiGetPostsPath;
        t && (e += "?category=" + t);
        var o = function(e) {
            appShorts.populateList(t, e)
        };
        appShorts.apiCall("GET", e).then(function(t) {
            appShorts.addEvent.ajaxStop(),
            o(t)
        }).catch(function() {
            appShorts.getDataFromDB("posts", o),
            appShorts.addEvent.ajaxStop()
        })
    }
}
,
appShorts.getCategories = function() {
    appShorts.fetchResp.catResp || (appShorts.addEvent.ajaxStart(),
    appShorts.apiCall("GET", appShorts.url.base + appShorts.url.apiGetCategoriesPath).then(function(t) {
        appShorts.populateCategories(t),
        appShorts.addEvent.ajaxStop()
    }).catch(function() {
        appShorts.getDataFromDB("categories", appShorts.populateCategories),
        appShorts.addEvent.ajaxStop()
    }))
}
,
(appShorts = appShorts || {}).indexedDB = null,
appShorts.initializeDB = function(t) {
    var e = window.indexedDB.open("appShorts", 6);
    e.onerror = function(t) {
        console.log("error: " + t)
    }
    ,
    e.onsuccess = function(o) {
        appShorts.indexedDB = e.result,
        t && t()
    }
    ,
    e.onupgradeneeded = function(t) {
        appShorts.indexedDB = t.target.result;
        try {
            appShorts.indexedDB.createObjectStore("posts", {
                keyPath: "id"
            })
        } catch (t) {}
        try {
            appShorts.indexedDB.createObjectStore("categories", {
                keyPath: "id"
            })
        } catch (t) {}
    }
}
,
appShorts.getDataFromDB = function(t, e) {
    var o = [];
    if (appShorts.indexedDB) {
        var a = appShorts.indexedDB.transaction([t], "readonly")
          , r = a.objectStore(t).openCursor();
        a.oncomplete = function(t) {
            e(o)
        }
        ,
        r.onsuccess = function(t) {
            var e = t.target.result;
            e && (o.push(e.value),
            e.continue())
        }
    } else {
        var s = function() {
            appShorts.getDataFromDB(t, e)
        };
        appShorts.initializeDB(s)
    }
}
,
appShorts.saveDataInDB = function(t, e) {
    if (appShorts.indexedDB) {
        var t = appShorts.indexedDB.transaction([t], "readwrite").objectStore(t)
          , o = 0;
        Array.isArray(e) ? e.forEach(function(e) {
            o++,
            e.id = o,
            t.put(e).onerror = function(t) {
                console.log(t)
            }
        }) : "object" == typeof e && Object.keys(e).forEach(function(a) {
            o++;
            var r = {};
            r[a] = e[a],
            r.id = o,
            t.put(r).onerror = function(t) {
                console.log(t)
            }
        })
    } else {
        var a = function() {
            appShorts.saveDataInDB(t, e)
        };
        appShorts.initializeDB(a)
    }
}
,
appShorts.route = function() {
    var t = function(t, e) {
        var o = appShorts.getUrlParams();
        o ? "title"in o ? (appShorts.getSinglePost(o.category, o.title),
        appShorts.getList(o.category)) : (appShorts.removeSinglePost(),
        appShorts.getList(o.category)) : (appShorts.removeSinglePost(),
        appShorts.getList(null))
    };
    window.onhashchange = t,
    t(),
    appShorts.addEvent.ajaxStart(),
    appShorts.addEvent.ajaxStop(),
    appShorts.addEvent.askForSubscriptionEvents(),
    appShorts.addEvent.showMenuOnClickingHamburger(),
    appShorts.getCategories(),
    appShorts.initializeDB()
}
;
var appShorts = appShorts || {};
!function(t, e, o) {
    var a, r = t.getElementsByTagName(e)[0];
    t.getElementById(o) || ((a = t.createElement(e)).id = o,
    a.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1795827867341506",
    r.parentNode.insertBefore(a, r))
}(document, "script", "facebook-jssdk"),
appShorts.apiCall = function(t, e, o) {
    var a = function(a, r) {
        var s = new XMLHttpRequest;
        s.onreadystatechange = function() {
            4 == this.readyState && 200 == this.status ? a(this.responseText) : r(this.responseText)
        }
        ,
        s.open(t, e, !0),
        s.send(o)
    };
    return Promise ? new Promise(function(t, e) {
        a(t, e)
    }
    ) : appShorts.promise(function(t, e) {
        a(t, e)
    })
}
,
appShorts.addEvent = {
    ajaxStart: function() {
        appShorts.refs.ajaxLoader.style.display = "block",
        appShorts.refs.footerBar.style.display = "none"
    },
    ajaxStop: function() {
        appShorts.refs.ajaxLoader.style.display = "none",
        appShorts.refs.footerBar.style.display = "block"
    },
    askForSubscriptionEvents: function() {
        if (!appShorts.checkForNotificationPermission()) {
            window.innerHeight;
            var t = document.body.clientHeight;
            window.addEventListener("scroll", function() {
                window.scrollY > t - 500 && appShorts.serviceWorker()
            })
        }
    },
    showMenuOnClickingHamburger: function() {
        document.querySelector("#hamburger").addEventListener("click", function(t) {
            appShorts.refs.mobile_main_menu.style.right = "0vh",
            appShorts.refs.overlay_background.style.display = "block",
            t.stopPropagation()
        }),
        document.addEventListener("click", function(t) {
            appShorts.refs.mobile_main_menu.style.right = "-50vh",
            appShorts.refs.mobile_main_menu.style.display = "hidden"
        }),
        appShorts.refs.mobile_main_menu.addEventListener("click", function(t) {
            t.stopPropagation()
        })
    }
},
(appShorts = appShorts || {}).serviceWorker = function() {
    "serviceWorker"in navigator && navigator.serviceWorker.register("/sw.js").then(function(t) {
        t.pushManager.getSubscription().then(function(t) {
            t || appShorts.subscribeForPush()
        })
    }).catch(function(t) {
        console.log("ServiceWorker registration failed: ", t)
    })
}
,
appShorts.checkForNotificationPermission = function() {
    return !(!window.Notification || "granted" !== window.Notification.permission)
}
,
appShorts.subscribeForPush = function() {
    var t = function(t) {
        var e = "https://android.googleapis.com/gcm/send/"
          , o = t.substr(t.indexOf(e) + e.length);
        appShorts.apiCall("POST", appshorts_settings.url + "/registerDevice/", {
            deviceId: o
        })
    };
    navigator.serviceWorker.ready.then(function(e) {
        e.pushManager.subscribe({
            userVisibleOnly: !0
        }).then(function(e) {
            console.log("Subscription for Push successful: ", e),
            t(e.endpoint)
        }).catch(function(t) {
            console.log("Subscription for Push failed", t)
        })
    })
}
,
(appShorts = appShorts || {}).get_promise_base = function() {
    return {
        resolve: function(t) {
            if (this.then_callback)
                return this.then_callback(t),
                this;
            this.data = t
        },
        reject: function(t) {
            if (this.catch)
                return this.catch(t),
                this;
            this.data = t
        },
        then: function(t) {
            if (this.data)
                return t.call(this, this.data),
                this;
            this.then_callback = t
        },
        catch: function(t) {
            if (this.data)
                return t.call(this, this.data),
                this.data = null,
                this;
            this.catch_callback = t
        }
    }
}
,
appShorts.promise = function(t) {
    var e = appShorts.get_promise_base();
    return t(e.resolve.bind(e), e.reject.bind(e)),
    e
}
;
