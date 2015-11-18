/**
 * View
 *
 * @returns {View}
 * @constructor
 */
function View(){

	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var /** @type {View} */ that = this;
	var /** @type {App} */ _app;
	var /** @type {WebGLRenderer|CanvasRenderer} */	_renderer =  PIXI.autoDetectRenderer( 1400, 700 );

	/*-------------------------------------------------
	 *            Public Variables
	 ------------------------------------------------*/

	/** @type {WebGLRenderer|CanvasRenderer} */
	that.stage = null;

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

		console.log('View.init();');

		_renderer =  PIXI.autoDetectRenderer( 1400, 700 );
		document.body.appendChild( _renderer.view );

// create the root of the scene graph
		that.stage = new PIXI.Container();

// load resources
		PIXI.loader
			.add('spritesheet','source/style/images/monsters.json')
			.load(onAssetsLoaded);

// holder to store aliens
		var aliens = [];
		var alienFrames = ['eggHead.png', 'flowerTop.png', 'helmlok.png', 'skully.png'];
		var alienCount = 300;

		var count = 0;

// create an empty container
		var alienContainer = new PIXI.Container();
		alienContainer.position.x = 700;
		alienContainer.position.y = 350;

// make the stage interactive
		that.stage.interactive = true;

		that.stage.addChild(alienContainer);

		function onAssetsLoaded()
		{
			// add a bunch of aliens with textures from image paths
			for (var i = 0; i < alienCount; i++)
			{
				var frameName = alienFrames[i % 4];

				// create an alien using the frame name..
				var alien = PIXI.Sprite.fromFrame(frameName);
				alien.tint = Math.random() * 0xFFFFFF;

				/*
				 * fun fact for the day :)
				 * another way of doing the above would be
				 * var texture = PIXI.Texture.fromFrame(frameName);
				 * var alien = new PIXI.Sprite(texture);
				 */
				alien.position.x = Math.random() * 1400 - 400;
				alien.position.y = Math.random() * 700 - 300;
				alien.anchor.x = 0.5;
				alien.anchor.y = 0.5;
				alien.scale.x = 0.2;
				alien.scale.y = 0.2;
				aliens.push(alien);
				alienContainer.addChild(alien);
			}

			// start animating
			requestAnimationFrame(animate);
		}

		that.stage.on('click', onClick);
		that.stage.on('tap', onClick);

		function onClick()
		{
			alienContainer.cacheAsBitmap = !alienContainer.cacheAsBitmap;

//        feel free to play with what's below
//        var sprite = new PIXI.Sprite(alienContainer.generateTexture());
//        stage.addChild(sprite);
//        sprite.position.x = Math.random() * 800;
//        sprite.position.y = Math.random() * 600;
		}

		var speedArray = [];
		var maxSpeed = 1;
		for (var i = 0; i < alienCount; i++)
		{
			speedArray[i] = Math.random() * maxSpeed * 2 - maxSpeed/2;
		}


		function animate() {



			// let's rotate the aliens a little bit
			for (var i = 0; i < alienCount; i++)
			{
				var speedX = Math.random() * speedArray[i];
				var speedY = speedArray[i] - speedX;

				var alien = aliens[i];
				//alien.rotation += 0.1;
				alien.position.x += speedX;
				alien.position.y += speedY;
			}

			//count += 0.01;

			//alienContainer.scale.x = Math.sin(count);
			//alienContainer.scale.y = Math.sin(count);

			//alienContainer.rotation += 0.01;

			// render the stage
			_renderer.render( that.stage );

			requestAnimationFrame(animate);
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
