/*jshint undef:false */
var meter = new FPSMeter();
function testMobile() {
	return Modernizr.touch;// || window.innerWidth < 600;//true;// Modernizr.touch || window.innerWidth < 600;
}
var resizeProportional = true;
var windowWidth = 820,
windowHeight = 600;

var realWindowWidth = 820,
realWindowHeight = 600;

if(testMobile()){
	windowWidth = window.innerWidth;//640;
	windowHeight = window.innerHeight;//960;

	realWindowWidth = windowWidth;
	realWindowHeight = windowHeight;
}
var renderer;
var windowWidthVar = window.innerWidth,
windowHeightVar = window.innerHeight;
var renderer = PIXI.autoDetectRenderer(realWindowWidth, realWindowHeight, null, false, true);

document.body.appendChild(renderer.view);

renderer.view.style.width = windowWidth+'px';
renderer.view.style.height = windowHeight+'px';

var APP;
APP = new Application();
APP.build();
APP.show();

function update() {
	requestAnimFrame(update );
	meter.tickStart();
	var tempRation =  (window.innerHeight/windowHeight);
	var ratio = resizeProportional ? tempRation < (window.innerWidth/realWindowWidth)?tempRation:(window.innerWidth/realWindowWidth) : 1;
	windowWidthVar = realWindowWidth * ratio;
	windowHeightVar = realWindowHeight * ratio;
	//proportional
	if(windowWidthVar > realWindowWidth)
	{
		windowWidthVar = realWindowWidth;
	}
	if(windowHeightVar > realWindowHeight)
	{
		windowHeightVar = realWindowHeight;
	}
	renderer.view.style.width = windowWidthVar+'px';
	renderer.view.style.height = windowHeightVar+'px';

	
	APP.update();
	renderer.render(APP.stage);
	meter.tick();
}



var initialize = function(){
	// //inicia o game e da um build
	// PIXI.BaseTexture.SCALE_MODE = PIXI.scaleModes.NEAREST;//2;
	requestAnimFrame(update);
};

function possibleFullscreen(){
	var elem = renderer.view;
	return  elem.requestFullscreen || elem.msRequestFullscreen || elem.mozRequestFullScreen || elem.webkitRequestFullscreen;
}
function fullscreen(){

	var elem = renderer.view;
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.msRequestFullscreen) {
		elem.msRequestFullscreen();
	} else if (elem.mozRequestFullScreen) {
		elem.mozRequestFullScreen();
	} else if (elem.webkitRequestFullscreen) {
		elem.webkitRequestFullscreen();
	}
}




(function () {
	var App = {
		init: function () {
			initialize();

		}
	};
	App.init();
})();