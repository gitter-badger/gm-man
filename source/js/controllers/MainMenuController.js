/**
 * MainMenuController
 *
 * @returns {MainMenuController}
 * @constructor
 */
function MainMenuController(){

	/*-------------------------------------------------
	 *            Private Variables
	 ------------------------------------------------*/

	var /** @type {MainMenuController} */ that = this;
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

		console.log('MainMenu.init();');

		var renderer = PIXI.autoDetectRenderer(300, 500);
		document.getElementById('DOM_mainMenu').appendChild( renderer.view );

// create the root of the scene graph
		var stage = new PIXI.Container();

		/*
		var background = PIXI.Sprite.fromImage('source/style/images/mainMenuBkg.jpg');
		background.width = renderer.width;
		background.height = renderer.height;
		stage.addChild(background);
		*/

		var labelStyle = {
			font : 'bold italic 30px Arial',
			fill : '#F7EDCA',
			stroke : '#4a1850',
			strokeThickness : 5,
			dropShadow : true,
			dropShadowColor : '#000000',
			dropShadowAngle : Math.PI / 6,
			dropShadowDistance : 6,
			wordWrap : true,
			wordWrapWidth : 440
		};

		var buttonLabelStyle = {
			font : 'bold italic 20px Arial',
			fill : '#F7EDCA',
			stroke : '#4a1850',
			strokeThickness : 5,
			dropShadow : true,
			dropShadowColor : '#000000',
			dropShadowAngle : Math.PI / 6,
			dropShadowDistance : 6,
			wordWrap : true,
			wordWrapWidth : 440
		};

		var richText = new PIXI.Text('Main Menu',labelStyle);
		richText.x = 150;
		richText.y = 100;
		richText.anchor.set(0.5);
		stage.addChild(richText);

// create some textures from an image path
		var textureButton = PIXI.Texture.fromImage('source/style/images/button.png');
		var textureButtonDown = PIXI.Texture.fromImage('source/style/images/button.png');
		var textureButtonOver = PIXI.Texture.fromImage('source/style/images/button2.png');

		var buttons = [];
		var buttonLabels = [];

		var buttonPositions = [
			[ 150, 200, 'START' ],
			[ 150, 300, 'OPTIONS' ],
			[ 150, 400, 'CREDITS' ]
		];

		var noop = function () {
			console.log('click');
		};

		for (var i = 0; i < buttonPositions.length; i++)
		{
			var button = new PIXI.Sprite(textureButton);
			button.buttonMode = true;

			button.anchor.set(0.5);

			button.position.x = buttonPositions[i][0];
			button.position.y = buttonPositions[i][1];

			// make the button interactive...
			button.interactive = true;



			button
				// set the mousedown and touchstart callback...
				.on('mousedown', onButtonDown)
				.on('touchstart', onButtonDown)

				// set the mouseup and touchend callback...
				.on('mouseup', onButtonUp)
				.on('touchend', onButtonUp)
				.on('mouseupoutside', onButtonUp)
				.on('touchendoutside', onButtonUp)

				// set the mouseover callback...
				.on('mouseover', onButtonOver)

				// set the mouseout callback...
				.on('mouseout', onButtonOut);


			// you can also listen to click and tap events :
			//.on('click', noop)

			button.tap = noop;
			button.click = noop;

			button.scale.set(0.8);

			// add it to the stage
			stage.addChild(button);

			buttonLabels[i] = new PIXI.Text( buttonPositions[i][2], buttonLabelStyle );
			buttonLabels[i].anchor.x = 0.5;
			buttonLabels[i].x = buttonPositions[i][0];
			buttonLabels[i].y = buttonPositions[i][1];
			stage.addChild( buttonLabels[i] );

			// add button to array
			buttons.push(button);
		}

// set some silly values...

		animate();

		function animate() {
			// render the stage
			renderer.render(stage);

			requestAnimationFrame(animate);
		}

		function onButtonDown()
		{
			this.isdown = true;
			this.texture = textureButtonDown;
			this.alpha = 1;
		}

		function onButtonUp()
		{
			this.isdown = false;

			if (this.isOver)
			{
				this.texture = textureButtonOver;
			}
			else
			{
				this.texture = textureButton;
			}
		}

		function onButtonOver()
		{
			this.isOver = true;

			if (this.isdown)
			{
				return;
			}

			this.texture = textureButtonOver;
		}

		function onButtonOut()
		{
			this.isOver = false;

			if (this.isdown)
			{
				return;
			}

			this.texture = textureButton;
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
