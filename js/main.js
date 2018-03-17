(function($){
"use strict";
// FLEX SLIDER
    if($(".flexslider")[0]) { 
        $('.flexslider').flexslider(
            { 
                "directionNav" : true,
                "controlNav" : false,
                "animation" : "fade",
                "prevText" : "",
                "nextText" : "",
                "animationLoop" : true,
                "animationSpeed" : 600,
                "slideshowSpeed" : 4000
            }
        );
    }


    // RESTYLE THE DROPDOWN MENU
   /* var pillar =$('.pillar')
var header = $("#template");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
       if (scroll >= window.innerHeight) {
          pillar.fadeOut('8000');
        }
    }); */


  $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},2000);
                    
            }
            
        }); 
    
    });

  /* Magnific popup */
  $('.perma-images').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image'
  // other options
});

})(jQuery)