reciter = function(){
	
	var self = this;
	var le = 15; // make 15 li elements
	var a =0;// the position in the reciterList array
	var b =1;// the position in the UI list
	var c = 0;//the middle of the UI list
	var p =0;
	var reciterList = new Array();
	var reciterListLength = 0;//the length of the UI list
	
	/**
	 *
	 *
	 */
	this.loadData = function()
	{
		$.ajax({
			url: "http://192.168.1.4/koran/json",
			success: function(json) {
				$.each(json, function(i,item){
					reciterList[i] = { 'rnumber':item.reciter_id, 'name':item.name };//make the reciterList array
					//alert('rnumber:'+data[i].rnumber+';name:'+data[i].name);
				});
				self.initList();// prepare UI list
			},
		    error: function(jqXHR, textStatus, errorThrown) { 
		        alert("jqXHR: "+jqXHR);
		        alert("textStatus: "+textStatus);
		        alert("errorThrown: "+errorThrown);
		    }
		});
	};
	
	/**
	 *
	 *
	 */
	this.initList = function(){
		
		document.getElementById("anchor_reciter").focus();
		
		$('#list_sura').hide();
		
		$('#list_reciter ul').remove();
		html = '<ul></ul>';
		$('#list_reciter').append(html);
		for(var j=0;j<le;j++){
			$('#list_reciter ul').append('<li></li>');
			$('#list_reciter ul li:nth-child('+(j+1)+')').html(reciterList[j+a].name);
		}
		$('#list_reciter ul li:nth-child('+1+')').removeClass('selected');
		$('#list_reciter ul li:nth-child('+1+')').addClass('selected');
		
		reciterListLength = $("#list_reciter li").size();//the length of the UI list
		c = ((reciterListLength - reciterListLength%2)/2 + 1);//the middle of the UI list
	};
	
	/**
	 *
	 *
	 */
	this.down = function(){
		if(a<reciterList.length-1){
			if(a<(c-1) && b<c){
				$('#list_reciter ul li:nth-child('+b+')').removeClass('selected');
				a++;
				b++;
				$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
			}else if(a>=(c-1) && a<reciterList.length-c && b==c){
				$('#list_reciter ul li:nth-child('+c+')').removeClass('selected');
				a++;
				for(var j=1;j<reciterListLength+1;j++){
					$('#list_reciter ul li:nth-child('+j+')').html(reciterList[j+a-c].name);
				}
				$('#list_reciter ul li:nth-child('+c+')').addClass('selected');
			}else if(a>=reciterList.length-c && b<reciterListLength){
				$('#list_reciter ul li:nth-child('+b+')').removeClass('selected');
				a++;
				b++;
				$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
			}
		}
		p = (a-a%le)/le;
		alert('page: ' + p);
	};
	
	/**
	 *
	 *
	 */
	this.up = function(){
		if(a>0){
			if(a<=(c-1) && b<=c){
				$('#list_reciter ul li:nth-child('+b+')').removeClass('selected');
				a--;
				b--;
				$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
				alert('up1 pos i: '+a +'pos l:' +b);
			}else if(a>(c-1) && a<=reciterList.length-c && b==c){
				$('#list_reciter ul li:nth-child('+c+')').removeClass('selected');
				a--;
				for(var j=1;j<reciterListLength+1;j++){
					$('#list_reciter ul li:nth-child('+j+')').html(reciterList[j+a-c].name);
				}
				$('#list_reciter ul li:nth-child('+c+')').addClass('selected');
				alert('up2 pos i: '+a +'pos l:' +b);
			}else if(a>reciterList.length-c && b>c){
				$('#list_reciter ul li:nth-child('+b+')').removeClass('selected');
				a--;
				b--;
				$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
				alert('up3 pos i: '+a +'pos l:' +b);
			}
		}
		p = (a-a%le)/le;
		alert('page: ' + p);
	};
	
	/**
	 *
	 *
	 */
	this.nextPage = function(){
		alert((reciterList.length-reciterList.length%le)/le);
		if(p<((reciterList.length-reciterList.length%le)/le)){
			p++;
			a= p*le;
			b=1;
			$('#list_reciter ul').remove();
			html = '<ul></ul>';
			$('#list_reciter').append(html);
			for(var j=0;j<le;j++){
				if((j + a)<reciterList.length){
					$('#list_reciter ul').append('<li></li>');
					$('#list_reciter ul li:nth-child('+(j+1)+')').html(reciterList[a + j].name);
					alert('page nr: '+ p +'; pos: '+ (j + a));
				}
			}
		}
	};
	
	/**
	 *
	 *
	 */
	this.previousPage = function(){
		if(p>0){
			p--;
			a= p*le;
			b=1;
			$('#list_reciter ul').remove();
			html = '<ul></ul>';
			$('#list_reciter').append(html);
			for(var j=0;j<le;j++){
				if((j + a)<reciterList.length){
					$('#list_reciter ul').append('<li></li>');
					$('#list_reciter ul li:nth-child('+(j+1)+')').html(reciterList[a + j].name);
					alert('page nr: '+ p +'; pos: '+ (j + a));
				}
			}
		}
	};
	
	/**
	 *
	 *
	 */
	this.keyDown = function()
	{
		var keyCode = event.keyCode;
		switch(keyCode)
		{
			case tvKey.KEY_EXIT:$('#tvkey').html("Sura EXIT");widgetAPI.sendExitEvent();break;
			case tvKey.KEY_RETURN:alert("Reciter RETURN");widgetAPI.sendReturnEvent();break;
			case tvKey.KEY_PANEL_RETURN:alert("Reciter RETURN");widgetAPI.sendReturnEvent();break;
			case tvKey.KEY_LEFT:alert("Reciter LEFT");self.previousPage();break;
			case tvKey.KEY_RIGHT:alert("Reciter RIGHT");self.nextPage();break;
			case tvKey.KEY_UP:self.up();break;
			case tvKey.KEY_DOWN:self.down();break;
			case tvKey.KEY_ENTER:App.sura.loadData(reciterList[a].rnumber);break;
			case tvKey.KEY_PANEL_ENTER:alert("Reciter ENTER");break;
			case 7:alert("Reciter VOL UP");break;
			case 11:alert("Reciter VOL DWN");break;
			default:alert("Unhandled key");break;
		}
	};
};