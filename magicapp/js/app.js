$(document).ready(function() {
	$(".icon-menu").click(function() {
		$('.nav').animate({
	      right: "0px"
	    }, 200);

	    $('body').animate({
	      right: "200px"
	    }, 200).addClass("overflow");


	});
	$("..icon-cancel").click(function() {
		$('.nav').animate({
	      right: "-200px"
	    }, 200);

	    $('body').animate({
	      right: "0px"
	    }, 200).removeClass("overflow");
	});
});