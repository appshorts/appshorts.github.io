"use strict";
var appShorts = appShorts || {};
appShorts.route = function() {
    var startApp = function() {
        var urlParams = appShorts.getUrlParams();
        if (urlParams) {
            if (urlParams.title) {
                appShorts.getSinglePost(urlParams.category, urlParams.title, urlParams.id);
                appShorts.getList(urlParams.category);
            } else {
                appShorts.removeSinglePost();
                appShorts.getList(urlParams.category);
            }
        } else {
            appShorts.removeSinglePost();
            appShorts.getList();
        };
    };


    window.onhashchange = function() {
        startApp();
    };
    startApp();
    appShorts.addEvent.ajaxStart();
    appShorts.addEvent.ajaxStop();
    appShorts.addEvent.loadMore();
};