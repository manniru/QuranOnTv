/*function onBufferingProgress(percent){
	$('#time').html("Buffering:" + percent + "%");
};*/

player = function(){
	var self = this;
	var position = 0;
	var playList = new Array();
	var pluginTVMW = null;
	var pluginAudio = null;
	var pluginNNavi = null;
	var pluginPlayer = null;
	this.init = function(){
		
		self.pluginTVMW		= document.getElementById("pluginTVMW");
	    self.pluginAudio 	= document.getElementById("pluginAudio");
	    self.pluginNNavi 	= document.getElementById("pluginNNavi");
		self.pluginPlayer 	= document.getElementById("pluginPlayer");
		self.pluginPlayer.SetDisplayArea(20, 58, 20, 100);
		self.pluginAudio.SetVolumeWithKey(0);
		self.pluginNNavi.SetBannerState(1);
		
		self.pluginPlayer.OnCurrentPlayTime= "OnCurrentPlayTime";
		self.pluginPlayer.OnStreamInfoReady= "OnStreamInfoReady";
		self.pluginPlayer.OnBufferingStart= "OnBufferingStart";
		self.pluginPlayer.OnBufferingProgress = "onBufferingProgress";
		self.pluginPlayer.OnBufferingComplete = "onBufferingComplete";
		self.pluginPlayer.OnConnectionFailed = "OnConnectionFailed";
		self.pluginPlayer.OnRenderingComplete = "OnRenderingComplete";
		
		alert('pluginTVMW: '+self.pluginTVMW.GetPluginInfo(0));
		alert('pluginAudio: '+self.pluginAudio.GetPluginInfo(0));
		alert('pluginNNavi: '+self.pluginNNavi.GetPluginInfo(0));
		alert('pluginPlayer: '+self.pluginPlayer.GetPluginInfo(0));
		alert('volume: ' + self.pluginAudio.GetVolume());
		alert('mute: ' + self.pluginAudio.GetUserMute());
		
	};
	
	this.setPlayList = function(playList){
		this.playList = playList;
	};
	
	this.setPosition = function(position){
		self.position = position;
	};
	
	this.play = function(file){
		self.pluginPlayer.Play(file);
	};
	
	this.stop = function(){
		self.pluginPlayer.Stop();
	};
	
	this.pause = function(){
		self.pluginPlayer.Pause();
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
		$('#time').html(self.pluginPlayer.GetDuration()/1000);
	};
	
	OnCurrentPlayTime = function (time){
		$('#time').html("00:00:"+Math.floor(time/1000));
	};
	
	OnBufferingStart = function (time){
		$('#time').html('Buffering...');
	};
	
	onBufferingProgress = function (percent){
		$('#time').html("Buffering:" + percent + "%");
		$( "#progressbar" ).progressbar({
            value: 50
        });
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
		self.position++;
		self.play(self.playList[self.position].link);
	};
};