'use strict';

var APP = window.APP = window.APP || {};

APP.stories = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.stories');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
