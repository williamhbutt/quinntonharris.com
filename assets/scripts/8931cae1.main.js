"use strict";var APP=window.APP=window.APP||{};APP.core={},APP.core.controller=function(){var _route="",setRoute=function(strVal){_route=strVal},getRoute=function(){return _route},executeRoute=function(){var ns=APP,route=getRoute(),action="init";""!==route&&ns[route]&&"function"==typeof ns[route][action]&&ns[route][action]()},init=function(){console.log("APP.controller.init");var routeName=document.getElementsByClassName("js-page-controller-action")[0].getAttribute("data-action-name");console.log("APP.controller.init | route name = "+routeName),setRoute(routeName),executeRoute()};return{init:init}}(),function(){for(var method,noop=function(){},methods=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],length=methods.length,console=window.console=window.console||{};length--;)method=methods[length],console[method]||(console[method]=noop)}(),["log","warn"].forEach(function(method){var old=console[method];console[method]=function(){var stack=(new Error).stack.split(/\n/);0===stack[0].indexOf("Error")&&(stack=stack.slice(1));var args=[].slice.apply(arguments).concat([stack[1].trim()]);return old.apply(console,args)}});var APP=window.APP=window.APP||{};APP.global=function(){var initGlobalComponents=function(){APP.navigation.init()},initPageComponents=function(){APP.core.controller.init()},init=function(){initGlobalComponents(),initPageComponents()};return{init:init}}(),$(document).ready(APP.global.init);var APP=window.APP=window.APP||{};APP.navigation=function(){var bindEventsToUI=function(){},init=function(){console.log("APP.navigation"),bindEventsToUI()};return{init:init}}();var APP=window.APP=window.APP||{};APP.about=function(){var bindEventsToUI=function(){},init=function(){console.log("APP.about"),bindEventsToUI()};return{init:init}}();var APP=window.APP=window.APP||{};APP.inspiration=function(){var bindEventsToUI=function(){},init=function(){console.log("APP.inspiration"),bindEventsToUI()};return{init:init}}();var APP=window.APP=window.APP||{};APP.pages=function(){var bindEventsToUI=function(){},init=function(){console.log("APP.pages"),bindEventsToUI()};return{init:init}}();var APP=window.APP=window.APP||{};APP.home=function(){var bindEventsToUI=function(){},init=function(){console.log("APP.home"),bindEventsToUI()};return{init:init}}();
//# sourceMappingURL=main.map