reciterController = function(){
	var __sura = new suraController();
	
	/**
	 *
	 *
	 */
	this.init = function(){
		reciterData.getInstance().init();
		var list = reciterData.getInstance().getList();
		var view = reciterView.getInstance();
		view.init();
		
		$('#anchor_reciter').keydown(function(){
			var keyCode = event.keyCode;
			switch(keyCode)
			{
				case tvKey.KEY_EXIT:widgetAPI.sendExitEvent();break;
				case tvKey.KEY_RETURN:widgetAPI.sendReturnEvent();break;
				case tvKey.KEY_PANEL_RETURN:widgetAPI.sendReturnEvent();break;
				case tvKey.KEY_LEFT: view.previousPage();break;
				case tvKey.KEY_RIGHT:view.nextPage();break;
				case tvKey.KEY_UP:view.up();break;
				case tvKey.KEY_DOWN:view.down();break;
				case tvKey.KEY_ENTER:__sura.init(list[view.getPosition()].rnumber);break;
				default:alert("Unhandled key");break;
			}
		});
	};
};