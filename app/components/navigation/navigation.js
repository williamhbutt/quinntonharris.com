'use strict';

var APP = window.APP = window.APP || {};

APP.navigation = (function(){
    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.navigation');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
