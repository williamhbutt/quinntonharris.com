// Avoid `console` errors in browsers that lack a console.
'use strict';
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Better console log messages
['log', 'warn'].forEach(function(method) {
    var old = console[method];
    console[method] = function() {
        var stack = (new Error()).stack.split(/\n/);
        // Chrome includes a single "Error" line, FF doesn't.
        if (stack[0].indexOf('Error') === 0) {
            stack = stack.slice(1);
        }
        var args = [].slice.apply(arguments).concat([stack[1].trim()]);
        return old.apply(console, args);
    };
});
