$(document).ready(function(){
    
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        center: false,
        autoplay: true,
        autoPlaySpeed: 6000,
        autoPlayTimeout: 6000,
        autoplayHoverPause: true,
        dots: true,
        margin:20,
        

        responsive: {
            0:{
                items:1
            },
            800: {
                items:3
            },
            1100:{
                items:5
            }

        } 
       

    });
    
  });

