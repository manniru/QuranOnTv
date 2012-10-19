reciterView = (function(){
	var instance = null;
	var list = new Array();
	var le = 17; // make 15 li elements
	var length = 0;//the length of the UI list
	var a =0;// the position in the reciterList array
	var b =1;// the position in the UI list
	var c = 0;//the middle of the UI list
	var p =0;
	
	return {
		getInstance : function()
		{
			if ( instance == null) {
				instance = this;
			}
			return instance;
		},
		init : function(){
			list = reciterData.getInstance().getList();
			
			$('#list_sura').hide();
			$('#list_reciter').show();
			document.getElementById("anchor_reciter").focus();
			
			$('#list_reciter ul').remove();
			html = '<ul></ul>';
			$('#list_reciter').append(html);
			$('#list_reciter ul').addClass('list');
			for(var j=0;j<le;j++){
				$('#list_reciter ul').append('<li></li>');
				$('#list_reciter ul li:nth-child('+(j+1)+')').html(list[j+a].name);
			}
			$('#list_reciter ul li').removeClass('selected');
			$('#list_reciter ul li:nth-child('+1+')').addClass('selected');
			
			length = $("#list_reciter li").size();//the length of the UI list
			c = ((length - length%2)/2 + 1);//the middle of the UI list
		},
		down : function(){
			if(a<list.length-1){
				if(b<c){
					$('#list_reciter ul li').removeClass('selected');
					a++;
					b++;
					$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
				}else if(a>=(c-1) && a<list.length-c){
					$('#list_reciter ul li').removeClass('selected');
					a++;
					for(var j=1;j<length+1;j++){
						$('#list_reciter ul li:nth-child('+j+')').html(list[j+a-c].name);
					}
					$('#list_reciter ul li:nth-child('+c+')').addClass('selected');
				}else if(a>=list.length-c && b<length){
					$('#list_reciter ul li').removeClass('selected');
					a++;
					b++;
					$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
				}
			}
			p = (a-a%le)/le;
		},
		/**
		 * this function doesn't work well when next page is rendered
		 * @returns
		 */
		up : function(){
			if(a>0){
				if(a<=(c-1) && b<=c){
					$('#list_reciter ul li').removeClass('selected');
					a--;b--;
					$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
				}else if(a>(c-1) && a<=list.length-c){
					$('#list_reciter ul li').removeClass('selected');
					a--;
					for(var j=1;j<length+1;j++){
						$('#list_reciter ul li:nth-child('+j+')').html(list[j+a-c].name);
					}
					$('#list_reciter ul li:nth-child('+c+')').addClass('selected');
				}else if(a>list.length-c && b>c){
					$('#list_reciter ul li').removeClass('selected');
					a--;b--;
					$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
				}
			}
			p = (a-a%le)/le;
		},
		middle : function(){
			return ((list.length - list.length%le)/le);
		},
		getPosition : function(){
			return a;
		},
		
		/**
		 *
		 *
		 */
		nextPage : function(){
			if(p< (list.length - list.length%le)/le){
				p++;
				a= p*le;
				b=1;
				$('#list_reciter ul').remove();
				html = '<ul></ul>';
				$('#list_reciter').append(html);
				for(var j=0;j<le;j++){
					if((j + a)<list.length){
						$('#list_reciter ul').append('<li></li>');
						$('#list_reciter ul li:nth-child('+(j+1)+')').html(list[a + j].name);
					}
				}
				$('#list_reciter ul li').removeClass('selected');
				$('#list_reciter ul li:nth-child('+1+')').addClass('selected');
			}
		},
		/**
		 *
		 *
		 */
		previousPage : function(){
			if(p>0){
				p--;
				a= p*le;
				b=1;
				$('#list_reciter ul').remove();
				html = '<ul></ul>';
				$('#list_reciter').append(html);
				for(var j=0;j<le;j++){
					if((j + a)<list.length){
						$('#list_reciter ul').append('<li></li>');
						$('#list_reciter ul li:nth-child('+(j+1)+')').html(list[a + j].name);
					}
				}
				$('#list_reciter ul li').removeClass('selected');
				$('#list_reciter ul li:nth-child('+1+')').addClass('selected');
			}
		},
	};
})();