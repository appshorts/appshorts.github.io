"use strict";
var appShorts = {
    getUrlVars : function() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },

    createBasicPost : function(json, format, index) {
        var column;
        ((index+1)%2 === 0) ? column = 'last' : column = 'first';
        var currentData = format.replace('COLUMN', column).replace('URL', json.imageUrl).replace('TYPE', json.category).replace('NAME', json.title).replace('DATE', json.date).replace('TITLELINK', json.titleLink).replace('FBSHARELINK', json.titleLink).replace('CATEGORY_ID', json.categoryId);
        return currentData;
    },

    createHalfColumnPost : function(json, format, index) {
        var currentData = appShorts.createBasicPost(json, format, index);
        return currentData.replace('POST', json.short.replace(new RegExp("\n", 'g'), "<br/>").substring(0, 100) + "...").replace('SOURCEURL', '').replace('READMORE', '');
    },

    createFullColumnPost : function(json, format, index) {
        var readMoreStatement = 'READ IN DETAILS';
        if(json.titleId === "about-us") {
            json.categoryId = json.title = json.date = readMoreStatement = "";
        };
        var currentData = appShorts.createBasicPost(json, format, index);
        return currentData.replace('type-post', '').replace('POST', json.short.replace(new RegExp("\n", 'g'), "<br/>")).
        replace('SOURCEURL', json.sourceUrl).replace('READMORE', readMoreStatement);
    },

    widgettitle : function(format, mainPost, currentUrl, urlVars) {
        var index = 0;
        jQuery( "#widgettitle" ).on( "click", "p", function() {
          var floatProp = jQuery( this ).css('float'), data = null;
          if( floatProp === 'left') {
            index = index - 1;
            if(index < 0) index = 0;
            else data = appShorts.data_json[index];
          } else if( floatProp === 'right') {
            index = index + 1;
            if(index > appShorts.data_json_length - 1) index = appShorts.data_json_length - 1;
            else data = appShorts.data_json[index];
          };

          if(data) {
            var oldTitle = urlVars['title'];
            var newTitle = data.titleId;
            data = appShorts.createFullColumnPost(data, format, 0);
            var newUrl = currentUrl.replace(oldTitle, newTitle);
            mainPost.fadeOut("fast", "linear", function(){
                mainPost.html(data).fadeIn("fast");
                window.history.pushState("", "", newUrl);
            });
          }

        });
    },

    data_json : [],

    data_json_length : 0,

    skip : 0,

    populateList : function(callback) {
        var br = "<br class='clear''>";
        var data_json = appShorts.data_json;
        var currentUrl = window.location.href;
        var params = currentUrl.substring(currentUrl.indexOf('?'), currentUrl.length);
        var urlVars = appShorts.getUrlVars();

        var format = jQuery('#singlePost').html();
        var mainPostWrapper = null, titleId = null, categoryId = null, mainPost = null;
        var ajaxUrl = appshorts_settings.url + '/getShortsByDate/?skip=' + appShorts.skip;

        categoryId = urlVars['category'];
        titleId = urlVars['title'];
  
        if(titleId) {
            titleId = titleId.toLowerCase();
            mainPostWrapper = jQuery('#mainPostWrapper');
            mainPost = jQuery('#mainPost');
            jQuery.ajax({
                type: 'GET',
                url: appshorts_settings.url + '/getShortsByTitleId/?titleId=' + titleId,
                success: function (data_json) {
                    mainPost.html(appShorts.createFullColumnPost(data_json, format, 0));
                    mainPostWrapper.show();
                    appShorts.widgettitle(format, mainPost, currentUrl, urlVars);
                }
            });
        };

        if(categoryId) {
            categoryId = categoryId.toLowerCase();
            ajaxUrl += "&category=" + categoryId;
        };
            

        
        var postListRef = jQuery('#post_list');
        var content = br;
        jQuery.ajax({
            type: 'GET',
            url: ajaxUrl,
            success: function (data_json) {
                appShorts.data_json = data_json;
                appShorts.data_json_length = data_json.length;
                data_json.forEach(function(json, index){
                    json.titleLink = "/?title=" + json.titleId;
                    if(categoryId) {
                        json.titleLink += "&category=" + categoryId;
                        createContent(json, index, currentUrl);
                    } else {
                        createContent(json, index, currentUrl);
                    }
                });
               postListRef.html(content);
               if(callback) callback();
            }
        });

        var createContent = function(json, index) {
            var currentData = appShorts.createHalfColumnPost(json, format, index);
            content += currentData; 
        };
    },

    populateCategories : function() {
        var categoryList = jQuery('.categoryList');
        var format = jQuery('#categoryMenuBar').html();
        jQuery.ajax({
            type: 'GET',
            url: appshorts_settings.url + '/getAllCategories/',
            success: function (data_json) {
                var menuList = '';
                for(var key in data_json) {
                    menuList += format.replace('CATEGORY_LINK', "/?category=" + key).replace('CATEGORY_NAME', data_json[key]);
                };
                categoryList.html(menuList);
                jQuery('#categoryMenu').addClass('arrow');
            }
        });
    }

    
    
}

