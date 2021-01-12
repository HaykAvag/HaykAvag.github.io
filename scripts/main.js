$(document).ready(function () {
	var width = $(window).width();
	var height = $(window).height();
	width /= 13;
	
	$(".content").css("padding-right", width.toString() + "px");

	$(window).resize(function () {
		var width = $(window).width();
		width /= 13;
		$(".content").css("padding-right", width.toString() + "px");
		
		$("body").css("height", height.toString() + "px");
	});
});