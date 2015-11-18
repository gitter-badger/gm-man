
// TODO
// download some of these:
// https://code.google.com/p/closure-compiler/source/browse/externs/
// AND
// http://code.google.com/closure/compile

// e.g. html5, window, etc

var version = '';

//Base64
var btoa = function( string ){};
var atob = function( string ){};

var history = {};
history.getState = function( friendly, create ){};
history.replaceState = function( data, title, url, queue ){};

var state = {};
state.cleanUrl = '';
state.title = '';

/** @suppress {duplicate} */
var templates;

var socket = {};
socket.emit = function(){};


/** HTML5 Audio object
 * @param {string} url
 * @constructor
 */
var Audio = function(url) {};

/**
 * @return {undefined}
 */
Audio.prototype.play = function() {};


/*
 *  signals
 */

var signals;

/**
 * @name Signal
 * @constructor
 * @return {undefined}
 */
function Signal() {}

/**
 * @constructor
 * @name SignalBinding
 * @param {Signal} signal Reference to Signal object that listener is currently bound to.
 * @param {Function} listener Handler function bound to the signal.
 * @param {boolean} isOnce If binding should be executed just once.
 * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
 * @param {number} [priority] The priority level of the event listener. (default = 0).
 * @return {undefined}
 */
var SignalBinding = function(signal, listener, isOnce, listenerContext, priority) {};

var define;
define.amd;


/**
 * @param {function()} handler
 */
var unmousedown = function( handler ){};



