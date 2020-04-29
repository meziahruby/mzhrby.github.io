/* Template: Juno - Multipurpose Landing Page Pack
   Author: InovatikThemes
   Created: Mar 2019
   Description: Custom JS file
*/


(function($) {
    "use strict"; 

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    /* Moving navbar */
    $(window).scroll(function(){
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

    $(window).scroll(function(){
        $('topnav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

})(jQuery);