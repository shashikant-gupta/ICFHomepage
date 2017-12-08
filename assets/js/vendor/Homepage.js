$(document).ready(function() { 

    (function ($) { 
        
        $('ul.dealTabs li ').click(function (g) {
           $('html').animate({
                       scrollTop: $(".dealTabs").offset().top -100
               }, 1500);
         
            var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();                
            
            tab.find('ul.dealTabs > li').removeClass('active');
            $(this).closest('li').addClass('active');
            
            tab.find('.icfstatic_deals').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.icfstatic_deals').find('div.tabs_item:eq(' + index + ')').slideDown();
            
            g.preventDefault();
        } );
    })(jQuery);


   document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });


});

////////////////////////////////////////////// Header scroll ///////////////////////////////////////////////////////////////////////////////////
    $(document).on("scroll", function() {
        if ($(document).scrollTop() > 600) {
          $("#header").addClass("smallHeader");
        } else {
          $("#header").removeClass("smallHeader");
        }
      });



      
