suraView = function(){
	var self = this;
	var i =0;
	var l =1;
	var m = 0;
	var length = 0;//the length of the UI list
	var list = new Array();
	
	this.init = function(){
		i =0;//begin from the first element in the array
		l =1;//begin from the first position in the UI list
		
		
		$('#list_reciter').hide();
		$('#list_sura').show();
		
		$('#list_sura ul').remove();
		html = '<ul></ul>';
		$('#list_sura').append(html);
		alert(html);
		for(var j=0;j<15;j++){
			$('#list_sura ul').append('<li></li>');
			$('#list_sura ul li:nth-child('+(j+1)+')').html(list[j+i].name);
		}
		$('#list_sura ul li:nth-child('+1+')').removeClass('selected');
		$('#list_sura ul li:nth-child('+1+')').addClass('selected');
		
		length = $("#list_sura li").size();//the length of the UI list
		m = ((length - length%2)/2 + 1);//the middle of the UI list
	};
	
	this.getPosition = function(){
		return i;
	};
	
	this.setPosition = function(pos){
		i = pos;
	};
	
	this.setList = function(arr){
		list = arr;
	};
	
	/*
	 * 
	 */
	this.down = function(){
		alert('sura view down pos:' + i + 'len: '+ list.length);
		length = $("#list_sura li").size();
		m = ((length - length%2)/2 + 1);
		if(i<list.length-1){
			if(i<(m-1) && l<m){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i++;l++;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}else if(i>=(m-1) && i<list.length-m && l==m){
				$('#list_sura ul li:nth-child('+m+')').removeClass('selected');
				i++;
				for(var j=1;j<=length;j++){
					$('#list_sura ul li:nth-child('+j+')').html(list[j+i-m].name);
				}
				$('#list_sura ul li:nth-child('+m+')').addClass('selected');
			}else if(i>=list.length-m && l<length){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i++;l++;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}
		}
	};
	
	/*
	 * 
	 */
	this.up = function(){
		alert('sura view up');
		if(i>0){
			if(i<=(m-1) && l<=m){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i--;l--;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}else if(i>(m-1) && i<=list.length-m && l==m){
				$('#list_sura ul li:nth-child('+m+')').removeClass('selected');
				i--;
				for(var j=1;j<length+1;j++){
					$('#list_sura ul li:nth-child('+j+')').html(list[j+i-m].name);
				}
				$('#list_sura ul li:nth-child('+m+')').addClass('selected');
			}else if(i>list.length-m && l>m){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i--;l--;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}
		}
	};
};