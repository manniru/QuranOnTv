var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();

/* events loaded when document is ready */
$(document).ready(function()
{
	pluginAPI.unregistKey(7); //unregister volume up button
	pluginAPI.unregistKey(11); //unregister volume down button
	pluginAPI.unregistKey(27); //unregister mute button
	pluginAPI.unregistKey(45); //unregister EXIT key
	pluginAPI.unregistKey(262); //unregister MENU key
	
	jQuery.support.cors = true;// force cross-site scripting
	var d = new Date();
	alert('system time:' + d.toLocaleTimeString());
	
	var __reciter = new reciterController();
	__reciter.init();
	widgetAPI.sendReadyEvent();
	
});