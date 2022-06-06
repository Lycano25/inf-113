
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/fon2.png");
		me.load.spritesheet("crow","assets/images/xx.png",98.5,90);
		me.load.spritesheet("man","assets/images/lui.png",193,190);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(50,30,"crow");
		me.crow.animations.add("right",[0,1,2,3,4],2,true);
		
		me.crow.animations.play("right");
		
		me.man=me.game.add.sprite(220,460,"man");
		me.man.animations.add("right",[0,1,2,3],4,true);
		//me.man.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");