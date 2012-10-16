reciterController = function(){
	
	//var self = this;
	
	var list = new Array();
	var __view = new reciterView();
	var __suraData = new suraData();
	
	/**
	 *
	 *
	 */
	this.init = function(){
		document.getElementById("anchor_reciter").focus();
		$('#anchor_reciter').keydown(function(){
			var keyCode = event.keyCode;
			switch(keyCode)
			{
				case tvKey.KEY_EXIT:widgetAPI.sendExitEvent();break;
				case tvKey.KEY_RETURN:widgetAPI.sendReturnEvent();break;
				case tvKey.KEY_PANEL_RETURN:widgetAPI.sendReturnEvent();break;
				case tvKey.KEY_LEFT: __view.previousPage();break;
				case tvKey.KEY_RIGHT:__view.nextPage();break;
				case tvKey.KEY_UP:__view.up();break;
				case tvKey.KEY_DOWN:__view.down();break;
				case tvKey.KEY_ENTER:__suraData.init(list[__view.getPosition()].rnumber);break;
				case tvKey.KEY_PANEL_ENTER:alert("Reciter ENTER");break;
				case 7:alert("Reciter VOL UP");break;
				case 11:alert("Reciter VOL DWN");break;
				default:alert("Unhandled key");break;
			}
		});
		__view.setList(list);
		__view.init();
	};

	this.setList = function(arr){
		list = arr;
	};
	
	this.getList = function(){
		return list;
	};
};