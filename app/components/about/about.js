'use strict';

var APP = window.APP = window.APP || {};

APP.about = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.about');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
