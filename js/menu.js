
$(window).scroll(function(){
    if ($(window).scrollTop() > 58) {
        $('.block-main-menu').addClass('main-menu-fixed');
        //$('.block-main-menu').addClass('navbar-fixed-top');
		
    }
    else {
        $('.block-main-menu').removeClass('main-menu-fixed')
        //$('.block-main-menu').removeClass('navbar-fixed-top')
    }
});




