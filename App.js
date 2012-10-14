var widgetAPI = new Common.API.Widget();
var pluginAPI = new Common.API.Plugin();
var tvKey = new Common.API.TVKeyValue();
var App =
{
		plugin : null,
};

/* events loaded when document is ready */
$(document).ready(function()
{
	jQuery.support.cors = true;// force cross-site scripting
	App.plugin = document.getElementById("pluginPlayer");
	App.plugin.SetDisplayArea(20, 58, 20, 100);
	
	window.onshow = function () {              // register the onshow event callback
		pluginAPI.unregistKey(7);
		pluginAPI.unregistKey(11);
    };
	// Enable key event processing
	widgetAPI.sendReadyEvent();
	Reciter.loadData();
});

/*
 * country : NL
 * language: 17 en-GB
 * modelID : Valencia_650
 * server : operation
 * remocon: 0_650_259_0
 * area : PANEURO
 * product : 0
 * mgrver : 2.395
 * pathname: /mtd_down/widgets/user/QuranOnTv/index.html
 * href : file://localhost/mtd_down/widgets/user/QuranOnTv/index.html
 * User Agent: Mozilla/5.0 (Windows; U; en-US; rv:1.8.1.11; Gecko/20071129; Firefox/2.5.0) Maple 5.1.00277 Navi
			   Mozilla/5.0 (Windows; U; en-US; rv:1.8.1.11; Gecko/20071129; Firefox/2.5.0) Maple 6.0.00067 Navi
Playstation 3: Mozilla/5.0 (PLAYSTATION 3 4.21) AppleWebKit/531.22.8 (KHTML, like Gecko)
*$('#tvkey').append('<p>ID: '+curWidget.id);//app name
$('#tvkey').append('</p><p>CurWidget Width : ' + curWidget.width);
$('#tvkey').append('</p><p>CurWidget Height : ' + curWidget.height);
$('#tvkey').append('</p><p>'+window.location.search);//show country code language
$('#tvkey').append('</p><p>Pathname: '+window.location.pathname);
$('#tvkey').append('</p><p>Hostname: '+window.location.hostname);
$('#tvkey').append('</p><p>Host: '+window.location.host);
$('#tvkey').append('</p><p>Port: '+window.location.port);
$('#tvkey').append('</p><p>href: '+window.location.href);
$('#tvkey').append('</p><p>Protocol: '+window.location.protocol+'</p>');*/