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

	//$(".tabs").tabs({active : 1, collapsible : true});

	// Fix article tabs width as parent height
	// And position them correctly

	$(".artinav-content > div").height("150px");

	$(".article-navbar").each(function (){
		var originalParent = $(this).parent();

		$(this).css({
			"position": "absolute",
			"z-index": "-1",
			"left": "0px",
			"top": "0px"
		});

		if (originalParent.height() < articleInitHeight) {
			$(originalParent).height(articleInitHeight);
			$(this).width(articleInitHeight);
		};

		$(this).css({
			width: originalParent.height(),
			paddingLeft: originalParent.css("padding-top"),
			paddingRight: originalParent.css("padding-bottom")
		});

		$(this).position({
			my: "left top",
			at: "left top",
			of: originalParent,
			collision: "none"
		});

		$(this).css("-webkit-transform-origin" ,"0% 0%");
		$(this).css("-webkit-transform", "rotate(90deg)");
	});
});