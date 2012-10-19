playerView = (function(){
	var instance = null;
	
	return{
		getInstance : function()
		{
			alert('playerView.GetInstance');
			if ( instance == null) {
				instance = this;
			}
			return instance;
		},
		init : function(){
			//$('to')
		},
		buffer : function(percent){
			//$('#buffer').html("Buffering:" + percent + "%");
			$('#buffer').width(percent+'%');
		},
		progressbar : function(timePercent){
			//$('#progressbar').html(Math.floor(timePercent)+'%');
			$('#progressbar').width(Math.floor(timePercent)+'%');
		},
		curTime : function(time){
			var timeHTML = "";
			var timeHour = 0; var timeMinute = 0; var timeSecond = 0;
			timeHour = Math.floor(time/3600000);
	        timeMinute = Math.floor((time%3600000)/60000);
	        timeSecond = Math.floor((time%60000)/1000);
	        timeHTML = timeHour + ":";
	        if(timeMinute == 0)
	            timeHTML += "00:";
	        else if(timeMinute <10)
	            timeHTML += "0" + timeMinute + ":";
	        else
	            timeHTML += timeMinute + ":";
	        if(timeSecond == 0)
	            timeHTML += "00";
	        else if(timeSecond <10)
	            timeHTML += "0" + timeSecond;
	        else
	            timeHTML += timeSecond;
			$('#curtime').html(timeHTML);
		},
		totalTime : function(totime){
			var timeHTML = "";
			var totalTimeHour = 0; var totalTimeMinute = 0; var totalTimeSecond = 0;
			totalTimeHour = Math.floor(totime/3600000);
			totalTimeMinute = Math.floor((totime%3600000)/60000);
			totalTimeSecond = Math.floor((totime%60000)/1000);
			timeHTML = totalTimeHour + ":";
	        if(totalTimeMinute == 0)
	            timeHTML += "00:";
	        else if(totalTimeMinute <10)
	            timeHTML += "0" + totalTimeMinute + ":";
	        else
	            timeHTML += totalTimeMinute + ":";
	        if(totalTimeSecond == 0)
	            timeHTML += "00";
	        else if(totalTimeSecond <10)
	            timeHTML += "0" + totalTimeSecond;
	        else
	            timeHTML += totalTimeSecond;
			$('#totaltime').html(timeHTML);
		}
	};
})();