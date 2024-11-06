$(document).ready(function(){  

    // Carousel
    const slickCarousel = $('.js-carousel'),
          status = $('.js-status');
  
    if(slickCarousel.length > 0) {
      slickCarousel.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        status.text(i + '/' + slick.slideCount);
      }); 
      slickCarousel.slick({
        arrow: true, 
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              dots: true,
              arrow: false, 
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        customPaging: function (slider, i) {
          return  (i + 1) + '/' + slider.slideCount;
        }
      });
    
      $(window).resize(function () {
        slickCarousel.not('.slick-initialized').slick('resize');
      });
    
      $(window).on('orientationchange', function () {
        slickCarousel.not('.slick-initialized').slick('resize');
      });
    }   
  })