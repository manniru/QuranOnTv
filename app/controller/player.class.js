player = function(){
	var self = this;
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
		
		alert('pluginTVMW: '+self.pluginTVMW.GetPluginInfo(0));
		alert('pluginAudio: '+self.pluginAudio.GetPluginInfo(0));
		alert('pluginNNavi: '+self.pluginNNavi.GetPluginInfo(0));
		alert('pluginPlayer: '+self.pluginPlayer.GetPluginInfo(0));
		alert('volume: ' + self.pluginAudio.GetVolume());
		alert('mute: ' + self.pluginAudio.GetUserMute());
		
	};
	
	this.play = function(file){
		self.pluginPlayer.Play(file);
		
	};
	
	this.stop = function(){
		self.pluginTVMW.Stop();
	};
	
	this.pause = function(){
		self.pluginTVMW.Pause();
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
};