/*
jQuery(document).ready(function($) {
if ($('#home-v1-testimonial-slider').length) {
        $('#home-v1-testimonial-slider').owlCarousel({
            singleItem: true,
            stopOnHover: true,
            slideSpeed: 400,
            pagination: true,
            mouseDrag: true,
            touchDrag: true,
            lazyLoad: true
        });
    }
});
*/

$(document).ready(function(){
	
	
	
	
	$("#home-v1-testimonial-slider").owlCarousel({
		singleItem: true,
        stopOnHover: true,
        slideSpeed: 400,
        pagination: true,
        mouseDrag: true,
        touchDrag: true,
        lazyLoad: true,
		items: 1
		});
		
	if ($('#home-v1-gallery-slider').length) {
        $('#home-v1-gallery-slider .gallery-slider').owlCarousel({
            items: 4,
            itemsDesktop: [1200, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [600, 2],
            itemsTabletSmall: [560, 1],
            itemsMobile: false,
            stopOnHover: true,
            slideSpeed: 400,
            pagination: false,
            mouseDrag: true,
            touchDrag: true,
			lazyLoad: true,
			dots: false,
			
			responsiveClass:true,
				responsive:{
					0:{
						items:1,
						nav : true,
						/*navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]*/
						/*navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]*/
						navText: ["",""]
					},
					560:{
						items:1,
						nav : true,
						/*navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]*/
						/*navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]*/
						navText: ["",""]
					},
					600:{
						items:2,
						nav : true,
						/*navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]*/
						/*navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]*/
						navText: ["",""]
					},
					991:{
						items:3,
						nav : true,
						/*navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]*/
						/*navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]*/
						navText: ["",""]
					},
					1200:{
						items:4,
						nav : true,
						/*navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]*/
						/*navText: ["<img src='img/left.png'>","<img src='img/right.png'>"]*/
						navText: ["",""]
					},
				}
        });

        $('#home-v1-gallery-slider .owl-next').click(function(){
           // $('#home-v1-gallery-slider .gallery-slider').trigger('owl.next');
        })
        $('#home-v1-gallery-slider .owl-prev').click(function(){
            //$('#home-v1-gallery-slider .gallery-slider').trigger('owl.prev');
        });
    };
	
	if ($('#trainers-gallery-slider').length) {
        $('#trainers-gallery-slider .trainer-slider').owlCarousel({
            items: 4,
            itemsDesktop: [1200, 4],
            itemsDesktopSmall: [991, 3],
            itemsTablet: [600, 2],
            itemsTabletSmall: [560, 1],
            itemsMobile: false,
            stopOnHover: true,
            slideSpeed: 400,
            pagination: false,
            mouseDrag: true,
            touchDrag: true,
			lazyLoad: true,
			dots: false,
			
			responsiveClass:true,
				responsive:{
					0:{
						items:1,
						nav : true,
						
						navText: ["",""]
					},
					560:{
						items:1,
						nav : true,
						
						navText: ["",""]
					},
					600:{
						items:2,
						nav : true,
						
						navText: ["",""]
					},
					991:{
						items:3,
						nav : true,
						
						navText: ["",""]
					},
					1200:{
						items:4,
						nav : true,
						
						navText: ["",""]
					},
				}
        });

        $('#trainers-gallery-slider .owl-next').click(function(){
            $('#trainers-gallery-slider .trainer-slider').trigger('owl.next');
        })
        $('#trainers-gallery-slider .owl-prev').click(function(){
            $('#trainers-gallery-slider .trainer-slider').trigger('owl.prev');
        });
    };
	
	
});


