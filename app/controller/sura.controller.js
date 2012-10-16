suraController = function(){
	//var self = this;
	var __view = new suraView();
	var __reciter = new reciterView();
	var __player = new playerController();
	var list = new Array();
	
	/**
	 *
	 *
	 */
	this.init = function(){
		
		__view.setList(list);
		__view.init();
		__player.setList(list);
		__player.init();
		
		document.getElementById("anchor_sura").focus();
		$('#anchor_sura').keydown(function(){
			var keyCode = event.keyCode;
			switch(keyCode)
			{
				case tvKey.KEY_1:location.href = "test.html";break;
				case tvKey.KEY_DOWN:__view.down();break;
				case tvKey.KEY_LEFT:$('#tvkey').html("Sura LEFT");break;
				case tvKey.KEY_MUTE:$('#tvkey').html("Sura MUTE");break;
				case tvKey.KEY_PAUSE:__player.pause();break;
				case tvKey.KEY_PLAY:__player.setPosition(__view.getPosition());__player.play();break;
				case tvKey.KEY_RETURN:__reciter.init();break;
				case tvKey.KEY_RIGHT:$('#tvkey').html("Sura RIGHT");break;
				case tvKey.KEY_STOP:$('#tvkey').html("Sura STOP");__player.stop();break;
				case tvKey.KEY_TOOLS:$('#tvkey').html("Sura TOOLS");pluginAPI.ShowTools(1);break;
				case tvKey.KEY_UP:__view.up();break;
				default:alert("Unhandled key");break;
			}
		});
		
		
		
	};
	
	/*
	 * 
	 */
	this.setList = function(arr){
		list = arr;
	};
	
	/*
	 * 
	 */
	this.getList = function(){
		return list;
	};
};