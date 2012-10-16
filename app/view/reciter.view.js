reciterView = function(){
	var self = this;
	var list = new Array();
	var le = 15; // make 15 li elements
	var length = 0;//the length of the UI list
	var a =0;// the position in the reciterList array
	var b =1;// the position in the UI list
	var c = 0;//the middle of the UI list
	var p =0;
	
	
	this.init = function(){
		
		$('#list_sura').hide();
		$('#list_reciter').show();
		
		$('#list_reciter ul').remove();
		html = '<ul></ul>';
		$('#list_reciter').append(html);
		for(var j=0;j<le;j++){
			$('#list_reciter ul').append('<li></li>');
			$('#list_reciter ul li:nth-child('+(j+1)+')').html(self.list[j+a].name);
		}
		$('#list_reciter ul li:nth-child('+1+')').removeClass('selected');
		$('#list_reciter ul li:nth-child('+1+')').addClass('selected');
		
		length = $("#list_reciter li").size();//the length of the UI list
		c = ((length - length%2)/2 + 1);//the middle of the UI list
	};
	
	this.getPosition = function(){
		return a;
	};
	
	this.setList = function(arr){
		self.list = arr;
	};
	
	/**
	 *
	 *
	 */
	this.down = function(){
		if(a<self.list.length-1){
			if(a<(c-1) && b<c){
				$('#list_reciter ul li:nth-child('+b+')').removeClass('selected');
				a++;
				b++;
				$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
			}else if(a>=(c-1) && a<self.list.length-c && b==c){
				$('#list_reciter ul li:nth-child('+c+')').removeClass('selected');
				a++;
				for(var j=1;j<length+1;j++){
					$('#list_reciter ul li:nth-child('+j+')').html(self.list[j+a-c].name);
				}
				$('#list_reciter ul li:nth-child('+c+')').addClass('selected');
			}else if(a>=self.list.length-c && b<length){
				$('#list_reciter ul li:nth-child('+b+')').removeClass('selected');
				a++;
				b++;
				$('#list_reciter ul li:nth-child('+b+')').addClass('selected');
			}
		}
		p = (a-a%le)/le;
		alert('reciter page: ' + p);
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
			}else if(a>(c-1) && a<=self.list.length-c && b==c){
				$('#list_reciter ul li:nth-child('+c+')').removeClass('selected');
				a--;
				for(var j=1;j<length+1;j++){
					$('#list_reciter ul li:nth-child('+j+')').html(self.list[j+a-c].name);
				}
				$('#list_reciter ul li:nth-child('+c+')').addClass('selected');
				alert('up2 pos i: '+a +'pos l:' +b);
			}else if(a>self.list.length-c && b>c){
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
	
	this.middle = function(){
		return ((self.list.length - self.list.length%le)/le);
	}
	/**
	 *
	 *
	 */
	this.nextPage = function(){
		alert(self.middle());
		if(p< self.middle()){
			p++;
			a= p*le;
			b=1;
			$('#list_reciter ul').remove();
			html = '<ul></ul>';
			$('#list_reciter').append(html);
			for(var j=0;j<le;j++){
				if((j + a)<self.list.length){
					$('#list_reciter ul').append('<li></li>');
					$('#list_reciter ul li:nth-child('+(j+1)+')').html(self.list[a + j].name);
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
				if((j + a)<self.list.length){
					$('#list_reciter ul').append('<li></li>');
					$('#list_reciter ul li:nth-child('+(j+1)+')').html(self.list[a + j].name);
					alert('page nr: '+ p +'; pos: '+ (j + a));
				}
			}
		}
	};
	
};