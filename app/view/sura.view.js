suraView = (function(){
	var instance = null;
	var i =0;//begin from the first element in the array
	var l =1;//begin from the first position in the UI list
	var m = 0;
	var length = 0;//the length of the UI list
	var p =0;//page number
	var list = new Array();
	var middle = function(){
		length = $("#list_sura li").size();//the length of the UI list
		return ((length - length%2)/2 + 1);//the middle of the UI list
	};
	return{
		getInstance : function()
		{
			alert('suraView.GetInstance');
			if ( instance == null) {
				instance = this;
			}
			return instance;
		},
		init : function(){
			alert('suraView.init');
			list = suraData.getInstance().getList();
			$('#list_reciter').hide();
			$('#list_sura').show();
			document.getElementById("anchor_sura").focus();
			$('#list_sura ul').remove();
			html = '<ul></ul>';
			$('#list_sura').append(html);
			$('#list_sura ul').addClass('list');
			for(var j=0;j<17;j++){
				$('#list_sura ul').append('<li></li>');
				$('#list_sura ul li:nth-child('+(j+1)+')').html(list[j+i].name);
			}
			$('#list_sura ul li').removeClass('selected');
			$('#list_sura ul li:nth-child('+1+')').addClass('selected');
			
			length = $("#list_sura li").size();//the length of the UI list
			m = ((length - length%2)/2 + 1);//the middle of the UI list
		},
		getListPosition : function(){
			return l;
		},
		setListPosition : function(lpos){
			l = lpos;
		},
		getPosition : function(){
			return i;
		},
		setPosition : function(pos){
			i = pos;
		},
		/*
		 * 
		 */
		down : function(){
			alert('suraView.down');
			length = $("#list_sura li").size();//the length of the UI list
			m = ((length - length%2)/2 + 1);//the middle of the UI list
			if(i<list.length-1){
				if(l<m){
					$('#list_sura ul li').removeClass('selected');
					i++;l++;
					$('#list_sura ul li:nth-child('+l+')').addClass('selected');
				}else if(i>=(m-1) && i<list.length-m){
					$('#list_sura ul li').removeClass('selected');
					i++;
					for(var j=1;j<=length;j++){
						$('#list_sura ul li:nth-child('+j+')').html(list[j+i-m].name);
					}
					$('#list_sura ul li:nth-child('+m+')').addClass('selected');
				}else if(i>=list.length-m && l<length){
					$('#list_sura ul li').removeClass('selected');
					i++;l++;
					$('#list_sura ul li:nth-child('+l+')').addClass('selected');
				}
			}
			p = (i-i%length)/length;
			alert('reciter page: ' + p);
		},
		/*
		 * 
		 */
		up : function(){
			alert('suraView.up');
			length = $("#list_sura li").size();//the length of the UI list
			m = ((length - length%2)/2 + 1);//the middle of the UI list
			if(i>0){
				if(i<=(m-1) && l<=m){
					$('#list_sura ul li').removeClass('selected');
					i--;l--;
					$('#list_sura ul li:nth-child('+l+')').addClass('selected');
				}else if(i>(m-1) && i<=list.length-m){
					$('#list_sura ul li').removeClass('selected');
					i--;
					for(var j=1;j<length+1;j++){
						$('#list_sura ul li:nth-child('+j+')').html(list[j+i-m].name);
					}
					$('#list_sura ul li:nth-child('+m+')').addClass('selected');
				}else if(i>list.length-m && l>m){
					$('#list_sura ul li').removeClass('selected');
					i--;l--;
					$('#list_sura ul li:nth-child('+l+')').addClass('selected');
				}
			}
			p = (i-i%length)/length;
		},
		/**
		 *
		 *
		 */
		nextPage : function(){
			if(p< (list.length - list.length%length)/length){
				p++;
				i= p*length;
				l=1;
				$('#list_sura ul').remove();
				html = '<ul></ul>';
				$('#list_sura').append(html);
				for(var j=0;j<length;j++){
					if((j + i)<list.length){
						$('#list_sura ul').append('<li></li>');
						$('#list_sura ul li:nth-child('+(j+1)+')').html(list[i + j].name);
					}
				}
				$('#list_sura ul li').removeClass('selected');
				$('#list_sura ul li:nth-child('+1+')').addClass('selected');
			}
		},
		/**
		 *
		 *
		 */
		previousPage : function(){
			if(p>0){
				p--;
				i= p*length;
				l=1;
				$('#list_sura ul').remove();
				html = '<ul></ul>';
				$('#list_sura').append(html);
				for(var j=0;j<length;j++){
					if((j + i)<list.length){
						$('#list_sura ul').append('<li></li>');
						$('#list_sura ul li:nth-child('+(j+1)+')').html(list[i + j].name);
					}
				}
				$('#list_sura ul li').removeClass('selected');
				$('#list_sura ul li:nth-child('+1+')').addClass('selected');
			}
		},
	};
})();