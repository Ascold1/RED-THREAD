;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
   $(".whatsays_slider").slick({
       infinite: true,
       slidesToShow: 2,
       slidesToScroll: 1,
       arrow: true,
       prevArrow:'<img src="img/prev.png" alt="<" class="slick-prev" >',
       nextArrow:'<img src="img/next.png" alt="<" class="slick-next">',
       
   });
    $(".gallery_link").fancybox();
});