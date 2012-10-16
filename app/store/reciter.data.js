reciterData = function(){
	var self = this;
	var data = new Array();
	var __reciter = new reciterController();
	/**
	 *
	 *
	 */
	this.init = function(){
		$.ajax({
			url: "http://192.168.1.4/koran/json",
			success: function(json) {
				$.each(json, function(i,item){
					data[i] = { 'rnumber':item.reciter_id, 'name':item.name };//make the reciterList array
				});
				__reciter.setList(data);
				__reciter.init();
			},
		    error: function(jqXHR, textStatus, errorThrown) {
		        alert("jqXHR: "+jqXHR);
		        alert("textStatus: "+textStatus);
		        alert("errorThrown: "+errorThrown);
		    }
		});
	};
};