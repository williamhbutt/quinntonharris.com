'use strict';

var APP = window.APP = window.APP || {};

APP.storyPreviews = (function(){

    var bindEventsToUI = function() {

    };

    var init = function() {
        console.log('APP.storyPreviews');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
