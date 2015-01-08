/*jshint undef:false */
var Red = SpritesheetEntity.extend({
	init:function(){
		this._super( true );
	},
	build:function(){
		//the texture shoud be loaded before this class are instanced
		//the label, is the label on the json of texture loaded
		//the function 'getFramesByRange', is just a helper, this return one array with the labels of textures on json

		var self = this;
		var motionIdle = new SpritesheetAnimation();
		motionIdle.build('idle', this.getFramesByRange('redEnemy10', 0, 12), 1, true, null);
		
		var motionHurt = new SpritesheetAnimation();
		motionHurt.build('hurt', this.getFramesByRange('redEnemy10', 13, 19), 1, false, function(){
			self.spritesheet.play('idle');
		});

		this.spritesheet = new Spritesheet();
		this.spritesheet.addAnimation(motionIdle);
		this.spritesheet.addAnimation(motionHurt);
		this.spritesheet.play('idle');

	},
	update:function(){
		this._super();
	},
	destroy:function(){
		this._super();
	}
});