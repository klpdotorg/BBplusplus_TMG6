Game.preloader_NSD_4B_G6=function(game){
	this.preloadBar=null;
};
        
var chime,clockTick;
Game.preloader_NSD_4B_G6.prototype={
	preload:function(){
                console.log("nsd 4b");
        this.load.video('nsd4b_1', window.baseUrl+ 'assets/demoVideos/NSD-4B-G6.mp4');
        this.load.image('skipArrow', window.baseUrl+ 'assets/commonAssets/skipArrow.png');
        this.load.atlas('bulb', window.baseUrl+ 'assets/commonAssets/bulb.png',null,NSD_4B_G6_JSON.bulbBtnJson);
	this.load.atlas('backbtn', window.baseUrl+ 'assets/commonAssets/backbtn.png' ,null,NSD_4B_G6_JSON.backbtnJson);
        this.load.atlas('CommonSpeakerBtn', window.baseUrl+ 'assets/commonAssets/speaker.png' ,null,NSD_4B_G6_JSON.speakerJson);
        this.load.atlas('starAnim', window.baseUrl+ 'assets/commonAssets/starAnim.png',null,NSD_4B_G6_JSON.starAnimJson);
        this.load.atlas('replay', window.baseUrl+ 'assets/commonAssets/reply.png' ,null,NSD_4B_G6_JSON.replyJson);
        this.load.image('navBar', window.baseUrl+ 'assets/commonAssets/navBar.png');
        this.load.image('timebg', window.baseUrl+ 'assets/commonAssets/timebg.png');
        this.load.image('hand', window.baseUrl+ 'assets/commonAssets/hand.png');
        this.load.image('bg',  window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/Bg.png');
        this.load.atlas('white-box', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/new box.png',null,NSD_4B_G6_JSON.SquareBoxJson);
        this.load.image('Text box_1', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/Text box _1.png');
        this.load.image('Text box_2', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/Text box _2.png');
        this.load.image('numpadbg', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/numbg.png');
        this.load.atlas('Numberpad', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/number pad.png',null,NSD_4B_G6_JSON.numberpadJson);
        this.load.image('scale', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/Scale.png');
        this.load.image('blueline', window.baseUrl+ 'assets/gradeAssets/NSD-4B-G6/Blue Line.png');
        },

	create:function(){
		
		this.state.start('NSD_4B_G6level1');
        
    },
}