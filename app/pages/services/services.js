'use strict';

var APP = window.APP = window.APP || {};

APP.services = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.services');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
