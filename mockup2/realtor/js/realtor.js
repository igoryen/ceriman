$(document).ready( function () {
	console.log("realtor.js");

	//===============================

	$('.iosSlider').iosSlider({
        desktopClickDrag: true,
        snapToChildren: true,
        infiniteSlider: true,
        navSlideSelector: '.sliderContainer .slideSelectors .item',
        onSlideComplete: slideComplete,
        onSliderLoaded: sliderLoaded,
        onSlideChange: slideChange,
        autoSlide: true,
        scrollbar: true,
        scrollbarContainer: '.sliderContainer .scrollbarContainer',
        scrollbarMargin: '0',
        scrollbarBorderRadius: '0',
        keyboardControls: true
    });

    function slideChange(args) {
                
        $('.sliderContainer .slideSelectors .item').removeClass('selected');
        $('.sliderContainer .slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
    
    }
    
    function slideComplete(args) {
        
        if(!args.slideChanged) return false;
        
        $(args.sliderObject).find('.text1, .text2').attr('style', '');
        
        $(args.currentSlideObject).find('.text1').animate({
            right: '100px',
            opacity: '0.8'
        }, 400, 'easeOutQuint');
        
        $(args.currentSlideObject).find('.text2').delay(200).animate({
            right: '50px',
            opacity: '0.8'
        }, 400, 'easeOutQuint');
        
    }
    
    function sliderLoaded(args) {
            
        $(args.sliderObject).find('.text1, .text2').attr('style', '');
        
        $(args.currentSlideObject).find('.text1').animate({
            right: '100px',
            opacity: '0.8'
        }, 400, 'easeOutQuint');
        
        $(args.currentSlideObject).find('.text2').delay(200).animate({
            right: '50px',
            opacity: '0.8'
        }, 400, 'easeOutQuint');
        
        slideChange(args);
        
    }

	//=========================	

	$(".barbara").hover( 
		function() {
			$( this ).css( "background", "rgba(255, 255, 255, 1)");

			$( this ).find("img").css({
				'-webkit-transform' : 'rotate(360deg)',
				'-moz-transform'    : 'rotate(360deg)',
				'-ms-transform'     : 'rotate(360deg)',
				'-o-transform'      : 'rotate(360deg)',
				'transform'         : 'rotate(360deg)'
			})
		}, 

		function() {
			$( this ).css( "background", "rgba(255, 255, 255, 0)");

			$( this ).find("img").css({
				'-webkit-transform' : 'rotate(0deg)',
				'-moz-transform'    : 'rotate(0deg)',
				'-ms-transform'     : 'rotate(0deg)',
				'-o-transform'      : 'rotate(0deg)',
				'transform'         : 'rotate(0deg)'
			})
		}
	);

	$(".item").hover( 
		function() {
			// alert("...")
			// $( this ).css( "background", "rgba(255, 255, 255, 1)");

			$( this ).find("img").css({
				// "width": "20em",
				'-webkit-transform' : 'rotate(360deg)',
				'-moz-transform'    : 'rotate(360deg)',
				'-ms-transform'     : 'rotate(360deg)',
				'-o-transform'      : 'rotate(360deg)',
				'transform'         : 'rotate(360deg)'
			})
		}, 

		function() {
			// $( this ).css( "background", "rgba(255, 255, 255, 0)");

			$( this ).find("img").css({
				'-webkit-transform' : 'rotate(0deg)',
				'-moz-transform'    : 'rotate(0deg)',
				'-ms-transform'     : 'rotate(0deg)',
				'-o-transform'      : 'rotate(0deg)',
				'transform'         : 'rotate(0deg)'
			})
		}
	);



});