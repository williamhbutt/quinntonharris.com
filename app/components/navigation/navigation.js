'use strict';

var APP = window.APP = window.APP || {};

APP.navigation = (function(){

    var toggleNavDrawer = function() {
        $('.nav-drawer').toggleClass('active');
    };
    var bindEventsToUI = function() {
        $('.nav__burger').click(toggleNavDrawer);
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
