(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// code for responsive menu
		$(".header-bar").click(function (){
			$(".header-right").animate({
				"left":"0"
			});
		});		

		$(".back span").click(function (){
			$(".header-right").animate({
				"left":"-100%"
			});
		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);