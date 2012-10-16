var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();
/*****Google Analytics****/
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-19277558-4']);
_gaq.push(['_trackPageview']);
/**********/

application = function(){
	var __reciter = new reciterData();
	
	this.init = function(){
		__reciter.init();
		// Enable key event processing
		widgetAPI.sendReadyEvent();
	};
};
/* events loaded when document is ready */
$(document).ready(function()
{
	jQuery.support.cors = true;// force cross-site scripting
	
	/*****Google Analytics****/
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
	/**********/
	var __application = new application();
	__application.init();
	
});