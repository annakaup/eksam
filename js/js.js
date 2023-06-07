/* $(document).ready(function(){
    
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
    
  });  */

  $('.owl-carousel').owlCarousel({ loop:true, margin:10, responsiveClass:true, responsive:{ 0:{ items:1, nav:true }, 600:{ items:2, nav:false }, 1000:{ items:3, nav:true, loop:false } } })

