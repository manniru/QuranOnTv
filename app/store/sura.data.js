suraData = (function(){
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
		init : function(rnumber){
			$.ajax({
			url: "http://192.168.1.4/koran/json?rnumber="+rnumber,
			async: false,
			success: function(json) {
				$.each(json, function(i,item){
					list[i] = { 'snumber':item.sura_id, 'name':item.name, 'link':item.Application_Model_Recitation[0].link };
				});
				
			},
		    error: function(jqXHR, textStatus, errorThrown) {
		        alert("jqXHR: "+jqXHR);
		        alert("textStatus: "+textStatus);
		        alert("errorThrown: "+errorThrown);
		    }
		});
		},
		getList : function(){
			return list;
		},
	};
})();