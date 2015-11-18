/**
 * Map
 *
 * @returns {Map}
 * @constructor
 */
function Map(){

	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var /** @type {Map} */ that = this;
	var /** @type {App} */ _app;

	/*-------------------------------------------------
	 *            Public Variables
	 ------------------------------------------------*/

	/*------------------------------------------
	 *
	 *    public methods
	 *
	 ------------------------------------------*/
	/**
	 * @param {App} app
	 */
	that.init = function( app ){
		_app = app;

		console.log('Map.init();');

       // load resources
		PIXI.loader
			.add('backgrounds','source/style/images/backgrounds.json')
			.load(onAssetsLoaded);

		var map = [
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
			[ 1, 0, 2, 0, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 1 ],
			[ 1, 0, 2, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 1 ],
			[ 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 1 ],
			[ 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 1 ],
			[ 1, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 1 ],
			[ 1, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0, 0, 2, 0, 1 ],
			[ 1, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 1 ],
			[ 1, 0, 2, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 0, 2, 2, 2, 2, 0, 1 ],
			[ 1, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
			[ 1, 0, 2, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 2, 2, 0, 1 ],
			[ 1, 0, 2, 0, 0, 2, 0, 2, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 1 ],
			[ 1, 0, 2, 2, 0, 2, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 2, 2, 0, 1 ],
			[ 1, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 2, 0, 2, 0, 0, 2, 0, 1 ],
			[ 1, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 2, 0, 2, 2, 0, 2, 0, 1 ],
			[ 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1 ],
			[ 1, 0, 2, 0, 2, 0, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 0, 2, 0, 1 ],
			[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
			[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
		];


		// holder to store aliens
		var aliens = [];
		var alienFrames = ['grey.png', 'stone.png', 'tiger.png' ];
		var alienCount = 100;

		var count = 0;

// create an empty container
		var alienContainer = new PIXI.Container();
		alienContainer.position.x = 0;
		alienContainer.position.y = 0;


		_app.view.stage.addChild(alienContainer);

		function onAssetsLoaded()
		{
			for (var y = 0; y < map.length; y++)
			{
				var currentRow = map[y];

				for (var x = 0; x < currentRow.length; x++){

					var frameName = alienFrames[ currentRow[x] ];

					// create an alien using the frame name..
					var alien = PIXI.Sprite.fromFrame(frameName);
					//alien.tint = Math.random() * 0xFFFFFF;

					alien.position.x = 25 * x;
					alien.position.y = 25 * y;
					alien.anchor.x = 0;
					alien.anchor.y = 0;
					alien.scale.x = 0.25;
					alien.scale.y = 0.25;
					aliens.push( alien );
					alienContainer.addChild( alien );
				}
			}
		}

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
