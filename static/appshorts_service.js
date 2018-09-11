"use strict";
var appShorts = appShorts || {};

appShorts.apiCall = function(type, url, data) {
    var func = function(resolve, reject) {
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(xhttp.responseText));
            } else {
                reject(xhttp.responseText);
            }
        };
        xhttp.open(type, url, true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify(data));
    };

    if (Promise) {
        return new Promise(function(resolve, reject) {
            func(resolve, reject);
        });
    } else {
        appShorts.promise(function(resolve, reject) {
            func(resolve, reject);
        });
    }
};


appShorts.addEvent.askForNotification = function() {
    appShorts.refs.askForNotification.style.display = "block";

    var hideAskForNotification = function() {
        appShorts.refs.askForNotification.style.display = "none";
    };

    appShorts.refs.askForNotificationYes.addEventListener('click', function() {
        appShorts.registerDevice();
        hideAskForNotification();
    });

    appShorts.refs.askForNotificationNo.addEventListener('click', function() {
        hideAskForNotification();
    });


};

appShorts.addEvent.loadingOnScroll = false;

appShorts.addEvent.loadMore = function() {
    document.getElementById('showMore').addEventListener('click', function(ev) {
        ev.preventDefault();
        if (appShorts.url.loadMore) {
            var urlParams = appShorts.getUrlParams() || {};
            appShorts.getList(urlParams.category);
        } else {
            var that = this;
            that.style.display = 'none';
        }
    });
}

appShorts.addEvent.showMobileMenu = function() {
    appShorts.refs.mobile_main_menu.style.display = "block";
};

appShorts.addEvent.hideMobileMenu = function() {
    appShorts.refs.mobile_main_menu.style.display = "none";
};


appShorts.addEvent.showMenuOnClickingHamburger = function() {
    document.querySelector("#hamburger").addEventListener("click", function(event) {
        appShorts.addEvent.showMobileMenu();
        event.stopPropagation();
    });


    document.querySelector('#close_menu').addEventListener("click", function(event) {
        appShorts.addEvent.hideMobileMenu();
    });


};