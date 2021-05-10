(function($){
	"use strict";

	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
	// END PRELOADER JS CODE
	$(document).ready(function () {
		$('.open-menu-btn').on('click', function(){
			if($('body').hasClass('closed-menu')){
			  $('body').removeClass('closed-menu');
			}else  $('body').addClass('closed-menu');
		  });
		}); 
		 
			$(document).ready(function() {
			$(".megamenu").on("click", function(e) {
				e.stopPropagation();
			});
		});
		
	$(document).ready(function(){

		var quantitiy=0;
		$('.quantity-right-plus').click(function(e){
					
					// Stop acting like a button
					e.preventDefault();
					// Get the field name
					var quantity = parseInt($('#quantity').val());
					
					// If is not undefined
						
						$('#quantity').val(quantity + 1);
			
					  
						// Increment
					
		});
			
		$('.quantity-left-minus').click(function(e){
				// Stop acting like a button
				e.preventDefault();
				// Get the field name
				var quantity = parseInt($('#quantity').val());
				
				// If is not undefined
				
					// Increment
					if(quantity>0){
					$('#quantity').val(quantity - 1);
					}
		});
				
	});

	$(document).on('ready', function(){
		

        // START WOW ACTIVE JS CODE
		new WOW().init();
		// END WOW ACTIVE JS CODE

		// START CUSTOMER LOGOS SLIDER JS CODE
		$('.customer-logos').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 1000,
			arrows: false,
			dots: false,
			pauseOnHover: false,
			margin: 10,
			responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 5
				}
			  },{
				breakpoint: 768,
				settings: {
					slidesToShow: 4
				}
			  }, {
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}]
		});
		// END CUSTOMER LOGOS SLIDER JS CODE
		
		// START CUSTOMER LOGOS SLIDER JS CODE
		$('.popular-item').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: true,
			dots: false,
			pauseOnHover: false,
			margin: 10,
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-caret-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fas fa-caret-left"></i></div>',
			responsive: [{
				breakpoint: 1100,
				settings: {
					slidesToShow: 6
				}
			  },{
				breakpoint: 992,
				settings: {
					slidesToShow: 5
				}
			  },{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			  }, {
				breakpoint: 520,
				settings: {
					slidesToShow: 2
				}
			}]
		});
		// END CUSTOMER LOGOS SLIDER JS CODEcategory-slider

		// START CUSTOMER LOGOS SLIDER JS CODE
		$('.category-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			autoplaySpeed: 3000,
			arrows: true,
			dots: false,
			pauseOnHover: false,
			margin: 10,
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="assets/image/right-arrow.png" alt="right"></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="assets/image/left-arrow.png" alt="left"></div>',
			
		});
		// END CUSTOMER LOGOS SLIDER JS CODE

		// START TESTIMONIALs SLIDER JS CODE
		$(".testimonials").slick({
			autoplay:false,
			autoplaySpeed:10000,
			speed:600,
			slidesToShow:1,
			slidesToScroll:1,
			pauseOnHover:false,
			dots:false,
			pauseOnDotsHover:true,
			cssEase:'linear',
			nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><i class="fas fa-chevron-right"></i></div>',
			prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><i class="fas fa-chevron-left"></i></div>',
			
			responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			  }, {
				breakpoint: 520,
				settings: {
					slidesToShow: 1
				}
			}]
		});
		// END TESTIMONIALS SLIDER JS CODE

		var value = 0
			$(".counter").val(value);
			$('.increment').on("click", function() {
			value = parseInt(value+1);
			$(".counter").val(value);
			});
			$('.decrement').on("click", function(){
			if(value > 0){
				value = parseInt(value-1);
				$(".counter").val(value);
			}else{
				value = 0;
				$(".counter").val(value);
			}
		});

		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="fas fa-caret-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
			return false;
		});
		// END TOP BUTTON JS CODE
		
	});

	(function() {

		var parent = document.querySelector(".range-slider");
		if(!parent) return;
	  
		var
		  rangeS = parent.querySelectorAll("input[type=range]"),
		  numberS = parent.querySelectorAll("input[type=number]");
	  
		rangeS.forEach(function(el) {
		  el.oninput = function() {
			var slide1 = parseFloat(rangeS[0].value),
				  slide2 = parseFloat(rangeS[1].value);
	  
			if (slide1 > slide2) {
					  [slide1, slide2] = [slide2, slide1];
			  // var tmp = slide2;
			  // slide2 = slide1;
			  // slide1 = tmp;
			}
	  
			numberS[0].value = slide1;
			numberS[1].value = slide2;
		  }
		});
	  
		numberS.forEach(function(el) {
		  el.oninput = function() {
				  var number1 = parseFloat(numberS[0].value),
						  number2 = parseFloat(numberS[1].value);
				  
			if (number1 > number2) {
			  var tmp = number1;
			  numberS[0].value = number2;
			  numberS[1].value = tmp;
			}
	  
			rangeS[0].value = number1;
			rangeS[1].value = number2;
	  
		  }
		});
	  
	  })();

	
}(jQuery));
