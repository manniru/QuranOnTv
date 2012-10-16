playerController = function(){
	var self = this;
	var __suraView = new suraView();
	var position = 0;
	var list = new Array();
	var pluginTVMW = null;
	var pluginAudio = null;
	var pluginNNavi = null;
	var pluginPlayer = null;
	
	this.init = function(){
		
		self.pluginTVMW		= document.getElementById("pluginTVMW");
	    self.pluginAudio 	= document.getElementById("pluginAudio");
	    self.pluginNNavi 	= document.getElementById("pluginNNavi");
		pluginPlayer 	= document.getElementById("pluginPlayer");
		pluginPlayer.SetDisplayArea(20, 58, 20, 100);
		self.pluginAudio.SetVolumeWithKey(0);
		self.pluginNNavi.SetBannerState(1);
		
		pluginPlayer.OnCurrentPlayTime= "OnCurrentPlayTime";
		pluginPlayer.OnStreamInfoReady= "OnStreamInfoReady";
		pluginPlayer.OnBufferingStart= "OnBufferingStart";
		pluginPlayer.OnBufferingProgress = "onBufferingProgress";
		pluginPlayer.OnBufferingComplete = "onBufferingComplete";
		pluginPlayer.OnConnectionFailed = "OnConnectionFailed";
		pluginPlayer.OnRenderingComplete = "OnRenderingComplete";
		
		alert('pluginTVMW: '+self.pluginTVMW.GetPluginInfo(0));
		alert('pluginAudio: '+self.pluginAudio.GetPluginInfo(0));
		alert('pluginNNavi: '+self.pluginNNavi.GetPluginInfo(0));
		alert('pluginPlayer: '+pluginPlayer.GetPluginInfo(0));
		alert('volume: ' + self.pluginAudio.GetVolume());
		alert('mute: ' + self.pluginAudio.GetUserMute());
		
	};
	
	this.setList = function(arr){
		list = arr;
	};
	
	this.setPosition = function(pos){
		position = pos;
	};
	
	this.play = function(){
		alert('player pos: ' + position);
		pluginPlayer.Play(list[position].link);
	};
	
	this.stop = function(){
		pluginPlayer.Stop();
	};
	
	this.pause = function(){
		pluginPlayer.Pause();
	};
	
	this.setRelativeVolume = function(delta)
	{
		self.pluginTVMW.SetVolumeWithKey(delta);
	    /*Display.setVolume( this.getVolume() );
		document.getElementById("volumeBar").style.width = level + "%";
	    
	    var volumeElement = document.getElementById("volumeInfo");

	    widgetAPI.putInnerHTML(volumeElement, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + Audio.getVolume());*/
	};
	
	this.getVolume = function(){
		return self.pluginTVMW.getVolume();
	};
	
	OnStreamInfoReady = function (){
		$('#time').html(pluginPlayer.GetDuration()/1000);
	};
	
	OnCurrentPlayTime = function (time){
		$('#time').html("00:00:"+Math.floor(time/1000));
	};
	
	OnBufferingStart = function (time){
		$('#time').html('Buffering...');
	};
	
	onBufferingProgress = function (percent){
		$('#time').html("Buffering:" + percent + "%");
		/*$( "#progressbar" ).progressbar({
            value: 50
        });*/
	};
	
	onBufferingComplete = function (){
		$('#time').html('Buffering complete');
	};
	
	OnConnectionFailed = function (time){
		$('#time').html('Connection Failed.');
	};
	
	OnRenderingComplete = function (time){
		$('#time').html('Rendering Complete.');
		self.stop();
		position++;
		alert('OnRenderingComplete pos:' + position);
		__suraView.setList(list);
		__suraView.setPosition(position);
		__suraView.down();
		self.play(list[position].link);
	};
};