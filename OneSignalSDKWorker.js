! function(e) {
    function t(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: i }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 53)
}([function(e, t, n) {
    "use strict";

    function i(e, t) {
        function n() { this.constructor = e }
        b(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
    }

    function r(e, t) {
        var n = {};
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) t.indexOf(i[r]) < 0 && (n[i[r]] = e[i[r]]);
        return n
    }

    function o(e, t, n, i) {
        var r, o = arguments.length,
            s = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, i);
        else
            for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, n, s) : r(t, n)) || s);
        return o > 3 && s && Object.defineProperty(t, n, s), s
    }

    function s(e, t) { return function(n, i) { t(n, i, e) } }

    function a(e, t) { if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t) }

    function u(e, t, n, i) {
        return new(n || (n = Promise))(function(r, o) {
            function s(e) { try { u(i.next(e)) } catch (e) { o(e) } }

            function a(e) { try { u(i.throw(e)) } catch (e) { o(e) } }

            function u(e) { e.done ? r(e.value) : new n(function(t) { t(e.value) }).then(s, a) }
            u((i = i.apply(e, t || [])).next())
        })
    }

    function c(e, t) {
        function n(e) { return function(t) { return i([e, t]) } }

        function i(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; u;) try {
                if (r = 1, o && (s = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(s = s.call(o, n[1])).done) return s;
                switch (o = 0, s && (n = [0, s.value]), n[0]) {
                    case 0:
                    case 1:
                        s = n;
                        break;
                    case 4:
                        return u.label++, { value: n[1], done: !1 };
                    case 5:
                        u.label++, o = n[1], n = [0];
                        continue;
                    case 7:
                        n = u.ops.pop(), u.trys.pop();
                        continue;
                    default:
                        if (s = u.trys, !(s = s.length > 0 && s[s.length - 1]) && (6 === n[0] || 2 === n[0])) { u = 0; continue }
                        if (3 === n[0] && (!s || n[1] > s[0] && n[1] < s[3])) { u.label = n[1]; break }
                        if (6 === n[0] && u.label < s[1]) { u.label = s[1], s = n; break }
                        if (s && u.label < s[2]) { u.label = s[2], u.ops.push(n); break }
                        s[2] && u.ops.pop(), u.trys.pop();
                        continue
                }
                n = t.call(e, u)
            } catch (e) { n = [6, e], o = 0 } finally { r = s = 0 }
            if (5 & n[0]) throw n[1];
            return { value: n[0] ? n[1] : void 0, done: !0 }
        }
        var r, o, s, a, u = { label: 0, sent: function() { if (1 & s[0]) throw s[1]; return s[1] }, trys: [], ops: [] };
        return a = { next: n(0), throw: n(1), return: n(2) }, "function" == typeof Symbol && (a[Symbol.iterator] = function() { return this }), a
    }

    function l(e, t) { for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]) }

    function d(e) {
        var t = "function" == typeof Symbol && e[Symbol.iterator],
            n = 0;
        return t ? t.call(e) : { next: function() { return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e } } }
    }

    function f(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var i, r, o = n.call(e),
            s = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(i = o.next()).done;) s.push(i.value)
        } catch (e) { r = { error: e } } finally { try { i && !i.done && (n = o.return) && n.call(o) } finally { if (r) throw r.error } }
        return s
    }

    function g() { for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t])); return e }

    function p(e) { return this instanceof p ? (this.v = e, this) : new p(e) }

    function h(e, t, n) {
        function i(e) { l[e] && (c[e] = function(t) { return new Promise(function(n, i) { d.push([e, t, n, i]) > 1 || r(e, t) }) }) }

        function r(e, t) { try { o(l[e](t)) } catch (e) { u(d[0][3], e) } }

        function o(e) { e.value instanceof p ? Promise.resolve(e.value.v).then(s, a) : u(d[0][2], e) }

        function s(e) { r("next", e) }

        function a(e) { r("throw", e) }

        function u(e, t) { e(t), d.shift(), d.length && r(d[0][0], d[0][1]) }
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var c, l = n.apply(e, t || []),
            d = [];
        return c = {}, i("next"), i("throw"), i("return"), c[Symbol.asyncIterator] = function() { return this }, c
    }

    function m(e) {
        function t(t, r) { e[t] && (n[t] = function(n) { return (i = !i) ? { value: p(e[t](n)), done: "return" === t } : r ? r(n) : n }) }
        var n, i;
        return n = {}, t("next"), t("throw", function(e) { throw e }), t("return"), n[Symbol.iterator] = function() { return this }, n
    }

    function v(e) { if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined."); var t = e[Symbol.asyncIterator]; return t ? t.call(e) : "function" == typeof d ? d(e) : e[Symbol.iterator]() }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.__extends = i, n.d(t, "__assign", function() { return S }), t.__rest = r, t.__decorate = o, t.__param = s, t.__metadata = a, t.__awaiter = u, t.__generator = c, t.__exportStar = l, t.__values = d, t.__read = f, t.__spread = g, t.__await = p, t.__asyncGenerator = h, t.__asyncDelegator = m, t.__asyncValues = v;
    var b = Object.setPrototypeOf || { __proto__: [] }
    instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) }, S = Object.assign || function(e) { for (var t, n = 1, i = arguments.length; n < i; n++) { t = arguments[n]; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]) } return e }
}, function(e, t, n) {
    var i, r;
    ! function(o, s) {
        "use strict";
        i = s, void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = r)
    }(0, function() {
        "use strict";

        function e(e) { return typeof console !== a && (void 0 !== console[e] ? t(console, e) : void 0 !== console.log ? t(console, "log") : s) }

        function t(e, t) { var n = e[t]; if ("function" == typeof n.bind) return n.bind(e); try { return Function.prototype.bind.call(n, e) } catch (t) { return function() { return Function.prototype.apply.apply(n, [e, arguments]) } } }

        function n(e, t, n) { return function() { typeof console !== a && (i.call(this, t, n), this[e].apply(this, arguments)) } }

        function i(e, t) {
            for (var n = 0; n < u.length; n++) {
                var i = u[n];
                this[i] = n < e ? s : this.methodFactory(i, e, t)
            }
        }

        function r(t, i, r) { return e(t) || n.apply(this, arguments) }

        function o(e, t, n) {
            function o(e) { var t = (u[e] || "silent").toUpperCase(); try { return void(window.localStorage[d] = t) } catch (e) {} try { window.document.cookie = encodeURIComponent(d) + "=" + t + ";" } catch (e) {} }

            function s() {
                var e;
                try { e = window.localStorage[d] } catch (e) {}
                if (typeof e === a) try {
                    var t = window.document.cookie,
                        n = t.indexOf(encodeURIComponent(d) + "=");
                    n && (e = /^([^;]+)/.exec(t.slice(n))[1])
                } catch (e) {}
                return void 0 === l.levels[e] && (e = void 0), e
            }
            var c, l = this,
                d = "loglevel";
            e && (d += ":" + e), l.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, l.methodFactory = n || r, l.getLevel = function() { return c }, l.setLevel = function(t, n) { if ("string" == typeof t && void 0 !== l.levels[t.toUpperCase()] && (t = l.levels[t.toUpperCase()]), !("number" == typeof t && t >= 0 && t <= l.levels.SILENT)) throw "log.setLevel() called with invalid level: " + t; if (c = t, !1 !== n && o(t), i.call(l, t, e), typeof console === a && t < l.levels.SILENT) return "No console available for logging" }, l.setDefaultLevel = function(e) { s() || l.setLevel(e, !1) }, l.enableAll = function(e) { l.setLevel(l.levels.TRACE, e) }, l.disableAll = function(e) { l.setLevel(l.levels.SILENT, e) };
            var f = s();
            null == f && (f = null == t ? "WARN" : t), l.setLevel(f, !1)
        }
        var s = function() {},
            a = "undefined",
            u = ["trace", "debug", "info", "warn", "error"],
            c = new o,
            l = {};
        c.getLogger = function(e) { if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger."); var t = l[e]; return t || (t = l[e] = new o(e, c.getLevel(), c.methodFactory)), t };
        var d = typeof window !== a ? window.log : void 0;
        return c.noConflict = function() { return typeof window !== a && window.log === c && (window.log = d), c }, c
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(23),
        r = n(36),
        o = n(5),
        s = n(18),
        a = function() {
            function e() {}
            return e.getBuildEnv = function() { return i.BuildEnvironmentKind.Production }, e.getWindowEnv = function() { return "undefined" == typeof window ? "undefined" != typeof self && void 0 !== self.registration ? o.WindowEnvironmentKind.ServiceWorker : o.WindowEnvironmentKind.Unknown : window === window.top ? -1 !== location.href.indexOf("initOneSignal") || "/subscribe" === location.pathname && "" === location.search && (location.hostname.endsWith(".onesignal.com") || location.hostname.endsWith(".os.tc") || -1 !== location.hostname.indexOf(".localhost") && e.getBuildEnv() === i.BuildEnvironmentKind.Development) ? o.WindowEnvironmentKind.OneSignalSubscriptionPopup : o.WindowEnvironmentKind.Host : "/webPushIframe" === location.pathname ? o.WindowEnvironmentKind.OneSignalProxyFrame : "/webPushModal" === location.pathname ? o.WindowEnvironmentKind.OneSignalSubscriptionModal : o.WindowEnvironmentKind.CustomIframe }, e.getTestEnv = function() { return r.TestEnvironmentKind.None }, e.getBuildEnvPrefix = function(t) {
                switch (void 0 === t && (t = e.getBuildEnv()), t) {
                    case i.BuildEnvironmentKind.Development:
                        return "Dev-";
                    case i.BuildEnvironmentKind.Staging:
                        return "Staging-";
                    case i.BuildEnvironmentKind.Production:
                        return "";
                    default:
                        throw new s.InvalidArgumentError("buildEnv", s.InvalidArgumentReason.EnumOutOfRange)
                }
            }, e.getOneSignalApiUrl = function(t) {
                switch (void 0 === t && (t = e.getBuildEnv()), t) {
                    case i.BuildEnvironmentKind.Development:
                        return new URL("https://localhost:3001/api/v1");
                    case i.BuildEnvironmentKind.Staging:
                        return new URL("https://onesignal-staging.pw/api/v1");
                    case i.BuildEnvironmentKind.Production:
                        return new URL("https://onesignal.com/api/v1");
                    default:
                        throw new s.InvalidArgumentError("buildEnv", s.InvalidArgumentReason.EnumOutOfRange)
                }
            }, e
        }();
    t.default = a
}, function(e, t, n) {
    "use strict";

    function i(e) { return "[object Array]" === Object.prototype.toString.call(e) }

    function r(e) { return V.default.isBrowser() && (J || (J = document.createElement("textarea"))), J ? (J.innerHTML = e, J.value) : e }

    function o() {
        if (void 0 === window.Promise) return !1;
        if ("" === F.name && "" === F.version) var e = F._detect(navigator.userAgent);
        else var e = F;
        var t = navigator.userAgent || "";
        return !(!e.safari && void 0 === navigator.serviceWorker) && (!(e.ios || e.ipod || e.iphone || e.ipad) && (!e.msedge && !e.msie && (!(t.indexOf("FBAN") > -1 || t.indexOf("FBAV") > -1) && (!navigator.appVersion.match(/ wv/) && (!(e.firefox && Number(e.version) < 48 && (e.mobile || e.tablet)) && (!!(e.firefox && Number(e.version) >= 44) || (!!(e.safari && Number(e.version) >= 7.1) || (!!(e.samsungBrowser && Number(e.version) >= 4) || (!!((e.chrome || e.chromium) && Number(e.version) >= 42) || (!!(e.yandexbrowser && Number(e.version) >= 15.12) || (!!(e.opera && (e.mobile || e.tablet) && Number(e.version) >= 37 || e.opera && Number(e.version) >= 42) || !!e.vivaldi)))))))))))
    }

    function s(e) {
        var t = document.querySelectorAll(e);
        if (t.length > 0)
            for (var n = 0; n < t.length; n++) t[n].parentNode.removeChild(t[n])
    }

    function a() { return new Promise(function(e) { OneSignal.initialized ? e() : OneSignal.once(OneSignal.EVENTS.SDK_INITIALIZED, e) }) }

    function u(e) { return JSON.stringify(e, function(e, t) { return "function" == typeof t ? "[Function]" : t }, 4) }

    function c(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; if (e) return e.apply(null, t) }

    function l(e) { for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]; return j.debug("Called %c" + e + "(" + t.map(u).join(", ") + ")", b("code"), ".") }

    function d(e) { return !!e && !!e.match(/(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) }

    function f(e, t, n) {
        if ("string" == typeof e) document.querySelector(e).insertAdjacentHTML(t, n);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            e.insertAdjacentHTML(t, n)
        }
    }

    function g(e) {
        if ("string" == typeof e)
            for (var t = document.querySelector(e); t.firstChild;) t.removeChild(t.firstChild);
        else { if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object."); for (; e.firstChild;) e.removeChild(e.firstChild) }
    }

    function p(e, t) {
        if ("string" == typeof e) document.querySelector(e).classList.add(t);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            e.classList.add(t)
        }
    }

    function h(e, t) {
        if ("string" == typeof e) document.querySelector(e).classList.remove(t);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            e.classList.remove(t)
        }
    }

    function m(e, t) { if ("string" == typeof e) return document.querySelector(e).classList.contains(t); if ("object" == typeof e) return e.classList.contains(t); throw new Error(e + " must be a CSS selector string or DOM Element object.") }

    function v() { return F.chrome || F.yandexbrowser || F.opera || F.vivaldi || F.samsungBrowser || F.chromium ? Q.CHROME : F.firefox ? Q.FIREFOX : F.safari ? Q.SAFARI : (j.error("OneSignal: Unable to associate device type for browser " + F.name + " " + F.version), Q.UNKNOWN) }

    function b(e) { return "code" == e ? 'padding: 0 1px 1px 5px;border: 1px solid #ddd;border-radius: 3px;font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;color: #444;' : "bold" == e ? "font-weight: 600;color: rgb(51, 51, 51);" : "alert" == e ? "font-weight: 600;color: red;" : "event" == e ? "color: green;" : "postmessage" == e ? "color: orange;" : "serviceworkermessage" == e ? "color: purple;" : "" }

    function S(e) { return new Promise(function(t) { setTimeout(t, e) }) }

    function w() { return Promise.resolve() }

    function _(e, t) { var n = new Promise(function(e, n) { setTimeout(function() { n(new K.default) }, t) }); return Promise.race([e, n]) }

    function y(e, t, n) { return void 0 === t && (t = w()), void 0 === n && (n = w()), e ? t : n }

    function O(e, t) { return !!e && -1 !== e.indexOf(t) }

    function E(e) { for (var t in e) e.hasOwnProperty(t) && void 0 === e[t] && delete e[t]; return e }

    function P(e) { return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(e) }

    function I(e) {
        var t = window.location.href;
        t = t.toLowerCase(), e = e.replace(/[\[\]]/g, "\\$&").toLowerCase();
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            i = n.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }

    function C() { return j.warn("OneSignal: Wiping IndexedDB data."), Promise.all([Y.default.remove("Ids"), Y.default.remove("NotificationOpened"), Y.default.remove("Options")]) }

    function T(e) { return e.charAt(0).toUpperCase() + e.slice(1) }

    function N() { return j.warn("OneSignal: Unsubscribing from push."), z.default.getWindowEnv() !== q.WindowEnvironmentKind.ServiceWorker ? self.registration.pushManager.getSubscription().then(function(e) { if (e) return e.unsubscribe(); throw new Error("Cannot unsubscribe because not subscribed.") }) : G.default.isUsingSubscriptionWorkaround() ? new Promise(function(e, t) { j.debug("Unsubscribe from push got called, and we're going to remotely execute it in HTTPS iFrame."), OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, null, function(n) { j.debug("Unsubscribe from push succesfully remotely executed."), n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t("Failed to remotely unsubscribe from push.") }) }) : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(function(e) { return e.pushManager }).then(function(e) { return e.getSubscription() }).then(function(e) { return e ? e.unsubscribe() : Promise.resolve() }) : Promise.resolve() }

    function M() { return j.warn("OneSignal: Unregistering service worker."), z.default.getWindowEnv() === q.WindowEnvironmentKind.OneSignalProxyFrame ? Promise.resolve() : navigator.serviceWorker && navigator.serviceWorker.controller ? navigator.serviceWorker.ready.then(function(e) { return e.unregister() }) : Promise.resolve() }

    function A() { return Promise.all([N(), M()]) }

    function k(e) { return new Promise(function(t) { return setTimeout(t, e) }) }

    function R(e, t) { return e.substr(e.indexOf(t) + t.length) }

    function x(e, t, n, r) {
        if (void 0 === r && (r = !1), t || j.error("Cannot call on() with no event: ", t), n || j.error("Cannot call on() with no task: ", n), "string" == typeof e) {
            var o = document.querySelectorAll(e);
            if (o.length > 0)
                for (var s = 0; s < o.length; s++) x(o[s], t, n)
        } else if (i(e))
            for (var s = 0; s < e.length; s++) x(e[s], t, n);
        else {
            if ("object" != typeof e) throw new Error(e + " must be a CSS selector string or DOM Element object.");
            var a = function() {
                return function(t) {
                    var i = function() { e.removeEventListener(t.type, a) };
                    r || i(), n(t, i)
                }
            }();
            e.addEventListener(t, a)
        }
    }

    function D() { return window.__oneSignalSdkLoadCount || 0 }

    function W(e, t) {
        return H.__awaiter(this, void 0, void 0, function() {
            return H.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, new Promise(function(n) { OneSignal.once(e, function(e) { if (t) { t(e) && n(e) } else n(e) }) })];
                    case 1:
                        return [2, n.sent()]
                }
            })
        })
    }

    function U() { window.__oneSignalSdkLoadCount = D() + 1 }

    function B(e) { return e.replace(/\s/g, "").toLowerCase() }

    function L(e) {
        for (var t = "", n = Object.keys(e), i = 0, r = n; i < r.length; i++) {
            var o = r[i],
                s = e[o];
            t += encodeURIComponent(o) + "=" + encodeURIComponent(s)
        }
        return t
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var H = n(0),
        F = n(10),
        j = n(1),
        V = n(6),
        K = n(56),
        G = n(9),
        z = n(2),
        q = n(5),
        Y = n(12);
    t.isArray = i;
    var J = null;
    t.decodeHtmlEntities = r, t.isPushNotificationsSupported = o, t.removeDomElement = s, t.awaitOneSignalInitAndSupported = a, t.stringify = u, t.executeCallback = c, t.logMethodCall = l, t.isValidEmail = d, t.addDomElement = f, t.clearDomElementChildren = g, t.addCssClass = p, t.removeCssClass = h, t.hasCssClass = m;
    var Q = { CHROME: 5, SAFARI: 7, FIREFOX: 8, UNKNOWN: -99 };
    t.getDeviceTypeForBrowser = v, t.getConsoleStyle = b, t.delay = S, t.nothing = w, t.timeoutPromise = _, t.when = y, t.contains = O, t.trimUndefined = E, t.isValidUuid = P, t.getUrlQueryParam = I, t.wipeIndexedDb = C, t.capitalize = T, t.unsubscribeFromPush = N, t.wipeServiceWorker = M, t.wipeServiceWorkerAndUnsubscribe = A, t.wait = k, t.substringAfter = R, t.once = x, t.getSdkLoadCount = D, t.awaitSdkEvent = W, t.incrementSdkLoadCount = U, t.prepareEmailForHashing = B, t.encodeHashAsUriComponent = L
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(1),
        r = n(6),
        o = n(2),
        s = n(5),
        a = n(3),
        u = ["notifyButtonHovering", "notifyButtonHover", "notifyButtonButtonClick", "notifyButtonLauncherClick", "animatedElementHiding", "animatedElementHidden", "animatedElementShowing", "animatedElementShown", "activeAnimatedElementActivating", "activeAnimatedElementActive", "activeAnimatedElementInactivating", "activeAnimatedElementInactive", "dbRetrieved", "dbSet", "testEvent"],
        c = ["onesignal.prompt.custom.clicked", "onesignal.prompt.native.permissionchanged", "onesignal.subscription.changed", "onesignal.internal.subscriptionset", "dbRebuilt", "initialize", "subscriptionSet", "sendWelcomeNotification", "subscriptionChange", "notificationPermissionChange", "dbSet", "register", "notificationDisplay", "notificationDismiss", "notificationClick", "permissionPromptDisplay", "testWouldDisplay", "testInitOptionDisabled", "popupWindowTimeout"],
        l = { notificationPermissionChange: "onesignal.prompt.native.permissionchanged", subscriptionChange: "onesignal.subscription.changed", customPromptClick: "onesignal.prompt.custom.clicked" },
        d = function() {
            function e() {}
            return e.trigger = function(t, n, d) {
                if (void 0 === d && (d = null), !a.contains(u, t)) {
                    var f = n;
                    if (d) var g = a.capitalize(o.default.getWindowEnv().toString()) + " â¬¸ " + a.capitalize(d);
                    else var g = a.capitalize(o.default.getWindowEnv().toString());
                    f || !1 === f ? i.debug("(" + g + ") Â» %c" + t + ":", a.getConsoleStyle("event"), f) : i.debug("(" + g + ") Â» %c" + t, a.getConsoleStyle("event"))
                }
                if (r.default.isBrowser()) {
                    if (t === OneSignal.EVENTS.SDK_INITIALIZED) {
                        if (OneSignal.initialized) return;
                        OneSignal.initialized = !0
                    }
                    OneSignal.emit(t, n)
                }
                if (l.hasOwnProperty(t)) {
                    var p = l[t];
                    e._triggerLegacy(p, n)
                }
                if (r.default.isBrowser() && (o.default.getWindowEnv() === s.WindowEnvironmentKind.OneSignalSubscriptionPopup || o.default.getWindowEnv() === s.WindowEnvironmentKind.OneSignalProxyFrame)) { opener || parent ? a.contains(c, t) && (o.default.getWindowEnv() === s.WindowEnvironmentKind.OneSignalSubscriptionPopup ? OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, { eventName: t, eventData: n }) : OneSignal.proxyFrame.retriggerRemoteEvent(t, n)) : i.error("Could not send event '" + t + "' back to host page because no creator (opener or parent) found!") }
            }, e._triggerLegacy = function(e, t) {
                var n = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: t });
                window.dispatchEvent(n)
            }, e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e.ServiceWorker = "ServiceWorker", e.Host = "Host", e.OneSignalSubscriptionPopup = "Popup", e.OneSignalSubscriptionModal = "Modal", e.OneSignalProxyFrame = "ProxyFrame", e.CustomIframe = "CustomFrame", e.Unknown = "Unknown" }(t.WindowEnvironmentKind || (t.WindowEnvironmentKind = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(2),
        r = n(5),
        o = function() {
            function e() {}
            return e.isBrowser = function() { return "undefined" != typeof window }, e.version = function() { return Number("140010") }, Object.defineProperty(e, "TRADITIONAL_CHINESE_LANGUAGE_TAG", { get: function() { return ["tw", "hant"] }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "SIMPLIFIED_CHINESE_LANGUAGE_TAG", { get: function() { return ["cn", "hans"] }, enumerable: !0, configurable: !0 }), e.getLanguage = function() { var t = navigator.language; if (t) { t = t.toLowerCase(); var n = t.split("-"); if ("zh" == n[0]) { for (var i = 0, r = e.TRADITIONAL_CHINESE_LANGUAGE_TAG; i < r.length; i++) { var o = r[i]; if (-1 !== n.indexOf(o)) return "zh-Hant" } for (var s = 0, a = e.SIMPLIFIED_CHINESE_LANGUAGE_TAG; s < a.length; s++) { var u = a[s]; if (-1 !== n.indexOf(u)) return "zh-Hans" } return "zh-Hant" } return n[0].substring(0, 2) } return "en" }, e.supportsServiceWorkers = function() {
                switch (i.default.getWindowEnv()) {
                    case r.WindowEnvironmentKind.ServiceWorker:
                        return !0;
                    default:
                        return "undefined" != typeof navigator && "serviceWorker" in navigator
                }
            }, e.getSdkStylesVersionHash = function() { return "1b8df61513b10351791b1b66d5d0ecf5" }, e
        }();
    t.default = o
}, function(e, t, n) {
    "use strict";

    function i(e) { if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }
    var r = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    e.exports = function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var i = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { i[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("") } catch (e) { return !1 } }() ? Object.assign : function(e, t) { for (var n, s, a = i(e), u = 1; u < arguments.length; u++) { n = Object(arguments[u]); for (var c in n) r.call(n, c) && (a[c] = n[c]); if (Object.getOwnPropertySymbols) { s = Object.getOwnPropertySymbols(n); for (var l = 0; l < s.length; l++) o.call(n, s[l]) && (a[s[l]] = n[s[l]]) } } return a }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(54),
        o = function(e) {
            function t(t) { return e.call(this, t) || this }
            return i.__extends(t, e), t
        }(r);
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(1),
        s = n(2),
        a = n(5),
        u = n(15),
        c = n(14),
        l = function() {
            function e() {}
            return e.registerForPush = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t, n, r, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t = OneSignal.context, [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                if ((n = i.sent()) && !t.sessionManager.isFirstPageView()) return o.debug("Not registering for push because the user is subscribed and this is not the first page view."), [2, null];
                                if ("undefined" != typeof OneSignal) {
                                    if (OneSignal._isRegisteringForPush) return [2, null];
                                    OneSignal._isRegisteringForPush = !0
                                }
                                switch (r = s.default.getWindowEnv()) {
                                    case a.WindowEnvironmentKind.Host:
                                    case a.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                        return [3, 2];
                                    case a.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                        return [3, 4]
                                }
                                return [3, 6];
                            case 2:
                                return [4, t.subscriptionManager.subscribe()];
                            case 3:
                                return e = i.sent(), t.sessionManager.incrementPageViewCount(), u.default.triggerNotificationPermissionChanged(), u.default.checkAndTriggerSubscriptionChanged(), [3, 7];
                            case 4:
                                return [4, t.subscriptionManager.subscribePartially()];
                            case 5:
                                return l = i.sent(), d = opener || parent, OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, { rawPushSubscription: l.serialize() }, function(e) {!0 === e.data.progress ? (o.debug("Got message from host page that remote reg. is in progress, closing popup."), d && window.close()) : o.debug("Got message from host page that remote reg. could not be finished.") }), [3, 7];
                            case 6:
                                throw "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), new c.InvalidStateError(c.InvalidStateReason.UnsupportedEnvironment);
                            case 7:
                                return "undefined" != typeof OneSignal && (OneSignal._isRegisteringForPush = !1), [2, e]
                        }
                    })
                })
            }, e.isUsingSubscriptionWorkaround = function() { if (!OneSignal.config) throw new Error("(" + s.default.getWindowEnv().toString() + ") isUsingSubscriptionWorkaround() cannot be called until OneSignal.config exists."); return !r.safari && (!(e.isLocalhostAllowedAsSecureOrigin() && "localhost" === location.hostname || "127.0.0.1" === location.hostname) && (s.default.getWindowEnv() === a.WindowEnvironmentKind.Host && (!!OneSignal.config.subdomain || "http:" === location.protocol))) }, e.hasInsecureParentOrigin = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (window === window.top || !("serviceWorker" in navigator) || void 0 === navigator.serviceWorker.getRegistration) return [2, !1];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, navigator.serviceWorker.getRegistration()];
                            case 2:
                                return t.sent(), [2, !1];
                            case 3:
                                return e = t.sent(), [2, !0];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.isLocalhostAllowedAsSecureOrigin = function() { return OneSignal.config && OneSignal.config.userConfig && !0 === OneSignal.config.userConfig.allowLocalhostAsSecureOrigin }, e
        }();
    t.default = l
}, function(e, t, n) {
    ! function(t, i, r) { void 0 !== e && e.exports ? e.exports = r() : n(55)("bowser", r) }(0, 0, function() {
        function e(e) {
            function t(t) { var n = e.match(t); return n && n.length > 1 && n[1] || "" }
            var n, i = t(/(ipod|iphone|ipad)/i).toLowerCase(),
                r = /like android/i.test(e),
                o = !r && /android/i.test(e),
                a = /nexus\s*[0-6]\s*/i.test(e),
                u = !a && /nexus\s*[0-9]+/i.test(e),
                c = /CrOS/.test(e),
                l = /silk/i.test(e),
                d = /sailfish/i.test(e),
                f = /tizen/i.test(e),
                g = /(web|hpw)os/i.test(e),
                p = /windows phone/i.test(e),
                h = (/SamsungBrowser/i.test(e), !p && /windows/i.test(e)),
                m = !i && !l && /macintosh/i.test(e),
                v = !o && !d && !f && !g && /linux/i.test(e),
                b = t(/edge\/(\d+(\.\d+)?)/i),
                S = t(/version\/(\d+(\.\d+)?)/i),
                w = /tablet/i.test(e) && !/tablet pc/i.test(e),
                _ = !w && /[^-]mobi/i.test(e),
                y = /xbox/i.test(e);
            /opera/i.test(e) ? n = { name: "Opera", opera: s, version: S || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i) } : /opr\/|opios/i.test(e) ? n = { name: "Opera", opera: s, version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || S } : /SamsungBrowser/i.test(e) ? n = { name: "Samsung Internet for Android", samsungBrowser: s, version: S || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i) } : /coast/i.test(e) ? n = { name: "Opera Coast", coast: s, version: S || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i) } : /yabrowser/i.test(e) ? n = { name: "Yandex Browser", yandexbrowser: s, version: S || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i) } : /ucbrowser/i.test(e) ? n = { name: "UC Browser", ucbrowser: s, version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i) } : /mxios/i.test(e) ? n = { name: "Maxthon", maxthon: s, version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i) } : /epiphany/i.test(e) ? n = { name: "Epiphany", epiphany: s, version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i) } : /puffin/i.test(e) ? n = { name: "Puffin", puffin: s, version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i) } : /sleipnir/i.test(e) ? n = { name: "Sleipnir", sleipnir: s, version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i) } : /k-meleon/i.test(e) ? n = { name: "K-Meleon", kMeleon: s, version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i) } : p ? (n = { name: "Windows Phone", windowsphone: s }, b ? (n.msedge = s, n.version = b) : (n.msie = s, n.version = t(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? n = { name: "Internet Explorer", msie: s, version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i) } : c ? n = { name: "Chrome", chromeos: s, chromeBook: s, chrome: s, version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) } : /chrome.+? edge/i.test(e) ? n = { name: "Microsoft Edge", msedge: s, version: b } : /vivaldi/i.test(e) ? n = { name: "Vivaldi", vivaldi: s, version: t(/vivaldi\/(\d+(\.\d+)?)/i) || S } : d ? n = { name: "Sailfish", sailfish: s, version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i) } : /seamonkey\//i.test(e) ? n = { name: "SeaMonkey", seamonkey: s, version: t(/seamonkey\/(\d+(\.\d+)?)/i) } : /firefox|iceweasel|fxios/i.test(e) ? (n = { name: "Firefox", firefox: s, version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i) }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (n.firefoxos = s)) : l ? n = { name: "Amazon Silk", silk: s, version: t(/silk\/(\d+(\.\d+)?)/i) } : /phantom/i.test(e) ? n = { name: "PhantomJS", phantom: s, version: t(/phantomjs\/(\d+(\.\d+)?)/i) } : /slimerjs/i.test(e) ? n = { name: "SlimerJS", slimer: s, version: t(/slimerjs\/(\d+(\.\d+)?)/i) } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? n = { name: "BlackBerry", blackberry: s, version: S || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i) } : g ? (n = { name: "WebOS", webos: s, version: S || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i) }, /touchpad\//i.test(e) && (n.touchpad = s)) : /bada/i.test(e) ? n = { name: "Bada", bada: s, version: t(/dolfin\/(\d+(\.\d+)?)/i) } : f ? n = { name: "Tizen", tizen: s, version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || S } : /qupzilla/i.test(e) ? n = { name: "QupZilla", qupzilla: s, version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || S } : /chromium/i.test(e) ? n = { name: "Chromium", chromium: s, version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || S } : /chrome|crios|crmo/i.test(e) ? n = { name: "Chrome", chrome: s, version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i) } : o ? n = { name: "Android", version: S } : /safari|applewebkit/i.test(e) ? (n = { name: "Safari", safari: s }, S && (n.version = S)) : i ? (n = { name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod" }, S && (n.version = S)) : n = /googlebot/i.test(e) ? { name: "Googlebot", googlebot: s, version: t(/googlebot\/(\d+(\.\d+))/i) || S } : { name: t(/^(.*)\/(.*) /), version: function(t) { var n = e.match(t); return n && n.length > 1 && n[2] || "" }(/^(.*)\/(.*) /) }, !n.msedge && /(apple)?webkit/i.test(e) ? (/(apple)?webkit\/537\.36/i.test(e) ? (n.name = n.name || "Blink", n.blink = s) : (n.name = n.name || "Webkit", n.webkit = s), !n.version && S && (n.version = S)) : !n.opera && /gecko\//i.test(e) && (n.name = n.name || "Gecko", n.gecko = s, n.version = n.version || t(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || n.msedge || !o && !n.silk ? n.windowsphone || n.msedge || !i ? m ? n.mac = s : y ? n.xbox = s : h ? n.windows = s : v && (n.linux = s) : (n[i] = s, n.ios = s) : n.android = s;
            var O = "";
            n.windows ? O = function(e) {
                switch (e) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                }
            }(t(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? O = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? (O = t(/Mac OS X (\d+([_\.\s]\d+)*)/i), O = O.replace(/[_\s]/g, ".")) : i ? (O = t(/os (\d+([_\s]\d+)*) like mac os x/i), O = O.replace(/[_\s]/g, ".")) : o ? O = t(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = t(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = t(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);
            var E = !n.windows && O.split(".")[0];
            return w || u || "ipad" == i || o && (3 == E || E >= 4 && !_) || n.silk ? n.tablet = s : (_ || "iphone" == i || "ipod" == i || o || a || n.blackberry || n.webos || n.bada) && (n.mobile = s), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = s : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = s : n.x = s, n
        }

        function t(e) { return e.split(".").length }

        function n(e, t) { var n, i = []; if (Array.prototype.map) return Array.prototype.map.call(e, t); for (n = 0; n < e.length; n++) i.push(t(e[n])); return i }

        function i(e) { for (var i = Math.max(t(e[0]), t(e[1])), r = n(e, function(e) { var r = i - t(e); return e += new Array(r + 1).join(".0"), n(e.split("."), function(e) { return new Array(20 - e.length).join("0") + e }).reverse() }); --i >= 0;) { if (r[0][i] > r[1][i]) return 1; if (r[0][i] !== r[1][i]) return -1; if (0 === i) return 0 } }

        function r(t, n, r) {
            var o = a;
            "string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (o = e(r));
            var s = "" + o.version;
            for (var u in t)
                if (t.hasOwnProperty(u) && o[u]) { if ("string" != typeof t[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(t)); return i([s, t[u]]) < 0 }
            return n
        }

        function o(e, t, n) { return !r(e, t, n) }
        var s = !0,
            a = e("undefined" != typeof navigator ? navigator.userAgent || "" : "");
        return a.test = function(e) { for (var t = 0; t < e.length; ++t) { var n = e[t]; if ("string" == typeof n && n in a) return !0 } return !1 }, a.isUnsupportedBrowser = r, a.compareVersions = i, a.check = o, a._detect = e, a
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(58),
            r = n(60),
            o = function() {
                function t(e) {
                    if (e) {
                        if (!i(e)) throw new r.default(e);
                        this.uuid = e
                    } else this.uuid = null
                }
                return Object.defineProperty(t.prototype, "value", { get: function() { return this.uuid }, enumerable: !0, configurable: !0 }), t.prototype.toString = function() { return this.uuid }, t.generate = function() {
                    var n = "",
                        i = "undefined" == typeof window ? e.crypto : window.crypto || window.msCrypto;
                    return n = i ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = i.getRandomValues(new Uint8Array(1))[0] % 16 | 0; return ("x" == e ? t : 3 & t | 8).toString(16) }) : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = 16 * Math.random() | 0; return ("x" == e ? t : 3 & t | 8).toString(16) }), new t(n)
                }, t.prototype.serialize = function() { return this.value }, t.deserialize = function(e) { return new t(e) }, t
            }();
        t.Uuid = o
    }).call(t, n(37))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(9),
        s = n(38),
        a = n(2),
        u = n(24),
        c = n(62),
        l = n(63),
        d = n(25),
        f = n(36),
        g = n(11),
        p = n(5),
        h = n(39);
    ! function(e) { e[e.SET = 0] = "SET" }(i || (i = {}));
    var m = function() {
        function e(e) { this.databaseName = e, this.emitter = new s.default, this.database = new h.default(this.databaseName) }
        return e.applyDbResultFilter = function(e, t, n) {
            switch (e) {
                case "Options":
                    return n && t ? n.value : n && !t ? n : null;
                case "Ids":
                    return n && t ? n.id : n && !t ? n : null;
                case "NotificationOpened":
                    return n && t ? { data: n.data, timestamp: n.timestamp } : n && !t ? n : null;
                default:
                    return n || null
            }
        }, e.prototype.get = function(t, n) {
            return r.__awaiter(this, void 0, void 0, function() {
                var i = this;
                return r.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, new Promise(function(s) {
                                return r.__awaiter(i, void 0, void 0, function() {
                                    var i, u;
                                    return r.__generator(this, function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return a.default.getWindowEnv() !== p.WindowEnvironmentKind.ServiceWorker && o.default.isUsingSubscriptionWorkaround() && a.default.getTestEnv() === f.TestEnvironmentKind.None ? (OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, [{ table: t, key: n }], function(e) {
                                                    var t = e.data[0];
                                                    s(t)
                                                }), [3, 3]) : [3, 1];
                                            case 1:
                                                return [4, this.database.get(t, n)];
                                            case 2:
                                                i = r.sent(), u = e.applyDbResultFilter(t, n, i), s(u), r.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return [2, s.sent()]
                    }
                })
            })
        }, e.prototype.put = function(t, n) {
            return r.__awaiter(this, void 0, void 0, function() {
                var i = this;
                return r.__generator(this, function(s) {
                    switch (s.label) {
                        case 0:
                            return [4, new Promise(function(e, s) {
                                return r.__awaiter(i, void 0, void 0, function() {
                                    return r.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return a.default.getWindowEnv() !== p.WindowEnvironmentKind.ServiceWorker && o.default.isUsingSubscriptionWorkaround() && a.default.getTestEnv() === f.TestEnvironmentKind.None ? (OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, [{ table: t, keypath: n }], function(i) { i.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : s("(Database) Attempted remote IndexedDB put(" + t + ", " + n + "), but did not get success response.") }), [3, 3]) : [3, 1];
                                            case 1:
                                                return [4, this.database.put(t, n)];
                                            case 2:
                                                i.sent(), e(), i.label = 3;
                                            case 3:
                                                return [2]
                                        }
                                    })
                                })
                            })];
                        case 1:
                            return s.sent(), this.emitter.emit(e.EVENTS.SET, n), [2]
                    }
                })
            })
        }, e.prototype.remove = function(e, t) { return a.default.getWindowEnv() !== p.WindowEnvironmentKind.ServiceWorker && o.default.isUsingSubscriptionWorkaround() && a.default.getTestEnv() === f.TestEnvironmentKind.None ? new Promise(function(n, i) { OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, [{ table: e, keypath: t }], function(r) { r.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? n() : i("(Database) Attempted remote IndexedDB remove(" + e + ", " + t + "), but did not get success response.") }) }) : this.database.remove(e, t) }, e.prototype.getAppConfig = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, i, o, s;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return t = new u.AppConfig, n = t, i = g.Uuid.bind, [4, this.get("Ids", "appId")];
                        case 1:
                            return n.appId = new(i.apply(g.Uuid, [void 0, r.sent()])), o = t, [4, this.get("Options", "subdomain")];
                        case 2:
                            return o.subdomain = r.sent(), s = t, [4, e.get("Options", "vapidPublicKey")];
                        case 3:
                            return s.vapidPublicKey = r.sent(), [2, t]
                    }
                })
            })
        }, e.prototype.setAppConfig = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.appId && e.appId.value ? [4, this.put("Ids", { type: "appId", id: e.appId.value })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return e.subdomain ? [4, this.put("Options", { key: "subdomain", value: e.subdomain })] : [3, 4];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return e.httpUseOneSignalCom ? [4, this.put("Options", { key: "httpUseOneSignalCom", value: !0 })] : [3, 6];
                        case 5:
                            return t.sent(), [3, 8];
                        case 6:
                            return [4, this.put("Options", { key: "httpUseOneSignalCom", value: !1 })];
                        case 7:
                            t.sent(), t.label = 8;
                        case 8:
                            return e.vapidPublicKey ? [4, this.put("Options", { key: "vapidPublicKey", value: e.vapidPublicKey })] : [3, 10];
                        case 9:
                            t.sent(), t.label = 10;
                        case 10:
                            return [2]
                    }
                })
            })
        }, e.prototype.getAppState = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t, n, i, o;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = new c.AppState, t = e, [4, this.get("Options", "defaultUrl")];
                        case 1:
                            return t.defaultNotificationUrl = r.sent(), n = e, [4, this.get("Options", "defaultTitle")];
                        case 2:
                            return n.defaultNotificationTitle = r.sent(), i = e, [4, this.get("Options", "isPushEnabled")];
                        case 3:
                            return i.lastKnownPushEnabled = r.sent(), o = e, [4, this.get("NotificationOpened")];
                        case 4:
                            return o.clickedNotifications = r.sent(), [2, e]
                    }
                })
            })
        }, e.prototype.setAppState = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                var t, n, i, o, s;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e.defaultNotificationUrl ? [4, this.put("Options", { key: "defaultUrl", value: e.defaultNotificationUrl })] : [3, 2];
                        case 1:
                            r.sent(), r.label = 2;
                        case 2:
                            return e.defaultNotificationTitle || "" === e.defaultNotificationTitle ? [4, this.put("Options", { key: "defaultTitle", value: e.defaultNotificationTitle })] : [3, 4];
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            return null == e.lastKnownPushEnabled ? [3, 6] : [4, this.put("Options", { key: "isPushEnabled", value: e.lastKnownPushEnabled })];
                        case 5:
                            r.sent(), r.label = 6;
                        case 6:
                            if (!e.clickedNotifications) return [3, 12];
                            t = Object.keys(e.clickedNotifications), n = 0, i = t, r.label = 7;
                        case 7:
                            return n < i.length ? (o = i[n], s = e.clickedNotifications[o], s ? [4, this.put("NotificationOpened", { url: o, data: s.data, timestamp: s.timestamp })] : [3, 9]) : [3, 12];
                        case 8:
                            return r.sent(), [3, 11];
                        case 9:
                            return null !== s ? [3, 11] : [4, this.remove("NotificationOpened", o)];
                        case 10:
                            r.sent(), r.label = 11;
                        case 11:
                            return n++, [3, 7];
                        case 12:
                            return [2]
                    }
                })
            })
        }, e.prototype.getServiceWorkerState = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t, n, i;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = new l.ServiceWorkerState, t = e, [4, this.get("Ids", "WORKER1_ONE_SIGNAL_SW_VERSION")];
                        case 1:
                            return t.workerVersion = r.sent(), n = e, [4, this.get("Ids", "WORKER2_ONE_SIGNAL_SW_VERSION")];
                        case 2:
                            return n.updaterWorkerVersion = r.sent(), i = e, [4, this.get("Ids", "backupNotification")];
                        case 3:
                            return i.backupNotification = r.sent(), [2, e]
                    }
                })
            })
        }, e.prototype.setServiceWorkerState = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.workerVersion ? [4, this.put("Ids", { type: "WORKER1_ONE_SIGNAL_SW_VERSION", id: e.workerVersion })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return e.updaterWorkerVersion ? [4, this.put("Ids", { type: "WORKER2_ONE_SIGNAL_SW_VERSION", id: e.updaterWorkerVersion })] : [3, 4];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return e.backupNotification ? [4, this.put("Ids", { type: "backupNotification", id: e.backupNotification })] : [3, 6];
                        case 5:
                            t.sent(), t.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.getSubscription = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t, n, i, o, s;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return e = new d.Subscription, t = e, n = g.Uuid.bind, [4, this.get("Ids", "userId")];
                        case 1:
                            return t.deviceId = new(n.apply(g.Uuid, [void 0, r.sent()])), i = e, [4, this.get("Ids", "registrationId")];
                        case 2:
                            return i.subscriptionToken = r.sent(), [4, this.get("Options", "optedOut")];
                        case 3:
                            return o = r.sent(), [4, this.get("Options", "subscription")];
                        case 4:
                            return s = r.sent(), e.optedOut = null != o ? o : null != s && !s, [2, e]
                    }
                })
            })
        }, e.prototype.setSubscription = function(e) {
            return r.__awaiter(this, void 0, void 0, function() {
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e.deviceId && e.deviceId.value ? [4, this.put("Ids", { type: "userId", id: e.deviceId.value })] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return e.subscriptionToken ? [4, this.put("Ids", { type: "registrationId", id: e.subscriptionToken })] : [3, 4];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return null == e.optedOut ? [3, 6] : [4, this.put("Options", { key: "optedOut", value: e.optedOut })];
                        case 5:
                            t.sent(), t.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.rebuild = function() { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(t) { return e.ensureSingletonInstance(), [2, Promise.all([e.databaseInstance.remove("Ids"), e.databaseInstance.remove("NotificationOpened"), e.databaseInstance.remove("Options")])] }) }) }, e.ensureSingletonInstance = function() { e.databaseInstanceName || (e.databaseInstanceName = "ONE_SIGNAL_SDK_DB"), e.databaseInstance || (e.databaseInstance = new e(e.databaseInstanceName)) }, e.on = function() { for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n]; return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(n) { return e.ensureSingletonInstance(), [2, e.databaseInstance.emitter.on.apply(e.databaseInstance.emitter, t)] }) }) }, e.setSubscription = function(t) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(n) { return e.ensureSingletonInstance(), [2, e.databaseInstance.setSubscription.call(e.databaseInstance, t)] }) }) }, e.getSubscription = function() { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(t) { return e.ensureSingletonInstance(), [2, e.databaseInstance.getSubscription.call(e.databaseInstance)] }) }) }, e.setServiceWorkerState = function(t) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(n) { return e.ensureSingletonInstance(), [2, e.databaseInstance.setServiceWorkerState.call(e.databaseInstance, t)] }) }) }, e.getServiceWorkerState = function() { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(t) { return e.ensureSingletonInstance(), [2, e.databaseInstance.getServiceWorkerState.call(e.databaseInstance)] }) }) }, e.setAppState = function(t) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(n) { return e.ensureSingletonInstance(), [2, e.databaseInstance.setAppState.call(e.databaseInstance, t)] }) }) }, e.getAppState = function() { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(t) { return e.ensureSingletonInstance(), [2, e.databaseInstance.getAppState.call(e.databaseInstance)] }) }) }, e.setAppConfig = function(t) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(n) { return e.ensureSingletonInstance(), [2, e.databaseInstance.setAppConfig.call(e.databaseInstance, t)] }) }) }, e.getAppConfig = function() { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(t) { return e.ensureSingletonInstance(), [2, e.databaseInstance.getAppConfig.call(e.databaseInstance)] }) }) }, e.remove = function(t, n) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(i) { return e.ensureSingletonInstance(), [2, e.databaseInstance.remove.call(e.databaseInstance, t, n)] }) }) }, e.put = function(t, n) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(i) { return e.ensureSingletonInstance(), [2, e.databaseInstance.put.call(e.databaseInstance, t, n)] }) }) }, e.get = function(t, n) { return r.__awaiter(this, void 0, void 0, function() { return r.__generator(this, function(i) { return e.ensureSingletonInstance(), [2, e.databaseInstance.get.call(e.databaseInstance, t, n)] }) }) }, e.EVENTS = i, e
    }();
    t.default = m
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(26),
        s = n(1),
        a = n(7),
        u = n(20),
        c = n(6),
        l = n(14),
        d = n(4),
        f = n(68),
        g = n(2),
        p = n(11),
        h = n(5),
        m = n(12),
        v = n(3),
        b = n(15),
        S = n(9),
        w = n(21),
        _ = function() {
            function e() {}
            return e.fixWordpressManifestIfMisplaced = function() {
                var e = document.querySelectorAll("link[rel=manifest]");
                if (e && !(e.length <= 1))
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                            i = n.href;
                        v.contains(i, "gcm_sender_id") && (document.querySelector("head").insertBefore(n, document.querySelector("head").children[0]), s.info("OneSignal: Moved the WordPress push <manifest> to the first element in <head>."))
                    }
            }, e.getNotificationTypeFromOptIn = function(e) { return 1 == e || null == e ? 1 : -2 }, e.getNotificationPermission = function(e) {
                return v.awaitOneSignalInitAndSupported().then(function() {
                    return new Promise(function(t) {
                        S.default.isUsingSubscriptionWorkaround() ? OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, { safariWebId: e }, function(e) {
                            var n = e.data;
                            t(n)
                        }) : r.safari ? e ? t(window.safari.pushNotification.permission(e).permission) : s.debug("OneSignal: Invalid init option safari_web_id %c" + e, v.getConsoleStyle("code"), ". Please pass in a valid safari_web_id to OneSignal init.") : t(window.Notification.permission)
                    })
                })
            }, e.isUsingHttpPermissionRequest = function() { return OneSignal.config.userConfig.httpPermissionRequest && 1 == OneSignal.config.userConfig.httpPermissionRequest.enable && (g.default.getWindowEnv() === h.WindowEnvironmentKind.OneSignalProxyFrame || g.default.getWindowEnv() === h.WindowEnvironmentKind.Host && S.default.isUsingSubscriptionWorkaround()) }, e.isUsingCustomHttpPermissionRequestPostModal = function() { return OneSignal.config.userConfig.httpPermissionRequest && 1 == OneSignal.config.userConfig.httpPermissionRequest.useCustomModal }, e.wasHttpsNativePromptDismissed = function() { return "dismissed" === o.get("onesignal-notification-prompt") }, e.markHttpPopoverShown = function() { sessionStorage.setItem("ONESIGNAL_HTTP_PROMPT_SHOWN", "true") }, e.isHttpPromptAlreadyShown = function() { return "true" == sessionStorage.getItem("ONESIGNAL_HTTP_PROMPT_SHOWN") }, e.checkAndTriggerNotificationPermissionChanged = function() {
                Promise.all([m.default.get("Options", "notificationPermission"), OneSignal.getNotificationPermission()]).then(function(e) {
                    var t = e[0],
                        n = e[1];
                    t !== n && b.default.triggerNotificationPermissionChanged().then(function() { return m.default.put("Options", { key: "notificationPermission", value: n }) })
                })
            }, e.showNotifyButton = function() {
                if (c.default.isBrowser() && !OneSignal.notifyButton) {
                    OneSignal.config.userConfig.notifyButton = OneSignal.config.userConfig.notifyButton || {}, OneSignal.config.userConfig.bell && (a(OneSignal.config.userConfig.bell, OneSignal.config.userConfig.notifyButton), a(OneSignal.config.userConfig.notifyButton, OneSignal.config.userConfig.bell));
                    var e = OneSignal.config.userConfig.notifyButton.displayPredicate;
                    e && "function" == typeof e ? Promise.resolve(OneSignal.config.userConfig.notifyButton.displayPredicate()).then(function(e) {!1 !== e ? (OneSignal.notifyButton = new u.default(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create()) : s.debug("Notify button display predicate returned false so not showing the notify button.") }) : (OneSignal.notifyButton = new u.default(OneSignal.config.userConfig.notifyButton), OneSignal.notifyButton.create())
                }
            }, e.checkAndDoHttpPermissionRequest = function() {
                var e = this;
                s.debug("Called %ccheckAndDoHttpPermissionRequest()", v.getConsoleStyle("code")), this.isUsingHttpPermissionRequest() && (OneSignal.config.userConfig.autoRegister ? OneSignal.showHttpPermissionRequest({ _sdkCall: !0 }).then(function(t) { "granted" !== t || e.isUsingCustomHttpPermissionRequestPostModal() || (s.debug("Showing built-in post HTTP permission request in-page modal because permission is granted and not using custom modal."), e.showHttpPermissionRequestPostModal(OneSignal.config.userConfig.httpPermissionRequest)) }) : d.default.trigger(OneSignal.EVENTS.TEST_INIT_OPTION_DISABLED))
            }, e.getNotificationIcons = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, e.getAppId()];
                            case 1:
                                if (!(t = i.sent()) || !t.value) throw new l.InvalidStateError(l.InvalidStateReason.MissingAppId);
                                return n = g.default.getOneSignalApiUrl().toString() + "/apps/" + t.value + "/icon", [4, fetch(n)];
                            case 2:
                                return r = i.sent(), [4, r.json()];
                            case 3:
                                if (o = i.sent(), o.errors) throw s.error("API call %c" + n, v.getConsoleStyle("code"), "failed with:", o.errors), new Error("Failed to get notification icons.");
                                return [2, o]
                        }
                    })
                })
            }, e.establishServiceWorkerChannel = function() {
                var e = this,
                    t = OneSignal.context.workerMessenger;
                t.off(), t.on(w.WorkerMessengerCommand.NotificationDisplayed, function(e) { s.debug(location.origin, "Received notification display event from service worker."), d.default.trigger(OneSignal.EVENTS.NOTIFICATION_DISPLAYED, e) }), t.on(w.WorkerMessengerCommand.NotificationClicked, function(t) {
                    return i.__awaiter(e, void 0, void 0, function() {
                        var e, n;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return g.default.getWindowEnv() !== h.WindowEnvironmentKind.OneSignalProxyFrame ? [3, 2] : [4, new Promise(function(e) {
                                        var t = OneSignal.proxyFrame;
                                        t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, OneSignal.EVENTS.NOTIFICATION_CLICKED, function(t) {
                                            var n = t.data;
                                            e(n)
                                        })
                                    })];
                                case 1:
                                    return e = i.sent(), [3, 3];
                                case 2:
                                    e = OneSignal.getListeners(OneSignal.EVENTS.NOTIFICATION_CLICKED).length, i.label = 3;
                                case 3:
                                    return 0 !== e ? [3, 5] : (s.debug("notification.clicked event received, but no event listeners; storing event in IndexedDb for later retrieval."), n = t.url, t.url || (n = location.href), [4, m.default.put("NotificationOpened", { url: n, data: t, timestamp: Date.now() })]);
                                case 4:
                                    return i.sent(), [3, 6];
                                case 5:
                                    d.default.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, t), i.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }), t.on(w.WorkerMessengerCommand.RedirectPage, function(e) {
                    s.debug(g.default.getWindowEnv().toString() + " Picked up command.redirect to " + e + ", forwarding to host page.");
                    var t = OneSignal.proxyFrame;
                    t && t.messenger.message(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, e)
                }), t.on(w.WorkerMessengerCommand.NotificationDismissed, function(e) { d.default.trigger(OneSignal.EVENTS.NOTIFICATION_DISMISSED, e) })
            }, e.getPromptOptionsQueryString = function() {
                var t = OneSignal.config.userConfig.promptOptions,
                    n = "";
                if (t)
                    for (var i = e.getPromptOptionsPostHash(), r = 0, o = Object.keys(i); r < o.length; r++) {
                        var s = o[r],
                            a = i[s];
                        n += "&" + s + "=" + a
                    }
                return n
            }, e.showHttpPermissionRequestPostModal = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()];
                            case 1:
                                return 0 !== (t = n.sent()) ? (s.debug("Not showing HTTP permission request post-modal because styles failed to load."), [2]) : (OneSignal.httpPermissionRequestPostModal = new f.default(e), OneSignal.httpPermissionRequestPostModal.create(), [2])
                        }
                    })
                })
            }, e.getPromptOptionsPostHash = function() {
                var e = OneSignal.config.userConfig.promptOptions;
                if (e) {
                    for (var t = { exampleNotificationTitleDesktop: "exampleNotificationTitle", exampleNotificationMessageDesktop: "exampleNotificationMessage", exampleNotificationTitleMobile: "exampleNotificationTitle", exampleNotificationMessageMobile: "exampleNotificationMessage" }, n = 0, i = Object.keys(t); n < i.length; n++) {
                        var r = i[n],
                            o = t[r];
                        e[r] && (e[o] = e[r])
                    }
                    for (var s = ["autoAcceptTitle", "siteName", "autoAcceptTitle", "subscribeText", "showGraphic", "actionMessage", "exampleNotificationTitle", "exampleNotificationMessage", "exampleNotificationCaption", "acceptButtonText", "cancelButtonText", "timeout"], a = {}, u = 0; u < s.length; u++) {
                        var c = s[u],
                            l = e[c],
                            d = encodeURIComponent(l);
                        (l || !1 === l || "" === l) && (a[c] = d)
                    }
                }
                return a
            }, e.triggerCustomPromptClicked = function(e) { d.default.trigger(OneSignal.EVENTS.CUSTOM_PROMPT_CLICKED, { result: e }) }, e.getAppId = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return OneSignal.config.appId ? [2, Promise.resolve(OneSignal.config.appId)] : [3, 1];
                            case 1:
                                return [4, m.default.get("Ids", "appId")];
                            case 2:
                                return e = t.sent(), [2, new p.Uuid(e)]
                        }
                    })
                })
            }, e
        }();
    t.default = _
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8),
        s = n(41);
    ! function(e) { e[e.MissingAppId = 0] = "MissingAppId", e[e.RedundantPermissionMessage = 1] = "RedundantPermissionMessage", e[e.PushPermissionAlreadyGranted = 2] = "PushPermissionAlreadyGranted", e[e.UnsupportedEnvironment = 3] = "UnsupportedEnvironment", e[e.MissingDomElement = 4] = "MissingDomElement", e[e.ServiceWorkerNotActivated = 5] = "ServiceWorkerNotActivated" }(i = t.InvalidStateReason || (t.InvalidStateReason = {}));
    var InvalidStateError = function(e) {
        function InvalidStateError(t, n) {
            var r = this;
            switch (t) {
                case i.MissingAppId:
                    r = e.call(this, "Missing required app ID.") || this;
                    break;
                case i.RedundantPermissionMessage:
                    var o = "";
                    n.permissionPromptType && (o = "(" + s.PermissionPromptType[n.permissionPromptType] + ")"), r = e.call(this, "Another permission message " + o + " is being displayed.") || this;
                    break;
                case i.PushPermissionAlreadyGranted:
                    r = e.call(this, "Push permission has already been granted.") || this;
                    break;
                case i.UnsupportedEnvironment:
                    r = e.call(this, "The current environment does not support this operation.") || this;
                    break;
                case i.ServiceWorkerNotActivated:
                    r = e.call(this, "The service worker must be activated first.") || this
            }
            return r.description = i[t], r.reason = t, r
        }
        return r.__extends(InvalidStateError, e), InvalidStateError
    }(o.default);
    t.InvalidStateError = InvalidStateError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(4),
        s = n(19),
        a = n(17),
        u = n(12),
        c = n(3),
        l = n(13),
        d = function() {
            function e() {}
            return e.onNotificationPermissionChange = function() { e.checkAndTriggerSubscriptionChanged() }, e.onInternalSubscriptionSet = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(t) { return s.default.put("subscription.optedOut", e), [2] }) }) }, e.checkAndTriggerSubscriptionChanged = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, o, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return c.logMethodCall("checkAndTriggerSubscriptionChanged"), [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return t = i.sent(), [4, u.default.getAppState()];
                            case 2:
                                return n = i.sent(), (o = n.lastKnownPushEnabled, s = null === o || t !== o) ? (r.info("The user's subscription state changed from " + (null === o ? "(not stored)" : o) + " âŸ¶ " + t), n.lastKnownPushEnabled = t, [4, u.default.setAppState(n)]) : [2];
                            case 3:
                                return i.sent(), e.triggerSubscriptionChanged(t), [2]
                        }
                    })
                })
            }, e._onSubscriptionChanged = function(t) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(n) { return e.onSubscriptionChanged_showWelcomeNotification(t), e.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate(t), [2] }) }) }, e.onSubscriptionChanged_showWelcomeNotification = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, s, d, f, g, p, h;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return OneSignal.__doNotShowWelcomeNotification ? (r.debug("Not showing welcome notification because user has previously subscribed."), [2]) : !0 !== e ? [3, 3] : [4, u.default.getSubscription()];
                            case 1:
                                return t = i.sent().deviceId, [4, l.default.getAppId()];
                            case 2:
                                n = i.sent(), s = OneSignal.config.userConfig.welcomeNotification, d = void 0 !== s && !0 === s.disable, f = void 0 !== s && void 0 !== s.title && null !== s.title ? s.title : "", g = void 0 !== s && void 0 !== s.message && null !== s.message && s.message.length > 0 ? s.message : "Thanks for subscribing!", p = new URL(location.href).origin + "?_osp=do_not_open", h = s && s.url && s.url.length > 0 ? s.url : p, f = c.decodeHtmlEntities(f), g = c.decodeHtmlEntities(g), d || (r.debug("Sending welcome notification."), a.default.sendNotification(n, [t], { en: f }, { en: g }, h, null, { __isOneSignalWelcomeNotification: !0 }, void 0), o.default.trigger(OneSignal.EVENTS.WELCOME_NOTIFICATION_SENT, { title: f, message: g, url: h })), i.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.onSubscriptionChanged_evaluateNotifyButtonDisplayPredicate = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return e = OneSignal.config.userConfig.notifyButton.displayPredicate, e && "function" == typeof e && OneSignal.notifyButton ? [4, e()] : [3, 2];
                            case 1:
                                t = n.sent(), !1 !== t ? (r.debug("Showing notify button because display predicate returned true."), OneSignal.notifyButton.launcher.show()) : (r.debug("Hiding notify button because display predicate returned false."), OneSignal.notifyButton.launcher.hide()), n.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.triggerNotificationPermissionChanged = function(e) {
                void 0 === e && (e = !1);
                var t, n;
                return Promise.all([OneSignal.getNotificationPermission(), u.default.get("Options", "notificationPermission")]).then(function(i) {
                    var r = i[0],
                        o = i[1];
                    return t = r, n = r !== o || e, n ? u.default.put("Options", { key: "notificationPermission", value: r }) : null
                }).then(function() { n && o.default.trigger(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, { to: t }) })
            }, e.triggerSubscriptionChanged = function(e) { o.default.trigger(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, e) }, e.fireStoredNotificationClicks = function(e) {
                return void 0 === e && (e = document.URL), i.__awaiter(this, void 0, void 0, function() {
                    function t(e) {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t, n, r, s;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, u.default.getAppState()];
                                    case 1:
                                        return t = i.sent(), t.clickedNotifications[e.url] = null, [4, u.default.setAppState(t)];
                                    case 2:
                                        return i.sent(), (n = e.data, r = e.timestamp, r && (s = (Date.now() - r) / 1e3 / 60) > 5) ? [2] : (o.default.trigger(OneSignal.EVENTS.NOTIFICATION_CLICKED, n), [2])
                                }
                            })
                        })
                    }
                    var n, r, s, a, c, l, d, f;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, u.default.getAppState()];
                            case 1:
                                return n = i.sent(), [4, u.default.get("Options", "notificationClickHandlerMatch")];
                            case 2:
                                if ("origin" !== (r = i.sent())) return [3, 7];
                                s = 0, a = Object.keys(n.clickedNotifications), i.label = 3;
                            case 3:
                                return s < a.length ? (c = a[s], new URL(c).origin !== location.origin ? [3, 5] : (l = n.clickedNotifications[c], [4, t(l)])) : [3, 6];
                            case 4:
                                i.sent(), i.label = 5;
                            case 5:
                                return s++, [3, 3];
                            case 6:
                                return [3, 11];
                            case 7:
                                return d = n.clickedNotifications[e], d ? [4, t(d)] : [3, 9];
                            case 8:
                                return i.sent(), [3, 11];
                            case 9:
                                return d || !e.endsWith("/") ? [3, 11] : (f = e.substring(0, e.length - 1), d = n.clickedNotifications[f], d ? [4, t(d)] : [3, 11]);
                            case 10:
                                i.sent(), i.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(43),
        r = n(1),
        o = n(7),
        s = n(44),
        a = n(6),
        u = n(2),
        c = n(11),
        l = n(3),
        d = function() {
            function e(e, t, n) {
                if (this.windowReference = e, this.sendToOrigin = t, this.receiveFromOrigin = n, !window || !window.postMessage) throw new Error("Must pass in a valid window reference supporting postMessage():" + e);
                if (!t || !n) throw new Error("Invalid origin. Must be set.");
                i.merge(this, new s), this.channel = new MessageChannel, this.messagePort = null, this.isListening = !1, this.isConnected = !1, this.replies = {}
            }
            return Object.defineProperty(e, "HANDSHAKE_MESSAGE", { get: function() { return "onesignal.postmam.handshake" }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "CONNECTED_MESSAGE", { get: function() { return "onesignal.postmam.connected" }, enumerable: !0, configurable: !0 }), e.prototype.listen = function() {
                if (r.debug("(Postmam) Called listen()."), this.isListening) return void r.debug("(Postmam) Already listening for Postmam connections.");
                a.default.isBrowser() && (this.isListening = !0, r.debug("(Postmam) Listening for Postmam connections.", this), window.addEventListener("message", this.onWindowMessagePostmanConnectReceived.bind(this)))
            }, e.prototype.startPostMessageReceive = function() { window.addEventListener("message", this.onWindowPostMessageReceived.bind(this)) }, e.prototype.stopPostMessageReceive = function() { window.removeEventListener("message", this.onWindowPostMessageReceived) }, e.prototype.destroy = function() { this.stopPostMessageReceive(), this.removeEvent() }, e.prototype.onWindowPostMessageReceived = function(t) {
                if (this.isSafeOrigin(t.origin)) {
                    var n = t.data,
                        i = n.id,
                        s = n.command,
                        a = n.data,
                        u = n.source;
                    if (s === e.CONNECTED_MESSAGE) return this.emit("connect"), void(this.isConnected = !0);
                    var c = { id: i, command: s, data: a, source: u },
                        l = o({ reply: this.reply.bind(this, c) }, c);
                    if (this.replies.hasOwnProperty(i)) { r.info("(Postmam) This message is a reply.");!1 === this.replies[i].bind(window)(l) && delete this.replies[i] } else this.emit(s, l)
                }
            }, e.prototype.onWindowMessagePostmanConnectReceived = function(t) {
                if (r.debug("(Postmam) (" + u.default.getWindowEnv().toString() + ") Window postmessage for Postman connect received:", t), this.isSafeOrigin(t.origin)) {
                    if (t.data.handshake !== e.HANDSHAKE_MESSAGE) return void r.info("(Postmam) Got a postmam message, but not our expected handshake:", t.data);
                    r.info("(Postmam) Got our expected Postmam handshake message (and connecting...):", t.data), window.removeEventListener("message", this.onWindowMessagePostmanConnectReceived), this.messagePort = t.ports[0], this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), r.info("(Postmam) Removed previous message event listener for handshakes, replaced with main message listener."), this.messagePort.start(), this.isConnected = !0, r.info("(Postmam) (" + u.default.getWindowEnv().toString() + ") Connected."), this.message(e.CONNECTED_MESSAGE), this.emit("connect")
                }
            }, e.prototype.connect = function() { r.info("(Postmam) (" + u.default.getWindowEnv().toString() + ") Establishing a connection to " + this.sendToOrigin + "."), this.messagePort = this.channel.port1, this.messagePort.addEventListener("message", this.onMessageReceived.bind(this), !1), this.messagePort.start(), this.windowReference.postMessage({ handshake: e.HANDSHAKE_MESSAGE }, this.sendToOrigin, [this.channel.port2]) }, e.prototype.onMessageReceived = function(t) {
                if (!t.data) return void r.debug("(" + u.default.getWindowEnv().toString() + ") Received an empty Postmam message:", t);
                var n = t.data,
                    i = n.id,
                    s = n.command,
                    a = n.data,
                    c = n.source;
                if (s === e.CONNECTED_MESSAGE) return this.emit("connect"), void(this.isConnected = !0);
                var l = { id: i, command: s, data: a, source: c },
                    d = o({ reply: this.reply.bind(this, l) }, l);
                if (this.replies.hasOwnProperty(i)) {!1 === this.replies[i].bind(window)(d) && delete this.replies[i] } else this.emit(s, d)
            }, e.prototype.reply = function(e, t, n) { var i = { id: e.id, command: e.command, data: t, source: u.default.getWindowEnv().toString(), isReply: !0 }; "function" == typeof n && (this.replies[i.id] = n), this.messagePort.postMessage(i) }, e.prototype.postMessage = function(e, t, n) { if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty."); if ("function" == typeof t) return void r.debug("You passed a function to data, did you mean to pass null?"); var i = { id: c.Uuid.generate().toString(), command: e, data: t, source: u.default.getWindowEnv().toString() }; "function" == typeof n && (this.replies[i.id] = n), this.windowReference.postMessage(i, "*") }, e.prototype.message = function(e, t, n) { if (!e || "" == e) throw new Error("(Postmam) Postmam command must not be empty."); if ("function" == typeof t) return void r.debug("You passed a function to data, did you mean to pass null?"); var i = { id: c.Uuid.generate().toString(), command: e, data: t, source: u.default.getWindowEnv().toString() }; "function" == typeof n && (this.replies[i.id] = n), this.messagePort.postMessage(i) }, e.prototype.generateSafeOrigins = function(e) {
                var t = [e];
                try {
                    var n = new URL(e),
                        i = n.host.replace("www.", "");
                    "https:" === n.protocol ? (t.push("https://" + i), t.push("https://www." + i)) : "http:" === n.protocol && (t.push("http://" + i), t.push("http://www." + i), t.push("https://" + i), t.push("https://www." + i))
                } catch (e) {}
                return t
            }, e.prototype.isSafeOrigin = function(e) {
                if (OneSignal.config) var t = OneSignal.config.subdomain;
                else var t = "x";
                var n = this.generateSafeOrigins(this.receiveFromOrigin);
                return "https://onesignal.com" === e || e === "https://" + (t || "") + ".onesignal.com" || e === "https://" + (t || "") + ".os.tc" || e === "https://" + (t || "") + ".os.tc:3001" || e === u.default.getOneSignalApiUrl().origin || "*" === this.receiveFromOrigin || l.contains(n, e)
            }, e.prototype.on = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t] }, e.prototype.once = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t] }, e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(57),
        o = n(1),
        s = n(7),
        a = n(6),
        u = n(2),
        c = n(24),
        l = n(11),
        d = n(3),
        f = n(61),
        g = n(5),
        p = function() {
            function e() {}
            return e.get = function(t, n, i) { return e.call("GET", t, n, i) }, e.post = function(t, n, i) { return e.call("POST", t, n, i) }, e.put = function(t, n, i) { return e.call("PUT", t, n, i) }, e.delete = function(t, n, i) { return e.call("DELETE", t, n, i) }, e.call = function(t, n, i, r) {
                var o = new Headers;
                if (o.append("SDK-Version", "onesignal/web/" + a.default.version()), o.append("Content-Type", "application/json;charset=UTF-8"), r)
                    for (var s = 0, c = Object.keys(r); s < c.length; s++) {
                        var l = c[s];
                        o.append(l, r[l])
                    }
                var d = { method: t || "NO_METHOD_SPECIFIED", headers: o, cache: "no-cache" };
                i && (d.body = JSON.stringify(i));
                var f;
                return fetch(u.default.getOneSignalApiUrl().toString() + "/" + n, d).then(function(e) { return f = e.status, e.json() }).then(function(t) { return f >= 200 && f < 300 ? t : "no-user-id-error" !== e.identifyError(t) ? Promise.reject(t) : void 0 })
            }, e.identifyError = function(e) { if (!e || !e.errors) return "no-error"; var t = e.errors; return d.contains(t, "No user with this id found") || d.contains(t, "Could not find app_id for given player id.") ? "no-user-id-error" : "unknown-error" }, e.getUserIdFromSubscriptionIdentifier = function(t, n, i) { return e.post("players", { app_id: t, device_type: n, identifier: i }).then(function(e) { return e && e.id ? e.id : null }).catch(function(e) { return o.debug("Error getting user ID from subscription identifier:", e), null }) }, e.getPlayer = function(t, n) { return e.get("players/" + n + "?app_id=" + t) }, e.updatePlayer = function(t, n, i) { return e.put("players/" + n.value, s({ app_id: t.value }, i)) }, e.sendNotification = function(t, n, i, r, o, s, a, u) { var c = { app_id: t.value, contents: r, include_player_ids: n.map(function(e) { return e.value }), isAnyWeb: !0, data: a, web_buttons: u }; return i && (c.headings = i), o && (c.url = o), s && (c.chrome_web_icon = s, c.firefox_icon = s), d.trimUndefined(c), e.post("notifications", c) }, e.getAppConfig = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, o, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, new Promise(function(n, i) { u.default.getWindowEnv() !== g.WindowEnvironmentKind.ServiceWorker ? r(u.default.getOneSignalApiUrl().toString() + "/sync/" + t.value + "/web", null, function(e, t) { e ? i(e) : t.success ? n(t) : i(t) }) : n(e.get("sync/" + t.value + "/web", null)) })];
                            case 1:
                                return n = i.sent(), o = new c.AppConfig, o.appId = t, n.features && n.features.cookie_sync && n.features.cookie_sync.enable && (o.cookieSyncEnabled = !0), n.config && (n.config.http_use_onesignal_com && (o.httpUseOneSignalCom = !0), n.config.safari_web_id && (o.safariWebId = n.config.safari_web_id), n.config.subdomain && (o.subdomain = n.config.subdomain), n.config.vapid_public_key && (o.vapidPublicKey = n.config.vapid_public_key), n.config.onesignal_vapid_public_key && (o.onesignalVapidPublicKey = n.config.onesignal_vapid_public_key)), [2, o];
                            case 2:
                                throw s = i.sent();
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.createUser = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, e.post("players", t.serialize())];
                            case 1:
                                return n = i.sent(), n && n.success ? [2, new l.Uuid(n.id)] : [2, null]
                        }
                    })
                })
            }, e.updateUserSession = function(t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, e.post("players/" + t.value + "/on_session", n.serialize())];
                            case 1:
                                return r = i.sent(), r.id ? [2, new l.Uuid(r.id)] : [2, t];
                            case 2:
                                throw o = i.sent(), o && Array.isArray(o.errors) && o.errors.length > 0 && d.contains(o.errors[0], "app_id not found") ? new f.OneSignalApiError(f.OneSignalApiErrorKind.MissingAppId) : o;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.default = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8);
    ! function(e) { e[e.Empty = 0] = "Empty", e[e.Malformed = 1] = "Malformed", e[e.EnumOutOfRange = 2] = "EnumOutOfRange" }(i = t.InvalidArgumentReason || (t.InvalidArgumentReason = {}));
    var InvalidArgumentError = function(e) {
        function InvalidArgumentError(t, n) {
            var r = this;
            switch (n) {
                case i.Empty:
                    r = e.call(this, "Supply a non-empty value to '" + t + "'.") || this;
                    break;
                case i.Malformed:
                    r = e.call(this, "The value for '" + t + "' was malformed.") || this;
                    break;
                case i.EnumOutOfRange:
                    r = e.call(this, "The value for '" + t + "' was out of range of the expected input enum.") || this
            }
            return r.argument = t, r.reason = i[n], r
        }
        return r.__extends(InvalidArgumentError, e), InvalidArgumentError
    }(o.default);
    t.InvalidArgumentError = InvalidArgumentError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() {}
        return e.put = function(t, n) { return void 0 === e.store[t] && (e.store[t] = [null, null]), e.store[t].push(n), e.store[t].length == e.LIMIT + 1 && e.store[t].shift(), e.store[t] }, e.get = function(t) { return void 0 === e.store[t] && (e.store[t] = [null, null]), e.store[t] }, e.getFirst = function(t) { return e.get(t)[0] }, e.getLast = function(t) { return e.get(t)[1] }, e.remove = function(t) { delete e.store[t] }, e.isEmpty = function(t) { var n = e.get(t); return null === n[0] && null === n[1] }, e.store = {}, e.LIMIT = 2, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(1),
        s = n(4),
        a = n(13),
        u = n(9),
        c = n(3),
        l = n(64),
        d = n(65),
        f = n(66),
        g = n(67),
        p = n(40),
        h = function() {
            function e(t) {
                var n = void 0 === t ? {} : t,
                    r = n.enable,
                    o = void 0 !== r && r,
                    s = n.size,
                    u = void 0 === s ? "medium" : s,
                    l = n.position,
                    d = void 0 === l ? "bottom-right" : l,
                    f = n.theme,
                    g = void 0 === f ? "default" : f,
                    h = n.showLauncherAfter,
                    m = void 0 === h ? 10 : h,
                    v = n.showBadgeAfter,
                    b = void 0 === v ? 300 : v,
                    S = n.text,
                    w = void 0 === S ? { "tip.state.unsubscribed": "Subscribe to notifications", "tip.state.subscribed": "You're subscribed to notifications", "tip.state.blocked": "You've blocked notifications", "message.prenotify": "Click to subscribe to notifications", "message.action.subscribing": "Click <strong>{{prompt.native.grant}}</strong> to receive notifications", "message.action.subscribed": "Thanks for subscribing!", "message.action.resubscribed": "You're subscribed to notifications", "message.action.unsubscribed": "You won't receive notifications again", "dialog.main.title": "Manage Site Notifications", "dialog.main.button.subscribe": "SUBSCRIBE", "dialog.main.button.unsubscribe": "UNSUBSCRIBE", "dialog.blocked.title": "Unblock Notifications", "dialog.blocked.message": "Follow these instructions to allow notifications:" } : S,
                    _ = n.prenotify,
                    y = void 0 === _ || _,
                    O = n.showCredit,
                    E = void 0 === O || O,
                    P = n.colors,
                    I = void 0 === P ? null : P,
                    C = n.offset,
                    T = void 0 === C ? null : C,
                    N = n.launcher,
                    M = void 0 === N ? null : N,
                    A = this;
                if (this.options = { enable: o, size: u, position: d, theme: g, showLauncherAfter: m, showBadgeAfter: b, text: w, prenotify: y, showCredit: E, colors: I, offset: T }, this.options.enable) {
                    if (!c.contains(["small", "medium", "large"], this.options.size)) throw new Error("Invalid size " + this.options.size + " for notify button. Choose among 'small', 'medium', or 'large'.");
                    if (!c.contains(["bottom-left", "bottom-right"], this.options.position)) throw new Error("Invalid position " + this.options.position + " for notify button. Choose either 'bottom-left', or 'bottom-right'.");
                    if (!c.contains(["default", "inverse"], this.options.theme)) throw new Error("Invalid theme " + this.options.theme + " for notify button. Choose either 'default', or 'inverse'.");
                    if (this.options.showLauncherAfter < 0) throw new Error("Invalid delay duration of " + this.options.showLauncherAfter + " for showing the notify button. Choose a value above 0.");
                    if (this.options.showBadgeAfter < 0) throw new Error("Invalid delay duration of " + this.options.showBadgeAfter + " for showing the notify button's badge. Choose a value above 0.");
                    this.size = this.options.size, this.position = this.options.position, this.text = this.options.text, this.text["tip.state.unsubscribed"] || (this.text["tip.state.unsubscribed"] = "Subscribe to notifications"), this.text["tip.state.subscribed"] || (this.text["tip.state.subscribed"] = "You're subscribed to notifications"), this.text["tip.state.blocked"] || (this.text["tip.state.blocked"] = "You've blocked notifications"), this.text["message.prenotify"] || (this.text["message.prenotify"] = "Click to subscribe to notifications"), this.text["message.action.subscribed"] || (this.text["message.action.subscribed"] = "Thanks for subscribing!"), this.text["message.action.resubscribed"] || (this.text["message.action.resubscribed"] = "You're subscribed to notifications"), this.text["message.action.subscribing"] || (this.text["message.action.subscribing"] = "Click <strong>{{prompt.native.grant}}</strong> to receive notifications"), this.text["message.action.unsubscribed"] || (this.text["message.action.unsubscribed"] = "You won't receive notifications again"), this.text["dialog.main.title"] || (this.text["dialog.main.title"] = "Manage Site Notifications"), this.text["dialog.main.button.subscribe"] || (this.text["dialog.main.button.subscribe"] = "SUBSCRIBE"), this.text["dialog.main.button.unsubscribe"] || (this.text["dialog.main.button.unsubscribe"] = "UNSUBSCRIBE"), this.text["dialog.blocked.title"] || (this.text["dialog.blocked.title"] = "Unblock Notifications"), this.text["dialog.blocked.message"] || (this.text["dialog.blocked.message"] = "Follow these instructions to allow notifications:"), this._launcher = M, this.substituteText(), this.state = e.STATES.UNINITIALIZED, this._ignoreSubscriptionState = !1, OneSignal.on(e.EVENTS.SUBSCRIBE_CLICK, function() { A.dialog.subscribeButton.disabled = !0, A._ignoreSubscriptionState = !0, OneSignal.setSubscription(!0).then(function() { return A.dialog.subscribeButton.disabled = !1, A.dialog.hide() }).then(function() { return A.message.display(p.default.TYPES.MESSAGE, A.text["message.action.resubscribed"], p.default.TIMEOUT) }).then(function() { return A._ignoreSubscriptionState = !1, A.launcher.clearIfWasInactive(), A.launcher.inactivate() }).then(function() { return A.updateState() }) }), OneSignal.on(e.EVENTS.UNSUBSCRIBE_CLICK, function() { A.dialog.unsubscribeButton.disabled = !0, OneSignal.setSubscription(!1).then(function() { return A.dialog.unsubscribeButton.disabled = !1, A.dialog.hide() }).then(function() { return A.launcher.clearIfWasInactive(), A.launcher.activate() }).then(function() { return A.message.display(p.default.TYPES.MESSAGE, A.text["message.action.unsubscribed"], p.default.TIMEOUT) }).then(function() { return A.updateState() }) }), OneSignal.on(e.EVENTS.HOVERING, function() {
                        return A.hovering = !0, A.launcher.activateIfInactive(), A.message.shown || A.dialog.shown ? void(A.hovering = !1) : A.message.contentType === p.default.TYPES.MESSAGE ? void(A.hovering = !1) : void new Promise(function(e) {
                            if (A.message.queued.length > 0) return A.message.dequeue().then(function(t) { A.message.content = t, A.message.contentType = p.default.TYPES.QUEUED, e() });
                            A.message.content = c.decodeHtmlEntities(A.message.getTipForState()), A.message.contentType = p.default.TYPES.TIP, e()
                        }).then(function() { return A.message.show() }).then(function() { A.hovering = !1 })
                    }), OneSignal.on(e.EVENTS.HOVERED, function() { A.message.contentType !== p.default.TYPES.MESSAGE && A.dialog.hidden && (A.hovering && (A.hovering = !1, A.message.waitUntilShown().then(function() { return c.delay(p.default.TIMEOUT) }).then(function() { return A.message.hide() }).then(function() { A.launcher.wasInactive && A.dialog.hidden && (A.launcher.inactivate(), A.launcher.wasInactive = null) })), A.message.shown && A.message.hide().then(function() { A.launcher.wasInactive && A.dialog.hidden && (A.launcher.inactivate(), A.launcher.wasInactive = null) })) }), OneSignal.on(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function(t) {
                        return i.__awaiter(A, void 0, void 0, function() {
                            var n, r = this;
                            return i.__generator(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return 1 != t ? [3, 2] : (this.badge.shown && this.options.prenotify && this.badge.hide(), null !== this.dialog.notificationIcons ? [3, 2] : [4, a.default.getNotificationIcons()]);
                                    case 1:
                                        n = i.sent(), this.dialog.notificationIcons = n, i.label = 2;
                                    case 2:
                                        return OneSignal.getNotificationPermission(function(n) { r.setState(t ? e.STATES.SUBSCRIBED : "denied" === n ? e.STATES.BLOCKED : e.STATES.UNSUBSCRIBED, r._ignoreSubscriptionState) }), [2]
                                }
                            })
                        })
                    }), OneSignal.on(e.EVENTS.STATE_CHANGED, function(t) { A.launcher.element && (t.to === e.STATES.SUBSCRIBED ? A.launcher.inactivate() : (t.to === e.STATES.UNSUBSCRIBED || e.STATES.BLOCKED) && A.launcher.activate()) }), OneSignal.on(OneSignal.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, function() { A.updateState() }), this.updateState()
                }
            }
            return Object.defineProperty(e, "EVENTS", { get: function() { return { STATE_CHANGED: "notifyButtonStateChange", LAUNCHER_CLICK: "notifyButtonLauncherClick", BELL_CLICK: "notifyButtonButtonClick", SUBSCRIBE_CLICK: "notifyButtonSubscribeClick", UNSUBSCRIBE_CLICK: "notifyButtonUnsubscribeClick", HOVERING: "notifyButtonHovering", HOVERED: "notifyButtonHover" } }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "STATES", { get: function() { return { UNINITIALIZED: "uninitialized", SUBSCRIBED: "subscribed", UNSUBSCRIBED: "unsubscribed", BLOCKED: "blocked" } }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "TEXT_SUBS", { get: function() { return { "prompt.native.grant": { default: "Allow", chrome: "Allow", firefox: "Always Receive Notifications", safari: "Allow" } } }, enumerable: !0, configurable: !0 }), e.prototype.substituteText = function() {
                for (var t in this.text)
                    if (this.text.hasOwnProperty(t)) {
                        var n = this.text[t],
                            i = r.name.toLowerCase();
                        for (var o in e.TEXT_SUBS)
                            if (e.TEXT_SUBS.hasOwnProperty(o)) {
                                var s = e.TEXT_SUBS[o],
                                    a = s[i];
                                n && c.contains(n, "{{") && (this.text[t] = n.replace("{{" + o + "}}", void 0 !== a ? a : s.default))
                            }
                    }
            }, e.prototype.showDialogProcedure = function() {
                var e = this;
                this.dialog.shown || this.dialog.show().then(function() { c.once(document, "click", function(t, n) { e.dialog.element.contains(t.target) || (n(), e.dialog.shown && e.dialog.hide().then(function() { e.launcher.inactivateIfWasInactive() })) }, !0) })
            }, e.prototype.create = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t, n, r, s, l = this;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return this.options.enable ? [4, OneSignal.context.dynamicResourceLoader.loadSdkStylesheet()] : [2];
                            case 1:
                                return 0 !== (e = i.sent()) ? (o.debug("Not showing notify button because styles failed to load."), [2]) : (this.container && c.removeDomElement("#onesignal-bell-container"), c.addDomElement("body", "beforeend", '<div id="onesignal-bell-container" class="onesignal-bell-container onesignal-reset"></div>'), c.addDomElement(this.container, "beforeend", '<div id="onesignal-bell-launcher" class="onesignal-bell-launcher"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-button"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-badge"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-message"></div>'), c.addDomElement(this.message.selector, "beforeend", '<div class="onesignal-bell-launcher-message-body"></div>'), c.addDomElement(this.launcher.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog"></div>'), c.addDomElement(this.dialog.selector, "beforeend", '<div class="onesignal-bell-launcher-dialog-body"></div>'), c.addDomElement(this.button.selector, "beforeEnd", '<svg class="onesignal-bell-svg" xmlns="http://www.w3.org/2000/svg" width="99.7" height="99.7" viewBox="0 0 99.7 99.7"><circle class="background" cx="49.9" cy="49.9" r="49.9"/><path class="foreground" d="M50.1 66.2H27.7s-2-.2-2-2.1c0-1.9 1.7-2 1.7-2s6.7-3.2 6.7-5.5S33 52.7 33 43.3s6-16.6 13.2-16.6c0 0 1-2.4 3.9-2.4 2.8 0 3.8 2.4 3.8 2.4 7.2 0 13.2 7.2 13.2 16.6s-1 11-1 13.3c0 2.3 6.7 5.5 6.7 5.5s1.7.1 1.7 2c0 1.8-2.1 2.1-2.1 2.1H50.1zm-7.2 2.3h14.5s-1 6.3-7.2 6.3-7.3-6.3-7.3-6.3z"/><ellipse class="stroke" cx="49.9" cy="49.9" rx="37.4" ry="36.9"/></svg>'), [4, OneSignal.isPushNotificationsEnabled()]);
                            case 2:
                                return t = i.sent(), [4, OneSignal.getSubscription()];
                            case 3:
                                return n = i.sent(), [4, a.default.wasHttpsNativePromptDismissed()];
                            case 4:
                                return r = i.sent(), s = t ? "small" : this.options.size, [4, this.launcher.resize(s)];
                            case 5:
                                if (i.sent(), "bottom-left" === this.options.position) c.addCssClass(this.container, "onesignal-bell-container-bottom-left"), c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-bottom-left");
                                else {
                                    if ("bottom-right" !== this.options.position) throw new Error("Invalid OneSignal notify button position " + this.options.position);
                                    c.addCssClass(this.container, "onesignal-bell-container-bottom-right"), c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-bottom-right")
                                }
                                if ("default" === this.options.theme) c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-theme-default");
                                else {
                                    if ("inverse" !== this.options.theme) throw new Error("Invalid OneSignal notify button theme " + this.options.theme);
                                    c.addCssClass(this.launcher.selector, "onesignal-bell-launcher-theme-inverse")
                                }
                                return this.applyOffsetIfSpecified(), this.setCustomColorsIfSpecified(), this.patchSafariSvgFilterBug(), o.info("Showing the notify button."), [4, (t ? this.launcher.inactivate() : c.nothing()).then(function() { return OneSignal.getSubscription() }).then(function(e) { return !t && e || null !== l.dialog.notificationIcons ? c.nothing() : a.default.getNotificationIcons().then(function(e) { l.dialog.notificationIcons = e }) }).then(function() { return c.delay(l.options.showLauncherAfter) }).then(function() { return !u.default.isUsingSubscriptionWorkaround() || !n || !0 === r || t || !0 !== OneSignal.config.userConfig.autoRegister || a.default.isHttpPromptAlreadyShown() || a.default.isUsingHttpPermissionRequest() ? l.launcher.show() : (o.debug("Not showing notify button because popover will be shown."), c.nothing()) }).then(function() { return c.delay(l.options.showBadgeAfter) }).then(function() { return l.options.prenotify && !t && OneSignal._isNewVisitor ? l.message.enqueue(l.text["message.prenotify"]).then(function() { return l.badge.show() }) : c.nothing() }).then(function() { return l.initialized = !0 })];
                            case 6:
                                return i.sent(), [2]
                        }
                    })
                })
            }, e.prototype.patchSafariSvgFilterBug = function() {
                if (!(r.safari && Number(r.version) >= 9.1)) {
                    var e = "drop-shadow(0 2px 4px rgba(34,36,38,0.35));",
                        t = "drop-shadow(0 2px 4px rgba(34,36,38,0));",
                        n = "drop-shadow(0px 2px 2px rgba(34,36,38,.15));";
                    this.graphic.setAttribute("style", "filter: " + e + "; -webkit-filter: " + e + ";"), this.badge.element.setAttribute("style", "filter: " + t + "; -webkit-filter: " + t + ";"), this.dialog.element.setAttribute("style", "filter: " + n + "; -webkit-filter: " + n + ";")
                }
                r.safari && this.badge.element.setAttribute("style", "display: none;")
            }, e.prototype.applyOffsetIfSpecified = function() {
                var e = this.options.offset;
                e && (this.launcher.element.style.cssText = "", e.bottom && (this.launcher.element.style.cssText += "bottom: " + e.bottom + ";"), "bottom-right" === this.options.position ? e.right && (this.launcher.element.style.cssText += "right: " + e.right + ";") : "bottom-left" === this.options.position && e.left && (this.launcher.element.style.cssText += "left: " + e.left + ";"))
            }, e.prototype.setCustomColorsIfSpecified = function() {
                var e = this.dialog.element.querySelector("button.action"),
                    t = this.button.element.querySelector(".pulse-ring");
                this.graphic.querySelector(".background").style.cssText = "";
                for (var n = this.graphic.querySelectorAll(".foreground"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    r.style.cssText = ""
                }
                if (this.graphic.querySelector(".stroke").style.cssText = "", this.badge.element.style.cssText = "", e && (e.style.cssText = "", e.style.cssText = ""), t && (t.style.cssText = ""), this.options.colors) {
                    var o = this.options.colors;
                    if (o["circle.background"] && (this.graphic.querySelector(".background").style.cssText += "fill: " + o["circle.background"]), o["circle.foreground"]) {
                        for (var s = this.graphic.querySelectorAll(".foreground"), i = 0; i < s.length; i++) {
                            var r = s[i];
                            r.style.cssText += "fill: " + o["circle.foreground"]
                        }
                        this.graphic.querySelector(".stroke").style.cssText += "stroke: " + o["circle.foreground"]
                    }
                    o["badge.background"] && (this.badge.element.style.cssText += "background: " + o["badge.background"]), o["badge.bordercolor"] && (this.badge.element.style.cssText += "border-color: " + o["badge.bordercolor"]), o["badge.foreground"] && (this.badge.element.style.cssText += "color: " + o["badge.foreground"]), e && (o["dialog.button.background"] && (this.dialog.element.querySelector("button.action").style.cssText += "background: " + o["dialog.button.background"]), o["dialog.button.foreground"] && (this.dialog.element.querySelector("button.action").style.cssText += "color: " + o["dialog.button.foreground"]), o["dialog.button.background.hovering"] && this.addCssToHead("onesignal-background-hover-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:hover { background: " + o["dialog.button.background.hovering"] + " !important; }"), o["dialog.button.background.active"] && this.addCssToHead("onesignal-background-active-style", "#onesignal-bell-container.onesignal-reset .onesignal-bell-launcher .onesignal-bell-launcher-dialog button.action:active { background: " + o["dialog.button.background.active"] + " !important; }")), t && o["pulse.color"] && (this.button.element.querySelector(".pulse-ring").style.cssText = "border-color: " + o["pulse.color"])
                }
            }, e.prototype.addCssToHead = function(e, t) {
                if (!document.getElementById(e)) {
                    var n = document.createElement("style");
                    n.id = e, n.type = "text/css", n.appendChild(document.createTextNode(t)), document.head.appendChild(n)
                }
            }, e.prototype.updateState = function() {
                var t = this;
                Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission()]).then(function(n) {
                    var i = n[0],
                        r = n[1];
                    t.setState(i ? e.STATES.SUBSCRIBED : e.STATES.UNSUBSCRIBED), "denied" === r && t.setState(e.STATES.BLOCKED)
                })
            }, e.prototype.setState = function(t, n) {
                void 0 === n && (n = !1);
                var i = this.state;
                this.state = t, i === t || n || s.default.trigger(e.EVENTS.STATE_CHANGED, { from: i, to: t })
            }, Object.defineProperty(e.prototype, "container", { get: function() { return document.querySelector("#onesignal-bell-container") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "graphic", { get: function() { return this.button.element.querySelector("svg") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "launcher", { get: function() { return this._launcher || (this._launcher = new g.default(this)), this._launcher }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "button", { get: function() { return this._button || (this._button = new d.default(this)), this._button }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "badge", { get: function() { return this._badge || (this._badge = new l.default), this._badge }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "message", { get: function() { return this._message || (this._message = new p.default(this)), this._message }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "dialog", { get: function() { return this._dialog || (this._dialog = new f.default(this)), this._dialog }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "subscribed", { get: function() { return this.state === e.STATES.SUBSCRIBED }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "unsubscribed", { get: function() { return this.state === e.STATES.UNSUBSCRIBED }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "blocked", { get: function() { return this.state === e.STATES.BLOCKED }, enumerable: !0, configurable: !0 }), e
        }();
    t.default = h
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(18),
        o = n(2),
        s = n(29),
        a = n(5),
        u = n(1),
        c = n(6);
    ! function(e) { e.WorkerVersion = "GetWorkerVersion", e.Subscribe = "Subscribe", e.AmpSubscriptionState = "amp-web-push-subscription-state", e.AmpSubscribe = "amp-web-push-subscribe", e.AmpUnsubscribe = "amp-web-push-unsubscribe", e.NotificationDisplayed = "notification.displayed", e.NotificationClicked = "notification.clicked", e.NotificationDismissed = "notification.dismissed", e.RedirectPage = "command.redirect" }(t.WorkerMessengerCommand || (t.WorkerMessengerCommand = {}));
    var l = function() {
        function e() { this.replies = {} }
        return e.prototype.addListener = function(e, t, n) {
            var i = { callback: t, onceListenerOnly: n };
            this.findListenersForMessage(e).length > 0 ? this.replies[e.toString()].push(i) : this.replies[e.toString()] = [i]
        }, e.prototype.findListenersForMessage = function(e) { return this.replies[e.toString()] || [] }, e.prototype.deleteListenerRecords = function(e) { this.replies[e.toString()] = null }, e.prototype.deleteAllListenerRecords = function() { this.replies = {} }, e.prototype.deleteListenerRecord = function(e, t) { for (var n = this.replies[e.toString()], i = n.length - 1; i >= 0; i--) { n[i] === t && n.splice(i, 1) } }, e
    }();
    t.WorkerMessengerReplyBuffer = l;
    var d = function() {
        function e(e) { this.context = e, this.replies = new l, this.debug = !0 }
        return e.prototype.broadcast = function(e, t) {
            return i.__awaiter(this, void 0, void 0, function() {
                var n, r, s, c, l;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return n = o.default.getWindowEnv(), n === a.WindowEnvironmentKind.ServiceWorker ? [3, 1] : [2];
                        case 1:
                            return [4, self.clients.matchAll({ type: "window", includeUncontrolled: !0 })];
                        case 2:
                            for (r = i.sent(), s = 0, c = r; s < c.length; s++) l = c[s], u.debug("[Worker Messenger] [SW -> Page] Broadcasting '" + e.toString() + "' to window client " + l.url + "."), l.postMessage({ command: e, payload: t });
                            i.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        }, e.prototype.unicast = function(e, t, n) {
            return i.__awaiter(this, void 0, void 0, function() {
                var s;
                return i.__generator(this, function(i) {
                    switch (i.label) {
                        case 0:
                            if ((s = o.default.getWindowEnv()) !== a.WindowEnvironmentKind.ServiceWorker) return [3, 1];
                            if (!n) throw new r.InvalidArgumentError("windowClient", r.InvalidArgumentReason.Empty);
                            return u.debug("[Worker Messenger] [SW -> Page] Unicasting '" + e.toString() + "' to window client " + n.url + "."), n.postMessage({ command: e, payload: t }), [3, 4];
                        case 1:
                            return [4, this.isWorkerControllingPage()];
                        case 2:
                            return i.sent() || u.debug("[Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), [4, this.waitUntilWorkerControlsPage()];
                        case 3:
                            i.sent(), u.debug("[Worker Messenger] [Page -> SW] Unicasting '" + e.toString() + "' to service worker."), navigator.serviceWorker.controller.postMessage({ command: e, payload: t }), i.label = 4;
                        case 4:
                            return [2]
                    }
                })
            })
        }, e.prototype.listen = function(e) { if (c.default.supportsServiceWorkers()) { o.default.getWindowEnv() === a.WindowEnvironmentKind.ServiceWorker ? (self.addEventListener("message", this.onWorkerMessageReceivedFromPage.bind(this)), u.debug("[Worker Messenger] Service worker is now listening for messages.")) : this.listenForPage(e) } }, e.prototype.listenForPage = function(e) {
            return i.__awaiter(this, void 0, void 0, function() {
                return i.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return e ? [3, 3] : [4, this.isWorkerControllingPage()];
                        case 1:
                            return t.sent() || u.debug("(" + location.origin + ") [Worker Messenger] The page is not controlled by the service worker yet. Waiting...", self.registration), [4, this.waitUntilWorkerControlsPage()];
                        case 2:
                            t.sent(), u.debug("(" + location.origin + ") [Worker Messenger] The page is now controlled by the service worker."), t.label = 3;
                        case 3:
                            return navigator.serviceWorker.addEventListener("message", this.onPageMessageReceivedFromServiceWorker.bind(this)), u.debug("(" + location.origin + ") [Worker Messenger] Page is now listening for messages."), [2]
                    }
                })
            })
        }, e.prototype.onWorkerMessageReceivedFromPage = function(e) { return i.__awaiter(this, void 0, void 0, function() { var t, n, r, o, s, a, c, l, c, d, f, c; return i.__generator(this, function(i) { for (t = e.data, n = this.replies.findListenersForMessage(t.command), r = [], o = [], u.debug("[Worker Messenger] Service worker received message:", e.data), s = 0, a = n; s < a.length; s++) c = a[s], c.onceListenerOnly && r.push(c), o.push(c); for (l = r.length - 1; l >= 0; l--) c = r[l], this.replies.deleteListenerRecord(t.command, c); for (d = 0, f = o; d < f.length; d++) c = f[d], c.callback.apply(null, [t.payload]); return [2] }) }) }, e.prototype.onPageMessageReceivedFromServiceWorker = function(e) { return i.__awaiter(this, void 0, void 0, function() { var t, n, r, o, s, a, c, l, c, d, f, c; return i.__generator(this, function(i) { for (t = e.data, n = this.replies.findListenersForMessage(t.command), r = [], o = [], u.debug("[Worker Messenger] Page received message:", e.data), s = 0, a = n; s < a.length; s++) c = a[s], c.onceListenerOnly && r.push(c), o.push(c); for (l = r.length - 1; l >= 0; l--) c = r[l], this.replies.deleteListenerRecord(t.command, c); for (d = 0, f = o; d < f.length; d++) c = f[d], c.callback.apply(null, [t.payload]); return [2] }) }) }, e.prototype.on = function(e, t) { this.replies.addListener(e, t, !1) }, e.prototype.once = function(e, t) { this.replies.addListener(e, t, !0) }, e.prototype.off = function(e) { e ? this.replies.deleteListenerRecords(e) : this.replies.deleteAllListenerRecords() }, e.prototype.isWorkerControllingPage = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e, t;
                return i.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return e = o.default.getWindowEnv(), e !== a.WindowEnvironmentKind.ServiceWorker ? [3, 1] : [2, !!self.registration.active];
                        case 1:
                            return [4, this.context.serviceWorkerManager.getActiveState()];
                        case 2:
                            return t = n.sent(), [2, t === s.ServiceWorkerActiveState.WorkerA || t === s.ServiceWorkerActiveState.WorkerB]
                    }
                })
            })
        }, e.prototype.waitUntilWorkerControlsPage = function() {
            return i.__awaiter(this, void 0, void 0, function() {
                var e = this;
                return i.__generator(this, function(t) {
                    return [2, new Promise(function(t) {
                        return i.__awaiter(e, void 0, void 0, function() {
                            var e, n = this;
                            return i.__generator(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.isWorkerControllingPage()];
                                    case 1:
                                        return r.sent() ? t() : (e = o.default.getWindowEnv(), e === a.WindowEnvironmentKind.ServiceWorker ? self.addEventListener("activate", function(e) {
                                            return i.__awaiter(n, void 0, void 0, function() {
                                                return i.__generator(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this.isWorkerControllingPage()];
                                                        case 1:
                                                            return e.sent() && t(), [2]
                                                    }
                                                })
                                            })
                                        }) : navigator.serviceWorker.addEventListener("controllerchange", function(e) {
                                            return i.__awaiter(n, void 0, void 0, function() {
                                                return i.__generator(this, function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, this.isWorkerControllingPage()];
                                                        case 1:
                                                            return e.sent() && t(), [2]
                                                    }
                                                })
                                            })
                                        })), [2]
                                }
                            })
                        })
                    })]
                })
            })
        }, e
    }();
    t.WorkerMessenger = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8);
    ! function(e) { e[e.Blocked = 0] = "Blocked", e[e.Dismissed = 1] = "Dismissed", e[e.Default = 2] = "Default" }(i = t.PushPermissionNotGrantedErrorReason || (t.PushPermissionNotGrantedErrorReason = {}));
    var PushPermissionNotGrantedError = function(e) {
        function PushPermissionNotGrantedError(t) {
            var n = this;
            switch (t) {
                case i.Dismissed:
                    n = e.call(this, "The user dismissed the permission prompt.") || this;
                    break;
                case i.Blocked:
                    n = e.call(this, "Notification permissions are blocked.") || this;
                    break;
                case i.Default:
                    n = e.call(this, "Notification permissions have not been granted yet.") || this
            }
            return n
        }
        return r.__extends(PushPermissionNotGrantedError, e), PushPermissionNotGrantedError
    }(o.default);
    t.default = PushPermissionNotGrantedError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e.Development = "Development", e.Staging = "Staging", e.Production = "Production" }(t.BuildEnvironmentKind || (t.BuildEnvironmentKind = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(11),
        r = function() {
            function e() {}
            return e.prototype.serialize = function() { return { appId: this.appId.serialize(), subdomain: this.subdomain, httpUseOneSignalCom: this.httpUseOneSignalCom, cookieSyncEnabled: this.cookieSyncEnabled, safariWebId: this.safariWebId, vapidPublicKey: this.vapidPublicKey, userConfig: this.userConfig } }, e.deserialize = function(t) { var n = new e; return n.appId = i.Uuid.deserialize(t.appId), n.subdomain = t.subdomain, n.httpUseOneSignalCom = t.httpUseOneSignalCom, n.cookieSyncEnabled = t.cookieSyncEnabled, n.safariWebId = t.safariWebId, n.vapidPublicKey = t.vapidPublicKey, n.userConfig = t.userConfig, n }, e
        }();
    t.AppConfig = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(11),
        r = function() {
            function e() {}
            return e.prototype.serialize = function() { return { deviceId: this.deviceId.serialize(), subscriptionToken: this.subscriptionToken, optedOut: this.optedOut } }, e.deserialize = function(t) { var n = new e; return n.deviceId = i.Uuid.deserialize(t.deviceId), n.subscriptionToken = t.subscriptionToken, n.optedOut = t.optedOut, n }, e
        }();
    t.Subscription = r
}, function(e, t, n) {
    var i, r;
    ! function(o) {
        var s = !1;
        if (i = o, void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = r), s = !0, e.exports = o(), s = !0, !s) {
            var a = window.Cookies,
                u = window.Cookies = o();
            u.noConflict = function() { return window.Cookies = a, u }
        }
    }(function() {
        function e() { for (var e = 0, t = {}; e < arguments.length; e++) { var n = arguments[e]; for (var i in n) t[i] = n[i] } return t }

        function t(n) {
            function i(t, r, o) {
                var s;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (o = e({ path: "/" }, i.defaults, o), "number" == typeof o.expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
                        }
                        try { s = JSON.stringify(r), /^[\{\[]/.test(s) && (r = s) } catch (e) {}
                        return r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", r, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                    }
                    t || (s = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, l = 0; l < u.length; l++) {
                        var d = u[l].split("="),
                            f = d.slice(1).join("=");
                        '"' === f.charAt(0) && (f = f.slice(1, -1));
                        try {
                            var g = d[0].replace(c, decodeURIComponent);
                            if (f = n.read ? n.read(f, g) : n(f, g) || f.replace(c, decodeURIComponent), this.json) try { f = JSON.parse(f) } catch (e) {}
                            if (t === g) { s = f; break }
                            t || (s[g] = f)
                        } catch (e) {}
                    }
                    return s
                }
            }
            return i.set = i, i.get = function(e) { return i.call(i, e) }, i.getJSON = function() { return i.apply({ json: !0 }, [].slice.call(arguments)) }, i.defaults = {}, i.remove = function(t, n) { i(t, "", e(n, { expires: -1 })) }, i.withConverter = t, i
        }
        return t(function() {})
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(7),
        s = n(4),
        a = n(3),
        u = n(28),
        c = function(e) {
            function t(t, n, i, r, o, s, a, u, c) { void 0 === s && (s = "shown"), void 0 === a && (a = "active"), void 0 === u && (u = ["opacity", "transform"]); var l = e.call(this, t, n, i, s, u) || this; return l.selector = t, l.showClass = n, l.hideClass = i, l.activeClass = r, l.inactiveClass = o, l.state = s, l.activeState = a, l.targetTransitionEvents = u, l.nestedContentSelector = c, l }
            return i.__extends(t, e), t.prototype.activate = function() {
                var e = this;
                return this.inactive && this.shown ? new Promise(function(n) {
                    if (e.activeState = "activating", s.default.trigger(t.EVENTS.ACTIVATING, e), e.inactiveClass && a.removeCssClass(e.element, e.inactiveClass), e.activeClass && a.addCssClass(e.element, e.activeClass), !e.shown) return r.debug("Ending activate() transition (alternative)."), e.activeState = "active", s.default.trigger(t.EVENTS.ACTIVE, e), n(e);
                    if (0 == e.targetTransitionEvents.length) return n(e);
                    var i = setTimeout(function() { r.debug("Element did not completely activate (state: " + e.state + ", activeState: " + e.activeState + ").") }, e.transitionCheckTimeout);
                    a.once(e.element, "transitionend", function(r, o) { if (r.target === e.element && a.contains(e.targetTransitionEvents, r.propertyName)) return clearTimeout(i), o(), e.activeState = "active", s.default.trigger(t.EVENTS.ACTIVE, e), n(e) }, !0)
                }) : Promise.resolve(this)
            }, t.prototype.inactivate = function() {
                var e = this;
                return this.active ? new Promise(function(n) {
                    if (e.activeState = "inactivating", s.default.trigger(t.EVENTS.INACTIVATING, e), e.activeClass && a.removeCssClass(e.element, e.activeClass), e.inactiveClass && a.addCssClass(e.element, e.inactiveClass), !e.shown) return e.activeState = "inactive", s.default.trigger(t.EVENTS.INACTIVE, e), n(e);
                    if (0 == e.targetTransitionEvents.length) return n(e);
                    var i = setTimeout(function() { r.debug("Element did not completely inactivate (state: " + e.state + ", activeState: " + e.activeState + ").") }, e.transitionCheckTimeout);
                    a.once(e.element, "transitionend", function(r, o) { if (r.target === e.element && a.contains(e.targetTransitionEvents, r.propertyName)) return clearTimeout(i), o(), e.activeState = "inactive", s.default.trigger(t.EVENTS.INACTIVE, e), n(e) }, !0)
                }) : Promise.resolve(this)
            }, t.prototype.waitUntilActive = function() { var e = this; return this.active ? Promise.resolve(this) : new Promise(function(n) { OneSignal.once(t.EVENTS.ACTIVE, function(t) { if (t === e) return n(e) }, !0) }) }, t.prototype.waitUntilInactive = function() { var e = this; return this.inactive ? Promise.resolve(this) : new Promise(function(n) { OneSignal.once(t.EVENTS.INACTIVE, function(t) { if (t === e) return n(e) }, !0) }) }, Object.defineProperty(t, "EVENTS", { get: function() { return o({}, u.default.EVENTS, { ACTIVATING: "activeAnimatedElementActivating", ACTIVE: "activeAnimatedElementActive", INACTIVATING: "activeAnimatedElementInactivating", INACTIVE: "activeAnimatedElementInactive" }) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "activating", { get: function() { return "activating" === this.activeState }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "active", { get: function() { return "active" === this.activeState }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "inactivating", { get: function() { return "inactivating" === this.activeState }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "inactive", { get: function() { return "inactive" === this.activeState }, enumerable: !0, configurable: !0 }), t
        }(u.default);
    t.default = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(3),
        r = n(1),
        o = n(4),
        s = function() {
            function e(e, t, n, i, r, o, s) { void 0 === i && (i = "shown"), void 0 === r && (r = ["opacity", "transform"]), void 0 === s && (s = 500), this.selector = e, this.showClass = t, this.hideClass = n, this.state = i, this.targetTransitionEvents = r, this.nestedContentSelector = o, this.transitionCheckTimeout = s }
            return e.prototype.show = function() {
                var t = this;
                return this.hidden ? new Promise(function(n) {
                    if (t.state = "showing", o.default.trigger(e.EVENTS.SHOWING, t), t.hideClass && i.removeCssClass(t.element, t.hideClass), t.showClass && i.addCssClass(t.element, t.showClass), 0 == t.targetTransitionEvents.length) return n(t);
                    var s = setTimeout(function() { r.debug("Element did not completely show (state: " + t.state + ").") }, t.transitionCheckTimeout);
                    i.once(t.element, "transitionend", function(r, a) { if (r.target === t.element && i.contains(t.targetTransitionEvents, r.propertyName)) return clearTimeout(s), a(), t.state = "shown", o.default.trigger(e.EVENTS.SHOWN, t), n(t) }, !0)
                }) : Promise.resolve(this)
            }, e.prototype.hide = function() {
                var t = this;
                return this.shown ? new Promise(function(n) {
                    if (t.state = "hiding", o.default.trigger(e.EVENTS.HIDING, t), t.showClass && i.removeCssClass(t.element, t.showClass), t.hideClass && i.addCssClass(t.element, t.hideClass), 0 == t.targetTransitionEvents.length) return n(t);
                    i.once(t.element, "transitionend", function(s, a) { var u = setTimeout(function() { r.debug("Element did not completely hide (state: " + t.state + ").") }, t.transitionCheckTimeout); if (s.target === t.element && i.contains(t.targetTransitionEvents, s.propertyName)) return clearTimeout(u), a(), t.state = "hidden", o.default.trigger(e.EVENTS.HIDDEN, t), n(t) }, !0)
                }) : Promise.resolve(this)
            }, e.prototype.waitUntilShown = function() { var t = this; return "shown" === this.state ? Promise.resolve(this) : new Promise(function(n) { OneSignal.once(e.EVENTS.SHOWN, function(e) { if (e === t) return n(t) }, !0) }) }, e.prototype.waitUntilHidden = function() { var t = this; return "hidden" === this.state ? Promise.resolve(this) : new Promise(function(n) { OneSignal.once(e.EVENTS.HIDDEN, function(e) { if (e === t) return n(t) }, !0) }) }, Object.defineProperty(e, "EVENTS", { get: function() { return { SHOWING: "animatedElementShowing", SHOWN: "animatedElementShown", HIDING: "animatedElementHiding", HIDDEN: "animatedElementHidden" } }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "content", { get: function() { return this.nestedContentSelector ? this.element.querySelector(this.nestedContentSelector).innerHTML : this.element.innerHTML }, set: function(e) { this.nestedContentSelector ? this.element.querySelector(this.nestedContentSelector).innerHTML = e : this.element.innerHTML = e }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "element", { get: function() { return document.querySelector(this.selector) }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "showing", { get: function() { return "showing" === this.state }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "shown", { get: function() { return "shown" === this.state }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hiding", { get: function() { return "hiding" === this.state }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "hidden", { get: function() { return "hidden" === this.state }, enumerable: !0, configurable: !0 }), e
        }();
    t.default = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(1),
        s = n(6),
        a = n(14),
        u = n(21),
        c = n(42),
        l = n(25),
        d = n(3),
        f = n(9);
    ! function(e) { e.WorkerA = "Worker A (Main)", e.WorkerB = "Worker B (Updater)", e.ThirdParty = "3rd Party", e.None = "None", e.Bypassed = "Bypassed", e.Indeterminate = "Indeterminate" }(i = t.ServiceWorkerActiveState || (t.ServiceWorkerActiveState = {}));
    var g = function() {
        function e(e, t) { this.context = e, this.config = t }
        return e.prototype.getActiveState = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return "undefined" != typeof OneSignal && OneSignal.subscriptionHelper.isUsingSubscriptionWorkaround() ? [2, i.Indeterminate] : [4, navigator.serviceWorker.getRegistration()];
                        case 1:
                            return (e = n.sent()) ? e.active ? (t = new URL(e.active.scriptURL).pathname, navigator.serviceWorker.controller ? new c.default(t).getFileName() == this.config.workerAPath.getFileName() ? [2, i.WorkerA] : new c.default(t).getFileName() == this.config.workerBPath.getFileName() ? [2, i.WorkerB] : [2, i.ThirdParty] : [2, i.Bypassed]) : [2, i.ThirdParty] : [2, i.None]
                    }
                })
            })
        }, e.prototype.getWorkerVersion = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            return e = n.sent(), [2, new Promise(function(e) { return r.__awaiter(t, void 0, void 0, function() { return r.__generator(this, function(t) { return f.default.isUsingSubscriptionWorkaround() ? e(NaN) : (this.context.workerMessenger.once(u.WorkerMessengerCommand.WorkerVersion, function(t) { e(t) }), this.context.workerMessenger.unicast(u.WorkerMessengerCommand.WorkerVersion)), [2] }) }) })]
                    }
                })
            })
        }, e.prototype.shouldInstallWorker = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e;
                return r.__generator(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            return e = t.sent(), e !== i.WorkerA && e !== i.WorkerB ? [2, !0] : [2, !1]
                    }
                })
            })
        }, e.prototype.subscribeForPushNotifications = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            if ((e = n.sent()) !== i.WorkerA && e !== i.WorkerB) throw new a.InvalidStateError(a.InvalidStateReason.ServiceWorkerNotActivated);
                            return [2, new Promise(function(e) { t.context.workerMessenger.once(u.WorkerMessengerCommand.Subscribe, function(t) { e(l.Subscription.deserialize(t)) }), t.context.workerMessenger.unicast(u.WorkerMessengerCommand.Subscribe, t.context.appConfig.serialize()) })]
                    }
                })
            })
        }, e.prototype.updateWorker = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t, n;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return s.default.supportsServiceWorkers() ? [4, this.getActiveState()] : [2];
                        case 1:
                            e = r.sent(), o.info("[Service Worker Update] Checking service worker version..."), r.label = 2;
                        case 2:
                            return r.trys.push([2, 4, , 5]), [4, d.timeoutPromise(this.getWorkerVersion(), 2e3)];
                        case 3:
                            return t = r.sent(), [3, 5];
                        case 4:
                            return n = r.sent(), o.info("[Service Worker Update] Worker did not reply to version query; assuming older version."), t = 1, [3, 5];
                        case 5:
                            return e !== i.WorkerA && e !== i.WorkerB ? (o.debug("[Service Worker Update] Not updating service worker, current active worker state is " + e + "."), [2]) : (t !== s.default.version() ? (o.info("[Service Worker Update] Updating service worker from v" + t + " --\x3e v" + s.default.version() + "."), this.installWorker()) : o.info("[Service Worker Update] Service worker version is current at v" + t + " (no update required)."), [2])
                    }
                })
            })
        }, e.prototype.installWorker = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t = this;
                return r.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return s.default.supportsServiceWorkers() ? [4, this.getActiveState()] : [2];
                        case 1:
                            return e = n.sent(), [4, this.installAlternatingWorker()];
                        case 2:
                            return n.sent(), [4, new Promise(function(n) {
                                return r.__awaiter(t, void 0, void 0, function() {
                                    var t, i = this;
                                    return r.__generator(this, function(o) {
                                        switch (o.label) {
                                            case 0:
                                                return [4, this.getActiveState()];
                                            case 1:
                                                return t = o.sent(), e !== t ? n() : navigator.serviceWorker.addEventListener("controllerchange", function(t) {
                                                    return r.__awaiter(i, void 0, void 0, function() {
                                                        var t;
                                                        return r.__generator(this, function(i) {
                                                            switch (i.label) {
                                                                case 0:
                                                                    return [4, this.getActiveState()];
                                                                case 1:
                                                                    return t = i.sent(), t !== e && n(), [2]
                                                            }
                                                        })
                                                    })
                                                }), [2]
                                        }
                                    })
                                })
                            })];
                        case 3:
                            return n.sent(), [4, this.getActiveState()];
                        case 4:
                            return n.sent() !== i.WorkerB ? [3, 6] : [4, this.installAlternatingWorker()];
                        case 5:
                            n.sent(), n.label = 6;
                        case 6:
                            return [2]
                    }
                })
            })
        }, e.prototype.installAlternatingWorker = function() {
            return r.__awaiter(this, void 0, void 0, function() {
                var e, t, n, s, u, c;
                return r.__generator(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, this.getActiveState()];
                        case 1:
                            return e = r.sent(), e !== i.ThirdParty ? [3, 4] : [4, navigator.serviceWorker.getRegistration()];
                        case 2:
                            return t = r.sent(), [4, t.unregister()];
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            if (e === i.WorkerA || e === i.ThirdParty || e === i.None) n = this.config.workerBPath.getPathWithoutFileName(), s = this.config.workerBPath.getFileName();
                            else if (e === i.WorkerB) n = this.config.workerAPath.getPathWithoutFileName(), s = this.config.workerAPath.getFileName();
                            else if (e === i.Bypassed) throw new a.InvalidStateError(a.InvalidStateReason.UnsupportedEnvironment);
                            return c = { appId: this.context.appConfig.appId.toString() }, u = n + "/" + s + "?" + d.encodeHashAsUriComponent(c), o.info("[Service Worker Installation] Installing service worker " + u + "."), [4, navigator.serviceWorker.register(u, this.config.registrationOptions)];
                        case 5:
                            return r.sent(), o.debug("[Service Worker Installation] Service worker installed."), [2]
                    }
                })
            })
        }, e
    }();
    t.ServiceWorkerManager = g
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8);
    ! function(e) { e[e.InvalidAppId = 0] = "InvalidAppId", e[e.AppNotConfiguredForWebPush = 1] = "AppNotConfiguredForWebPush", e[e.MissingSubdomain = 2] = "MissingSubdomain", e[e.MultipleInitialization = 3] = "MultipleInitialization", e[e.MissingSafariWebId = 4] = "MissingSafariWebId", e[e.Unknown = 5] = "Unknown" }(i = t.SdkInitErrorKind || (t.SdkInitErrorKind = {}));
    var SdkInitError = function(e) {
        function SdkInitError(t) {
            var n = this;
            switch (t) {
                case i.InvalidAppId:
                    n = e.call(this, "OneSignal: This app ID does match any existing app. Double check your app ID.") || this;
                    break;
                case i.AppNotConfiguredForWebPush:
                    n = e.call(this, "OneSignal: This app ID does not have any web platforms enabled. Double check your app ID, or see step 1 on our setup guide (https://goo.gl/01h7fZ).") || this;
                    break;
                case i.MissingSubdomain:
                    n = e.call(this, "OneSignal: Non-HTTPS pages require a subdomain of OneSignal to be chosen on your dashboard. See step 1.4 on our setup guide (https://goo.gl/xip6JB).") || this;
                    break;
                case i.MultipleInitialization:
                    n = e.call(this, "OneSignal: The OneSignal web SDK can only be initialized once. Extra initializations are ignored. Please remove calls initializing the SDK more than once.") || this;
                    break;
                case i.MissingSafariWebId:
                    n = e.call(this, "OneSignal: Safari browser support on Mac OS X requires the Safari web platform to be enabled. Please see the Safari Support steps in our web setup guide.") || this;
                    break;
                case i.Unknown:
                    n = e.call(this, "OneSignal: An unknown initialization error occurred.") || this
            }
            return n.reason = i[t], n
        }
        return r.__extends(SdkInitError, e), SdkInitError
    }(o.default);
    t.SdkInitError = SdkInitError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(1),
        s = n(7),
        a = n(45),
        u = n(14),
        c = n(46),
        l = n(4),
        d = n(19),
        f = n(32),
        g = n(2),
        p = n(5),
        h = n(72),
        m = n(12),
        v = n(3),
        b = n(15),
        S = n(13),
        w = n(9),
        _ = n(30),
        y = n(17),
        O = n(11),
        E = n(49),
        P = n(33),
        I = function() {
            function e() {}
            return e.storeInitialValues = function() {
                return Promise.all([OneSignal.isPushNotificationsEnabled(), OneSignal.getNotificationPermission(), OneSignal.isOptedOut()]).then(function(e) {
                    var t = e[0],
                        n = e[1],
                        i = e[2];
                    return d.default.put("subscription.optedOut", i), Promise.all([m.default.put("Options", { key: "isPushEnabled", value: t }), m.default.put("Options", { key: "notificationPermission", value: n })])
                })
            }, e.onSdkInitialized = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, s, a, u;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return e.storeInitialValues(), e.installNativePromptPermissionChangedHook(), t = OneSignal.context, [4, OneSignal.getNotificationPermission()];
                            case 1:
                                return i.sent() === f.NotificationPermission.Granted && (OneSignal.__doNotShowWelcomeNotification = !0), n = navigator.serviceWorker && "https:" === window.location.protocol, n ? [4, w.default.hasInsecureParentOrigin()] : [3, 3];
                            case 2:
                                n = !i.sent(), i.label = 3;
                            case 3:
                                return n && navigator.serviceWorker.getRegistration().then(function(e) { e && e.active && S.default.establishServiceWorkerChannel() }).catch(function(e) { 9 === e.code ? "http:" !== location.protocol && g.default.getWindowEnv() !== p.WindowEnvironmentKind.OneSignalProxyFrame || o.debug("Expected error getting service worker registration on " + location.href + ":", e) : o.error("Error getting Service Worker registration on " + location.href + ":", e) }), (S.default.showNotifyButton(), r.safari && !1 === OneSignal.config.userConfig.autoRegister && OneSignal.isPushNotificationsEnabled(function(t) { t && e.sessionInit({ __sdkCall: !0 }) }), w.default.isUsingSubscriptionWorkaround() && t.sessionManager.isFirstPageView()) ? (o.debug("(" + g.default.getWindowEnv().toString() + ") Updating session info for HTTP site."), [4, OneSignal.isPushNotificationsEnabled()]) : [3, 6];
                            case 4:
                                return (s = i.sent()) ? (a = OneSignal.context, [4, m.default.getSubscription()]) : [3, 6];
                            case 5:
                                u = i.sent().deviceId, y.default.updateUserSession(u, new P.PushRegistration), i.label = 6;
                            case 6:
                                return S.default.checkAndDoHttpPermissionRequest(), OneSignal.context.cookieSyncer.install(), [2]
                        }
                    })
                })
            }, e.installNativePromptPermissionChangedHook = function() {!navigator.permissions || r.firefox && Number(r.version) <= 45 || (OneSignal._usingNativePermissionHook = !0, navigator.permissions.query({ name: "notifications" }).then(function(e) { e.onchange = function() { b.default.triggerNotificationPermissionChanged() } })) }, e.saveInitOptions = function() { var e = [];!1 === OneSignal.config.userConfig.persistNotification ? e.push(m.default.put("Options", { key: "persistNotification", value: !1 })) : !0 === OneSignal.config.persistNotification ? e.push(m.default.put("Options", { key: "persistNotification", value: "force" })) : e.push(m.default.put("Options", { key: "persistNotification", value: !0 })); var t = OneSignal.config.userConfig.webhooks; return ["notification.displayed", "notification.clicked", "notification.dismissed"].forEach(function(n) { t && t[n] ? e.push(m.default.put("Options", { key: "webhooks." + n, value: t[n] })) : e.push(m.default.put("Options", { key: "webhooks." + n, value: !1 })) }), t && t.cors ? e.push(m.default.put("Options", { key: "webhooks.cors", value: !0 })) : e.push(m.default.put("Options", { key: "webhooks.cors", value: !1 })), OneSignal.config.userConfig.notificationClickHandlerMatch ? e.push(m.default.put("Options", { key: "notificationClickHandlerMatch", value: OneSignal.config.userConfig.notificationClickHandlerMatch })) : e.push(m.default.put("Options", { key: "notificationClickHandlerMatch", value: "exact" })), OneSignal.config.userConfig.notificationClickHandlerAction ? e.push(m.default.put("Options", { key: "notificationClickHandlerAction", value: OneSignal.config.userConfig.notificationClickHandlerAction })) : e.push(m.default.put("Options", { key: "notificationClickHandlerAction", value: "navigate" })), Promise.all(e) }, e.internalInit = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return o.debug("Called %cinternalInit()", v.getConsoleStyle("code")), (t = OneSignal.context, t.serviceWorkerManager.updateWorker(), t.sessionManager.incrementPageViewCount(), !sessionStorage.getItem("ONE_SIGNAL_SESSION") || w.default.isUsingSubscriptionWorkaround() || "denied" != window.Notification.permission && sessionStorage.getItem("ONE_SIGNAL_NOTIFICATION_PERMISSION") != window.Notification.permission) ? (sessionStorage.setItem("ONE_SIGNAL_NOTIFICATION_PERMISSION", window.Notification.permission), r.safari && !1 === OneSignal.config.userConfig.autoRegister ? (o.debug("On Safari and autoregister is false, skipping sessionInit()."), w.default.isUsingSubscriptionWorkaround() || l.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED), [2]) : !1 !== OneSignal.config.userConfig.autoRegister || OneSignal.config.subdomain ? [3, 2] : (o.debug("Skipping internal init. Not auto-registering and no subdomain."), l.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED), [4, OneSignal.isPushNotificationsEnabled()])) : (l.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED), [2]);
                            case 1:
                                return n = i.sent(), n && !w.default.isUsingSubscriptionWorkaround() && (o.info("Because the user is already subscribed and has enabled notifications, we will re-register their GCM token."), w.default.registerForPush()), [2];
                            case 2:
                                return "visible" !== document.visibilityState ? (v.once(document, "visibilitychange", function(t, n) { "visible" === document.visibilityState && (n(), e.sessionInit({ __sdkCall: !0 })) }, !0), [2]) : (e.sessionInit({ __sdkCall: !0 }), [2])
                        }
                    })
                })
            }, e.initSaveState = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, S.default.getAppId()];
                            case 1:
                                return t = i.sent(), [4, m.default.put("Ids", { type: "appId", id: t.value })];
                            case 2:
                                return i.sent(), n = e || document.title || "Notification", [4, m.default.put("Options", { key: "pageTitle", value: n })];
                            case 3:
                                return i.sent(), o.info("OneSignal: Set pageTitle to be '" + n + "'."), [2]
                        }
                    })
                })
            }, e.sessionInit = function(e) {
                var t = OneSignal.context.appConfig;
                if (o.debug("Called %csessionInit(" + JSON.stringify(e) + ")", v.getConsoleStyle("code")), OneSignal._sessionInitAlreadyRunning) return void o.debug("Returning from sessionInit because it has already been called.");
                OneSignal._sessionInitAlreadyRunning = !0, e.modalPrompt && e.fromRegisterFor ? (OneSignal.subscriptionModalHost = new h.default(t.appId, e), OneSignal.subscriptionModalHost.load()) : w.default.isUsingSubscriptionWorkaround() ? (!0 !== OneSignal.config.userConfig.autoRegister && o.debug("OneSignal: Not automatically showing popover because autoRegister is not specifically true."), S.default.isHttpPromptAlreadyShown() && o.debug("OneSignal: Not automatically showing popover because it was previously shown in the same session."), !0 !== OneSignal.config.userConfig.autoRegister || S.default.isHttpPromptAlreadyShown() || OneSignal.showHttpPrompt().catch(function(e) {
                    if (!(e instanceof u.InvalidStateError && e.reason === u.InvalidStateReason[u.InvalidStateReason.RedundantPermissionMessage] || e instanceof c.default || e instanceof a.default)) throw e;
                    o.debug("[Prompt Not Showing]", e)
                }), OneSignal._sessionInitAlreadyRunning = !1) : e.__sdkCall && S.default.wasHttpsNativePromptDismissed() ? (o.debug("OneSignal: Not automatically showing native HTTPS prompt because the user previously dismissed it."), OneSignal._sessionInitAlreadyRunning = !1) : w.default.registerForPush(), l.default.trigger(OneSignal.EVENTS.SDK_INITIALIZED)
            }, e.ponyfillSafariFetch = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!r.safari || void 0 !== window.fetch) return [3, 4];
                                o.debug("Loading fetch polyfill for Safari.."), t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, (new E.DynamicResourceLoader).loadFetchPolyfill()];
                            case 2:
                                return t.sent(), o.debug("Done loading fetch polyfill."), [3, 4];
                            case 3:
                                return e = t.sent(), o.debug("Error loading fetch polyfill:", e), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.errorIfInitAlreadyCalled = function() { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { if (OneSignal._initCalled) throw new _.SdkInitError(_.SdkInitErrorKind.MultipleInitialization); return OneSignal._initCalled = !0, [2] }) }) }, e.downloadAndMergeAppConfig = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, r, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, y.default.getAppConfig(new O.Uuid(t.appId))];
                            case 1:
                                return n = i.sent(), r = e.getMergedUserServerAppConfig(t, n), [2, r];
                            case 2:
                                if (o = i.sent()) { if (1 === o.code) throw new _.SdkInitError(_.SdkInitErrorKind.InvalidAppId); if (2 === o.code) throw new _.SdkInitError(_.SdkInitErrorKind.AppNotConfiguredForWebPush) }
                                throw o;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.getMergedUserServerAppConfig = function(t, n) { var i = s({}, n); return i.appId = new O.Uuid(t.appId), i.userConfig = s({}, t), i.userConfig.serviceWorkerParam = "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PARAM ? OneSignal.SERVICE_WORKER_PARAM : { scope: "/" }, i.userConfig.serviceWorkerPath = "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_PATH ? OneSignal.SERVICE_WORKER_PATH : "OneSignalSDKWorker.js", i.userConfig.serviceWorkerUpdaterPath = "undefined" != typeof OneSignal && OneSignal.SERVICE_WORKER_UPDATER_PATH ? OneSignal.SERVICE_WORKER_UPDATER_PATH : "OneSignalSDUpdaterKWorker.js", i.userConfig.path = t.path ? t.path : "/", i.subdomain && !e.shouldUseServerConfigSubdomain(i) && delete i.subdomain, i }, e.shouldUseServerConfigSubdomain = function(e) {
                switch (window.location.protocol) {
                    case "https:":
                        return e && e.userConfig && !!e.userConfig.subdomainName;
                    case "http:":
                        return !0;
                    default:
                        return !1
                }
            }, e
        }();
    t.default = I
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i;
    ! function(e) { e.Default = "default", e.Granted = "granted", e.Denied = "denied" }(i || (i = {})), t.NotificationPermission = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(10),
        r = n(6),
        o = n(50),
        s = n(73),
        a = function() {
            function e() { this.language = r.default.getLanguage(), this.timezone = -60 * (new Date).getTimezoneOffset(), this.browserName = i.name, this.browserVersion = NaN !== parseInt(String(i.version)) ? parseInt(String(i.version)) : -1, this.operatingSystem = this.getBrowserOperatingSystem(), this.operatingSystemVersion = String(i.osversion), this.devicePlatform = this.getDevicePlatformKind(), this.deviceModel = navigator.platform, this.sdkVersion = r.default.version().toString() }
            return e.prototype.getDevicePlatformKind = function() {
                var e = i.mobile,
                    t = i.tablet;
                return e ? s.DevicePlatformKind.Mobile : t ? s.DevicePlatformKind.Tablet : s.DevicePlatformKind.Desktop
            }, e.prototype.getBrowserOperatingSystem = function() { return i.mac ? "Mac OS X" : i.windows ? "Microsoft Windows" : i.windowsphone ? "Microsoft Windows Phone" : i.linux ? "Linux" : i.chromeos ? "Google Chrome OS" : i.android ? "Google Android" : i.ios ? "Apple iOS" : i.blackberry ? "Blackberry" : i.firefoxos ? "Mozilla Firefox OS" : i.webos ? "WebOS" : i.tizen ? "Tizen" : i.sailfish ? "Sailfish OS" : "Unknown" }, e.prototype.serialize = function() { var e = { device_type: this.deliveryPlatform, language: this.language, timezone: this.timezone, device_os: this.browserVersion, sdk: this.sdkVersion, notification_types: this.subscriptionState, delivery_platform: this.deliveryPlatform, browser_name: this.browserName, browser_version: this.browserVersion, operating_system: this.operatingSystem, operating_system_version: this.operatingSystemVersion, device_platform: this.devicePlatform, device_model: this.deviceModel }; return this.appId && (e.app_id = this.appId.value), this.subscription && (e.identifier = i.safari ? this.subscription.safariDeviceToken : this.subscription.w3cEndpoint.toString(), e.web_auth = this.subscription.w3cAuth, e.web_p256 = this.subscription.w3cP256dh), e }, e.prototype.deserialize = function(e) { throw new o.default }, e
        }();
    t.PushRegistration = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(7),
        o = n(9),
        s = n(11),
        a = n(35),
        u = n(31),
        c = function() {
            function e(e) { this.options = { appId: new s.Uuid(e.appId), subdomain: e.subdomainName, origin: e.origin, serialize: void 0 } }
            return e.prototype.initialize = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t, n, o = this;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return (e = window.opener || window.parent) == window ? (document.write("<span style='font-size: 14px; color: red; font-family: sans-serif;'>OneSignal: This page cannot be directly opened, and must be opened as a result of a subscription call.</span>"), [2, Promise.resolve()]) : (t = r(this.options), t.appId = t.appId.value, t.origin = t.origin, OneSignal.config = t || {}, [4, u.default.downloadAndMergeAppConfig(t)]);
                            case 1:
                                return n = i.sent(), OneSignal.context = new a.default(n), OneSignal.context.workerMessenger.listen(!0), OneSignal.initialized = !0, this.loadPromise = {}, this.loadPromise.promise = new Promise(function(e, t) { o.loadPromise.resolver = e, o.loadPromise.rejector = t }), this.establishCrossOriginMessaging(), [2, this.loadPromise.promise]
                        }
                    })
                })
            }, e.prototype.establishCrossOriginMessaging = function() {}, e.prototype.dispose = function() { this.messenger.destroy() }, e.prototype.finishInitialization = function() { this.loadPromise.resolver() }, e.prototype.subscribe = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return e = n.sent(), t = opener || parent, e ? t && window.close() : o.default.registerForPush(), [2]
                        }
                    })
                })
            }, e
        }();
    t.default = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(21),
        r = n(29),
        o = n(74),
        s = n(49),
        a = n(79),
        u = n(42),
        c = n(2),
        l = n(80),
        d = function() {
            function e(e) {
                this.appConfig = e, this.cookieSyncer = new a.default(e.cookieSyncEnabled), this.subscriptionManager = new o.SubscriptionManager(this, { safariWebId: e.safariWebId, appId: e.appId, vapidPublicKey: e.vapidPublicKey, onesignalVapidPublicKey: e.onesignalVapidPublicKey });
                var t = { workerAPath: new u.default("/" + c.default.getBuildEnvPrefix() + "OneSignalSDKWorker.js"), workerBPath: new u.default("/" + c.default.getBuildEnvPrefix() + "OneSignalSDKUpdaterWorker.js"), registrationOptions: { scope: "/" } };
                e.userConfig && (e.userConfig.path && (t.workerAPath = new u.default(e.userConfig.path + c.default.getBuildEnvPrefix() + e.userConfig.serviceWorkerPath), t.workerBPath = new u.default(e.userConfig.path + c.default.getBuildEnvPrefix() + e.userConfig.serviceWorkerUpdaterPath)), e.userConfig.serviceWorkerParam && (t.registrationOptions = e.userConfig.serviceWorkerParam)), this.serviceWorkerManager = new r.ServiceWorkerManager(this, t), this.workerMessenger = new i.WorkerMessenger(this), this.dynamicResourceLoader = new s.DynamicResourceLoader, this.sessionManager = new l.SessionManager
            }
            return e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e.None = "None", e.UnitTesting = "Unit Testing" }(t.TestEnvironmentKind || (t.TestEnvironmentKind = {}))
}, function(e, t) {
    var n;
    n = function() { return this }();
    try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) }
    e.exports = n
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() { this._events = {} }
        return e.prototype.on = function(e, t) { return this._events[e] = this._events[e] || [], this._events[e].push(t), this }, e.prototype.once = function(e, t) {
            function n() { i.off(e, n), t.apply(this, arguments) }
            var i = this;
            return n.listener = t, this.on(e, n), this
        }, e.prototype.off = function(e, t) {
            var n = this._events[e];
            if (void 0 !== n) {
                for (var i = 0; i < n.length; i += 1)
                    if (n[i] === t || n[i].listener === t) { n.splice(i, 1); break }
                0 === n.length && this.removeAllListeners(e)
            }
            return this
        }, e.prototype.removeAllListeners = function(e) { try { delete this._events[e] } catch (e) {} return this }, e.prototype.listeners = function(e) { try { return this._events[e] } catch (e) { return } }, e.prototype.emit = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var n = [].slice.call(arguments, 0),
                i = n.shift(),
                r = this._events[i];
            if (void 0 !== r) { r = r.slice(0); for (var o = r.length, s = 0; s < o; s += 1) r[s].apply(this, n) }
            return this
        }, e
    }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(38),
        s = n(3),
        a = function() {
            function e(e) { this.databaseName = e, this.emitter = new o.default }
            return e.prototype.open = function(e) {
                var t = this;
                return new Promise(function(n) {
                    try { var i = indexedDB.open(e, 1) } catch (e) {}
                    i.onerror = t.onDatabaseOpenError, i.onblocked = t.onDatabaseOpenBlocked, i.onupgradeneeded = t.onDatabaseUpgradeNeeded, i.onsuccess = function() { t.database = i.result, t.database.onerror = t.onDatabaseError, t.database.onversionchange = t.onDatabaseVersionChange, n(t.database) }
                })
            }, e.prototype.ensureDatabaseOpen = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.openLock || (this.openLock = this.open(this.databaseName)), [4, this.openLock];
                            case 1:
                                return e.sent(), [2, this.database]
                        }
                    })
                })
            }, e.prototype.onDatabaseOpenError = function(e) {
                e.preventDefault();
                var t = e.target.error;
                s.contains(t.message, "The operation failed for reasons unrelated to the database itself and not covered by any other error code") || s.contains(t.message, "A mutation operation was attempted on a database that did not allow mutations") ? r.warn("OneSignal: IndexedDb web storage is not available on this origin since this profile's IndexedDb schema has been upgraded in a newer version of Firefox. See: https://bugzilla.mozilla.org/show_bug.cgi?id=1236557#c6") : r.warn("OneSignal: Fatal error opening IndexedDb database:", t)
            }, e.prototype.onDatabaseError = function(e) { r.debug("IndexedDb: Generic database error", e.target.errorCode) }, e.prototype.onDatabaseOpenBlocked = function() { r.debug("IndexedDb: Blocked event") }, e.prototype.onDatabaseVersionChange = function(e) { r.debug("IndexedDb: versionchange event") }, e.prototype.onDatabaseUpgradeNeeded = function(e) {
                r.debug("IndexedDb: Database is being rebuilt or upgraded (upgradeneeded event).");
                var t = e.target.result;
                t.createObjectStore("Ids", { keyPath: "type" }), t.createObjectStore("NotificationOpened", { keyPath: "url" }), t.createObjectStore("Options", { keyPath: "key" }), "undefined" != typeof OneSignal && (OneSignal._isNewVisitor = !0)
            }, e.prototype.get = function(e, t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n = this;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.ensureDatabaseOpen()];
                            case 1:
                                return i.sent(), t ? [4, new Promise(function(i, r) {
                                    var o = n.database.transaction(e).objectStore(e).get(t);
                                    o.onsuccess = function() { i(o.result) }, o.onerror = function() { r(o.error) }
                                })] : [3, 3];
                            case 2:
                                return [2, i.sent()];
                            case 3:
                                return [4, new Promise(function(t, i) {
                                    var r = {},
                                        o = n.database.transaction(e).objectStore(e).openCursor();
                                    o.onsuccess = function(e) {
                                        var n = e.target.result;
                                        if (n) {
                                            var i = n.key;
                                            r[i] = n.value, n.continue()
                                        } else t(r)
                                    }, o.onerror = function() { i(o.error) }
                                })];
                            case 4:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.put = function(e, t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n = this;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.ensureDatabaseOpen()];
                            case 1:
                                return i.sent(), [4, new Promise(function(i, o) {
                                    try {
                                        var s = n.database.transaction([e], "readwrite").objectStore(e).put(t);
                                        s.onsuccess = function() { i(t) }, s.onerror = function(e) { r.error("Database PUT Transaction Error:", e), o(e) }
                                    } catch (e) { r.error("Database PUT Error:", e), o(e) }
                                })];
                            case 2:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.prototype.remove = function(e, t) {
                var n = this;
                if (t) var i = "delete";
                else var i = "clear";
                return new Promise(function(o, s) {
                    try {
                        var a = n.database.transaction([e], "readwrite").objectStore(e)[i](t);
                        a.onsuccess = function() { o(t) }, a.onerror = function(e) { r.error("Database REMOVE Transaction Error:", e), s(e) }
                    } catch (e) { r.error("Database REMOVE Error:", e), s(e) }
                })
            }, e
        }();
    t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(3),
        s = n(28),
        a = n(20),
        u = function(e) {
            function t(t) { var n = e.call(this, ".onesignal-bell-launcher-message", "onesignal-bell-launcher-message-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-message-body") || this; return n.bell = t, n.contentType = "", n.queued = [], n }
            return i.__extends(t, e), Object.defineProperty(t, "TIMEOUT", { get: function() { return 2500 }, enumerable: !0, configurable: !0 }), Object.defineProperty(t, "TYPES", { get: function() { return { TIP: "tip", MESSAGE: "message", QUEUED: "queued" } }, enumerable: !0, configurable: !0 }), t.prototype.display = function(e, t, n) { var i = this; return void 0 === n && (n = 0), r.debug("Calling %cdisplay(" + e + ", " + t + ", " + n + ").", o.getConsoleStyle("code")), (this.shown ? this.hide() : o.nothing()).then(function() { i.content = o.decodeHtmlEntities(t), i.contentType = e }).then(function() { return i.show() }).then(function() { return o.delay(n) }).then(function() { return i.hide() }).then(function() { i.content = i.getTipForState(), i.contentType = "tip" }) }, t.prototype.getTipForState = function() { return this.bell.state === a.default.STATES.UNSUBSCRIBED ? this.bell.text["tip.state.unsubscribed"] : this.bell.state === a.default.STATES.SUBSCRIBED ? this.bell.text["tip.state.subscribed"] : this.bell.state === a.default.STATES.BLOCKED ? this.bell.text["tip.state.blocked"] : void 0 }, t.prototype.enqueue = function(e) { var t = this; return this.queued.push(o.decodeHtmlEntities(e)), new Promise(function(e) { t.bell.badge.shown ? t.bell.badge.hide().then(function() { return t.bell.badge.increment() }).then(function() { return t.bell.badge.show() }).then(e) : (t.bell.badge.increment(), t.bell.initialized ? t.bell.badge.show().then(e) : e()) }) }, t.prototype.dequeue = function(e) {
                var t = this,
                    n = this.queued.pop(e);
                return new Promise(function(e) { t.bell.badge.shown ? t.bell.badge.hide().then(function() { return t.bell.badge.decrement() }).then(function(e) { return e > 0 ? t.bell.badge.show() : Promise.resolve(t) }).then(e(n)) : (t.bell.badge.decrement(), e(n)) })
            }, t
        }(s.default);
    t.default = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e[e.HttpPermissionRequest = "HTTP permission request"] = "HttpPermissionRequest", e[e.HttpsPermissionRequest = "HTTPS permission request"] = "HttpsPermissionRequest", e[e.FullscreenHttpPermissionMessage = "fullscreen HTTP permission message"] = "FullscreenHttpPermissionMessage", e[e.FullscreenHttpsPermissionMessage = "fullscreen HTTPS permission message"] = "FullscreenHttpsPermissionMessage", e[e.SlidedownPermissionMessage = "slidedown permission message"] = "SlidedownPermissionMessage", e[e.SubscriptionBell = "subscription bell"] = "SubscriptionBell" }(t.PermissionPromptType || (t.PermissionPromptType = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(18),
        r = function() {
            function e(e) {
                if (!e) throw new i.InvalidArgumentError("path", i.InvalidArgumentReason.Empty);
                this.path = e.trim()
            }
            return e.prototype.getQueryString = function() { var e = this.path.indexOf("?"); return -1 === e ? null : this.path.length > e ? this.path.substring(e + 1) : null }, e.prototype.getWithoutQueryString = function() { return this.path.split(e.QUERY_STRING)[0] }, e.prototype.getFileName = function() { return this.getWithoutQueryString().split("\\").pop().split("/").pop() }, e.prototype.getFileNameWithQuery = function() { return this.path.split("\\").pop().split("/").pop() }, e.prototype.getFullPath = function() { return this.path }, e.prototype.getPathWithoutFileName = function() {
                var e = this.getWithoutQueryString(),
                    t = e.lastIndexOf(this.getFileName()),
                    n = e.substring(0, t);
                return n = n.replace(/[\\\/]$/, "")
            }, e.QUERY_STRING = "?", e
        }();
    t.default = r
}, function(e, t, n) {
    var i, r;
    ! function(o, s, a) { i = a, void 0 !== (r = "function" == typeof i ? i.call(t, n, t, e) : i) && (e.exports = r) }(0, 0, function() {
        "use strict";
        var e = {
            inherit: function(t, n, i) {
                (t.prototype = e.createObject(n.prototype)).constructor = t, (i || void 0 === i) && (t._super = n.prototype)
            },
            createObject: Object.create || function(e) { var t = function() {}; return t.prototype = e, new t },
            mixin: function(t, n) { return e.merge(t.prototype, n) },
            merge: function(e, t) { var n; for (n in t) e[n] = t[n] },
            hasOwn: function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
        };
        return e
    })
}, function(e, t, n) {
    var i;
    ! function(t) {
        "use strict";

        function r() {}

        function o(e, t) {
            for (var n = e.length; n--;)
                if (e[n].listener === t) return n;
            return -1
        }

        function s(e) { return function() { return this[e].apply(this, arguments) } }

        function a(e) { return "function" == typeof e || e instanceof RegExp || !(!e || "object" != typeof e) && a(e.listener) }
        var u = r.prototype,
            c = t.EventEmitter;
        u.getListeners = function(e) { var t, n, i = this._getEvents(); if (e instanceof RegExp) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, u.flattenListeners = function(e) { var t, n = []; for (t = 0; t < e.length; t += 1) n.push(e[t].listener); return n }, u.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, u.addListener = function(e, t) {
            if (!a(t)) throw new TypeError("listener must be a function");
            var n, i = this.getListenersAsObject(e),
                r = "object" == typeof t;
            for (n in i) i.hasOwnProperty(n) && -1 === o(i[n], t) && i[n].push(r ? t : { listener: t, once: !1 });
            return this
        }, u.on = s("addListener"), u.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, u.once = s("addOnceListener"), u.defineEvent = function(e) { return this.getListeners(e), this }, u.defineEvents = function(e) { for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]); return this }, u.removeListener = function(e, t) { var n, i, r = this.getListenersAsObject(e); for (i in r) r.hasOwnProperty(i) && -1 !== (n = o(r[i], t)) && r[i].splice(n, 1); return this }, u.off = s("removeListener"), u.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, u.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, u.manipulateListeners = function(e, t, n) {
            var i, r, o = e ? this.removeListener : this.addListener,
                s = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (i = n.length; i--;) o.call(this, t, n[i]);
            else
                for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
            return this
        }, u.removeEvent = function(e) {
            var t, n = typeof e,
                i = this._getEvents();
            if ("string" === n) delete i[e];
            else if (e instanceof RegExp)
                for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
            else delete this._events;
            return this
        }, u.removeAllListeners = s("removeEvent"), u.emitEvent = function(e, t) {
            var n, i, r, o, s = this.getListenersAsObject(e);
            for (o in s)
                if (s.hasOwnProperty(o))
                    for (n = s[o].slice(0), r = 0; r < n.length; r++) i = n[r], !0 === i.once && this.removeListener(e, i.listener), i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
            return this
        }, u.trigger = s("emitEvent"), u.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, u.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, u._getOnceReturnValue = function() { return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue }, u._getEvents = function() { return this._events || (this._events = {}) }, r.noConflict = function() { return t.EventEmitter = c, r }, void 0 !== (i = function() { return r }.call(t, n, t, e)) && (e.exports = i)
    }(this || {})
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(8),
        AlreadySubscribedError = function(e) {
            function AlreadySubscribedError() { return e.call(this, "This operation can only be performed when the user is not subscribed.") || this }
            return i.__extends(AlreadySubscribedError, e), AlreadySubscribedError
        }(r.default);
    t.default = AlreadySubscribedError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(8),
        PermissionMessageDismissedError = function(e) {
            function PermissionMessageDismissedError() { return e.call(this, "The permission message was previously dismissed.") || this }
            return i.__extends(PermissionMessageDismissedError, e), PermissionMessageDismissedError
        }(r.default);
    t.default = PermissionMessageDismissedError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(4),
        s = n(48),
        a = n(2),
        u = n(5),
        c = n(71),
        l = n(81),
        d = n(82),
        f = n(3),
        g = n(9),
        p = function() {
            function e() {}
            return e.isShowingHttpPermissionRequest = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return g.default.isUsingSubscriptionWorkaround() ? [4, OneSignal.proxyFrameHost.isShowingHttpPermissionRequest()] : [3, 2];
                            case 1:
                                return [2, e.sent()];
                            case 2:
                                return [2, OneSignal._showingHttpPermissionRequest]
                        }
                    })
                })
            }, e.initHttp = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                switch (r.debug("Called %cinitHttp(" + JSON.stringify(e, null, 4) + ")", f.getConsoleStyle("code")), t = a.default.getWindowEnv()) {
                                    case u.WindowEnvironmentKind.OneSignalProxyFrame:
                                        return [3, 1];
                                    case u.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                        return [3, 3];
                                    case u.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                        return [3, 5]
                                }
                                return [3, 6];
                            case 1:
                                return OneSignal.proxyFrame = new c.default(e), [4, OneSignal.proxyFrame.initialize()];
                            case 2:
                                return n.sent(), s.default.ensureBackwardsCompatibility(OneSignal), [3, 7];
                            case 3:
                                return OneSignal.subscriptionPopup = new d.default(e), [4, OneSignal.subscriptionPopup.initialize()];
                            case 4:
                                return n.sent(), s.default.ensureBackwardsCompatibility(OneSignal), o.default.trigger("httpInitialize"), [3, 7];
                            case 5:
                                return OneSignal.subscriptionModal = new l.default(e), OneSignal.subscriptionModal.establishCrossOriginMessaging(), OneSignal.subscriptionModal.initialize(), s.default.ensureBackwardsCompatibility(OneSignal), o.default.trigger("httpInitialize"), [3, 7];
                            case 6:
                                return r.error("Unsupported HTTP initialization branch."), [3, 7];
                            case 7:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.default = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(5),
        r = n(2),
        o = function() {
            function e() {}
            return e.ensureBackwardsCompatibility = function(t) { e.environmentPolyfill(t), e.postmams(t) }, e.environmentPolyfill = function(e) { e.environment = {}, e.environment.getEnv = function() { return "" }, e.environment.isPopup = function() { return r.default.getWindowEnv() === i.WindowEnvironmentKind.OneSignalSubscriptionPopup }, e.environment.isIframe = function() { return r.default.getWindowEnv() === i.WindowEnvironmentKind.OneSignalProxyFrame } }, e.postmams = function(e) {
                function t(e) { e.message = n, e.postMessage = i }
                var n = function() { this.messenger.message.apply(this.messenger, arguments) },
                    i = function() { this.messenger.postMessage.apply(this.messenger, arguments) };
                e.proxyFrame && (e.iframePostmam = e.proxyFrame, t(e.iframePostmam)), e.subscriptionPopup && (e.popupPostmam = e.subscriptionPopup, t(e.popupPostmam)), e.subscriptionModal && (e.modalPostmam = e.subscriptionModal, t(e.modalPostmam))
            }, e
        }();
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(7),
        o = n(2),
        s = n(6),
        a = function() {
            function e() { this.cache = {} }
            return e.prototype.getCache = function() { return r({}, this.cache) }, e.prototype.loadSdkStylesheet = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = o.default.getOneSignalApiUrl().origin, [4, this.loadIfNew(0, new URL(e + "/sdks/OneSignalSDKStyles.css?v=" + s.default.getSdkStylesVersionHash()))];
                            case 1:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e.prototype.loadFetchPolyfill = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.loadIfNew(1, new URL("https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"))];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }, e.prototype.loadIfNew = function(t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return this.cache[n.toString()] || (this.cache[n.toString()] = e.load(t, n)), [4, this.cache[n.toString()]];
                            case 1:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.load = function(e, t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, new Promise(function(n, i) {
                                    switch (e) {
                                        case 1:
                                            var r = document.createElement("script");
                                            r.setAttribute("type", "text/javascript"), r.setAttribute("async", "async"), r.setAttribute("src", t.toString());
                                            break;
                                        case 0:
                                            var r = document.createElement("link");
                                            r.setAttribute("rel", "stylesheet"), r.setAttribute("href", t.toString())
                                    }
                                    r.onerror = i, r.onload = n, document.querySelector("head").appendChild(r)
                                })];
                            case 1:
                                return i.sent(), [2, 0];
                            case 2:
                                return n = i.sent(), [2, 1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e
        }();
    t.DynamicResourceLoader = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(8),
        o = function(e) {
            function t() { return e.call(this, "This code is not implemented yet.") || this }
            return i.__extends(t, e), t
        }(r.default);
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(26),
        o = n(1),
        s = n(2),
        a = n(12),
        u = n(9),
        c = function() {
            function e() {}
            return e.unmarkHttpsNativePromptDismissed = function() { r.remove("onesignal-notification-prompt") ? o.debug("OneSignal: Removed the native notification prompt dismissed cookie.") : o.debug("OneSignal: Cookie not marked.") }, e.markHttpsNativePromptDismissed = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return u.default.isUsingSubscriptionWorkaround() ? [4, new Promise(function(e, t) { OneSignal.proxyFrameHost.message(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, {}, function(n) { n.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE ? e() : t() }) })] : [3, 2];
                            case 1:
                                n.sent(), n.label = 2;
                            case 2:
                                return [4, a.default.get("Options", "promptDismissCount")];
                            case 3:
                                return e = n.sent(), e || (e = 0), u.default.isUsingSubscriptionWorkaround() || (e += 1), t = 3, 2 == e ? t = 7 : e > 2 && (t = 30), o.debug("(" + s.default.getWindowEnv().toString() + ") OneSignal: User dismissed the native notification prompt; reprompt after " + t + " days."), [4, a.default.put("Options", { key: "promptDismissCount", value: e })];
                            case 4:
                                return n.sent(), [2, r.set("onesignal-notification-prompt", "dismissed", { expires: t })]
                        }
                    })
                })
            }, e
        }();
    t.default = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8);
    ! function(e) { e[e.InvalidSafariSetup = 0] = "InvalidSafariSetup", e[e.Blocked = 1] = "Blocked", e[e.Dismissed = 2] = "Dismissed" }(i = t.SubscriptionErrorReason || (t.SubscriptionErrorReason = {}));
    var s = function(e) {
        function t(t) {
            var n = this;
            switch (t) {
                case i.InvalidSafariSetup:
                    n = e.call(this, "The Safari site URL, icon size, or push certificate is invalid, or Safari is in a private session.") || this;
                    break;
                case i.Blocked:
                    n = e.call(this, "Notification permissions are blocked.") || this;
                    break;
                case i.Dismissed:
                    n = e.call(this, "The notification permission prompt was dismissed.") || this
            }
            return n
        }
        return r.__extends(t, e), t
    }(o.default);
    t.default = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(6),
        r = n(3),
        o = n(1),
        s = n(2),
        a = n(5);
    if (i.default.isBrowser())
        if (r.incrementSdkLoadCount(), r.getSdkLoadCount() > 1) o.warn("OneSignal: The web push SDK is included more than once. For optimal performance, please include our SDK only once on your page."), o.debug("OneSignal: Exiting from SDK initialization to prevent double-initialization errors. Occurred " + r.getSdkLoadCount() + " times.");
        else {
            if ("undefined" != typeof OneSignal) var u = OneSignal;
            if (r.isPushNotificationsSupported() ? window.OneSignal = n(69).default : (o.debug("OneSignal: Push notifications are not supported. A stubbed version of the SDK will be initialized."), window.OneSignal = n(89).default), u)
                for (var c = 0; c < u.length; c++) OneSignal.push(u[c])
        }
    else s.default.getWindowEnv() === a.WindowEnvironmentKind.ServiceWorker && (self.OneSignal = n(90).default)
}, function(e, t, n) {
    "use strict";

    function i(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

    function r(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" != typeof t && "function" != typeof t ? e : t }

    function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", { value: !0 });
    var s = function(e) {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            i(this, t);
            var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
            return Object.defineProperty(n, "message", { configurable: !0, enumerable: !1, value: e, writable: !0 }), Object.defineProperty(n, "name", { configurable: !0, enumerable: !1, value: n.constructor.name, writable: !0 }), Error.hasOwnProperty("captureStackTrace") ? (Error.captureStackTrace(n, n.constructor), r(n)) : (Object.defineProperty(n, "stack", { configurable: !0, enumerable: !1, value: new Error(e).stack, writable: !0 }), n)
        }
        return o(t, e), t
    }(function(e) {
        function t() { e.apply(this, arguments) }
        return t.prototype = Object.create(e.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e, t
    }(Error));
    t.default = s, e.exports = t.default
}, function(e, t) { e.exports = function() { throw new Error("define cannot be used indirect") } }, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(8),
        TimeoutError = function(e) {
            function TimeoutError(t) { void 0 === t && (t = "The asynchronous operation has timed out."); var n = e.call(this, t) || this; return n.message = t, n }
            return i.__extends(TimeoutError, e), TimeoutError
        }(r.default);
    t.default = TimeoutError
}, function(e, t) {
    function n() {}

    function i(e, t, i) {
        function o() { a.parentNode && a.parentNode.removeChild(a), window[l] = n, u && clearTimeout(u) }

        function s() { window[l] && o() }
        "function" == typeof t && (i = t, t = {}), t || (t = {});
        var a, u, c = t.prefix || "__jp",
            l = t.name || c + r++,
            d = t.param || "callback",
            f = null != t.timeout ? t.timeout : 6e4,
            g = encodeURIComponent,
            p = document.getElementsByTagName("script")[0] || document.head;
        return f && (u = setTimeout(function() { o(), i && i(new Error("Timeout")) }, f)), window[l] = function(e) { o(), i && i(null, e) }, e += (~e.indexOf("?") ? "&" : "?") + d + "=" + g(l), e = e.replace("?&", "?"), a = document.createElement("script"), a.src = e, p.parentNode.insertBefore(a, p), s
    }
    e.exports = i;
    var r = 0
}, function(e, t, n) {
    "use strict";

    function i(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? "all" : arguments[1];
        (0, o.default)(e);
        var n = s[t];
        return n && n.test(e)
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i;
    var r = n(59),
        o = function(e) { return e && e.__esModule ? e : { default: e } }(r),
        s = { 3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i, 4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, 5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i, all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i };
    e.exports = t.default
}, function(e, t, n) {
    "use strict";

    function i(e) { if ("string" != typeof e) throw new TypeError("This library (validator.js) validates strings only") }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = i, e.exports = t.default
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(8),
        PushNotSupportedError = function(e) {
            function PushNotSupportedError(t) { return e.call(this, "'" + t + "' is not a valid UUID") || this }
            return i.__extends(PushNotSupportedError, e), PushNotSupportedError
        }(r.default);
    t.default = PushNotSupportedError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8);
    ! function(e) { e[e.MissingAppId = 0] = "MissingAppId" }(i = t.OneSignalApiErrorKind || (t.OneSignalApiErrorKind = {}));
    var s = function(e) {
        function t(t) {
            var n = this;
            switch (t) {
                case i.MissingAppId:
                    n = e.call(this, "The API call is missing an app ID.") || this
            }
            return n
        }
        return r.__extends(t, e), t
    }(o.default);
    t.OneSignalApiError = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() {}
        return e
    }();
    t.AppState = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() {}
        return e
    }();
    t.ServiceWorkerState = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(27),
        o = function(e) {
            function t() { return e.call(this, ".onesignal-bell-launcher-badge", "onesignal-bell-launcher-badge-opened", null, "onesignal-bell-launcher-badge-active", null, "hidden") || this }
            return i.__extends(t, e), t.prototype.increment = function() {
                if (!isNaN(this.content)) {
                    var e = +this.content;
                    e += 1, this.content = e.toString()
                }
            }, t.prototype.show = function() { var t = e.prototype.show.call(this); return OneSignal.notifyButton.setCustomColorsIfSpecified(), t }, t.prototype.decrement = function() {
                if (!isNaN(this.content)) {
                    var e = +this.content;
                    e -= 1, this.content = e > 0 ? e.toString() : ""
                }
            }, t
        }(r.default);
    t.default = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(3),
        o = n(4),
        s = n(27),
        a = n(20),
        u = n(19),
        c = n(40),
        l = n(9),
        d = function(e) {
            function t(t) { var n = e.call(this, ".onesignal-bell-launcher-button", null, null, "onesignal-bell-launcher-button-active", null, "shown", "") || this; return n.bell = t, n.events = { mouse: "bell.launcher.button.mouse" }, n.element.addEventListener("touchstart", function() { n.onHovering(), n.onTap() }, { passive: !0 }), n.element.addEventListener("mouseenter", function() { n.onHovering() }), n.element.addEventListener("mouseleave", function() { n.onHovered() }), n.element.addEventListener("touchmove", function() { n.onHovered() }, { passive: !0 }), n.element.addEventListener("mousedown", function() { n.onTap() }), n.element.addEventListener("mouseup", function() { n.onEndTap() }), n.element.addEventListener("click", function() { n.onHovered(), n.onClick() }), n }
            return i.__extends(t, e), t.prototype.onHovering = function() {
                (u.default.isEmpty(this.events.mouse) || "out" === u.default.getLast(this.events.mouse)) && o.default.trigger(a.default.EVENTS.HOVERING), u.default.put(this.events.mouse, "over")
            }, t.prototype.onHovered = function() { u.default.put(this.events.mouse, "out"), o.default.trigger(a.default.EVENTS.HOVERED) }, t.prototype.onTap = function() { this.pulse(), this.activate(), this.bell.badge.activate() }, t.prototype.onEndTap = function() { this.inactivate(), this.bell.badge.inactivate() }, t.prototype.onClick = function() { var e = this; if (o.default.trigger(a.default.EVENTS.BELL_CLICK), o.default.trigger(a.default.EVENTS.LAUNCHER_CLICK), !this.bell.message.shown || this.bell.message.contentType != c.default.TYPES.MESSAGE) { var t = u.default.getLast("subscription.optedOut"); return this.bell.unsubscribed ? t ? this.bell.launcher.activateIfInactive().then(function() { e.bell.showDialogProcedure() }) : (OneSignal.registerForPushNotifications(), this.bell._ignoreSubscriptionState = !0, OneSignal.once(OneSignal.EVENTS.SUBSCRIPTION_CHANGED, function() { e.bell.message.display(c.default.TYPES.MESSAGE, e.bell.text["message.action.subscribed"], c.default.TIMEOUT).then(function() { e.bell._ignoreSubscriptionState = !1, e.bell.launcher.inactivate() }) })) : this.bell.subscribed ? this.bell.launcher.activateIfInactive().then(function() { e.bell.showDialogProcedure() }) : this.bell.blocked && (l.default.isUsingSubscriptionWorkaround() ? OneSignal.registerForPushNotifications() : this.bell.launcher.activateIfInactive().then(function() { e.bell.showDialogProcedure() })), this.bell.message.hide() } }, t.prototype.pulse = function() { r.removeDomElement(".pulse-ring"), r.addDomElement(this.element, "beforeend", '<div class="pulse-ring"></div>'), this.bell.setCustomColorsIfSpecified() }, t
        }(s.default);
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(4),
        s = n(2),
        a = n(3),
        u = n(28),
        c = n(20),
        l = function(e) {
            function t(t) { var n = e.call(this, ".onesignal-bell-launcher-dialog", "onesignal-bell-launcher-dialog-opened", null, "hidden", ["opacity", "transform"], ".onesignal-bell-launcher-dialog-body") || this; return n.bell = t, n.subscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #subscribe-button", n.unsubscribeButtonId = "#onesignal-bell-container .onesignal-bell-launcher #unsubscribe-button", n.notificationIcons = null, n }
            return i.__extends(t, e), t.prototype.getPlatformNotificationIcon = function() { return this.notificationIcons ? r.chrome || r.firefox ? this.notificationIcons.chrome || this.notificationIcons.safari : r.safari ? this.notificationIcons.safari || this.notificationIcons.chrome : void 0 : null }, t.prototype.show = function() { var t = this; return this.updateBellLauncherDialogBody().then(function() { return e.prototype.show.call(t) }) }, Object.defineProperty(t.prototype, "subscribeButtonSelectorId", { get: function() { return "subscribe-button" }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "unsubscribeButtonSelectorId", { get: function() { return "unsubscribe-button" }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "subscribeButton", { get: function() { return this.element.querySelector("#" + this.subscribeButtonSelectorId) }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "unsubscribeButton", { get: function() { return this.element.querySelector("#" + this.unsubscribeButtonSelectorId) }, enumerable: !0, configurable: !0 }), t.prototype.updateBellLauncherDialogBody = function() {
                var e = this;
                return OneSignal.getSubscription().then(function(t) {
                    a.clearDomElementChildren(document.querySelector(e.nestedContentSelector));
                    var n = "Nothing to show.",
                        i = "";
                    if (e.bell.options.showCredit && (i = '<div class="divider"></div><div class="kickback">Powered by <a href="https://onesignal.com" class="kickback" target="_blank">OneSignal</a></div>'), e.bell.state === c.default.STATES.SUBSCRIBED && !0 === t || e.bell.state === c.default.STATES.UNSUBSCRIBED && !1 === t) {
                        var u = "",
                            l = e.getPlatformNotificationIcon();
                        u = l ? '<div class="push-notification-icon"><img src="' + l + '"></div>' : '<div class="push-notification-icon push-notification-icon-default"></div>';
                        var d = "";
                        d = e.bell.state !== c.default.STATES.SUBSCRIBED ? '<button type="button" class="action" id="' + e.subscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.subscribe"] + "</button>" : '<button type="button" class="action" id="' + e.unsubscribeButtonSelectorId + '">' + e.bell.text["dialog.main.button.unsubscribe"] + "</button>", n = "<h1>" + e.bell.text["dialog.main.title"] + '</h1><div class="divider"></div><div class="push-notification">' + u + '<div class="push-notification-text-container"><div class="push-notification-text push-notification-text-short"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div><div class="push-notification-text"></div><div class="push-notification-text push-notification-text-medium"></div></div></div><div class="action-container">' + d + "</div>" + i
                    } else if (e.bell.state === c.default.STATES.BLOCKED) {
                        var l = null;
                        r.chrome ? r.mobile || r.tablet || (l = s.default.getOneSignalApiUrl().origin + "/bell/chrome-unblock.jpg") : r.firefox ? l = s.default.getOneSignalApiUrl().origin + "/bell/firefox-unblock.jpg" : r.safari && (l = s.default.getOneSignalApiUrl().origin + "/bell/safari-unblock.jpg");
                        var f = "";
                        l && (f = '<a href="' + l + '" target="_blank"><img src="' + l + '"></a></div>'), (r.mobile || r.tablet) && r.chrome && (f = "<ol><li>Access <strong>Settings</strong> by tapping the three menu dots <strong>â‹®</strong></li><li>Click <strong>Site settings</strong> under Advanced.</li><li>Click <strong>Notifications</strong>.</li><li>Find and click this entry for this website.</li><li>Click <strong>Notifications</strong> and set it to <strong>Allow</strong>.</li></ol>"), n = "<h1>" + e.bell.text["dialog.blocked.title"] + '</h1><div class="divider"></div><div class="instructions"><p>' + e.bell.text["dialog.blocked.message"] + "</p>" + f + "</div>" + i
                    }
                    a.addDomElement(document.querySelector(e.nestedContentSelector), "beforeend", n), e.subscribeButton && e.subscribeButton.addEventListener("click", function() { OneSignal.__doNotShowWelcomeNotification = !1, o.default.trigger(c.default.EVENTS.SUBSCRIBE_CLICK) }), e.unsubscribeButton && e.unsubscribeButton.addEventListener("click", function() { return o.default.trigger(c.default.EVENTS.UNSUBSCRIBE_CLICK) }), e.bell.setCustomColorsIfSpecified()
                })
            }, t
        }(u.default);
    t.default = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(14),
        s = n(3),
        a = n(27),
        u = function(e) {
            function t(t) { var n = e.call(this, ".onesignal-bell-launcher", "onesignal-bell-launcher-active", null, null, "onesignal-bell-launcher-inactive", "hidden", "active") || this; return n.bell = t, n.wasInactive = !1, n }
            return i.__extends(t, e), t.prototype.resize = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t = this;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!this.element) throw new o.InvalidStateError(o.InvalidStateReason.MissingDomElement);
                                if ("small" === e && s.hasCssClass(this.element, "onesignal-bell-launcher-sm") || "medium" === e && s.hasCssClass(this.element, "onesignal-bell-launcher-md") || "large" === e && s.hasCssClass(this.element, "onesignal-bell-launcher-lg")) return [2, Promise.resolve(this)];
                                if (s.removeCssClass(this.element, "onesignal-bell-launcher-sm"), s.removeCssClass(this.element, "onesignal-bell-launcher-md"), s.removeCssClass(this.element, "onesignal-bell-launcher-lg"), "small" === e) s.addCssClass(this.element, "onesignal-bell-launcher-sm");
                                else if ("medium" === e) s.addCssClass(this.element, "onesignal-bell-launcher-md");
                                else {
                                    if ("large" !== e) throw new Error("Invalid OneSignal bell size " + e);
                                    s.addCssClass(this.element, "onesignal-bell-launcher-lg")
                                }
                                return this.shown ? [3, 1] : [2, this];
                            case 1:
                                return [4, new Promise(function(e) {
                                    if (0 == t.targetTransitionEvents.length) return e(t);
                                    var n = setTimeout(function() { r.debug("Launcher did not completely resize (state: " + t.state + ", activeState: " + t.activeState + ").") }, t.transitionCheckTimeout);
                                    s.once(t.element, "transitionend", function(i, r) { if (i.target === t.element && s.contains(t.targetTransitionEvents, i.propertyName)) return clearTimeout(n), r(), e(t) }, !0)
                                })];
                            case 2:
                                return [2, n.sent()]
                        }
                    })
                })
            }, t.prototype.activateIfInactive = function() { return this.inactive ? (this.wasInactive = !0, this.activate()) : s.nothing() }, t.prototype.inactivateIfWasInactive = function() { return this.wasInactive ? (this.wasInactive = !1, this.inactivate()) : s.nothing() }, t.prototype.clearIfWasInactive = function() { this.wasInactive = !1 }, t.prototype.inactivate = function() { var t = this; return this.bell.message.hide().then(function() { return t.bell.badge.content.length > 0 ? t.bell.badge.hide().then(function() { return Promise.all([e.prototype.inactivate.call(t), t.resize("small")]) }).then(function() { return t.bell.badge.show() }) : Promise.all([e.prototype.inactivate.call(t), t.resize("small")]) }) }, t.prototype.activate = function() { var t = this; return this.bell.badge.content.length > 0 ? this.bell.badge.hide().then(function() { return Promise.all([e.prototype.activate.call(t), t.resize(t.bell.options.size)]) }) : Promise.all([e.prototype.activate.call(this), this.resize(this.bell.options.size)]) }, t
        }(a.default);
    t.default = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(1),
        r = n(7),
        o = n(4),
        s = n(3),
        a = function() {
            function e(e) { this.options = e ? r({}, e) : {}, this.options.modalTitle && "string" == typeof this.options.modalTitle || (this.options.modalTitle = "Thanks for subscribing"), this.options.modalMessage && "string" == typeof this.options.modalMessage || (this.options.modalMessage = "You're now subscribed to notifications. You can unsubscribe at any time."), this.options.modalButtonText && "string" == typeof this.options.modalButtonText || (this.options.modalButtonText = "Close"), this.options.modalTitle = this.options.modalTitle.substring(0, 50), this.options.modalMessage = this.options.modalMessage.substring(0, 90), this.options.modalButtonText = this.options.modalButtonText.substring(0, 35) }
            return Object.defineProperty(e, "EVENTS", { get: function() { return { FINISH_CLICK: "httpModalFinishClick", SHOWN: "httpModalShown", CLOSED: "httpModalClosed" } }, enumerable: !0, configurable: !0 }), e.prototype.create = function() {
                try {
                    this.container && s.removeDomElement("#onesignal-modal-container");
                    var t = '<div id="onesignal-modal-dialog"><div class="modal-exit">&times;</div><div class="modal-body"><div class="modal-body-title">' + this.options.modalTitle + '</div><div class="modal-body-message">' + this.options.modalMessage + '</div><div class="clearfix"></div></div><div class="modal-footer"><button id="onesignal-modal-finish-button" class="primary modal-button">' + this.options.modalButtonText + '</button><div class="clearfix"></div></div></div>';
                    s.addDomElement("body", "beforeend", '<div id="onesignal-modal-container" class="onesignal-modal-container onesignal-reset"></div>'), s.addDomElement(this.container, "beforeend", t), this.container.addEventListener("click", this.onHttpModalFinished.bind(this)), o.default.trigger(e.EVENTS.SHOWN)
                } catch (e) { i.error(e) }
            }, e.prototype.onHttpModalFinished = function(t) { OneSignal.registerForPushNotifications({ httpPermissionRequest: !0 }), o.default.trigger(e.EVENTS.FINISH_CLICK), this.close() }, e.prototype.close = function() { s.addCssClass(this.container, "close-modal"), s.removeDomElement("#onesignal-modal-container"), o.default.trigger(e.EVENTS.CLOSED) }, Object.defineProperty(e.prototype, "container", { get: function() { return document.querySelector("#onesignal-modal-container") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "dialog", { get: function() { return document.querySelector("#onesignal-modal-dialog") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "finishButton", { get: function() { return document.querySelector("#onesignal-modal-finish-button") }, enumerable: !0, configurable: !0 }), e
        }();
    t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(43),
        s = n(26),
        a = n(1),
        u = n(7),
        c = n(44),
        l = n(6),
        d = n(45),
        f = n(18),
        g = n(14),
        p = n(70),
        h = n(46),
        m = n(22),
        v = n(22),
        b = n(30),
        S = n(4),
        w = n(15),
        _ = n(47),
        y = n(31),
        O = n(13),
        E = n(9),
        P = n(51),
        I = n(19),
        C = n(83),
        T = n(48),
        N = n(2),
        M = n(29),
        A = n(35),
        k = n(32),
        R = n(41),
        x = n(5),
        D = n(85),
        W = n(17),
        U = n(86),
        B = n(87),
        L = n(12),
        H = n(39),
        F = n(3),
        j = n(88),
        V = n(33),
        K = function() {
            function e() {}
            return e.setDefaultNotificationUrl = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (!j.ValidatorUtils.isValidUrl(e, { allowNull: !0 })) throw new f.InvalidArgumentError("url", f.InvalidArgumentReason.Malformed);
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), F.logMethodCall("setDefaultNotificationUrl", e), [4, L.default.getAppState()];
                            case 2:
                                return t = n.sent(), t.defaultNotificationUrl = e, [4, L.default.setAppState(t)];
                            case 3:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.setDefaultTitle = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), F.logMethodCall("setDefaultTitle", e), [4, L.default.getAppState()];
                            case 2:
                                return t = n.sent(), t.defaultNotificationTitle = e, [4, L.default.setAppState(t)];
                            case 3:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.syncHashedEmail = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (!e) throw new f.InvalidArgumentError("email", f.InvalidArgumentReason.Empty);
                                if (t = F.prepareEmailForHashing(e), !F.isValidEmail(t)) throw new f.InvalidArgumentError("email", f.InvalidArgumentReason.Malformed);
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("syncHashedEmail", e), [4, L.default.getAppConfig()];
                            case 2:
                                return n = i.sent().appId, [4, L.default.getSubscription()];
                            case 3:
                                if (!(r = i.sent().deviceId) || !r.value) throw new p.NotSubscribedError(p.NotSubscribedReason.NoDeviceId);
                                return [4, W.default.updatePlayer(n, r, { em_m: B.default.md5(t), em_s: B.default.sha1(t), em_s256: B.default.sha256(t) })];
                            case 4:
                                if ((o = i.sent()) && o.success) return [2, !0];
                                throw o
                        }
                    })
                })
            }, e.isPushNotificationsSupported = function() { return F.logMethodCall("isPushNotificationsSupported"), !0 }, e.init = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    function n() {
                        return i.__awaiter(this, void 0, void 0, function() {
                            var t;
                            return i.__generator(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (e.__initAlreadyCalled) return [2];
                                        if (e.__initAlreadyCalled = !0, O.default.fixWordpressManifestIfMisplaced(), e.on(e.EVENTS.NATIVE_PROMPT_PERMISSIONCHANGED, w.default.onNotificationPermissionChange), e.on(e.EVENTS.SUBSCRIPTION_CHANGED, w.default._onSubscriptionChanged), e.on(e.EVENTS.SDK_INITIALIZED, y.default.onSdkInitialized), !E.default.isUsingSubscriptionWorkaround()) return [3, 2];
                                        if (e.appConfig = o, !o.subdomain) throw new b.SdkInitError(b.SdkInitErrorKind.MissingSubdomain);
                                        return t = e, [4, C.default.discoverAltOrigin(o)];
                                    case 1:
                                        t.proxyFrameHost = n.sent(), n.label = 2;
                                    case 2:
                                        return window.addEventListener("focus", function() { O.default.checkAndTriggerNotificationPermissionChanged() }), y.default.initSaveState(document.title).then(function() { return y.default.saveInitOptions() }).then(function() { N.default.getWindowEnv() === x.WindowEnvironmentKind.CustomIframe ? S.default.trigger(e.EVENTS.SDK_INITIALIZED) : y.default.internalInit() }), [2]
                                }
                            })
                        })
                    }
                    var o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return F.logMethodCall("init"), y.default.ponyfillSafariFetch(), y.default.errorIfInitAlreadyCalled(), [4, y.default.downloadAndMergeAppConfig(t)];
                            case 1:
                                return o = i.sent(), (a.debug("OneSignal: Final web app config: %c" + JSON.stringify(o, null, 4), F.getConsoleStyle("code")), e.context = new A.default(o), e.config = e.context.appConfig, e.context.workerMessenger.listen(), r.safari && !e.config.safariWebId) ? (a.warn(new b.SdkInitError(b.SdkInitErrorKind.MissingSafariWebId)), [2]) : ("complete" === document.readyState || "interactive" === document.readyState ? n() : (a.debug("OneSignal: Waiting for DOMContentLoaded or readyStateChange event before continuing initialization..."), window.addEventListener("DOMContentLoaded", function() { n() }), document.onreadystatechange = function() { "complete" !== document.readyState && "interactive" !== document.readyState || n() }), [2])
                        }
                    })
                })
            }, e.showHttpPrompt = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, r, o, s, u;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t || (t = {}), [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (i.sent(), e.__isPopoverShowing) throw new g.InvalidStateError(g.InvalidStateReason.RedundantPermissionMessage, { permissionPromptType: R.PermissionPromptType.SlidedownPermissionMessage });
                                return [4, e.getNotificationPermission()];
                            case 2:
                                return n = i.sent(), [4, e.isPushNotificationsEnabled()];
                            case 3:
                                return r = i.sent(), [4, e.getSubscription()];
                            case 4:
                                return o = i.sent(), [4, O.default.wasHttpsNativePromptDismissed()];
                            case 5:
                                if ((s = i.sent()) && !t.force) throw new h.default;
                                if (n === k.NotificationPermission.Denied) throw new m.default(v.PushPermissionNotGrantedErrorReason.Blocked);
                                if (r) throw new d.default;
                                if (!o) throw new p.NotSubscribedError(p.NotSubscribedReason.OptedOut);
                                if (O.default.isUsingHttpPermissionRequest() && (!t.__sdkCall || !t.__useHttpPermissionRequestStyle)) throw a.debug("The slidedown permission message cannot be used while the HTTP perm. req. is enabled."), new g.InvalidStateError(g.InvalidStateReason.RedundantPermissionMessage, { permissionPromptType: R.PermissionPromptType.HttpPermissionRequest });
                                return O.default.markHttpPopoverShown(), [4, e.context.dynamicResourceLoader.loadSdkStylesheet()];
                            case 6:
                                return 0 !== (u = i.sent()) ? (a.debug("Not showing slidedown permission message because styles failed to load."), [2]) : (e.popover = new U.default(e.config.userConfig.promptOptions), e.popover.create(), a.debug("Showing the HTTP popover."), e.notifyButton && e.notifyButton.options.enable && "hidden" !== e.notifyButton.launcher.state && e.notifyButton.launcher.waitUntilShown().then(function() { e.notifyButton.launcher.hide() }), e.once(U.default.EVENTS.SHOWN, function() { e.__isPopoverShowing = !0 }), e.once(U.default.EVENTS.CLOSED, function() { e.__isPopoverShowing = !1, e.notifyButton && e.notifyButton.options.enable && e.notifyButton.launcher.show() }), e.once(U.default.EVENTS.ALLOW_CLICK, function() { e.popover.close(), a.debug("Setting flag to not show the popover to the user again."), P.default.markHttpsNativePromptDismissed(), t.__sdkCall && t.__useHttpPermissionRequestStyle ? e.registerForPushNotifications({ httpPermissionRequest: !0 }) : e.registerForPushNotifications({ autoAccept: !0 }) }), e.once(U.default.EVENTS.CANCEL_CLICK, function() { a.debug("Setting flag to not show the popover to the user again."), P.default.markHttpsNativePromptDismissed() }), [2])
                        }
                    })
                })
            }, e.registerForPushNotifications = function(t) {
                function n() { E.default.isUsingSubscriptionWorkaround() ? (e.subscriptionPopupHost = new D.default(e.proxyFrameHost.url, t), e.subscriptionPopupHost.load()) : (t || (t = {}), t.fromRegisterFor = !0, y.default.sessionInit(t)) }
                if (e.initialized) return n();
                e.once(e.EVENTS.SDK_INITIALIZED, function() { return n() })
            }, e.showHttpPermissionRequest = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return a.debug("Called showHttpPermissionRequest()."), [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (i.sent(), r.safari) throw new g.InvalidStateError(g.InvalidStateReason.UnsupportedEnvironment);
                                if (e.__isPopoverShowing) throw new g.InvalidStateError(g.InvalidStateReason.RedundantPermissionMessage, { permissionPromptType: R.PermissionPromptType.SlidedownPermissionMessage });
                                if (e._showingHttpPermissionRequest) throw new g.InvalidStateError(g.InvalidStateReason.RedundantPermissionMessage, { permissionPromptType: R.PermissionPromptType.HttpPermissionRequest });
                                return E.default.isUsingSubscriptionWorkaround() ? [4, new Promise(function(n, i) {
                                    e.proxyFrameHost.message(e.POSTMAM_COMMANDS.SHOW_HTTP_PERMISSION_REQUEST, t, function(e) {
                                        var t = e.data,
                                            r = t.status,
                                            o = t.result;
                                        "resolve" === r ? n(o) : i(o)
                                    })
                                })] : [3, 3];
                            case 2:
                                return [2, i.sent()];
                            case 3:
                                if (!O.default.isUsingHttpPermissionRequest()) return a.debug("Not showing HTTP permission request because its not enabled. Check init option httpPermissionRequest."), [2];
                                if (O.default.wasHttpsNativePromptDismissed()) {
                                    if (!0 === t._sdkCall) return a.debug("The HTTP perm. req. permission was dismissed, so we are not showing the request."), [2];
                                    a.debug("The HTTP perm. req. was previously dismissed, but this call was made explicitly.")
                                }
                                return [4, e.getNotificationPermission()];
                            case 4:
                                return (n = i.sent()) !== k.NotificationPermission.Default ? [3, 6] : (a.debug("(" + N.default.getWindowEnv().toString() + ") Showing HTTP permission request."), e._showingHttpPermissionRequest = !0, [4, new Promise(function(t) { window.Notification.requestPermission(function(n) { e._showingHttpPermissionRequest = !1, t(n), a.debug("HTTP Permission Request Result:", n), "default" === n && (P.default.markHttpsNativePromptDismissed(), e.proxyFrame.message(e.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, { permission: n, forceUpdatePermission: !0 })) }), S.default.trigger(e.EVENTS.PERMISSION_PROMPT_DISPLAYED) })]);
                            case 5:
                                return [2, i.sent()];
                            case 6:
                                return o = n === k.NotificationPermission.Granted, o ? [4, e.isPushNotificationsEnabled()] : [3, 8];
                            case 7:
                                o = !i.sent(), i.label = 8;
                            case 8:
                                o && e.proxyFrame.message(e.POSTMAM_COMMANDS.HTTP_PERMISSION_REQUEST_RESUBSCRIBE), i.label = 9;
                            case 9:
                                return [2]
                        }
                    })
                })
            }, e.getNotificationPermission = function(t) { return F.awaitOneSignalInitAndSupported().then(function() { var t = null; return e.config && (t = e.config.safariWebId), O.default.getNotificationPermission(t) }).then(function(e) { return t && t(e), e }) }, e.getTags = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("getTags", e), [4, L.default.getAppConfig()];
                            case 2:
                                return t = i.sent().appId, [4, L.default.getSubscription()];
                            case 3:
                                return n = i.sent().deviceId, n && n.value ? [4, W.default.getPlayer(t, n)] : (a.info(new p.NotSubscribedError(p.NotSubscribedReason.NoDeviceId)), [2, null]);
                            case 4:
                                return r = i.sent().tags, F.executeCallback(e, r), [2, r]
                        }
                    })
                })
            }, e.sendTag = function(t, n, r) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return o = {}, o[t] = n, [4, e.sendTags(o, r)];
                            case 1:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.sendTags = function(t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, o, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), (F.logMethodCall("sendTags", t, n), t && 0 !== Object.keys(t).length) ? (Object.keys(t).forEach(function(e) {!1 === t[e] && (t[e] = "false") }), [4, L.default.getAppConfig()]) : (a.info(new f.InvalidArgumentError("tags", f.InvalidArgumentReason.Empty)), [2, null]);
                            case 2:
                                return r = i.sent().appId, [4, L.default.getSubscription()];
                            case 3:
                                return o = i.sent().deviceId, o && o.value ? [3, 5] : [4, F.awaitSdkEvent(e.EVENTS.REGISTERED)];
                            case 4:
                                i.sent(), i.label = 5;
                            case 5:
                                return [4, L.default.getSubscription()];
                            case 6:
                                return s = i.sent().deviceId, [4, W.default.updatePlayer(r, s, { tags: t })];
                            case 7:
                                return i.sent(), F.executeCallback(n, t), [2, t]
                        }
                    })
                })
            }, e.deleteTag = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, e.deleteTags([t])];
                            case 1:
                                return [2, n.sent()]
                        }
                    })
                })
            }, e.deleteTags = function(t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var r, o, s, u, c, l;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (i.sent(), F.logMethodCall("deleteTags", t, n), !j.ValidatorUtils.isValidArray(t)) throw new f.InvalidArgumentError("tags", f.InvalidArgumentReason.Malformed);
                                for (0 === t.length && a.info(new f.InvalidArgumentError("tags", f.InvalidArgumentReason.Empty)), r = {}, o = 0, s = t; o < s.length; o++) u = s[o], r[u] = "";
                                return [4, e.sendTags(r)];
                            case 2:
                                return c = i.sent(), l = Object.keys(c), F.executeCallback(n, l), [2, l]
                        }
                    })
                })
            }, e.addListenerForNotificationOpened = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), F.logMethodCall("addListenerForNotificationOpened", t), e.once(e.EVENTS.NOTIFICATION_CLICKED, function(e) { F.executeCallback(t, e) }), w.default.fireStoredNotificationClicks(e.config.pageUrl || e.config.userConfig.pageUrl), [2]
                        }
                    })
                })
            }, e.getIdsAvailable = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("getIdsAvailable", e), [4, L.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = t.deviceId, r = t.subscriptionToken, o = { userId: n.value, registrationId: r }, F.executeCallback(e, o), [2, o]
                        }
                    })
                })
            }, e.isPushNotificationsEnabled = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, r, o, s, a, u, c, d, f, g, p;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("isPushNotificationsEnabled", t), [4, E.default.hasInsecureParentOrigin()];
                            case 2:
                                return n = i.sent(), [4, L.default.getSubscription()];
                            case 3:
                                return r = i.sent(), o = r.deviceId, s = r.subscriptionToken, a = r.optedOut, [4, e.getNotificationPermission()];
                            case 4:
                                return u = i.sent(), c = !1, !l.default.supportsServiceWorkers() || E.default.isUsingSubscriptionWorkaround() || N.default.getWindowEnv() === x.WindowEnvironmentKind.OneSignalProxyFrame || n ? [3, 9] : [4, e.context.serviceWorkerManager.getActiveState()];
                            case 5:
                                return d = i.sent(), f = d === M.ServiceWorkerActiveState.WorkerA || d === M.ServiceWorkerActiveState.WorkerB, c = !(!o || !s || u !== k.NotificationPermission.Granted || a || !f), [4, navigator.serviceWorker.getRegistration()];
                            case 6:
                                return g = i.sent(), g ? [4, g.pushManager.getSubscription()] : [3, 8];
                            case 7:
                                p = i.sent(), p || (c = !1), i.label = 8;
                            case 8:
                                return [3, 10];
                            case 9:
                                c = !(!o || !s || u !== k.NotificationPermission.Granted || a), i.label = 10;
                            case 10:
                                return F.executeCallback(t, c), [2, c]
                        }
                    })
                })
            }, e.setSubscription = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("setSubscription", e), [4, L.default.getAppConfig()];
                            case 2:
                                return t = i.sent(), n = t.appId, [4, L.default.getSubscription()];
                            case 3:
                                if (r = i.sent(), o = r.deviceId, !t.appId) throw new g.InvalidStateError(g.InvalidStateReason.MissingAppId);
                                if (!j.ValidatorUtils.isValidBoolean(e)) throw new f.InvalidArgumentError("newSubscription", f.InvalidArgumentReason.Malformed);
                                return o && o.value ? (r.optedOut = !e, [4, W.default.updatePlayer(n, o, { notification_types: O.default.getNotificationTypeFromOptIn(e) })]) : (a.info(new p.NotSubscribedError(p.NotSubscribedReason.NoDeviceId)), [2]);
                            case 4:
                                return i.sent(), [4, L.default.setSubscription(r)];
                            case 5:
                                return i.sent(), w.default.onInternalSubscriptionSet(r.optedOut), w.default.checkAndTriggerSubscriptionChanged(), [2]
                        }
                    })
                })
            }, e.isOptedOut = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return n.sent(), F.logMethodCall("isOptedOut", e), [4, L.default.getSubscription()];
                            case 2:
                                return t = n.sent().optedOut, F.executeCallback(e, t), [2, t]
                        }
                    })
                })
            }, e.optOut = function(t, n) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                if (i.sent(), F.logMethodCall("optOut", t, n), !j.ValidatorUtils.isValidBoolean(t)) throw new f.InvalidArgumentError("doOptOut", f.InvalidArgumentReason.Malformed);
                                return [4, e.setSubscription(!t)];
                            case 2:
                                return i.sent(), F.executeCallback(n), [2]
                        }
                    })
                })
            }, e.getUserId = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("getUserId", e), [4, L.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = t.deviceId, F.executeCallback(e, n.value), [2, n.value]
                        }
                    })
                })
            }, e.getRegistrationId = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("getRegistrationId", e), [4, L.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = t.subscriptionToken, F.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.getSubscription = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("getSubscription", e), [4, L.default.getSubscription()];
                            case 2:
                                return t = i.sent(), n = !t.optedOut, F.executeCallback(e, n), [2, n]
                        }
                    })
                })
            }, e.sendSelfNotification = function(e, t, n, r, o, s) {
                return void 0 === e && (e = "OneSignal Test Message"), void 0 === t && (t = "This is an example notification."), void 0 === n && (n = new URL(location.href).origin + "?_osp=do_not_open"), i.__awaiter(this, void 0, void 0, function() {
                    var a, u;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, F.awaitOneSignalInitAndSupported()];
                            case 1:
                                return i.sent(), F.logMethodCall("sendSelfNotification", e, t, n, r, o, s), [4, L.default.getAppConfig()];
                            case 2:
                                return a = i.sent(), [4, L.default.getSubscription()];
                            case 3:
                                if (u = i.sent(), !a.appId) throw new g.InvalidStateError(g.InvalidStateReason.MissingAppId);
                                if (!u.deviceId) throw new p.NotSubscribedError(p.NotSubscribedReason.NoDeviceId);
                                if (!j.ValidatorUtils.isValidUrl(n)) throw new f.InvalidArgumentError("url", f.InvalidArgumentReason.Malformed);
                                if (!j.ValidatorUtils.isValidUrl(r, { allowEmpty: !0, requireHttps: !0 })) throw new f.InvalidArgumentError("icon", f.InvalidArgumentReason.Malformed);
                                return [4, W.default.sendNotification(a.appId, [u.deviceId], { en: e }, { en: t }, n, r, o, s)];
                            case 4:
                                return [2, i.sent()]
                        }
                    })
                })
            }, e.push = function(t) {
                if ("function" == typeof t) t();
                else { e[t.shift()].apply(null, t) }
            }, e.on = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t] }, e.off = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t] }, e.once = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t] }, e.VERSION = l.default.version(), e._VERSION = l.default.version(), e.sdkEnvironment = N.default, e._notificationOpenedCallbacks = [], e._idsAvailable_callback = [], e._defaultLaunchURL = null, e.config = null, e.__isPopoverShowing = !1, e._sessionInitAlreadyRunning = !1, e._isNotificationEnabledCallback = [], e._subscriptionSet = !0, e.modalUrl = null, e._windowWidth = 650, e._windowHeight = 568, e._isNewVisitor = !1, e._channel = null, e.cookie = s, e.initialized = !1, e.notifyButton = null, e.store = I.default, e.environment = l.default, e.database = L.default, e.event = S.default, e.browser = r, e.popover = null, e.log = a, e.api = W.default, e.indexedDb = H.default, e.mainHelper = O.default, e.subscriptionHelper = E.default, e.httpHelper = _.default, e.eventHelper = w.default, e.initHelper = y.default, e.testHelper = P.default, e.objectAssign = u, e.appConfig = null, e.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js", e.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js", e.SERVICE_WORKER_PARAM = { scope: "/" }, e._LOGGING = !1, e.LOGGING = !1, e._usingNativePermissionHook = !1, e._initCalled = !1, e.__initAlreadyCalled = !1, e._showingHttpPermissionRequest = !1, e.checkAndWipeUserSubscription = function() {}, e.crypto = B.default, e.PushRegistration = V.PushRegistration, e.notificationPermission = k.NotificationPermission, e._initHttp = _.default.initHttp, e._initPopup = function() { return e.subscriptionPopup.subscribe() }, e.POSTMAM_COMMANDS = { CONNECTED: "connect", REMOTE_NOTIFICATION_PERMISSION: "postmam.remoteNotificationPermission", REMOTE_DATABASE_GET: "postmam.remoteDatabaseGet", REMOTE_DATABASE_PUT: "postmam.remoteDatabasePut", REMOTE_DATABASE_REMOVE: "postmam.remoteDatabaseRemove", REMOTE_OPERATION_COMPLETE: "postman.operationComplete", REMOTE_RETRIGGER_EVENT: "postmam.remoteRetriggerEvent", MODAL_LOADED: "postmam.modalPrompt.loaded", MODAL_PROMPT_ACCEPTED: "postmam.modalPrompt.accepted", MODAL_PROMPT_REJECTED: "postmam.modalPrompt.canceled", POPUP_LOADED: "postmam.popup.loaded", POPUP_ACCEPTED: "postmam.popup.accepted", POPUP_REJECTED: "postmam.popup.canceled", POPUP_CLOSING: "postman.popup.closing", REMOTE_NOTIFICATION_PERMISSION_CHANGED: "postmam.remoteNotificationPermissionChanged", IFRAME_POPUP_INITIALIZE: "postmam.iframePopupInitialize", UNSUBSCRIBE_FROM_PUSH: "postmam.unsubscribeFromPush", SET_SESSION_COUNT: "postmam.setSessionCount", REQUEST_HOST_URL: "postmam.requestHostUrl", SHOW_HTTP_PERMISSION_REQUEST: "postmam.showHttpPermissionRequest", IS_SHOWING_HTTP_PERMISSION_REQUEST: "postmam.isShowingHttpPermissionRequest", WINDOW_TIMEOUT: "postmam.windowTimeout", FINISH_REMOTE_REGISTRATION: "postmam.finishRemoteRegistration", FINISH_REMOTE_REGISTRATION_IN_PROGRESS: "postmam.finishRemoteRegistrationInProgress", POPUP_BEGIN_MESSAGEPORT_COMMS: "postmam.beginMessagePortComms", SERVICEWORKER_COMMAND_REDIRECT: "postmam.command.redirect", HTTP_PERMISSION_REQUEST_RESUBSCRIBE: "postmam.httpPermissionRequestResubscribe", MARK_PROMPT_DISMISSED: "postmam.markPromptDismissed", IS_SUBSCRIBED: "postmam.isSubscribed", UNSUBSCRIBE_PROXY_FRAME: "postman.unsubscribeProxyFrame", GET_EVENT_LISTENER_COUNT: "postmam.getEventListenerCount" }, e.EVENTS = { CUSTOM_PROMPT_CLICKED: "customPromptClick", NATIVE_PROMPT_PERMISSIONCHANGED: "notificationPermissionChange", SUBSCRIPTION_CHANGED: "subscriptionChange", WELCOME_NOTIFICATION_SENT: "sendWelcomeNotification", NOTIFICATION_DISPLAYED: "notificationDisplay", NOTIFICATION_DISMISSED: "notificationDismiss", NOTIFICATION_CLICKED: "notificationClick", SDK_INITIALIZED: "initialize", REGISTERED: "register", POPUP_CLOSING: "popupClose", PERMISSION_PROMPT_DISPLAYED: "permissionPromptDisplay", TEST_INIT_OPTION_DISABLED: "testInitOptionDisabled", TEST_WOULD_DISPLAY: "testWouldDisplay", POPUP_WINDOW_TIMEOUT: "popupWindowTimeout" }, e.NOTIFICATION_TYPES = { SUBSCRIBED: 1, UNSUBSCRIBED: -2 }, e
        }();
    t.default = K, Object.defineProperty(K, "LOGGING", { get: function() { return K._LOGGING }, set: function(e) { e ? (a.setDefaultLevel(a.levels.TRACE), K._LOGGING = !0) : (a.setDefaultLevel(a.levels.WARN), K._LOGGING = !1) }, enumerable: !0, configurable: !0 }), o.merge(K, new c), K.LOGGING ? a.setDefaultLevel(a.levels.TRACE) : a.setDefaultLevel(a.levels.WARN), T.default.ensureBackwardsCompatibility(K), a.info("%cOneSignal Web SDK loaded (version " + K._VERSION + ", " + N.default.getWindowEnv().toString() + " environment).", F.getConsoleStyle("bold")), a.debug("Current Page URL: " + ("undefined" == typeof location ? "NodeJS" : location.href)), a.debug("Browser Environment: " + r.name + " " + r.version)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i, r = n(0),
        o = n(8);
    ! function(e) { e[e.Unknown = 0] = "Unknown", e[e.NoDeviceId = 1] = "NoDeviceId", e[e.OptedOut = 2] = "OptedOut" }(i = t.NotSubscribedReason || (t.NotSubscribedReason = {}));
    var NotSubscribedError = function(e) {
        function NotSubscribedError(t) {
            var n = this;
            switch (t) {
                case i.Unknown || i.NoDeviceId:
                    n = e.call(this, "This operation can only be performed after the user is subscribed.") || this;
                    break;
                case i.OptedOut:
                    n = e.call(this, "The user has manually opted out of receiving of notifications. This operation can only be performed after the user is fully resubscribed.") || this
            }
            return n.reason = i[t], n
        }
        return r.__extends(NotSubscribedError, e), NotSubscribedError
    }(o.default);
    t.NotSubscribedError = NotSubscribedError
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(7),
        s = n(14),
        a = n(4),
        u = n(47),
        c = n(31),
        l = n(13),
        d = n(51),
        f = n(2),
        g = n(16),
        p = n(12),
        h = n(3),
        m = n(34),
        v = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return i.__extends(t, e), t.prototype.initialize = function() { var t = e.prototype.initialize.call(this); return a.default.trigger("httpInitialize"), t }, t.prototype.establishCrossOriginMessaging = function() { this.messenger && this.messenger.destroy(), this.messenger = new g.default(window, this.options.origin, this.options.origin), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, this.onProxyFrameInitializing.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION, this.onRemoteNotificationPermission.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_GET, this.onRemoteDatabaseGet.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_PUT, this.onRemoteDatabasePut.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_DATABASE_REMOVE, this.onRemoteDatabaseRemove.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_FROM_PUSH, this.onUnsubscribeFromPush.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SHOW_HTTP_PERMISSION_REQUEST, this.onShowHttpPermissionRequest.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SHOWING_HTTP_PERMISSION_REQUEST, this.onIsShowingHttpPermissionRequest.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.MARK_PROMPT_DISMISSED, this.onMarkPromptDismissed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, this.onIsSubscribed.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, this.onUnsubscribeProxyFrame.bind(this)), this.messenger.listen() }, t.prototype.retriggerRemoteEvent = function(e, t) { this.messenger.message(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, { eventName: e, eventData: t }) }, t.prototype.onMessengerConnect = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return r.debug("(" + f.default.getWindowEnv().toString() + ") Successfully established cross-origin communication."), this.finishInitialization(), [2, !1] }) }) }, t.prototype.onProxyFrameInitializing = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return r.info("(" + f.default.getWindowEnv().toString() + ") The iFrame has just received initOptions from the host page!"), OneSignal.config = o(e.data.hostInitOptions, OneSignal.config, { pageUrl: e.data.pageUrl, pageTitle: e.data.pageTitle }), c.default.installNativePromptPermissionChangedHook(), [4, p.default.get("Options", "defaultUrl")];
                            case 1:
                                return t = n.sent(), t ? [3, 3] : [4, p.default.put("Options", { key: "defaultUrl", value: new URL(OneSignal.config.pageUrl).origin })];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [4, p.default.put("Options", { key: "lastKnownHostUrl", value: OneSignal.config.pageUrl })];
                            case 4:
                                return n.sent(), [4, c.default.initSaveState(OneSignal.config.pageTitle)];
                            case 5:
                                return n.sent(), [4, c.default.storeInitialValues()];
                            case 6:
                                return n.sent(), [4, c.default.saveInitOptions()];
                            case 7:
                                if (n.sent(), navigator.serviceWorker && "https:" === window.location.protocol) try { l.default.establishServiceWorkerChannel() } catch (e) { r.error("Error interacting with Service Worker inside an HTTP-hosted iFrame:", e) }
                                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2]
                        }
                    })
                })
            }, t.prototype.onRemoteNotificationPermission = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.getNotificationPermission()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onRemoteDatabaseGet = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o, s, a, u, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                for (t = e.data, n = [], r = 0, o = t; r < o.length; r++) s = o[r], a = s.table, u = s.key, n.push(p.default.get(a, u));
                                return [4, Promise.all(n)];
                            case 1:
                                return c = i.sent(), e.reply(c), [2, !1]
                        }
                    })
                })
            }, t.prototype.onRemoteDatabasePut = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o, s, a, u;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                for (t = e.data, n = [], r = 0, o = t; r < o.length; r++) s = o[r], a = s.table, u = s.keypath, n.push(p.default.put(a, u));
                                return [4, Promise.all(n)];
                            case 1:
                                return i.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onRemoteDatabaseRemove = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, o, s, a, u;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                for (t = e.data, n = [], r = 0, o = t; r < o.length; r++) s = o[r], a = s.table, u = s.keypath, n.push(p.default.remove(a, u));
                                return [4, Promise.all(n)];
                            case 1:
                                return i.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t.prototype.onUnsubscribeFromPush = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                r.debug("(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push."), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, h.unsubscribeFromPush()];
                            case 2:
                                return n.sent(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [3, 4];
                            case 3:
                                return t = n.sent(), r.debug("Failed to unsubscribe from push remotely:", t), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.onShowHttpPermissionRequest = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, o;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                r.debug(f.default.getWindowEnv().toString() + " Calling showHttpPermissionRequest() inside the iFrame, proxied from host."), t = {}, e.data && (t = e.data), r.debug(f.default.getWindowEnv().toString() + " HTTP permission request showing, message data:", e), i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]), [4, OneSignal.showHttpPermissionRequest(t)];
                            case 2:
                                return n = i.sent(), e.reply({ status: "resolve", result: n }), [3, 4];
                            case 3:
                                return o = i.sent(), o && o.reason === s.InvalidStateReason[s.InvalidStateReason.PushPermissionAlreadyGranted] || e.reply({ status: "reject", result: o }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.onIsShowingHttpPermissionRequest = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, u.default.isShowingHttpPermissionRequest()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onMarkPromptDismissed = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(t) { return r.debug("(Reposted from iFrame -> Host) Marking prompt as dismissed."), d.default.markHttpsNativePromptDismissed(), e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1] }) }) }, t.prototype.onIsSubscribed = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return t = n.sent(), e.reply(t), [2, !1]
                        }
                    })
                })
            }, t.prototype.onUnsubscribeProxyFrame = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return t = n.sent(), t ? [4, OneSignal.setSubscription(!1)] : [3, 4];
                            case 2:
                                return n.sent(), [4, OneSignal.database.rebuild()];
                            case 3:
                                n.sent(), n.label = 4;
                            case 4:
                                return e.reply(OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE), [2, !1]
                        }
                    })
                })
            }, t
        }(m.default);
    t.default = v
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(4),
        s = n(13),
        a = n(9),
        u = n(2),
        c = n(16),
        l = function() {
            function e(e, t) { this.appId = e, this.registrationOptions = t }
            return e.prototype.load = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, OneSignal.isPushNotificationsEnabled()];
                            case 1:
                                return e = n.sent(), [4, OneSignal.getNotificationPermission()];
                            case 2:
                                return t = n.sent(), this.url = u.default.getOneSignalApiUrl(), this.url.pathname = "webPushModal", this.url.search = s.default.getPromptOptionsQueryString() + "&id=" + this.appId.value + "&httpsPrompt=true&pushEnabled=" + e + "&permissionBlocked=" + ("denied" === t) + "&promptType=modal", r.info("Loading iFrame for HTTPS subscription modal at " + this.url.toString()), this.modal = this.createHiddenSubscriptionDomModal(this.url.toString()), this.establishCrossOriginMessaging(), [2]
                        }
                    })
                })
            }, e.prototype.createHiddenSubscriptionDomModal = function(e) {
                var t = document.createElement("div");
                t.setAttribute("id", "OneSignal-iframe-modal"), t.setAttribute("style", "display:none !important"), t.innerHTML = '<div id="notif-permission" style="background: rgba(0, 0, 0, 0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 3000000000; display: flex; align-items: center; justify-content: center;"></div>', document.body.appendChild(t);
                var n = document.createElement("style");
                n.innerHTML = "@media (max-width: 560px) { .OneSignal-permission-iframe { width: 100%; height: 100%;} }", document.getElementsByTagName("head")[0].appendChild(n);
                var i = document.createElement("iframe");
                return i.className = "OneSignal-permission-iframe", i.setAttribute("frameborder", "0"), i.width = OneSignal._windowWidth.toString(), i.height = OneSignal._windowHeight.toString(), i.src = e, document.getElementById("notif-permission").appendChild(i), i
            }, e.prototype.removeFrame = function() {
                var e = document.querySelector("#OneSignal-iframe-modal");
                e && e.remove()
            }, e.prototype.showSubscriptionDomModal = function() { document.getElementById("OneSignal-iframe-modal").setAttribute("style", "") }, e.prototype.establishCrossOriginMessaging = function() { this.messenger = new c.default(this.modal, this.url.origin, this.url.origin), this.messenger.startPostMessageReceive(), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_LOADED, this.onModalLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_ACCEPTED, this.onModalAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.MODAL_PROMPT_REJECTED, this.onModalRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onModalClosing.bind(this)) }, e.prototype.onModalLoaded = function(e) { this.showSubscriptionDomModal(), o.default.trigger("modalLoaded") }, e.prototype.onModalAccepted = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return r.debug("User accepted the HTTPS modal prompt.", location.origin), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), s.default.triggerCustomPromptClicked("granted"), r.debug("Calling setSubscription(true)"), [4, a.default.registerForPush()];
                            case 1:
                                return e.sent(), [4, OneSignal.setSubscription(!0)];
                            case 2:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.onModalRejected = function(e) { r.debug("User rejected the HTTPS modal prompt."), OneSignal._sessionInitAlreadyRunning = !1, this.dispose(), s.default.triggerCustomPromptClicked("denied") }, e.prototype.onModalClosing = function(e) { r.info("Detected modal is closing."), this.dispose() }, e.prototype.dispose = function() { this.messenger && this.messenger.destroy(), this.removeFrame() }, e.prototype.message = function() { this.messenger.message.apply(this.messenger, arguments) }, e
        }();
    t.default = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop" }(t.DevicePlatformKind || (t.DevicePlatformKind = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(1),
        s = n(14),
        a = n(22),
        u = n(22),
        c = n(30),
        l = n(52),
        d = n(52),
        f = n(4),
        g = n(15),
        p = n(75),
        h = n(32),
        m = n(33),
        v = n(76),
        b = n(77),
        S = n(5),
        w = n(17),
        _ = n(12),
        y = n(2),
        O = n(25),
        E = n(50),
        P = n(78),
        I = function() {
            function e(e, t) { this.context = e, this.config = t }
            return e.prototype.isSafari = function() { return r.safari && void 0 !== window.safari && void 0 !== window.safari.pushNotification }, e.prototype.subscribe = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                switch (e = y.default.getWindowEnv()) {
                                    case S.WindowEnvironmentKind.CustomIframe:
                                    case S.WindowEnvironmentKind.Unknown:
                                    case S.WindowEnvironmentKind.OneSignalSubscriptionModal:
                                    case S.WindowEnvironmentKind.OneSignalSubscriptionPopup:
                                    case S.WindowEnvironmentKind.OneSignalProxyFrame:
                                        throw new s.InvalidStateError(s.InvalidStateReason.UnsupportedEnvironment)
                                }
                                switch (n = e) {
                                    case S.WindowEnvironmentKind.ServiceWorker:
                                        return [3, 1];
                                    case S.WindowEnvironmentKind.Host:
                                        return [3, 3]
                                }
                                return [3, 9];
                            case 1:
                                return [4, this.subscribeFcmFromWorker()];
                            case 2:
                                return t = i.sent(), [3, 9];
                            case 3:
                                return [4, OneSignal.getNotificationPermission()];
                            case 4:
                                if (i.sent() === h.NotificationPermission.Denied) throw new a.default(u.PushPermissionNotGrantedErrorReason.Blocked);
                                return this.isSafari() ? [4, this.subscribeSafari()] : [3, 6];
                            case 5:
                                return t = i.sent(), g.default.triggerNotificationPermissionChanged(), [3, 8];
                            case 6:
                                return [4, this.subscribeFcmFromPage()];
                            case 7:
                                t = i.sent(), i.label = 8;
                            case 8:
                                return [3, 9];
                            case 9:
                                return [2, this.registerSubscriptionWithOneSignal(t)]
                        }
                    })
                })
            }, e.prototype.subscribePartially = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    return i.__generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, this.subscribeFcmFromPage()];
                            case 1:
                                return [2, e.sent()]
                        }
                    })
                })
            }, e.prototype.requestPresubscribeNotificationPermission = function() { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(t) { return [2, e.requestNotificationPermission()] }) }) }, e.prototype.unsubscribe = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (0 !== e) return [3, 1];
                                throw new E.default;
                            case 1:
                                return 1 !== e ? [3, 7] : y.default.getWindowEnv() !== S.WindowEnvironmentKind.ServiceWorker ? [3, 5] : [4, _.default.getSubscription()];
                            case 2:
                                return t = n.sent().deviceId, [4, w.default.updatePlayer(this.context.appConfig.appId, t, { notification_types: b.SubscriptionStateKind.MutedByApi })];
                            case 3:
                                return n.sent(), [4, _.default.put("Options", { key: "optedOut", value: !0 })];
                            case 4:
                                return n.sent(), [3, 6];
                            case 5:
                                throw new E.default;
                            case 6:
                                return [3, 8];
                            case 7:
                                throw new E.default;
                            case 8:
                                return [2]
                        }
                    })
                })
            }, e.requestNotificationPermission = function() { return new Promise(function(e) { return window.Notification.requestPermission(e) }) }, e.prototype.registerSubscriptionWithOneSignal = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, s, a, u;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t = new m.PushRegistration, t.appId = this.config.appId, this.isSafari() ? t.deliveryPlatform = p.DeliveryPlatformKind.Safari : r.firefox ? t.deliveryPlatform = p.DeliveryPlatformKind.Firefox : t.deliveryPlatform = p.DeliveryPlatformKind.ChromeLike, t.subscriptionState = b.SubscriptionStateKind.Subscribed, e = v.RawPushSubscription.deserialize(e), t.subscription = e, [4, this.isAlreadyRegisteredWithOneSignal()];
                            case 1:
                                return i.sent() ? [4, _.default.getSubscription()] : [3, 6];
                            case 2:
                                return s = i.sent().deviceId, e.isNewSubscription() ? [4, w.default.updateUserSession(s, t)] : [3, 4];
                            case 3:
                                return n = i.sent(), o.info("Updated the subscriber's OneSignal session:", t), [3, 5];
                            case 4:
                                n = s, o.debug("The existing push subscription was resubscribed, but not registering with OneSignal because the new subscription is identical."), i.label = 5;
                            case 5:
                                return [3, 8];
                            case 6:
                                return [4, w.default.createUser(t)];
                            case 7:
                                a = i.sent(), n = a, o.info("Subscribed to web push and registered with OneSignal:", t), i.label = 8;
                            case 8:
                                return y.default.getWindowEnv() !== S.WindowEnvironmentKind.ServiceWorker && f.default.trigger(OneSignal.EVENTS.REGISTERED), u = new O.Subscription, u.deviceId = n, u.optedOut = !1, this.isSafari() ? u.subscriptionToken = e.safariDeviceToken : u.subscriptionToken = e.w3cEndpoint.toString(), [4, _.default.setSubscription(u)];
                            case 9:
                                return i.sent(), [2, u]
                        }
                    })
                })
            }, e.prototype.isAlreadyRegisteredWithOneSignal = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, _.default.getSubscription()];
                            case 1:
                                return e = t.sent().deviceId, [2, !!e.value]
                        }
                    })
                })
            }, e.prototype.subscribeSafariPromptPermission = function() { var e = this; return new Promise(function(t) { window.safari.pushNotification.requestPermission(y.default.getOneSignalApiUrl().toString() + "/safari", e.config.safariWebId, { app_id: e.config.appId.value }, function(e) { t(e.deviceToken ? e.deviceToken.toLowerCase() : null) }) }) }, e.prototype.subscribeSafari = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t, n;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                if (e = new v.RawPushSubscription, !this.config.safariWebId) throw new c.SdkInitError(c.SdkInitErrorKind.MissingSafariWebId);
                                return t = window.safari.pushNotification.permission(this.config.safariWebId).deviceToken, e.existingSafariDeviceToken = t, [4, this.subscribeSafariPromptPermission()];
                            case 1:
                                if (!(n = i.sent())) throw new l.default(d.SubscriptionErrorReason.InvalidSafariSetup);
                                return e.setFromSafariSubscription(n), [2, e]
                        }
                    })
                })
            }, e.prototype.subscribeFcmFromPage = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e, t;
                    return i.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return y.default.getWindowEnv() === S.WindowEnvironmentKind.ServiceWorker || window.Notification.permission !== h.NotificationPermission.Default ? [3, 2] : (f.default.trigger(OneSignal.EVENTS.PERMISSION_PROMPT_DISPLAYED), [4, this.requestPresubscribeNotificationPermission()]);
                            case 1:
                                switch (e = n.sent(), e === h.NotificationPermission.Default && g.default.triggerNotificationPermissionChanged(!0), e) {
                                    case h.NotificationPermission.Default:
                                        throw o.debug("Exiting subscription and not registering worker because the permission was dismissed."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new a.default(u.PushPermissionNotGrantedErrorReason.Dismissed);
                                    case h.NotificationPermission.Denied:
                                        throw o.debug("Exiting subscription and not registering worker because the permission was blocked."), OneSignal._sessionInitAlreadyRunning = !1, OneSignal._isRegisteringForPush = !1, new a.default(u.PushPermissionNotGrantedErrorReason.Blocked)
                                }
                                n.label = 2;
                            case 2:
                                return [4, this.context.serviceWorkerManager.shouldInstallWorker()];
                            case 3:
                                return n.sent() ? [4, this.context.serviceWorkerManager.installWorker()] : [3, 5];
                            case 4:
                                n.sent(), n.label = 5;
                            case 5:
                                return o.debug("Waiting for the service worker to activate..."), [4, navigator.serviceWorker.ready];
                            case 6:
                                return t = n.sent(), o.debug("Service worker is ready to continue subscribing."), [4, this.subscribeFcmVapidOrLegacyKey(t)];
                            case 7:
                                return [2, n.sent()]
                        }
                    })
                })
            }, e.prototype.subscribeFcmFromWorker = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return i.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (!self.registration.active) throw new s.InvalidStateError(s.InvalidStateReason.ServiceWorkerNotActivated);
                                return [4, self.registration.pushManager.permissionState({ userVisibleOnly: !0 })];
                            case 1:
                                if ("denied" === (e = t.sent())) throw OneSignal._sessionInitAlreadyRunning = !1, new a.default(u.PushPermissionNotGrantedErrorReason.Blocked);
                                if ("prompt" === e) throw OneSignal._sessionInitAlreadyRunning = !1, new a.default(u.PushPermissionNotGrantedErrorReason.Default);
                                return [4, this.subscribeFcmVapidOrLegacyKey(self.registration)];
                            case 2:
                                return [2, t.sent()]
                        }
                    })
                })
            }, e.prototype.getVapidKeyForBrowser = function() { var e = void 0; return e = r.firefox ? this.config.onesignalVapidPublicKey : this.config.vapidPublicKey, e ? P.base64ToUint8Array(e).buffer : void 0 }, e.prototype.subscribeFcmVapidOrLegacyKey = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, r, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return t = { userVisibleOnly: !0, applicationServerKey: this.getVapidKeyForBrowser() ? this.getVapidKeyForBrowser() : void 0 }, [4, e.pushManager.getSubscription()];
                            case 1:
                                return (r = i.sent()) && r.options ? (o.debug("[Subscription Manager] An existing push subscription exists and options is not null. Using existing options to resubscribe."), t = r.options, [3, 4]) : [3, 2];
                            case 2:
                                return !r || r.options ? [3, 4] : (o.debug("[Subscription Manager] An existing push subscription exists and options is null. Unsubscribing from push first now."), [4, r.unsubscribe()]);
                            case 3:
                                i.sent(), i.label = 4;
                            case 4:
                                return o.debug("[Subscription Manager] Subscribing to web push with these options:", t), [4, e.pushManager.subscribe(t)];
                            case 5:
                                return n = i.sent(), s = new v.RawPushSubscription, s.setFromW3cSubscription(n), r && (s.existingW3cPushSubscription = new v.RawPushSubscription, s.existingW3cPushSubscription.setFromW3cSubscription(r)), [2, s]
                        }
                    })
                })
            }, e
        }();
    t.SubscriptionManager = I
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e[e.ChromeLike = 5] = "ChromeLike", e[e.Safari = 7] = "Safari", e[e.Firefox = 8] = "Firefox" }(t.DeliveryPlatformKind || (t.DeliveryPlatformKind = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() {}
        return e.prototype.isNewSubscription = function() { return this.existingW3cPushSubscription ? this.existingW3cPushSubscription.w3cEndpoint.toString() !== this.w3cEndpoint.toString() || this.existingW3cPushSubscription.w3cP256dh !== this.w3cP256dh || this.existingW3cPushSubscription.w3cAuth !== this.w3cAuth : !this.existingSafariDeviceToken || this.existingSafariDeviceToken !== this.safariDeviceToken }, e.prototype.setFromW3cSubscription = function(e) {
            if (e && (this.w3cEndpoint = new URL(e.endpoint), e.getKey)) {
                var t = null;
                try { t = e.getKey("p256dh") } catch (e) {}
                var n = null;
                try { n = e.getKey("auth") } catch (e) {}
                if (t) {
                    var i = btoa(String.fromCharCode.apply(null, new Uint8Array(t)));
                    this.w3cP256dh = i
                }
                if (n) {
                    var r = btoa(String.fromCharCode.apply(null, new Uint8Array(n)));
                    this.w3cAuth = r
                }
            }
        }, e.prototype.setFromSafariSubscription = function(e) { this.safariDeviceToken = e }, e.prototype.serialize = function() { return { w3cEndpoint: this.w3cEndpoint.toString(), w3cP256dh: this.w3cP256dh, w3cAuth: this.w3cAuth, safariDeviceToken: this.safariDeviceToken, existingPushSubscription: this.existingW3cPushSubscription ? this.existingW3cPushSubscription.serialize() : null, existingSafariDeviceToken: this.existingSafariDeviceToken } }, e.deserialize = function(t) { var n = new e; try { n.w3cEndpoint = new URL(t.w3cEndpoint) } catch (e) {} return n.w3cP256dh = t.w3cP256dh, n.w3cAuth = t.w3cAuth, n.existingW3cPushSubscription = t.existingPushSubscription ? e.deserialize(t.existingPushSubscription) : null, n.safariDeviceToken = t.safariDeviceToken, n.existingSafariDeviceToken = t.existingSafariDeviceToken, n }, e
    }();
    t.RawPushSubscription = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    ! function(e) { e[e.Subscribed = 1] = "Subscribed", e[e.MutedByApi = -2] = "MutedByApi", e[e.MutedByUser = -3] = "MutedByUser" }(t.SubscriptionStateKind || (t.SubscriptionStateKind = {}))
}, function(e, t, n) {
    "use strict";

    function i(e) { for (var t = "=".repeat((4 - e.length % 4) % 4), n = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), i = atob(n), r = new Uint8Array(i.length), o = 0; o < i.length; ++o) r[o] = i.charCodeAt(o); return r }

    function r(e) { for (var t, n, i, r, o, s = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = new Uint8Array(e), c = u.byteLength, l = c % 3, d = c - l, f = 0; f < d; f += 3) o = u[f] << 16 | u[f + 1] << 8 | u[f + 2], t = (16515072 & o) >> 18, n = (258048 & o) >> 12, i = (4032 & o) >> 6, r = 63 & o, s += a[t] + a[n] + a[i] + a[r]; return 1 == l ? (o = u[d], t = (252 & o) >> 2, n = (3 & o) << 4, s += a[t] + a[n] + "==") : 2 == l && (o = u[d] << 8 | u[d + 1], t = (64512 & o) >> 10, n = (1008 & o) >> 4, i = (15 & o) << 2, s += a[t] + a[n] + a[i] + "="), s }
    Object.defineProperty(t, "__esModule", { value: !0 }), t.base64ToUint8Array = i, t.arrayBufferToBase64 = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(1),
        r = function() {
            function e(e) { this.isFeatureEnabled = e }
            return Object.defineProperty(e, "SYNC_URL", { get: function() { return "https://rc.rlcdn.com/463096.gif?n=5" }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "DOM_ID", { get: function() { return "onesignal-cookie-sync" }, enumerable: !0, configurable: !0 }), e.prototype.getElement = function() { return document.getElementById(e.DOM_ID) }, e.prototype.uninstall = function() { this.getElement() && this.getElement().remove() }, e.prototype.install = function() {
                if (!this.isFeatureEnabled) return void i.debug("Cookie sync feature is disabled.");
                this.uninstall();
                var t = document.createElement("img");
                t.setAttribute("id", e.DOM_ID), t.setAttribute("border", "0"), t.setAttribute("hspace", "0"), t.setAttribute("vspace", "0"), t.setAttribute("width", "1"), t.setAttribute("height", "1"), t.setAttribute("src", e.SYNC_URL), document.querySelector("body").appendChild(t), i.debug("Enabled cookie sync feature.")
            }, e
        }();
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(1),
        r = n(2),
        o = n(5),
        s = function() {
            function e() {}
            return e.prototype.getPageViewCount = function() {
                try {
                    var t = sessionStorage.getItem(e.SESSION_STORAGE_KEY_NAME),
                        n = parseInt(t);
                    return isNaN(n) ? 0 : n
                } catch (e) { return 0 }
            }, e.prototype.setPageViewCount = function(t) { try { sessionStorage.setItem(e.SESSION_STORAGE_KEY_NAME, t.toString()), r.default.getWindowEnv() === o.WindowEnvironmentKind.OneSignalSubscriptionPopup && OneSignal.subscriptionPopup && OneSignal.subscriptionPopup.message(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT) } catch (e) {} }, e.prototype.incrementPageViewCount = function() {
                if (!this.incrementedPageViewCount) {
                    var e = this.getPageViewCount() + 1;
                    this.setPageViewCount(e), i.debug("Incremented page view count to " + e + "."), this.incrementedPageViewCount = !0
                }
            }, e.prototype.simulatePageNavigationOrRefresh = function() { this.incrementedPageViewCount = !1 }, e.prototype.isFirstPageView = function() { return 1 === this.getPageViewCount() }, e.SESSION_STORAGE_KEY_NAME = "onesignal-pageview-count", e
        }();
    t.SessionManager = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(16),
        o = n(34),
        s = function(e) {
            function t(t) { return e.call(this, t) || this }
            return i.__extends(t, e), t.prototype.establishCrossOriginMessaging = function() { this.messenger && this.messenger.destroy(), this.messenger = new r.default(window.parent, this.options.origin, this.options.origin) }, t
        }(o.default);
    t.default = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(2),
        s = n(16),
        a = n(34),
        u = function(e) {
            function t(t) { return e.call(this, t) || this }
            return i.__extends(t, e), t.prototype.establishCrossOriginMessaging = function() { this.messenger = new s.default(window.opener, this.options.origin, this.options.origin), this.messenger.once(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnected.bind(this)), this.messenger.postMessage(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, null), this.messenger.listen() }, t.prototype.onMessengerConnected = function(e) { r.debug("(" + o.default.getWindowEnv().toString() + ") The host page is now ready to receive commands from the HTTP popup."), this.finishInitialization() }, t
        }(a.default);
    t.default = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(23),
        o = n(84),
        s = n(3),
        a = n(2),
        u = function() {
            function e() {}
            return e.discoverAltOrigin = function(t) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var n, r, a, u, c, l, d, f, g, p, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                n = e.getOneSignalProxyIframeUrls(t), r = [], u = 0, c = n, i.label = 1;
                            case 1:
                                return u < c.length ? (l = c[u], d = new o.default(l), [4, d.load()]) : [3, 4];
                            case 2:
                                i.sent(), r.push(d), i.label = 3;
                            case 3:
                                return u++, [3, 1];
                            case 4:
                                return [4, e.removeDuplicatedAltOriginSubscription(r)];
                            case 5:
                                return (f = i.sent()) ? (a = f[0], [3, 10]) : [3, 6];
                            case 6:
                                g = 0, p = r, i.label = 7;
                            case 7:
                                return g < p.length ? (d = p[g], [4, d.isSubscribed()]) : [3, 10];
                            case 8:
                                if (i.sent()) a = d;
                                else {
                                    if (!s.contains(d.url.host, ".os.tc")) return d.dispose(), [3, 9];
                                    a ? d.dispose() : a = d
                                }
                                i.label = 9;
                            case 9:
                                return g++, [3, 7];
                            case 10:
                                return [2, a]
                        }
                    })
                })
            }, e.removeDuplicatedAltOriginSubscription = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, o, u, c, c, l, d;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = [], n = 0, o = e, i.label = 1;
                            case 1:
                                return n < o.length ? (u = o[n], [4, u.isSubscribed()]) : [3, 4];
                            case 2:
                                i.sent() && t.push(u), i.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return t.length < 2 ? [2, null] : (a.default.getBuildEnv() == r.BuildEnvironmentKind.Development ? c = ".localhost:3001" : a.default.getBuildEnv() == r.BuildEnvironmentKind.Production && (c = ".onesignal.com"), l = t.find(function(e) { return s.contains(e.url.host, c) }), l ? [3, 5] : [2, null]);
                            case 5:
                                return [4, l.unsubscribeFromPush()];
                            case 6:
                                return i.sent(), l.dispose(), d = e.indexOf(l), e.splice(d, 1), [2, e]
                        }
                    })
                })
            }, e.getCanonicalSubscriptionUrls = function(e, t) {
                void 0 === t && (t = a.default.getBuildEnv());
                var n = [];
                if (e.httpUseOneSignalCom) {
                    var i = a.default.getOneSignalApiUrl(t);
                    i.host = [e.subdomain, i.host].join("."), n.push(i)
                }
                var r = a.default.getOneSignalApiUrl(t);
                r.host = [e.subdomain, "os.tc"].join("."), n.push(r);
                for (var o = 0, s = n; o < s.length; o++) { s[o].pathname = "" }
                return n
            }, e.getOneSignalProxyIframeUrls = function(t) { for (var n = e.getCanonicalSubscriptionUrls(t), i = 0, r = n; i < r.length; i++) { r[i].pathname = "webPushIframe" } return n }, e.getOneSignalSubscriptionPopupUrls = function(t) { for (var n = e.getCanonicalSubscriptionUrls(t), i = 0, r = n; i < r.length; i++) { r[i].pathname = "subscribe" } return n }, e
        }();
    t.default = u
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(6),
        s = n(4),
        a = n(15),
        u = n(16),
        c = n(3),
        l = function() {
            function e(e) { this.url = e, this.url.pathname = "webPushIframe" }
            return Object.defineProperty(e, "LOAD_TIMEOUT_MS", { get: function() { return 15e3 }, enumerable: !0, configurable: !0 }), e.prototype.load = function() { return i.__awaiter(this, void 0, void 0, function() { var t, n = this; return i.__generator(this, function(i) { return r.debug("Opening an iFrame to", this.url.toString()), this.removeFrame(), t = document.createElement("iframe"), t.style.display = "none", t.src = this.url.toString(), t.sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation", this.loadPromise = {}, this.loadPromise.promise = new Promise(function(e, t) { n.loadPromise.resolver = e, n.loadPromise.rejector = t }), document.body.appendChild(t), t.onload = this.onFrameLoad.bind(this), this.element = t, c.timeoutPromise(this.loadPromise.promise, e.LOAD_TIMEOUT_MS).catch(function() { window === window.top && r.warn("OneSignal: Loading the required iFrame " + n.url.toString() + " timed out. Check that the Site URL onesignal.com dashboard web config is " + location.origin + ". Only the Site URL specified there is allowed to use load the iFrame.") }), [2, this.loadPromise.promise] }) }) }, e.prototype.removeFrame = function() {
                if (o.default.isBrowser()) {
                    var e = document.querySelector("iFrame[src='" + this.url.toString() + "'");
                    e && e.remove()
                }
            }, e.prototype.onFrameLoad = function(e) { this.establishCrossOriginMessaging() }, e.prototype.establishCrossOriginMessaging = function() { this.messenger && this.messenger.destroy(), this.messenger = new u.default(this.element.contentWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.CONNECTED, this.onMessengerConnect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_RETRIGGER_EVENT, this.onRemoteRetriggerEvent.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REMOTE_NOTIFICATION_PERMISSION_CHANGED, this.onRemoteNotificationPermissionChanged.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.REQUEST_HOST_URL, this.onRequestHostUrl.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.SERVICEWORKER_COMMAND_REDIRECT, this.onServiceWorkerCommandRedirect.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.HTTP_PERMISSION_REQUEST_RESUBSCRIBE, this.onHttpPermissionRequestResubscribe.bind(this)), this.messenger.on(OneSignal.POSTMAM_COMMANDS.GET_EVENT_LISTENER_COUNT, this.onGetEventListenerCount.bind(this)), this.messenger.connect() }, e.prototype.dispose = function() { this.messenger && this.messenger.destroy(), this.removeFrame() }, e.prototype.isShowingHttpPermissionRequest = function() { return i.__awaiter(this, void 0, void 0, function() { var e = this; return i.__generator(this, function(t) { return [2, new Promise(function(t) { e.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SHOWING_HTTP_PERMISSION_REQUEST, null, function(e) { t(e.data) }) })] }) }) }, e.prototype.onMessengerConnect = function(e) { return i.__awaiter(this, void 0, void 0, function() { var e = this; return i.__generator(this, function(t) { return r.debug("Successfully established cross-origin communication for iFrame at " + this.url.toString()), this.messenger.message(OneSignal.POSTMAM_COMMANDS.IFRAME_POPUP_INITIALIZE, { hostInitOptions: JSON.parse(JSON.stringify(OneSignal.config)), pageUrl: window.location.href, pageTitle: document.title }, function(t) { return t.data === OneSignal.POSTMAM_COMMANDS.REMOTE_OPERATION_COMPLETE && e.loadPromise.resolver(), !1 }), [2] }) }) }, e.prototype.onRemoteRetriggerEvent = function(e) {
                var t = e.data,
                    n = t.eventName,
                    i = t.eventData;
                return s.default.trigger(n, i, e.source), !1
            }, e.prototype.onRemoteNotificationPermissionChanged = function(e) { var t = e.data.forceUpdatePermission; return a.default.triggerNotificationPermissionChanged(t), !1 }, e.prototype.onRequestHostUrl = function(e) { return e.reply(location.href), !1 }, e.prototype.onServiceWorkerCommandRedirect = function(e) { return window.location.href = e.data, !1 }, e.prototype.onHttpPermissionRequestResubscribe = function(e) { return r.debug("(Reposted from iFrame -> Host) User unsubscribed but permission granted. Re-prompting the user for push."), OneSignal.showHttpPrompt({ __sdkCall: !0, __useHttpPermissionRequestStyle: !0 }).catch(function(e) { r.debug("[Resubscribe Prompt Error]", e) }), !1 }, e.prototype.onGetEventListenerCount = function(e) {
                var t = e.data;
                r.debug("(Reposted from iFrame -> Host) Getting event listener count for ", t);
                var n = OneSignal.getListeners(t).length;
                return e.reply(n), !1
            }, e.prototype.isSubscribed = function() { var e = this; return new Promise(function(t) { e.messenger.message(OneSignal.POSTMAM_COMMANDS.IS_SUBSCRIBED, null, function(e) { t(e.data) }) }) }, e.prototype.unsubscribeFromPush = function() { var e = this; return new Promise(function(t) { e.messenger.message(OneSignal.POSTMAM_COMMANDS.UNSUBSCRIBE_PROXY_FRAME, null, function(e) { t() }) }) }, e.prototype.message = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this.messenger.message.apply(this.messenger, arguments)
            }, e
        }();
    t.default = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(1),
        o = n(7),
        s = n(4),
        a = n(15),
        u = n(13),
        c = n(2),
        l = n(16),
        d = function() {
            function e(e, t) { this.url = e, this.url.pathname = "subscribe", this.options = t || { autoAccept: !1, httpPermissionRequest: !1 } }
            return e.prototype.load = function() {
                var e = this,
                    t = o({}, u.default.getPromptOptionsPostHash(), { promptType: "popup", parentHostname: encodeURIComponent(location.hostname) });
                if (this.options.autoAccept && (t.autoAccept = !0), this.options.httpPermissionRequest) { t.httpPermissionRequest = !0; var n = { childWidth: 250, childHeight: 150, left: -99999999, top: 9999999 } }
                return r.info("Opening a popup to " + this.url.toString() + " with POST data:", t), this.popupWindow = this.openWindowViaPost(this.url.toString(), t, n), this.establishCrossOriginMessaging(), this.loadPromise = {}, this.loadPromise.promise = new Promise(function(t, n) { e.loadPromise.resolver = t, e.loadPromise.rejector = n }), this.loadPromise.promise
            }, e.prototype.openWindowViaPost = function(e, t, n) {
                var i = document.createElement("form");
                i.action = e, i.method = "POST", i.target = "onesignal-http-popup";
                var r = void 0 != window.screenLeft ? window.screenLeft : screen.left,
                    o = void 0 != window.screenTop ? window.screenTop : screen.top,
                    s = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width,
                    a = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height,
                    u = OneSignal._windowWidth,
                    c = OneSignal._windowHeight,
                    l = s / 2 - u / 2 + r,
                    d = a / 2 - c / 2 + o;
                n && (n.childWidth && (u = n.childWidth), n.childHeight && (c = n.childHeight), n.left && (l = n.left), n.top && (d = n.top));
                var f = window.open("about:blank", "onesignal-http-popup", "'scrollbars=yes, width=" + u + ", height=" + c + ", top=" + d + ", left=" + l);
                if (t)
                    for (var g in t) {
                        var p = document.createElement("textarea");
                        p.name = g, p.value = "object" == typeof t[g] ? JSON.stringify(t[g]) : t[g], i.appendChild(p)
                    }
                return i.style.display = "none", document.body.appendChild(i), i.submit(), document.body.removeChild(i), f
            }, e.prototype.establishCrossOriginMessaging = function() { this.messenger = new l.default(this.popupWindow, this.url.toString(), this.url.toString()), this.messenger.on(OneSignal.POSTMAM_COMMANDS.POPUP_BEGIN_MESSAGEPORT_COMMS, this.onBeginMessagePortCommunications.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_LOADED, this.onPopupLoaded.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_ACCEPTED, this.onPopupAccepted.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_REJECTED, this.onPopupRejected.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.POPUP_CLOSING, this.onPopupClosing.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.SET_SESSION_COUNT, this.onSetSessionCount.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.WINDOW_TIMEOUT, this.onWindowTimeout.bind(this)), this.messenger.once(OneSignal.POSTMAM_COMMANDS.FINISH_REMOTE_REGISTRATION, this.onFinishingRegistrationRemotely.bind(this)), this.messenger.startPostMessageReceive() }, e.prototype.dispose = function() { this.messenger.destroy() }, e.prototype.onBeginMessagePortCommunications = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return r.debug("(" + c.default.getWindowEnv().toString() + ") Successfully established cross-origin messaging with the popup window."), this.messenger.connect(), [2, !1] }) }) }, e.prototype.onPopupLoaded = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return this.loadPromise.resolver(), s.default.trigger("popupLoad"), [2] }) }) }, e.prototype.onPopupAccepted = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return u.default.triggerCustomPromptClicked("granted"), [2] }) }) }, e.prototype.onPopupRejected = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return u.default.triggerCustomPromptClicked("denied"), [2] }) }) }, e.prototype.onPopupClosing = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return r.info("Popup window is closing, running cleanup events."), s.default.trigger(OneSignal.EVENTS.POPUP_CLOSING), this.dispose(), [2] }) }) }, e.prototype.onSetSessionCount = function(e) { return i.__awaiter(this, void 0, void 0, function() { var t, n; return i.__generator(this, function(i) { return r.debug(c.default.getWindowEnv().toString() + " Marking current session as a continuing browsing session."), t = e.data.sessionCount, n = OneSignal.context, n.sessionManager.setPageViewCount(t), [2] }) }) }, e.prototype.onWindowTimeout = function(e) { return i.__awaiter(this, void 0, void 0, function() { return i.__generator(this, function(e) { return r.debug(c.default.getWindowEnv().toString() + " Popup window timed out and was closed."), s.default.trigger(OneSignal.EVENTS.POPUP_WINDOW_TIMEOUT), [2] }) }) }, e.prototype.onFinishingRegistrationRemotely = function(e) {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, o, s;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return r.debug(location.origin, c.default.getWindowEnv().toString() + " Finishing HTTP popup registration inside the iFrame, sent from popup."), e.reply({ progress: !0 }), t = e.data.rawPushSubscription, [4, u.default.getAppId()];
                            case 1:
                                return n = i.sent(), this.messenger.stopPostMessageReceive(), o = OneSignal.context.subscriptionManager, [4, o.registerSubscriptionWithOneSignal(t)];
                            case 2:
                                return s = i.sent(), a.default.checkAndTriggerSubscriptionChanged(), [2]
                        }
                    })
                })
            }, e.prototype.message = function() { this.messenger.message.apply(this.messenger, arguments) }, e
        }();
    t.default = d
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = n(0),
        r = n(10),
        o = n(7),
        s = n(4),
        a = n(13),
        u = n(3),
        c = function() {
            function e(e) { this.options = e ? o({}, e) : {}, this.options.actionMessage && "string" == typeof this.options.actionMessage || (this.options.actionMessage = "We'd like to show you notifications for the latest news and updates."), this.options.acceptButtonText && "string" == typeof this.options.acceptButtonText || (this.options.acceptButtonText = "Allow"), this.options.cancelButtonText && "string" == typeof this.options.cancelButtonText || (this.options.cancelButtonText = "No Thanks"), this.options.actionMessage = this.options.actionMessage.substring(0, 90), this.options.acceptButtonText = this.options.acceptButtonText.substring(0, 15), this.options.cancelButtonText = this.options.cancelButtonText.substring(0, 15), this.notificationIcons = null }
            return Object.defineProperty(e, "EVENTS", { get: function() { return { ALLOW_CLICK: "popoverAllowClick", CANCEL_CLICK: "popoverCancelClick", SHOWN: "popoverShown", CLOSED: "popoverClosed" } }, enumerable: !0, configurable: !0 }), e.prototype.create = function() {
                return i.__awaiter(this, void 0, void 0, function() {
                    var t, n, o, c;
                    return i.__generator(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return null !== this.notificationIcons ? [3, 2] : [4, a.default.getNotificationIcons()];
                            case 1:
                                t = i.sent(), this.notificationIcons = t, this.container && u.removeDomElement("#onesignal-popover-container"), n = this.getPlatformNotificationIcon(), o = "data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2239.5%22%20height%3D%2240.5%22%20viewBox%3D%220%200%2079%2081%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3EOneSignal-Bell%3C%2Ftitle%3E%3Cg%20fill%3D%22%23BBB%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M39.96%2067.12H4.12s-3.2-.32-3.2-3.36%202.72-3.2%202.72-3.2%2010.72-5.12%2010.72-8.8c0-3.68-1.76-6.24-1.76-21.28%200-15.04%209.6-26.56%2021.12-26.56%200%200%201.6-3.84%206.24-3.84%204.48%200%206.08%203.84%206.08%203.84%2011.52%200%2021.12%2011.52%2021.12%2026.56s-1.6%2017.6-1.6%2021.28c0%203.68%2010.72%208.8%2010.72%208.8s2.72.16%202.72%203.2c0%202.88-3.36%203.36-3.36%203.36H39.96zM27%2070.8h24s-1.655%2010.08-11.917%2010.08S27%2070.8%2027%2070.8z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E", c = '<div id="normal-popover"><div class="popover-body"><div class="popover-body-icon"><img class="' + ("default-icon" === n ? "default-icon" : "") + '" src="' + ("default-icon" === n ? o : n) + '"></div><div class="popover-body-message">' + this.options.actionMessage + '</div><div class="clearfix"></div></div><div class="popover-footer"><button id="onesignal-popover-allow-button" class="align-right primary popover-button">' + this.options.acceptButtonText + '</button><button id="onesignal-popover-cancel-button" class="align-right secondary popover-button">' + this.options.cancelButtonText + '</button><div class="clearfix"></div></div></div>', u.addDomElement("body", "beforeend", '<div id="onesignal-popover-container" class="onesignal-popover-container onesignal-reset"></div>'), u.addDomElement(this.container, "beforeend", '<div id="onesignal-popover-dialog" class="onesignal-popover-dialog">' + c + "</div>"), u.addCssClass(this.container, r.mobile ? "slide-up" : "slide-down"), this.allowButton.addEventListener("click", this.onPopoverAllowed.bind(this)), this.cancelButton.addEventListener("click", this.onPopoverCanceled.bind(this)), s.default.trigger(e.EVENTS.SHOWN), i.label = 2;
                            case 2:
                                return [2]
                        }
                    })
                })
            }, e.prototype.onPopoverAllowed = function(t) { s.default.trigger(e.EVENTS.ALLOW_CLICK) }, e.prototype.onPopoverCanceled = function(t) { s.default.trigger(e.EVENTS.CANCEL_CLICK), this.close() }, e.prototype.close = function() {
                var t = this;
                u.addCssClass(this.container, "close-popover"), u.once(this.dialog, "animationend", function(n, i) { n.target !== t.dialog || "slideDownExit" !== n.animationName && "slideUpExit" !== n.animationName || (u.removeDomElement("#onesignal-popover-container"), i(), s.default.trigger(e.EVENTS.CLOSED)) }, !0)
            }, e.prototype.getPlatformNotificationIcon = function() { return this.notificationIcons ? r.chrome || r.firefox ? this.notificationIcons.chrome ? this.notificationIcons.chrome : this.notificationIcons.firefox ? this.notificationIcons.firefox : "default-icon" : r.safari ? this.notificationIcons.safari ? this.notificationIcons.safari : this.notificationIcons.chrome ? this.notificationIcons.chrome : "default-icon" : void 0 : "default-icon" }, Object.defineProperty(e.prototype, "container", { get: function() { return document.querySelector("#onesignal-popover-container") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "dialog", { get: function() { return document.querySelector("#onesignal-popover-dialog") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "allowButton", { get: function() { return document.querySelector("#onesignal-popover-allow-button") }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "cancelButton", { get: function() { return document.querySelector("#onesignal-popover-cancel-button") }, enumerable: !0, configurable: !0 }), e
        }();
    t.default = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = null;
    i = { cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: { corrupt: function(e) { this.toString = function() { return "CORRUPT: " + this.message }, this.message = e }, invalid: function(e) { this.toString = function() { return "INVALID: " + this.message }, this.message = e }, bug: function(e) { this.toString = function() { return "BUG: " + this.message }, this.message = e }, notReady: function(e) { this.toString = function() { return "NOT READY: " + this.message }, this.message = e } } }, i.bitArray = {
        bitSlice: function(e, t, n) { return e = i.bitArray._shiftRight(e.slice(t / 32), 32 - (31 & t)).slice(1), void 0 === n ? e : i.bitArray.clamp(e, n - t) },
        extract: function(e, t, n) { var i = Math.floor(-t - n & 31); return (-32 & (t + n - 1 ^ t) ? e[t / 32 | 0] << 32 - i ^ e[t / 32 + 1 | 0] >>> i : e[t / 32 | 0] >>> i) & (1 << n) - 1 },
        concat: function(e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            var n = e[e.length - 1],
                r = i.bitArray.getPartial(n);
            return 32 === r ? e.concat(t) : i.bitArray._shiftRight(t, r, 0 | n, e.slice(0, e.length - 1))
        },
        bitLength: function(e) { var t, n = e.length; return 0 === n ? 0 : (t = e[n - 1], 32 * (n - 1) + i.bitArray.getPartial(t)) },
        clamp: function(e, t) {
            if (32 * e.length < t) return e;
            e = e.slice(0, Math.ceil(t / 32));
            var n = e.length;
            return t &= 31, n > 0 && t && (e[n - 1] = i.bitArray.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e
        },
        partial: function(e, t, n) { return 32 === e ? t : (n ? 0 | t : t << 32 - e) + 1099511627776 * e },
        getPartial: function(e) { return Math.round(e / 1099511627776) || 32 },
        equal: function(e, t) { if (i.bitArray.bitLength(e) !== i.bitArray.bitLength(t)) return !1; var n, r = 0; for (n = 0; n < e.length; n++) r |= e[n] ^ t[n]; return 0 === r },
        _shiftRight: function(e, t, n, r) { var o, s, a = 0; for (void 0 === r && (r = []); t >= 32; t -= 32) r.push(n), n = 0; if (0 === t) return r.concat(e); for (o = 0; o < e.length; o++) r.push(n | e[o] >>> t), n = e[o] << 32 - t; return a = e.length ? e[e.length - 1] : 0, s = i.bitArray.getPartial(a), r.push(i.bitArray.partial(t + s & 31, t + s > 32 ? n : r.pop(), 1)), r },
        _xor4: function(e, t) { return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]] },
        byteswapM: function(e) { var t, n; for (t = 0; t < e.length; ++t) n = e[t], e[t] = n >>> 24 | n >>> 8 & 65280 | (65280 & n) << 8 | n << 24; return e }
    }, i.codec.utf8String = {
        fromBits: function(e) {
            var t, n, r = "",
                o = i.bitArray.bitLength(e);
            for (t = 0; t < o / 8; t++) 0 == (3 & t) && (n = e[t / 4]), r += String.fromCharCode(n >>> 24), n <<= 8;
            return decodeURIComponent(window.escape(r))
        },
        toBits: function(e) {
            e = window.unescape(encodeURIComponent(e));
            var t, n = [],
                r = 0;
            for (t = 0; t < e.length; t++) r = r << 8 | e.charCodeAt(t), 3 == (3 & t) && (n.push(r), r = 0);
            return 3 & t && n.push(i.bitArray.partial(8 * (3 & t), r)), n
        }
    }, i.codec.hex = { fromBits: function(e) { var t, n = ""; for (t = 0; t < e.length; t++) n += (0xf00000000000 + (0 | e[t])).toString(16).substr(4); return n.substr(0, i.bitArray.bitLength(e) / 4) }, toBits: function(e) { var t, n, r = []; for (e = e.replace(/\s|0x/g, ""), n = e.length, e += "00000000", t = 0; t < e.length; t += 8) r.push(0 ^ parseInt(e.substr(t, 8), 16)); return i.bitArray.clamp(r, 4 * n) } }, i.hash.md5 = function(e) { this._T[0] || this._precompute(), e ? (this._h = e._h.slice(0), this._buffer = e._buffer.slice(0), this._length = e._length) : this.reset() }, i.hash.md5.hash = function(e) { return (new i.hash.md5).update(e).finalize() }, i.hash.md5.prototype = {
        blockSize: 512,
        reset: function() { return this._h = this._init.slice(0), this._buffer = [], this._length = 0, this },
        update: function(e) {
            "string" == typeof e && (e = i.codec.utf8String.toBits(e));
            var t, n = this._buffer = i.bitArray.concat(this._buffer, e),
                r = this._length,
                o = this._length = r + i.bitArray.bitLength(e);
            for (t = this.blockSize + r & -this.blockSize; t <= o; t += this.blockSize) this._block(n.splice(0, 16), !0);
            return this
        },
        finalize: function() {
            var e, t = this._buffer,
                n = this._h;
            for (t = i.bitArray.concat(t, [i.bitArray.partial(1, 1)]), e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(0 | this._length), t.push(this._length / 4294967296 | 0); t.length;) this._block(t.splice(0, 16), t.length);
            return this.reset(), this._BS(n, 4), n
        },
        _init: [1732584193, 4023233417, 2562383102, 271733878],
        _BS: function(e, t) { var n, i; for (n = 0; n < t; n++) i = e[n], e[n] = i >>> 24 | i >> 8 & 65280 | (65280 & i) << 8 | (255 & i) << 24 },
        _T: [],
        _precompute: function() { var e; for (e = 0; e < 64; e++) this._T[e] = 4294967296 * Math.abs(Math.sin(e + 1)) | 0 },
        _block: function(e, t) {
            var n, i, r, o, s, a = e.slice(0),
                u = this._h,
                c = this._T;
            for (i = u[0], r = u[1], o = u[2], s = u[3], this._BS(a, t ? 16 : 14), n = 0; n < 64; n++) {
                var l, d, f, g;
                n < 32 ? n < 16 ? (l = r & o | ~r & s, d = n, f = [7, 12, 17, 22]) : (l = s & r | ~s & o, d = (5 * n + 1) % 16, f = [5, 9, 14, 20]) : n < 48 ? (l = r ^ o ^ s, d = (3 * n + 5) % 16, f = [4, 11, 16, 23]) : (l = o ^ (r | ~s), d = 7 * n % 16, f = [6, 10, 15, 21]), g = i + l + a[d] + c[n], i = s, s = o, o = r, r = (g << f[n % 4] | g >>> 32 - f[n % 4]) + r | 0
            }
            u[0] += i, u[1] += r, u[2] += o, u[3] += s
        }
    }, i.hash.sha256 = function(e) { this._key[0] || this._precompute(), e ? (this._h = e._h.slice(0), this._buffer = e._buffer.slice(0), this._length = e._length) : this.reset() }, i.hash.sha256.hash = function(e) { return (new i.hash.sha256).update(e).finalize() }, i.hash.sha256.prototype = {
        blockSize: 512,
        reset: function() { return this._h = this._init.slice(0), this._buffer = [], this._length = 0, this },
        update: function(e) {
            "string" == typeof e && (e = i.codec.utf8String.toBits(e));
            var t, n = this._buffer = i.bitArray.concat(this._buffer, e),
                r = this._length,
                o = this._length = r + i.bitArray.bitLength(e);
            if (o > 9007199254740991) throw new i.exception.invalid("Cannot hash more than 2^53 - 1 bits");
            if ("undefined" != typeof Uint32Array) {
                var s = new Uint32Array(n),
                    a = 0;
                for (t = 512 + r - (512 + r & 511); t <= o; t += 512) this._block(s.subarray(16 * a, 16 * (a + 1))), a += 1;
                n.splice(0, 16 * a)
            } else
                for (t = 512 + r - (512 + r & 511); t <= o; t += 512) this._block(n.splice(0, 16));
            return this
        },
        finalize: function() {
            var e, t = this._buffer,
                n = this._h;
            for (t = i.bitArray.concat(t, [i.bitArray.partial(1, 1)]), e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(Math.floor(this._length / 4294967296)), t.push(0 | this._length); t.length;) this._block(t.splice(0, 16));
            return this.reset(), n
        },
        _init: [],
        _key: [],
        _precompute: function() {
            function e(e) { return 4294967296 * (e - Math.floor(e)) | 0 }
            for (var t, n, i = 0, r = 2; i < 64; r++) {
                for (n = !0, t = 2; t * t <= r; t++)
                    if (r % t == 0) { n = !1; break }
                n && (i < 8 && (this._init[i] = e(Math.pow(r, .5))), this._key[i] = e(Math.pow(r, 1 / 3)), i++)
            }
        },
        _block: function(e) {
            var t, n, i, r, o = this._h,
                s = this._key,
                a = o[0],
                u = o[1],
                c = o[2],
                l = o[3],
                d = o[4],
                f = o[5],
                g = o[6],
                p = o[7];
            for (t = 0; t < 64; t++) t < 16 ? n = e[t] : (i = e[t + 1 & 15], r = e[t + 14 & 15], n = e[15 & t] = (i >>> 7 ^ i >>> 18 ^ i >>> 3 ^ i << 25 ^ i << 14) + (r >>> 17 ^ r >>> 19 ^ r >>> 10 ^ r << 15 ^ r << 13) + e[15 & t] + e[t + 9 & 15] | 0), n = n + p + (d >>> 6 ^ d >>> 11 ^ d >>> 25 ^ d << 26 ^ d << 21 ^ d << 7) + (g ^ d & (f ^ g)) + s[t], p = g, g = f, f = d, d = l + n | 0, l = c, c = u, u = a, a = n + (u & c ^ l & (u ^ c)) + (u >>> 2 ^ u >>> 13 ^ u >>> 22 ^ u << 30 ^ u << 19 ^ u << 10) | 0;
            o[0] = o[0] + a | 0, o[1] = o[1] + u | 0, o[2] = o[2] + c | 0, o[3] = o[3] + l | 0, o[4] = o[4] + d | 0, o[5] = o[5] + f | 0, o[6] = o[6] + g | 0, o[7] = o[7] + p | 0
        }
    }, i.hash.sha1 = function(e) { e ? (this._h = e._h.slice(0), this._buffer = e._buffer.slice(0), this._length = e._length) : this.reset() }, i.hash.sha1.hash = function(e) { return (new i.hash.sha1).update(e).finalize() }, i.hash.sha1.prototype = {
        blockSize: 512,
        reset: function() { return this._h = this._init.slice(0), this._buffer = [], this._length = 0, this },
        update: function(e) {
            "string" == typeof e && (e = i.codec.utf8String.toBits(e));
            var t, n = this._buffer = i.bitArray.concat(this._buffer, e),
                r = this._length,
                o = this._length = r + i.bitArray.bitLength(e);
            if (o > 9007199254740991) throw new i.exception.invalid("Cannot hash more than 2^53 - 1 bits");
            if ("undefined" != typeof Uint32Array) {
                var s = new Uint32Array(n),
                    a = 0;
                for (t = this.blockSize + r - (this.blockSize + r & this.blockSize - 1); t <= o; t += this.blockSize) this._block(s.subarray(16 * a, 16 * (a + 1))), a += 1;
                n.splice(0, 16 * a)
            } else
                for (t = this.blockSize + r - (this.blockSize + r & this.blockSize - 1); t <= o; t += this.blockSize) this._block(n.splice(0, 16));
            return this
        },
        finalize: function() {
            var e, t = this._buffer,
                n = this._h;
            for (t = i.bitArray.concat(t, [i.bitArray.partial(1, 1)]), e = t.length + 2; 15 & e; e++) t.push(0);
            for (t.push(Math.floor(this._length / 4294967296)), t.push(0 | this._length); t.length;) this._block(t.splice(0, 16));
            return this.reset(), n
        },
        _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
        _key: [1518500249, 1859775393, 2400959708, 3395469782],
        _f: function(e, t, n, i) { return e <= 19 ? t & n | ~t & i : e <= 39 ? t ^ n ^ i : e <= 59 ? t & n | t & i | n & i : e <= 79 ? t ^ n ^ i : void 0 },
        _S: function(e, t) { return t << e | t >>> 32 - e },
        _block: function(e) {
            var t, n, i, r, o, s, a, u, c = this._h;
            if ("undefined" != typeof Uint32Array) { u = Array(80); for (var l = 0; l < 16; l++) u[l] = e[l] } else u = e;
            for (i = c[0], r = c[1], o = c[2], s = c[3], a = c[4], t = 0; t <= 79; t++) t >= 16 && (u[t] = this._S(1, u[t - 3] ^ u[t - 8] ^ u[t - 14] ^ u[t - 16])), n = this._S(5, i) + this._f(t, r, o, s) + a + u[t] + this._key[Math.floor(t / 20)] | 0, a = s, s = o, o = this._S(30, r), r = i, i = n;
            c[0] = c[0] + i | 0, c[1] = c[1] + r | 0, c[2] = c[2] + o | 0, c[3] = c[3] + s | 0, c[4] = c[4] + a | 0
        }
    };
    var r = function() {
        function e() {}
        return e.md5 = function(e) { return i.codec.hex.fromBits(i.hash.md5.hash(e)) }, e.sha1 = function(e) { return i.codec.hex.fromBits(i.hash.sha1.hash(e)) }, e.sha256 = function(e) { return i.codec.hex.fromBits(i.hash.sha256.hash(e)) }, e
    }();
    t.default = r
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() {}
        return e.isValidUrl = function(e, t) { if (t && t.allowNull && null === e) return !0; if (t && t.allowEmpty && (null === e || void 0 === e)) return !0; try { var n = new URL(e); return !t || !t.requireHttps || "https:" === n.protocol } catch (e) { return !1 } }, e.isValidBoolean = function(e, t) { return !(!t || !t.allowNull || null !== e) || (!0 === e || !1 === e) }, e.isValidArray = function(e, t) { return !(!t || !t.allowNull || null !== e) || (!(!t || !t.allowEmpty || null !== e && void 0 !== e) || e instanceof Array) }, e
    }();
    t.ValidatorUtils = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var i = function() {
        function e() {}
        return e.promiseStub = function() { return { then: e.promiseStub, catch: e.promiseStub } }, Object.defineProperty(e, "log", { get: function() { return { setLevel: function() {} } }, enumerable: !0, configurable: !0 }), e.isPushNotificationsSupported = function() { return !1 }, e.push = function(e) {
            if ("function" == typeof e) e();
            else {
                var t = e.shift();
                OneSignal[t].apply(null, e)
            }
        }, e
    }();
    t.default = i;
    var r = i;
    r.init = r.showHttpPrompt = r.registerForPushNotifications = r.showHttpPermissionRequest = r.getNotificationPermission = r.on = r.off = r.once = r.config = r.SERVICE_WORKER_PATH = r.SERVICE_WORKER_UPDATER_PATH = r.checkAndWipeUserSubscription = r.subscriptionBell = r.notifyButton = function() {}, r.setDefaultNotificationUrl = r.setDefaultTitle = r.syncHashedEmail = r.getTags = r.sendTag = r.sendTags = r.deleteTag = r.deleteTags = r.addListenerForNotificationOpened = r.getIdsAvailable = r.isPushNotificationsEnabled = r.setSubscription = r.getUserId = r.getRegistrationId = r.getSubscription = r.sendSelfNotification = r.promiseStub
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            r = n(10),
            o = n(1),
            s = n(7),
            a = n(6),
            u = n(21),
            c = n(2),
            l = n(23),
            d = n(35),
            f = n(17),
            g = n(12),
            p = n(3),
            h = n(11),
            m = n(24),
            v = function() {
                function e() {}
                return Object.defineProperty(e, "VERSION", { get: function() { return a.default.version() }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "environment", { get: function() { return a.default }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "log", { get: function() { return o }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "database", { get: function() { return g.default }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "sdkEnvironment", { get: function() { return c.default }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "browser", { get: function() { return r }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "workerMessenger", { get: function() { return self.workerMessenger || (self.workerMessenger = new u.WorkerMessenger(null)), self.workerMessenger }, enumerable: !0, configurable: !0 }), e.run = function() { self.addEventListener("push", e.onPushReceived), self.addEventListener("notificationclose", e.onNotificationClosed), self.addEventListener("notificationclick", function(t) { return t.waitUntil(e.onNotificationClicked(t)) }), self.addEventListener("install", e.onServiceWorkerInstalled), self.addEventListener("activate", e.onServiceWorkerActivated), self.addEventListener("pushsubscriptionchange", e.onPushSubscriptionChange), o.debug("Setting up message listeners."), e.workerMessenger.listen(), e.setupMessageListeners() }, e.getAppId = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, e;
                        return i.__generator(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return self.location.search ? (e = self.location.search.match(/appId=([0-9a-z-]+)&?/i)[1], [2, new h.Uuid(e)]) : [3, 1];
                                case 1:
                                    return [4, g.default.getAppConfig()];
                                case 2:
                                    return e = t.sent().appId, [2, e]
                            }
                        })
                    })
                }, e.setupMessageListeners = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t = this;
                        return i.__generator(this, function(n) {
                            return e.workerMessenger.on(u.WorkerMessengerCommand.WorkerVersion, function(t) { o.debug("[Service Worker] Received worker version message."), e.workerMessenger.broadcast(u.WorkerMessengerCommand.WorkerVersion, a.default.version()) }), e.workerMessenger.on(u.WorkerMessengerCommand.Subscribe, function(n) {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var t, r, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = m.AppConfig.deserialize(n), o.debug("[Service Worker] Received subscribe message."), r = new d.default(t), [4, r.subscriptionManager.subscribe()];
                                            case 1:
                                                return s = i.sent(), e.workerMessenger.broadcast(u.WorkerMessengerCommand.Subscribe, s.serialize()), [2]
                                        }
                                    })
                                })
                            }), e.workerMessenger.on(u.WorkerMessengerCommand.AmpSubscriptionState, function(n) {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var t, n, r, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return o.debug("[Service Worker] Received AMP subscription state message."), [4, self.registration.pushManager.getSubscription()];
                                            case 1:
                                                return (t = i.sent()) ? [3, 2] : (e.workerMessenger.broadcast(u.WorkerMessengerCommand.AmpSubscriptionState, !1), [3, 5]);
                                            case 2:
                                                return [4, self.registration.pushManager.permissionState(t.options)];
                                            case 3:
                                                return n = i.sent(), [4, g.default.getSubscription()];
                                            case 4:
                                                r = i.sent().optedOut, s = !!t && "granted" === n && !0 !== r, e.workerMessenger.broadcast(u.WorkerMessengerCommand.AmpSubscriptionState, s), i.label = 5;
                                            case 5:
                                                return [2]
                                        }
                                    })
                                })
                            }), e.workerMessenger.on(u.WorkerMessengerCommand.AmpSubscribe, function() {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var t, n, r, s;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return o.debug("[Service Worker] Received AMP subscribe message."), [4, e.getAppId()];
                                            case 1:
                                                return t = i.sent(), [4, f.default.getAppConfig(t)];
                                            case 2:
                                                return n = i.sent(), r = new d.default(n), [4, r.subscriptionManager.subscribe()];
                                            case 3:
                                                return s = i.sent(), e.workerMessenger.broadcast(u.WorkerMessengerCommand.AmpSubscribe, s.deviceId), [2]
                                        }
                                    })
                                })
                            }), e.workerMessenger.on(u.WorkerMessengerCommand.AmpUnsubscribe, function() {
                                return i.__awaiter(t, void 0, void 0, function() {
                                    var t, n, r;
                                    return i.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return o.debug("[Service Worker] Received AMP unsubscribe message."), [4, e.getAppId()];
                                            case 1:
                                                return t = i.sent(), [4, f.default.getAppConfig(t)];
                                            case 2:
                                                return n = i.sent(), r = new d.default(n), [4, r.subscriptionManager.unsubscribe(1)];
                                            case 3:
                                                return i.sent(), e.workerMessenger.broadcast(u.WorkerMessengerCommand.AmpUnsubscribe, null), [2]
                                        }
                                    })
                                })
                            }), [2]
                        })
                    })
                }, e.onPushReceived = function(t) {
                    o.debug("Called %conPushReceived(" + JSON.stringify(t, null, 4) + "):", p.getConsoleStyle("code"), t), t.waitUntil(e.parseOrFetchNotifications(t).then(function(t) {
                        if (!t || 0 == t.length) return o.debug("Because no notifications were retrieved, we'll display the last known notification, so long as it isn't the welcome notification."), e.displayBackupNotification();
                        for (var n = [], i = 0, r = t; i < r.length; i++) {
                            var s = r[i];
                            o.debug("Raw Notification from OneSignal:", s);
                            var a = e.buildStructuredNotificationObject(s);
                            n.push(function(t) { return e.displayNotification(t).then(function() { return e.updateBackupNotification(t).catch(function(e) { return o.error(e) }) }).then(function() { return e.workerMessenger.broadcast(u.WorkerMessengerCommand.NotificationDisplayed, t).catch(function(e) { return o.error(e) }) }) }.bind(null, a))
                        }
                        return n.reduce(function(e, t) { return e = e.then(t) }, Promise.resolve())
                    }).catch(function(t) { return o.debug("Failed to display a notification:", t), e.UNSUBSCRIBED_FROM_NOTIFICATIONS ? void o.debug("Because we have just unsubscribed from notifications, we will not show anything.") : (o.debug("Because a notification failed to display, we'll display the last known notification, so long as it isn't the welcome notification."), e.displayBackupNotification()) }))
                }, e.executeWebhooks = function(e, t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r, s, a, u;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, g.default.getSubscription()];
                                case 1:
                                    return n = i.sent().deviceId, [4, g.default.get("Options", "webhooks.cors")];
                                case 2:
                                    return r = i.sent(), [4, g.default.get("Options", "webhooks." + e)];
                                case 3:
                                    return (s = i.sent()) ? (a = { event: e, id: t.id, userId: n, action: t.action, buttons: t.buttons, heading: t.heading, content: t.content, url: t.url, icon: t.icon, data: t.data }, u = { method: "post", mode: "no-cors", body: JSON.stringify(a) }, r && (u.mode = "cors", u.headers = { "X-OneSignal-Event": e, "Content-Type": "application/json" }), o.debug("Executing " + e + " webhook " + (r ? "with" : "without") + " CORS %cPOST " + s, p.getConsoleStyle("code"), ":", a), [4, fetch(s, u)]) : [3, 5];
                                case 4:
                                    return [2, i.sent()];
                                case 5:
                                    return [2]
                            }
                        })
                    })
                }, e.getActiveClients = function() {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var e, t, n, r, o;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return [4, self.clients.matchAll({ type: "window", includeUncontrolled: !0 })];
                                case 1:
                                    for (e = i.sent(), t = [], n = 0, r = e; n < r.length; n++) {
                                        if (o = r[n], o.frameType && "nested" === o.frameType) {
                                            if (!p.contains(o.url, c.default.getOneSignalApiUrl().host) && !p.contains(o.url, ".os.tc")) continue;
                                            o.isSubdomainIframe = !0
                                        }
                                        t.push(o)
                                    }
                                    return [2, t]
                            }
                        })
                    })
                }, e.buildStructuredNotificationObject = function(e) {
                    var t = { id: e.custom.i, heading: e.title, content: e.alert, data: e.custom.a, url: e.custom.u, icon: e.icon, image: e.image, tag: e.tag, badge: e.badge, vibrate: e.vibrate };
                    if (e.o) {
                        t.buttons = [];
                        for (var n = 0, i = e.o; n < i.length; n++) {
                            var r = i[n];
                            t.buttons.push({ action: r.i, title: r.n, icon: r.p, url: r.u })
                        }
                    }
                    return p.trimUndefined(t)
                }, e.ensureImageResourceHttps = function(e) { if (!e) return null; try { var t = new URL(e); if ("localhost" === t.hostname || -1 !== t.hostname.indexOf("192.168") || "127.0.0.1" === t.hostname || "https:" === t.protocol) return e; if ("i0.wp.com" === t.hostname || "i1.wp.com" === t.hostname || "i2.wp.com" === t.hostname || "i3.wp.com" === t.hostname) return "https://" + t.hostname + t.pathname; return "https://i0.wp.com/" + (t.host + t.pathname) } catch (e) {} }, e.ensureNotificationResourcesHttps = function(t) {
                    if (t && (t.icon && (t.icon = e.ensureImageResourceHttps(t.icon)), t.image && (t.image = e.ensureImageResourceHttps(t.image)), t.buttons && t.buttons.length > 0))
                        for (var n = 0, i = t.buttons; n < i.length; n++) {
                            var r = i[n];
                            r.icon && (r.icon = e.ensureImageResourceHttps(r.icon))
                        }
                }, e.displayNotification = function(t, n) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var r, a, u, c, l, d;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o.debug("Called %cdisplayNotification(" + JSON.stringify(t, null, 4) + "):", p.getConsoleStyle("code"), t), [4, e._getTitle()];
                                case 1:
                                    return r = i.sent(), [4, g.default.get("Options", "defaultIcon")];
                                case 2:
                                    return a = i.sent(), [4, g.default.get("Options", "persistNotification")];
                                case 3:
                                    return u = i.sent(), [4, e.getAppId()];
                                case 4:
                                    return c = i.sent(), t.heading = t.heading ? t.heading : r, t.icon = t.icon ? t.icon : a || void 0, l = {}, l.tag = t.tag || c.toString(), l.persistNotification = "force" === u || u, n || (n = {}), t = s(t, n), e.ensureNotificationResourcesHttps(t), d = { body: t.content, icon: t.icon, image: t.image, data: t, actions: t.buttons, tag: l.tag, requireInteraction: l.persistNotification, renotify: !0, badge: t.badge, vibrate: t.vibrate }, d = e.filterNotificationOptions(d, "force" === u), [2, self.registration.showNotification(t.heading, d)]
                            }
                        })
                    })
                }, e.filterNotificationOptions = function(e, t) {
                    if ("object" != typeof e) return e;
                    var n = s({}, e);
                    if ("" === r.name && "" === r.version) var i = r._detect(navigator.userAgent);
                    else var i = r;
                    return i.chrome && i.mac && n && (n.requireInteraction = !1), t && (n.requireInteraction = !0), n
                }, e.updateBackupNotification = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = e.data && e.data.__isOneSignalWelcomeNotification, t ? [2] : [4, g.default.put("Ids", { type: "backupNotification", id: e })];
                                case 1:
                                    return n.sent(), [2]
                            }
                        })
                    })
                }, e.displayBackupNotification = function() { return g.default.get("Ids", "backupNotification").then(function(t) { var n = { persistNotification: !1, data: { __isOneSignalBackupNotification: !0 } }; return t ? e.displayNotification(t, n) : e.displayNotification({ content: "You have new updates." }, n) }) }, e.shouldOpenNotificationUrl = function(e) { return "javascript:void(0);" !== e && "do_not_open" !== e && !p.contains(e, "_osp=do_not_open") }, e.onNotificationClosed = function(t) {
                    o.debug("Called %conNotificationClosed(" + JSON.stringify(t, null, 4) + "):", p.getConsoleStyle("code"), t);
                    var n = t.notification.data;
                    e.workerMessenger.broadcast(u.WorkerMessengerCommand.NotificationDismissed, n).catch(function(e) { return o.error(e) }), t.waitUntil(e.executeWebhooks("notification.dismissed", n))
                }, e.getNotificationUrlToOpen = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t, n, r, o, s;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return t = self.registration.scope, [4, g.default.getAppState()];
                                case 1:
                                    if (n = i.sent().defaultNotificationUrl, n && (t = n), e.action)
                                        for (r = 0, o = e.buttons; r < o.length; r++) s = o[r], s.action === e.action && s.url && "" !== s.url && (t = s.url);
                                    else e.url && "" !== e.url && (t = e.url);
                                    return [2, t]
                            }
                        })
                    })
                }, e.onNotificationClicked = function(t) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var n, r, s, a, c, l, d, h, m, v, b, S, w, _, y, O, E, P, I, C, T;
                        return i.__generator(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return o.debug("Called %conNotificationClicked(" + JSON.stringify(t, null, 4) + "):", p.getConsoleStyle("code"), t), t.notification.close(), n = t.notification.data, t.action && (n.action = t.action), r = "exact", s = "navigate", [4, g.default.get("Options", "notificationClickHandlerMatch")];
                                case 1:
                                    return a = i.sent(), a && (r = a), [4, this.database.get("Options", "notificationClickHandlerAction")];
                                case 2:
                                    return c = i.sent(), c && (s = c), [4, e.getActiveClients()];
                                case 3:
                                    return l = i.sent(), [4, e.getNotificationUrlToOpen(n)];
                                case 4:
                                    d = i.sent(), h = e.shouldOpenNotificationUrl(d), m = !1, v = 0, b = l, i.label = 5;
                                case 5:
                                    return v < b.length ? (S = b[v], w = S.url, S.isSubdomainIframe ? [4, g.default.get("Options", "lastKnownHostUrl")] : [3, 8]) : [3, 34];
                                case 6:
                                    return _ = i.sent(), w = _, _ ? [3, 8] : [4, g.default.get("Options", "defaultUrl")];
                                case 7:
                                    w = i.sent(), i.label = 8;
                                case 8:
                                    y = "";
                                    try { y = new URL(w).origin } catch (e) { o.error("Failed to get the HTTP site's actual origin:", e) }
                                    O = null;
                                    try { O = new URL(d).origin } catch (e) {}
                                    if (!("exact" === r && w === d || "origin" === r && y === O)) return [3, 33];
                                    if (!(S.isSubdomainIframe && w === d || !S.isSubdomainIframe && S.url === d || "focus" === s && y === O)) return [3, 13];
                                    e.workerMessenger.unicast(u.WorkerMessengerCommand.NotificationClicked, n, S), i.label = 9;
                                case 9:
                                    return i.trys.push([9, 11, , 12]), [4, S.focus()];
                                case 10:
                                    return i.sent(), [3, 12];
                                case 11:
                                    return E = i.sent(), o.error("Failed to focus:", S, E), [3, 12];
                                case 12:
                                    return [3, 32];
                                case 13:
                                    if (!S.isSubdomainIframe) return [3, 21];
                                    i.label = 14;
                                case 14:
                                    return i.trys.push([14, 16, , 17]), o.debug("Client is subdomain iFrame. Attempting to focus() client."), [4, S.focus()];
                                case 15:
                                    return i.sent(), [3, 17];
                                case 16:
                                    return P = i.sent(), o.error("Failed to focus:", S, P), [3, 17];
                                case 17:
                                    return h ? (o.debug("Redirecting HTTP site to " + d + "."), [4, g.default.put("NotificationOpened", { url: d, data: n, timestamp: Date.now() })]) : [3, 19];
                                case 18:
                                    return i.sent(), e.workerMessenger.unicast(u.WorkerMessengerCommand.RedirectPage, d, S), [3, 20];
                                case 19:
                                    o.debug("Not navigating because link is special."), i.label = 20;
                                case 20:
                                    return [3, 32];
                                case 21:
                                    if (!S.navigate) return [3, 29];
                                    i.label = 22;
                                case 22:
                                    return i.trys.push([22, 27, , 28]), h ? (o.debug("Redirecting HTTPS site to (" + d + ")."), [4, g.default.put("NotificationOpened", { url: d, data: n, timestamp: Date.now() })]) : [3, 25];
                                case 23:
                                    return i.sent(), [4, S.navigate(d)];
                                case 24:
                                    return i.sent(), [3, 26];
                                case 25:
                                    o.debug("Not navigating because link is special."), i.label = 26;
                                case 26:
                                    return [3, 28];
                                case 27:
                                    return I = i.sent(), console.error("Failed to navigate."), console.error("Failed to navigate because:", I), console.error("Failed to navigate to " + d + " because:", I), o.error("Failed to navigate:", S, d, I), [3, 28];
                                case 28:
                                    return [3, 32];
                                case 29:
                                    return [4, g.default.put("NotificationOpened", { url: d, data: n, timestamp: Date.now() })];
                                case 30:
                                    return i.sent(), [4, e.openUrl(d)];
                                case 31:
                                    i.sent(), i.label = 32;
                                case 32:
                                    return m = !0, [3, 34];
                                case 33:
                                    return v++, [3, 5];
                                case 34:
                                    return !h || m ? [3, 37] : [4, g.default.put("NotificationOpened", { url: d, data: n, timestamp: Date.now() })];
                                case 35:
                                    return i.sent(), [4, e.openUrl(d)];
                                case 36:
                                    i.sent(), i.label = 37;
                                case 37:
                                    return [4, g.default.getAppConfig()];
                                case 38:
                                    return C = i.sent().appId, [4, g.default.getSubscription()];
                                case 39:
                                    return T = i.sent().deviceId, C && T ? [4, f.default.put("notifications/" + n.id, { app_id: C.toString(), player_id: T.toString(), opened: !0 })] : [3, 41];
                                case 40:
                                    i.sent(), i.label = 41;
                                case 41:
                                    return [4, e.executeWebhooks("notification.clicked", n)];
                                case 42:
                                    return [2, i.sent()]
                            }
                        })
                    })
                }, e.openUrl = function(e) {
                    return i.__awaiter(this, void 0, void 0, function() {
                        var t;
                        return i.__generator(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    o.debug("Opening notification URL:", e), n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 4]), [4, self.clients.openWindow(e)];
                                case 2:
                                    return [2, n.sent()];
                                case 3:
                                    return t = n.sent(), o.warn("Failed to open the URL '" + e + "':", t), [2, void 0];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.onServiceWorkerInstalled = function(e) { e.waitUntil(self.skipWaiting()) }, e.onServiceWorkerActivated = function(e) { o.info("%cOneSignal Service Worker activated (version " + a.default.version() + ", " + c.default.getWindowEnv().toString() + " environment).", p.getConsoleStyle("bold")), e.waitUntil(self.clients.claim()) }, e.onPushSubscriptionChange = function(e) { o.debug("Called %conPushSubscriptionChange(" + JSON.stringify(e, null, 4) + "):", p.getConsoleStyle("code"), e) }, e.simulateEvent = function(e) { self.dispatchEvent(new ExtendableEvent(e)) }, e._getTitle = function() {
                    return new Promise(function(e) {
                        Promise.all([g.default.get("Options", "defaultTitle"), g.default.get("Options", "pageTitle")]).then(function(t) {
                            var n = t[0],
                                i = t[1];
                            e(null !== n ? n : null != i ? i : "")
                        })
                    })
                }, e.parseOrFetchNotifications = function(t) { if (t.data) { return e.isValidPushPayload(t.data) ? (o.debug("Received a valid encrypted push payload."), Promise.resolve([t.data.json()])) : Promise.reject("Unexpected push message payload received: " + t.data.text()) } return e.retrieveNotifications() }, e.isValidPushPayload = function(e) { try { var t = e.json(); return !!(t && t.custom && t.custom.i && p.isValidUuid(t.custom.i)) || (o.debug("isValidPushPayload: Valid JSON but missing notification UUID:", t), !1) } catch (e) { return o.debug("isValidPushPayload: Parsing to JSON failed with:", e), !1 } }, e.retrieveNotifications = function() {
                    return new Promise(function(t) {
                        var n = [];
                        g.default.get("Ids", "userId").then(function(t) {
                            return t ? (o.debug("Legacy push signal received, retrieving contents from players/" + t + "/chromeweb_notification"), f.default.get("players/" + t + "/chromeweb_notification")) : (o.debug("Tried to get notification contents, but IndexedDB is missing user ID info."), Promise.all([e.getAppId(), self.registration.pushManager.getSubscription().then(function(e) { return e.endpoint })]).then(function(e) {
                                var t = e[0],
                                    n = e[1],
                                    i = p.getDeviceTypeForBrowser();
                                return f.default.getUserIdFromSubscriptionIdentifier(t.toString(), i, n).then(function(e) { return e ? (o.debug("Recovered OneSignal user ID:", e), Promise.all([g.default.put("Ids", { type: "userId", id: e }), g.default.put("Ids", { type: "registrationId", id: n.replace(new RegExp("^(https://android.googleapis.com/gcm/send/|https://updates.push.services.mozilla.com/push/)"), "") })]).then(function() { return o.debug("Attempting to retrieve the notification again now with a recovered user ID."), f.default.get("players/" + e + "/chromeweb_notification") })) : Promise.reject("Recovered user ID was null. Unsubscribing from push notifications.") })
                            }).catch(function(t) { return o.debug("Unsuccessfully attempted to recover OneSignal user ID:", t), self.registration.pushManager.getSubscription().then(function(e) { return e.unsubscribe() }).then(function(t) { o.debug("Unsubscribed from push notifications result:", t), e.UNSUBSCRIBED_FROM_NOTIFICATIONS = !0 }) }))
                        }).then(function(e) {
                            for (var i = 0; i < e.length; i++) n.push(JSON.parse(e[i]));
                            0 == n.length && o.warn("OneSignal Worker: Received a GCM push signal, but there were no messages to retrieve. Are you using the wrong API URL?", c.default.getOneSignalApiUrl().toString()), t(n)
                        })
                    })
                }, e
            }();
        t.ServiceWorker = v, "undefined" == typeof self && void 0 !== e ? e.OneSignalWorker = v : self.OneSignalWorker = v, o.setDefaultLevel(c.default.getBuildEnv() === l.BuildEnvironmentKind.Development ? o.levels.TRACE : o.levels.ERROR), "undefined" != typeof self && v.run()
    }).call(t, n(37))
}]);