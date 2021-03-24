$(document).ready(function() {	
			
              $('.owl-carousel').owlCarousel({
				 
                items: 4,
                loop: false,
                center: true,
                margin: 60,
				nav:true,
				dots: false,
                callbacks: true,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash',
				responsiveClass:true,
				responsive:{
					0:{
						items:2,
						center: true,
						margin: 30,
						nav:true
					},
					600:{
						items:2,
						nav:false
					},
					1000:{
						items:4,
						nav:true,
						loop:false
					}
				}
              });
			  
			  $('.owl-carousel').on('changed.owl.carousel', function(event) {
				  var current = event.item.index;
				  var hash = $(event.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
				  //$('.'+hash).addClass('active-test');
				  $('span').removeClass('pro-active');
				   $("[data-hash*='"+hash+"'] span").addClass('pro-active');
				  var test = hash;
				  console.log(hash);
				  
				  $('.filter_span_active').removeClass('active');
				  $('.button.secondary').removeClass('active');
				  $('#'+test+'_fi').addClass('active');
				  $('#'+test+'_fi .filter_span_active').addClass('active');
				 //console.log($('#'+test+' .filter-btn'));
			});   

			$('.owl-next span').html('<img src="img/right-arrow.png" alt="arrow" style="padding-top:0">');
			$('.owl-prev span').html('<img src="img/left-arrow.png" alt="arrow" style="padding-top:0">');
			 
			  // slider for surprising section
			  $('.letterSlider').slick({
				  dots: false,
				  infinite: true,
				  speed: 5000,
				  arrows: false,  
				  slidesToShow: 3,
				  variableWidth: true,
				  draggable: false,
				  slidesToScroll: 1,
				  cssEase: 'linear',
				  autoplay: true,
				  pauseOnHover:false,
				  autoplaySpeed: 0,
				  initialSlide: 1,

				});
				
				// slider for featured section
				$(".logo_div").slick({
				  asNavFor: '.logo_div_caption',
				  infinite: false,
				  speed: 200,
				  slidesToShow: 5,
				  slidesToScroll: 1,
				  arrows: false
				})

				$(".logo_div_caption").slick({
				  asNavFor: '.logo_div',
				  infinite: false,
				  speed: 200,	
				  fade:true,
				  arrows: false	
				})
				$('.logo_div').on('mouseenter', '.slick-slide', function (e) {
					index = $(this).data('slick-index'),
					slickObj = $('.logo_div').slick('getSlick');
					slickObj.slickGoTo(index); 
				});
				
				// slider for insta-gallery section
				$('.galleyDiv_product').slick({
				  dots: false,
				  infinite: true,
				  speed: 5000,
				  arrows: false,  
				  slidesToShow: 3,
				  variableWidth: true,
				  draggable: false,
				  slidesToScroll: 1,
				  cssEase: 'linear',
				  autoplay: true,
				  pauseOnHover:true,
				  autoplaySpeed: 0,
				  initialSlide: 1,
				});
				
				
				
				
 });
         
		 