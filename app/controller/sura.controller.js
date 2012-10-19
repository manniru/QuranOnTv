suraController = function(){
	var __player = new playerController();
	
	/**
	 *
	 *
	 */
	this.init = function(rnumber){
		suraData.getInstance().init(rnumber);
		var view = suraView.getInstance();
		view.init();
		__player.init();
		
		$('#anchor_sura').keydown(function(){
			var keyCode = event.keyCode;
			switch(keyCode)
			{
				case tvKey.KEY_1:location.href = "test.html";break;
				case tvKey.KEY_DOWN:view.down();break;
				case tvKey.KEY_LEFT: view.previousPage();break;
				case tvKey.KEY_RIGHT:view.nextPage();break;
				case tvKey.KEY_MUTE:$('#tvkey').html("Sura MUTE");break;
				case tvKey.KEY_PAUSE:__player.pause();break;
				case tvKey.KEY_PLAY:__player.setListPosition(suraView.getInstance().getListPosition());__player.play();break;
				case tvKey.KEY_RETURN:__player.stop();reciterView.getInstance().init();break;
				case tvKey.KEY_STOP:$('#tvkey').html("Sura STOP");__player.stop();break;
				case tvKey.KEY_TOOLS:$('#tvkey').html("Sura TOOLS");pluginAPI.ShowTools(1);break;
				case tvKey.KEY_UP:view.up();break;
				default:alert("Unhandled key");break;
			}
		});
	};
};