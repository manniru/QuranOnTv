reciterData = (function(){
	var instance = null;
	var list = new Array();
	
	return {
		getInstance : function()
		{
			if ( instance == null) {
				instance = this;
			}
			return instance;
		},
 
		init : function()
		{
			var pluginNNavi = document.getElementById("pluginNNavi");
			$.ajax({
				type: "POST",
				url: "http://192.168.1.4/koran/json",
				async: false,
				crossDomain: true,
				data: { platform: 'Samsung Smart TV',model: pluginNNavi.GetModelCode(), country: 'NL', language: 'nl' },
				dataType: "json",
				success: function(json, textStatus, jqXHR) {
					$.each(json, function(i,item){
						list[i] = { 'rnumber':item.reciter_id, 'name':item.name };//make the reciterList array
					});
				},
			    error: function(jqXHR, textStatus, errorThrown) {
			    	alert("success jqXHR status: "+jqXHR.status);
					alert("success jqXHR readyState: "+jqXHR.readyState);
					alert("success jqXHR statusText: "+jqXHR.statusText);
					alert("success jqXHR responseText: "+jqXHR.responseText);
			        alert("error textStatus: "+textStatus);
			        alert("errorThrown: "+errorThrown);
			    }
			});
		},
		getList : function(){
			return list;
		},
	};
})();