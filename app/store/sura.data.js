suraData = function(){
	var self = this;
	var list = new Array();
	var __sura = new suraController();
	
	this.init = function(rnumber){
		$.ajax({
			url: "http://192.168.1.4/koran/json?rnumber="+rnumber,
			success: function(json) {
				$.each(json, function(i,item){
					list[i] = { 'snumber':item.sura_id, 'name':item.name, 'link':item.Application_Model_Recitation[0].link };
					alert('snumber:'+list[i].snumber+';name:'+list[i].link);
					//data.push(item.name);
				});
				__sura.setList(list);
				__sura.init();
			},
		    error: function(jqXHR, textStatus, errorThrown) {
		        alert("jqXHR: "+jqXHR);
		        alert("textStatus: "+textStatus);
		        alert("errorThrown: "+errorThrown);
		    }
		});
	};
};