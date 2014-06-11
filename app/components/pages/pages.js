'use strict';

var APP = window.APP = window.APP || {};

APP.pages = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.pages');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
