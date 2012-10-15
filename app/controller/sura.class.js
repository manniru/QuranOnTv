sura = function(){
	var self = this;
	var i =0;
	var l =1;
	var m = 0;
	var suraList = new Array();
	var suraListLength = 0;
	
	/**
	 *
	 *
	 */
	this.loadData = function(rnumber){
		$.ajax({
			url: "http://192.168.1.4/koran/json?rnumber="+rnumber,
			success: function(json) {
				$.each(json, function(i,item){
					
					suraList[i] = { 'snumber':item.snumber, 'link':item.link };
					alert('snumber:'+suraList[i].snumber+';link:'+suraList[i].link);
					//data.push(item.name);
				});
				self.initList();
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
		i =0;//begin from the first element in the array
		l =1;//begin from the first position in the UI list
		document.getElementById("anchor_sura").focus();
		
		$('#list_reciter').hide();
		$('#list_sura').show();
		
		$('#list_sura ul').remove();
		html = '<ul></ul>';
		$('#list_sura').append(html);
		alert(html);
		for(var j=0;j<15;j++){
			$('#list_sura ul').append('<li></li>');
			$('#list_sura ul li:nth-child('+(j+1)+')').html(suraList[j+i].link);
		}
		$('#list_sura ul li:nth-child('+1+')').removeClass('selected');
		$('#list_sura ul li:nth-child('+1+')').addClass('selected');
		
		suraListLength = $("#list_sura li").size();//the length of the UI list
		m = ((suraListLength - suraListLength%2)/2 + 1);//the middle of the UI list
	};
	
	/**
	 *
	 *
	 */
	this.keyDown = function()
	{
		var keyCode = event.keyCode;
		alert("Key pressed: " + keyCode);
		$('#tvkey').html("Sura 1 : "+keyCode);
		switch(keyCode)
		{
			//case tvKey.KEY_1:$('#tvkey').html("Sura 1");break;
			//case tvKey.KEY_2:$('#tvkey').html("Sura 2");break;
			//case tvKey.KEY_3:$('#tvkey').html("Sura 3");break;
			//case tvKey.KEY_4:$('#tvkey').html("Sura 4");break;
			//case tvKey.KEY_5:$('#tvkey').html("Sura 5");break;
			//case tvKey.KEY_6:$('#tvkey').html("Sura 6");break;
			//case tvKey.KEY_7:$('#tvkey').html("Sura 7");break;
			//case tvKey.KEY_8:$('#tvkey').html("Sura 8");break;
			//case tvKey.KEY_9:$('#tvkey').html("Sura 9");break;
			//case tvKey.KEY_0:$('#tvkey').html("Sura 0");break;
			//case tvKey.KEY_BLUE:$('#tvkey').html("Sura BLUE");break;
			//case tvKey.KEY_CC:$('#tvkey').html("Sura CC");break;
			//case tvKey.KEY_CHLIST:$('#tvkey').html("Sura CHLIST");break;
			//case tvKey.KEY_CONTENT:$('#tvkey').html("Sura CONTENT");break;
			//case tvKey.KEY_DMA:$('#tvkey').html("Sura DMA");break;
			case tvKey.KEY_DOWN:self.down();$('#tvkey').html("Sura DOWN");break;
			//case tvKey.KEY_EMODE:$('#tvkey').html("Sura EMODE");break;
			//case tvKey.KEY_EMPTY:$('#tvkey').html("Sura EMPTY");break;
			//case tvKey.KEY_ENTER:$('#tvkey').html("Sura KEY_ENTER: "+suraList[i].snumber +', pos: '+i);break;
			//case tvKey.KEY_EXIT:$('#tvkey').html("Sura EXIT");break;
			//case tvKey.KEY_FAVCH:$('#tvkey').html("Sura FAVCH");break;
			//case tvKey.KEY_FF:$('#tvkey').html("Sura FF");break;
			//case tvKey.KEY_INFO:$('#tvkey').html("Sura INFO");break;
			//case tvKey.KEY_INFOLINK:$('#tvkey').html("Sura INFOLINK");break;
			//case tvKey.KEY_GREEN:$('#tvkey').html("Sura GREEN");break;
			case tvKey.KEY_LEFT:$('#tvkey').html("Sura LEFT");break;
			//case tvKey.KEY_MENU:$('#tvkey').html("Sura MENU");break;
			case tvKey.KEY_MUTE:$('#tvkey').html("Sura MUTE");break;
			case tvKey.KEY_PANEL_CH_DOWN:$('#tvkey').html("Sura PANEL_CH_DOWN");break;//not working
			case tvKey.KEY_PANEL_CH_UP:$('#tvkey').html("Sura PANEL_CH_UP");break;//not working
			//case tvKey.KEY_PANEL_ENTER:$('#tvkey').html("Sura KEY_PANEL_ENTER");break;
			//case tvKey.KEY_PANEL_MENU:$('#tvkey').html("Sura PANEL_CH_MENU");break;
			//case tvKey.KEY_PANEL_POWER:$('#tvkey').html("Sura PANEL_CH_POWER");break;
			//case tvKey.KEY_PANEL_RETURN:$('#tvkey').html("Sura PANEL RETURN");widgetAPI.sendReturnEvent();break;
			//case tvKey.KEY_PANEL_SOURCE:$('#tvkey').html("Sura PANEL_SOURCE");break;
			case tvKey.KEY_PANEL_VOL_DOWN:$('#tvkey').html("Sura PANEL_VOL_DOWN");break;//not working
			case tvKey.KEY_PANEL_VOL_UP:$('#tvkey').html("Sura PANEL_VOL_UP");break;//not working
			case tvKey.KEY_PAUSE:$('#tvkey').html("Sura PAUSE");App.plugin.Pause();break;
			case tvKey.KEY_PLAY:$('#tvkey').html("Sura PLAY");App.plugin.Stop();App.plugin.Play( suraList[i].link );break;
			//case tvKey.KEY_PRECH:$('#tvkey').html("Sura PRECH");break;
			//case tvKey.KEY_REC:$('#tvkey').html("Sura REC");break;
			//case tvKey.KEY_RED:$('#tvkey').html("Sura RED");break;
			case tvKey.KEY_RETURN:$('#tvkey').html("Sura RETURN");$('#list_sura').hide();$('#list_sura ul li').removeClass('selected');$('#list_reciter').show();document.getElementById("anchor_reciter").focus();break;
			case tvKey.KEY_RIGHT:$('#tvkey').html("Sura RIGHT");break;
			//case tvKey.KEY_RW:$('#tvkey').html("Sura RW");break;
			//case tvKey.KEY_SOURCE:$('#tvkey').html("Sura SOURCE");break;
			case tvKey.KEY_STOP:$('#tvkey').html("Sura STOP");App.plugin.Stop();break;
			case tvKey.KEY_TOOLS:$('#tvkey').html("Sura TOOLS");pluginAPI.ShowTools(1);break;
			case tvKey.KEY_UP:$('#tvkey').html("Sura UP");self.up();break;
			//case tvKey.KEY_WHEELDOWN:$('#tvkey').html("Sura WHEELDOWN");break;
			//case tvKey.KEY_WHEELUP:$('#tvkey').html("Sura WHEELUP");break;
			//case tvKey.KEY_WLINK:$('#tvkey').html("Sura WLINK");break;
			//case tvKey.KEY_YELLOW:$('#tvkey').html("Sura YELLOW");break;
			default:alert("Unhandled key");break;
		}
	};
	
	/*
	 * 
	 */
	this.down = function(){
		if(i<suraList.length-1){
			if(i<(m-1) && l<m){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i++;l++;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}else if(i>=(m-1) && i<suraList.length-m && l==m){
				$('#list_sura ul li:nth-child('+m+')').removeClass('selected');
				i++;
				for(var j=1;j<=suraListLength;j++){
					$('#list_sura ul li:nth-child('+j+')').html(suraList[j+i-m].link);
				}
				$('#list_sura ul li:nth-child('+m+')').addClass('selected');
			}else if(i>=suraList.length-m && l<suraListLength){
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
		if(i>0){
			if(i<=(m-1) && l<=m){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i--;l--;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}else if(i>(m-1) && i<=suraList.length-m && l==m){
				$('#list_sura ul li:nth-child('+m+')').removeClass('selected');
				i--;
				for(var j=1;j<suraListLength+1;j++){
					$('#list_sura ul li:nth-child('+j+')').html(suraList[j+i-m].link);
				}
				$('#list_sura ul li:nth-child('+m+')').addClass('selected');
			}else if(i>suraList.length-m && l>m){
				$('#list_sura ul li:nth-child('+l+')').removeClass('selected');
				i--;l--;
				$('#list_sura ul li:nth-child('+l+')').addClass('selected');
			}
		}
	};
};