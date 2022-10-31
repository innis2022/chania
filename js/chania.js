$(document).ready(function(){
	$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});

	//메뉴아이콘 클릭시
	$("header button").click(function(){
		$("#black").fadeIn("fast");
		$("nav").animate({left:0}, "slow");
	});

	//메뉴항목 클릭시
	$("nav a").click(function(){
		$("#black").fadeOut("fast");
		$("nav").animate({left:"-65%"}, "slow");
	});

	//이미지 페이드슬라이드
	const autoSlide = setInterval(fade, 1800);
	let i =2;
	function fade(){
		$("figure img").eq(i).fadeOut(1000);
		i--;
		if(i == -1){ //true
			$("figure img").fadeIn(1000);
			i = 2;
		}
	}


















});////////////////end