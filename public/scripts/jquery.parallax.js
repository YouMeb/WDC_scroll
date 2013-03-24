$(window).scroll(function(e) {
	
	/* -------------- parallax scroll ---------------- */	
	var delay = 0;
	var bg_speed = 0.2;	
	var object_speed = 0.1; 
	var object_speed2 = 0.2; 
	var object_speed3 = 0.3;
	var object_speed4 = 0.4;
	var object_speed5 = 0.5;
	var object_speed6 = 0.6;
	var object_speed7 = 0.7;
	var object_speed8 = 0.8;
	var container_offset = -300;
	var scroll_position = $(window).scrollTop();
	var wHeight = $(window).height();

	$("#main-content").stop().animate({ top : 0 - scroll_position}, delay);
	if (scroll_position >= 0 && scroll_position <= 1300) {

		$(".home-txt1").stop().animate({ top : (0 * object_speed8) + (scroll_position * object_speed8)}, delay);
		$(".home-txt2").stop().animate({ top : (0 * object_speed7) + (scroll_position * object_speed7)}, delay);
		$(".home-txt3").stop().animate({ top : (0 * object_speed7) + (scroll_position * object_speed6)}, delay);
		$(".home-txt4").stop().animate({ top : (0 * object_speed5) + (scroll_position * object_speed5)}, delay);
		$(".home-txt5").stop().animate({ top : (0 * object_speed5 * 1.2) + (scroll_position * object_speed6)}, delay);
		$(".home-txt6").stop().animate({ top : (0 * object_speed5 * 1.2) + (scroll_position * object_speed5)}, delay);
		$(".home-txt7").stop().animate({ top : (0 * object_speed5 * 1.1) + (scroll_position * object_speed4)}, delay);
		$(".home-txt8").stop().animate({ top : (0 * object_speed5 * 2.0) + (scroll_position * object_speed4)}, delay);
	}
	
	if (scroll_position >= 0 && scroll_position <= 2600) {
		$(".box-about1").stop().animate({ top : (-820 * object_speed5 * 1.8) + (scroll_position * object_speed5)}, delay);	
		$("#about-h2").stop().animate({ top : (-920 * object_speed2* 1.8) + (scroll_position * object_speed2)}, delay);	
		$(".box-about2").stop().animate({ top : (650 * object_speed2 * 1.8) + (scroll_position * object_speed2)}, delay);
		$("#about2-h3").stop().animate({ top : (-1286 * object_speed2  * 1.2) + (scroll_position * object_speed2)}, delay);
		$(".box-about3").stop().animate({ top : (650 * object_speed * 10) + (scroll_position * object_speed)}, delay);	
		$("#about3-h3").stop().animate({ top : (-980 * object_speed2 * 1.8) + (scroll_position * object_speed2)}, delay);
	}	
	if(scroll_position >= 1300 && scroll_position <= (2700-wHeight)){
		$('.city3c').css({'position':'fixed','bottom':0});
		$('.city2c').css({'position':'fixed','bottom':0});
		$('.city1c').css({'position':'fixed','bottom':0});
		$('.title1').css({'position':'fixed','top':0})
	}else{
		$('.title1').css({'position':'absolute','top':''})
		$('.city3c').css({'position':'absolute','bottom':0});
		$('.city2c').css({'position':'absolute','bottom':0});
		$('.city1c').css({'position':'absolute','bottom':0});
	}
	if(scroll_position>= (2700-wHeight)){
		$('.title1').css({'position':'fixed','top':-(scroll_position-(2700-wHeight))})
	}

	// if(scroll_position >(2700-wHeight)){
	// 	$('.city3c').css({'position':'absolute','bottom':0});
	// 	$('.city2c').css({'position':'absolute','bottom':0});
	// 	$('.city1c').css({'position':'absolute','bottom':0});
	// }
	//1200為不斷提昇城市最上
	//2600為不斷提昇城市最下
	//2700為走過的城市最上
	//4000為走過的城市最下
	if (scroll_position >= 1200 && scroll_position <= 3600) {
		console.log('ohya');
	    $("#portfolio-h2").stop().animate({ top : (-1800 * object_speed * 1.8) + (scroll_position * object_speed)}, delay);	
	}	
	
	if (scroll_position >= 2400 && scroll_position <= 4800) {		
		$(".box-service1").stop().animate({ top : (-2200 * object_speed * 1.8) + (scroll_position * object_speed)}, delay);
		$("#service-h2").stop().animate({ top : (-2320 * object_speed3 * 1.8) + (scroll_position * object_speed3)}, delay);
		$(".box-start").stop().animate({ top : (-4000 * object_speed2 ) + (scroll_position * object_speed2)}, delay);
	    $(".txt-2").stop().animate({ top : (-4000 * object_speed3 * 1.8) + (scroll_position * object_speed)}, delay);
	}	

	if (scroll_position >= 3782 && scroll_position <= 6000) {		
		$(".box-contact").stop().animate({ top : (-5300 * object_speed5) + (scroll_position * object_speed5)}, delay);	
		$("#contact-h2").stop().animate({ top : (-5650 * object_speed2) + (scroll_position * object_speed2)}, delay);	
		$(".map")        .stop().animate({ top : (-6760 * object_speed4) + (scroll_position * object_speed5)}, delay);			
		$(".box-tweeter").stop().animate({ top : (-3800 * object_speed3) + (scroll_position * object_speed3)}, delay);
		$("#form-h3").stop().animate({ top : (-5580 * object_speed2) + (scroll_position * object_speed2)}, delay);

	}	
});
	