$(document).ready(function() {
	$("#aRodrigo").click(function(){
		$(".jLinks").removeClass("on");
		$(this).addClass("on");									  
		$.Juitter.start({
			searchType:"fromUser",
			searchObject:"mrjuitter,rodrigofante",
			live:"live-120" // it will be updated every 120 seconds/2 minutes
		});
	});
	$("#aIphone").click(function(){
		$(".jLinks").removeClass("on");
		$(this).addClass("on");									   
		$.Juitter.start({
			searchType:"searchWord",
			searchObject:"iPhone,apple,ipod",
			live:"live-20"  // it will be update every 20 seconds 
		});
	});
});
