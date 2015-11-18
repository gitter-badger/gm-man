
/**
 * @param {*} data
 * @param {string=} textColor
 * @param {string=} backgroundColor
 */
var consoleLog = function( data, textColor, backgroundColor ){};

/**
 * @param {*} data
 * @param {string=} textColor
 * @param {string=} backgroundColor
 */
var consoleInfo = function( data, textColor, backgroundColor ){};

/**
 * @param {*} data
 * @param {string=} textColor
 * @param {string=} backgroundColor
 */
var consoleWarn = function( data, textColor, backgroundColor ){};

/**
 * @param {*} data
 * @param {string=} textColor
 * @param {string=} backgroundColor
 */
var consoleError = function( data, textColor, backgroundColor ){};

(function(){

		var /** @type {App} */ application;

		$( window ).on({
			load : init,
			unload : destroy
		});

		function init(){
			application = new App();
			application.init();
		}

		function destroy(){
		     application.destroy();
		}

})();