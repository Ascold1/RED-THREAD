;"use strict";
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
});