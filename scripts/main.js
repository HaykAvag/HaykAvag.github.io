$(document).ready(function () {
	var width = $(window).width();
	width /= 12;
	
	$(".content").css("padding-right", width.toString() + "px");

	$(window).resize(function () {
		var width = $(window).width();
		width /= 12;
		$(".content").css("padding-right", width.toString() + "px");
	});
});