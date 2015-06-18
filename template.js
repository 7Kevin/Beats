$(".top").on("click" , function(){
	$(".home").hide();
	$(".contact").hide();
	$(".top20").show();
});

$(".con").on("click" , function(){
	$(".home").hide();
	$(".top20").hide();
	$(".contact").show();
});

$(".hom").on("click" , function(){
	$(".top20").hide();
	$(".contact").hide();
	$(".home").show();
});


