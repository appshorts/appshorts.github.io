"use strict";
var appShorts = appShorts || {};
! function() {
    appShorts.refs.body = document.querySelector("html, body"),
        appShorts.refs.mobile_main_menu = document.querySelector("#mobile_main_menu"),
        appShorts.refs.overlay_background = document.querySelector("#overlay_background"),
        appShorts.refs.footerBar = document.querySelector(".footer_bar"),
        appShorts.refs.askForNotification = document.querySelector('#askForNotification'),
        appShorts.refs.askForNotificationYes = document.querySelector('#askForNotification button.yes'),
        appShorts.refs.askForNotificationNo = document.querySelector('#askForNotification button.no')
}();

appShorts.data_json = [];

appShorts.getSinglePost = function(categoryId, slug, id) {

    if (!appShorts.fetchResp.singlePostResp) {
        appShorts.data_json.every(function(json) {
            if (json.slug === slug) {
                appShorts.populateSinglePost(categoryId, slug, json);
                return true;
            }
        });
        appShorts.apiCall("GET", appShorts.url.base + appShorts.url.apiGetPostsPath + id).then(function(data_json) {
            appShorts.populateSinglePost(categoryId, slug, data_json);
        });
    }

};

appShorts.removeSinglePost = function() {
    appShorts.refs.mainPostWrapper.style.display = "none";
};


appShorts.getList = function(categoryId) {
    if (!appShorts.fetchResp.postResp) {
        appShorts.addEvent.ajaxStart();
        var ajaxUrl = appShorts.url.base + appShorts.url.apiGetPostsPath;
        ajaxUrl += '?number=' + appShorts.url.per_page +
            '&offset=' + appShorts.url.offset;
        if (categoryId) {
            categoryId = categoryId.toLowerCase();
            ajaxUrl += "&category=" + categoryId;
        };

        var callback = function(data_json) {
            appShorts.populateList(categoryId, data_json);
        };
        appShorts.apiCall("GET", ajaxUrl).then(function(data_json) {
            appShorts.addEvent.ajaxStop();
            callback(data_json);
        }).catch(function() {
            appShorts.getDataFromDB("posts", callback);
            appShorts.addEvent.ajaxStop();
        });
    }
};

appShorts.getCategories = function() {
    if (!appShorts.fetchResp.catResp) {
        appShorts.addEvent.ajaxStart();
        appShorts.apiCall("GET", appShorts.url.base + appShorts.url.apiGetCategoriesPath).then(function(data_json) {
            appShorts.populateCategories(data_json);
            appShorts.addEvent.ajaxStop();
        }).catch(function() {
            appShorts.getDataFromDB("categories", appShorts.populateCategories);
            appShorts.addEvent.ajaxStop();
        });
    }
};