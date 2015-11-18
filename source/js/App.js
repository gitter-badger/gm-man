/**
 * App
 *
 * @returns {App}
 * @constructor
 */
function App(){

	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var /** @type {App} */ that = this;

	/*-------------------------------------------------
	 *            Public Variables
	 ------------------------------------------------*/

	// ----------- Controllers

    // ----------- Models

	// ----------- Services

    // ----------- Views
	/** @type {View} */ that.view = new View();
	/** @type {View} */ that.map = new Map();
	/** @type {MainMenuController} */ that.mainMenuController = new MainMenuController();


	/*------------------------------------------
	 *
	 *    public methods
	 *
	 ------------------------------------------*/

	that.init = function(){

		console.log('App.init()');

        if( typeof version !== 'undefined' ){
            console.log('%c App version: ' + version + ' ', 'background: orange; color: white; display: block;');
        }

		that.view.init( that );
		that.map.init( that );

		that.mainMenuController.init( that );





	};

	that.destroy = function(){
	};

	/*-------------------------------------------------
	 *
	 *            Private Methods
	 *
	 ------------------------------------------------*/

	/*-------------------------------------------------
	 *            Return
	 ------------------------------------------------*/

	return that;
}
