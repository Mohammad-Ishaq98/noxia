(function ($) {
"use strict";

// meanmenu
$('#main-menu').meanmenu({
	meanMenuContainer: '.main-menu',
	meanScreenWidth: "992"
});
jQuery('main_menu na').superfish();
// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});

//slick
$('.slider_active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
	dots: true,
	arrows:false,
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: true,
		prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
		nextArrow:'<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


//data background
$("[data-background]").each(function(){
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});

//counter Up
$('.counter').counterUp({
	delay: 500,
	time: 1000
});
// owlCarousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */

	$('.popup-video').venobox({
		closeBackground:"red",
		framewidth : '1000px',
		spinner:'cube-grid',
    frameheight: '600px',
		spinColor	:'red',
	}); 


// isotop
// $('.grid').imagesLoaded( function() {
//   // filter items on button click
// 	$('.').on( 'click', 'button', function() {
// 		var filterValue = $(this).attr('data-filter');
// 		$grid.isotope({ filter: filterValue });
// 	});

// 	// init Isotope
// 	var $grid = $('.grid').isotope({
// 	  itemSelector: '.grid-item',
// 	  percentPosition: true,
// 	  masonry: {
// 		// use outer width of grid-sizer for columnWidth
// 		columnWidth: '.grid-item',
// 	  }
// 	});
// });
$('#container').imagesLoaded( function() {

	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

  var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		}
	})
});


//for menu active class
$('').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'slide', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
	activeOverlay: '', // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// WOW active
new WOW().init();


})(jQuery);