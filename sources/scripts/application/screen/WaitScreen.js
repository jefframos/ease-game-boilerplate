/*jshint undef:false */
var WaitScreen = AbstractScreen.extend({
    init: function (label) {
        this._super(label);
    },
    destroy: function () {
        this._super();
    },
    build: function () {
        this._super();

        

        var assetsToLoader = ['_dist/img/ease.png',
        '_dist/img/UI/simpleButtonOver.png',
        '_dist/img/spritesheet/red/red.json',
        '_dist/img/UI/simpleButtonUp.png'];


        if(assetsToLoader.length > 0){
            this.loader = new PIXI.AssetLoader(assetsToLoader);
            this.initLoad();
        }else{
            this.onAssetsLoaded();
        }

        
    },
    onProgress:function(){
        this._super();
    },
    onAssetsLoaded:function()
    {
        this.initApplication();
    },
    initApplication:function(){
        this.easeImg = new SimpleSprite('_dist/img/ease.png');
        this.addChild(this.easeImg);
        this.easeImg.setPosition(50,50);

        this.red = new Red();
        this.red.build();
        this.addChild(this.red);
        this.red.setPosition(windowWidth / 2, windowHeight / 2);

        var self = this;
        this.buttonHurt = new DefaultButton('_dist/img/UI/simpleButtonUp.png', '_dist/img/UI/simpleButtonOver.png');
        this.buttonHurt.build(130);
        this.buttonHurt.setPosition( 50,windowHeight/2 + 60);
        this.addChild(this.buttonHurt);
        this.buttonHurt.addLabel(new PIXI.Text('Hurt', {font:'20px Arial'}),5,5);
        this.buttonHurt.clickCallback = function(){
            self.red.spritesheet.play('hurt');
        };

        this.fullScreen = new DefaultButton('_dist/img/UI/simpleButtonUp.png', '_dist/img/UI/simpleButtonOver.png');
        this.fullScreen.build(130);
        this.fullScreen.setPosition( 50,windowHeight/2 + 120);
        this.addChild(this.fullScreen);
        this.fullScreen.addLabel(new PIXI.Text('Full Screen', {font:'20px Arial'}),5,5);
        this.fullScreen.clickCallback = function(){
            fullscreen();
        };

        this.add = new DefaultButton('_dist/img/UI/simpleButtonUp.png', '_dist/img/UI/simpleButtonOver.png');
        this.add.build(130);
        this.add.setPosition( 50,windowHeight/2 + 180);
        this.addChild(this.add);
        this.add.addLabel(new PIXI.Text('Add Entity', {font:'20px Arial'}),5,5);
        this.add.clickCallback = function(){
            var red = new Red();
            red.build();
            red.setPosition(0, windowHeight * Math.random());
            self.addChild(red);
            red.velocity.x = 1;
            // fullscreen();
        };
    }
});