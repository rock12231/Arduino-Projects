function responsiveNav() {
    // menu SlideDown
    winWidth = jQuery(window).width(); 
    if(winWidth > 1023) {
        jQuery('.nav').find('li').mouseenter(function() {
            if(jQuery(this).hasClass('menu-item-has-children')){
                jQuery(this).addClass('menu-visible');
            }
            if(jQuery(this).hasClass('menu-item-has-mega-menu') || jQuery(this).parents('li').hasClass('menu-item-has-mega-menu')){
                jQuery(this).find('.mega-menu').stop().slideDown();
            } else  {
                jQuery(this).children('ul').stop().slideDown();
            }
        })
        jQuery('.nav').find('li').mouseleave(function() {
            if(jQuery(this).hasClass('menu-item-has-mega-menu') || jQuery(this).parents('li').hasClass('menu-item-has-mega-menu')){
                jQuery(this).removeClass('menu-visible').find('.mega-menu').stop().slideUp();
            } else {
                jQuery(this).children('ul').stop().slideUp();
            }
            jQuery(this).removeClass('menu-visible');
        })
    } else {
        jQuery('.nav').find('li').children('span').click(function(event){
            jQuery(this).parent('li').siblings('li').removeClass('menu-open').children('.sub-menu, .mega-menu').slideUp();
            if(jQuery(this).next('.sub-menu, .mega-menu').is(':visible')) {
                jQuery(this).next('.sub-menu, .mega-menu').stop().slideUp();
                jQuery(this).parent('li').removeClass('menu-open');
            } else {
                jQuery(this).next('.sub-menu, .mega-menu').stop().slideDown();
                jQuery(this).parent('li').addClass('menu-open');
            }
        });
    }
}

jQuery(document).ready(function() {
	winWidth = jQuery(window).width();
	
	// Scroll to top button
    wnHeight = jQuery(window).height();	
	//Check to see if the window is top if not then display button
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > wnHeight/2) {
			jQuery('.scroll-top').fadeIn();
		} else {
			jQuery('.scroll-top').fadeOut().removeClass('scrolling');
		}
	});	
	//Click event to scroll to top
	jQuery('.scroll-top').click(function(){
		jQuery('html, body').animate({scrollTop : 0},800);
		jQuery(this).addClass('scrolling');
	});

	responsiveNav();
    jQuery(window).click(function() {
        jQuery('body').removeClass('nav-visible no-scroll');
        jQuery('#menu-toggle').removeClass('open');
    })
	jQuery('#menu-toggle').click(function(e){
		jQuery('body').toggleClass('nav-visible no-scroll');
        jQuery(this).toggleClass('open');
        e.stopPropagation();
        //jQuery('.nav-col').fadeToggle();
	});
    jQuery('.nav-col').click(function(e) {
        e.stopPropagation();
    })

    jQuery('.search-btn').click(function() {
        jQuery('body').toggleClass('search-visible', function () {
            if(jQuery('body').hasClass('search-visible')) {
                setTimout(function () {
                    jQuery('.header-searchform').find('input[type="text"]').focus();
                }, 500);
            }
        });
    })
});

//   Pre Loader
if( (jQuery('.preloader-wrapper').length) >0){
    jQuery(window).load(function() {
        setTimeout(function(){
            jQuery('.preloader-wrapper').fadeOut();
        }, 1000);
    });
}
