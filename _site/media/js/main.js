$(document).ready(function() {
	$("h1").click(function() {
		alert("hello world");
	});

	$(".posts").hover(function() {
		$(this).fadeTo(250, 1);
	}, function() {
		$(this).fadeTo(250, 0.5);	
	});

});

