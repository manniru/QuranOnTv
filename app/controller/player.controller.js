playerController = function(){
	var self = this;
	var state = -1;// the state of the player
	var STOPPED = 0;
	var PLAYING = 1;
	var PAUSED  = 2;
	var view = playerView.getInstance();
	
	var pluginPlayer 	= document.getElementById("pluginPlayer");
	var pluginAudio 	= document.getElementById("pluginAudio");
	var pluginTVMW		= document.getElementById("pluginTVMW");
	
	var list = new Array();
	
	this.init = function(){
		state = STOPPED;
		list = suraData.getInstance().getList();
		
		view.init();
		pluginPlayer.SetDisplayArea(100, 58, 20, 100);
		pluginAudio.SetVolumeWithKey(0);
		pluginNNavi.SetBannerState(1);
		
		pluginPlayer.OnCurrentPlayTime= "OnCurrentPlayTime";
		pluginPlayer.OnStreamInfoReady= "OnStreamInfoReady";
		pluginPlayer.OnBufferingStart= "OnBufferingStart";
		pluginPlayer.OnBufferingProgress = "onBufferingProgress";
		pluginPlayer.OnBufferingComplete = "onBufferingComplete";
		pluginPlayer.OnConnectionFailed = "OnConnectionFailed";
		pluginPlayer.OnRenderingComplete = "OnRenderingComplete";
		pluginPlayer.OnNetworkDisconnected = OnNetworkDisconnected;
		$('#reciter').html('player ver: '+pluginPlayer.GetPlayerVersion());
		alert('pluginTVMW: '+pluginTVMW.GetPluginInfo(0));
		alert('pluginAudio: '+pluginAudio.GetPluginInfo(0));
		alert('pluginNNavi: '+pluginNNavi.GetPluginInfo(0));
		alert('pluginPlayer: '+pluginPlayer.GetPluginInfo(0));
		alert('volume: ' + pluginAudio.GetVolume());
		alert('mute: ' + pluginAudio.GetUserMute());
		
	};
	
	this.setPosition = function(pos){
		position = pos;
	};
	
	this.setListPosition = function(pos){
		l = pos;
	};
	
	this.play = function(){
		if(state == PLAYING){
			pluginPlayer.Stop();
			pluginPlayer.Play(list[suraView.getInstance().getPosition()].link);
		}
		
		if(state == PAUSED){
			pluginPlayer.Resume();
		}
		if(state == STOPPED){
			pluginPlayer.Play(list[suraView.getInstance().getPosition()].link);
		}
		state = PLAYING;
	};
	
	this.stop = function(){
		if(state == PLAYING){
			pluginPlayer.Stop();
			state = STOPPED;
		}
	};
	
	this.pause = function(){
		if(state == PLAYING){
			pluginPlayer.Pause();
			state = PAUSED;
		}
	};
	
	this.volumeInc = function(){
		
	};
	
	this.volumeDec = function(){
		pluginAudio.SetVolumeWithKey(1);
		vol = pluginAudio.GetVolume();
		pluginPlayer.audioVol(vol);
		if(userMute == 1)
		{
		pluginAudio.SetUserMute(false);
		userMute = pluginAudio.GetUserMute();
		pluginPlayer.audioMute(0);
		}
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
		view.totalTime(pluginPlayer.GetDuration());
	};
	
	OnCurrentPlayTime = function (time){
		var timePercent = (100 * time) / pluginPlayer.GetDuration();
	    view.curTime(time);
	    view.progressbar(timePercent);
	};
	
	OnBufferingStart = function (time){
		//$('#buffer').html('Buffering...');
	};
	
	onBufferingProgress = function (percent){
		view.buffer(percent);
	};
	
	onBufferingComplete = function (){
		$('#buffer').width('100%');
	};
	
	OnConnectionFailed = function (time){
		//$('#progressbar').html('Connection Failed.');
	};
	
	OnRenderingComplete = function (time){
		//$('#progressbar').html('Rendering Complete.');
		self.stop();
		if(suraView.getInstance().getPosition()<list.length-1){
			suraView.getInstance().down();
			self.play();
		}
	};
	
	OnNetworkDisconnected = function(){
		self.stop();
	}
};