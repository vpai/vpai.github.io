$(document).ready(function() {

	function scrollToAnchor(aid){
	    var aTag = $("a[name='"+ aid +"']");
	    $('html,body').animate({scrollTop: aTag.offset().top});
	}

	$(".link").click(function() {
		var text = $(this).text().toLowerCase();
		scrollToAnchor(text);
	});
});

