;"use strict";
new WOW().init();
$(document).ready(function(){
   // Пользовательские функции 
   $(".whatsays_slider").slick({
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 1,
       arrows: true,
       prevArrow:'<img src="img/prev.png" alt="<" class="slick-prev" >',
       nextArrow:'<img src="img/next.png" alt="<" class="slick-next">',
       responsive: [
            {
              breakpoint: 1024,
              settings: {
                   slidesToShow: 2,
                   slidesToScroll: 1,
                   arrows: false,
              },
              breakpoint: 768,
              settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1,
                  arrows: false,
              }
            },
        ]
       
   });
    $(".gallery_link").fancybox();
    // jQeury smooth scroll
   $(".header_main_block").on("click","a", function (event) {
         event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
   });
    $(".buy_price_container").on("click","a", function (event) {
         event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
   });
    $(".header__top").on("click","a", function (event) {
         event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1500);
   });
});