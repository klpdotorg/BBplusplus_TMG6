Game.unity2_1_1aScore=function(game){

};

Game.unity2_1_1aScore.prototype={
	create:function(game){
		
        console.log("inside score js" );
		_this = this;
		
		_this.background = _this.add.tileSprite(0,-80,_this.world.width,_this.world.height,'unity2_1_1a_background');
		_this.background.scale.setTo(1,1.5);
		
		
		_this.homeBtn = _this.add.sprite(_this.world.centerX-150,_this.world.centerY,'CommonHomeBtn');
		_this.homeBtn.scale.setTo(2,2);
		_this.homeBtn.anchor.setTo(0.5);
		_this.homeBtn.inputEnabled = true;
        _this.homeBtn.frame = 0;
        
		_this.homeBtn.events.onInputDown.add(function(){
			_this.homeBtn.events.onInputDown.removeAll();
			_this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            //RI.gotoEndPage();
		    telInitializer.tele_end();

			},_this);
		
//		
//		_this.nextBtn = _this.add.sprite(_this.world.centerX+150,_this.world.centerY,'CommonNextBtn');    
//		_this.nextBtn.scale.setTo(2,2);
//        _this.nextBtn.anchor.setTo(0.5);	
//		_this.nextBtn.inputEnabled = true;
//		_this.nextBtn.events.onInputDown.add(function()
//		{
//			_this.nextBtn.events.onInputDown.removeAll();
//			_this.clickSound = _this.add.audio('ClickSound');
//            _this.clickSound.play();
//			//_this.cache.destroy();
//			//_this.state.start('unity7_1_3level1',true,false); 
//		},_this);

        
    
                
                _this.replay = _this.add.button(_this.world.centerX,_this.world.centerY,'unity2_1_1a_replay',null,_this,0,1,2);
		        _this.replay.scale.setTo(2,2);
		        _this.replay.anchor.setTo(0.5);
                _this.replay.inputEnabled = true;
		        _this.replay.input.useHandCursor = true; 
                _this.replay.events.onInputDown.add(function(){ 
					_this.replay.events.onInputDown.removeAll();
					//_this.clickSound = _this.add.audio('ClickSound');
					//_this.clickSound.play();
                    _this.state.start('unity2_1_1alevel1',true,false);
                 },_this);

                   
	},

	shutdown:function()
	{
		_this.background = null;
		_this = null;
	}

};