$(document).ready(function(){

	menuYloc = parseInt($("#navbarMain").css("top").substring(0,$("#navbarMain").css("top").indexOf("px")));

	$(window).scroll(function(event) {

		var y = $(window).scrollTop();

		var offset = menuYloc + y + "px";

		$("#navbarMain").animate({
			top : offset
		},{
	    duration: 500,
		queue : false});
	});

	$(".tabs").tabs({active : 1, collapsible : true});
});