'use strict';

var APP = window.APP = window.APP || {};

APP.inspiration = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.inspiration');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
