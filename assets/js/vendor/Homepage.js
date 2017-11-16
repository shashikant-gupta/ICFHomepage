/*$(function() {
        'use strict';
        $(document).ready(function(){
            $(".filter-deals").click(function(){
                var value = $(this).attr('data-filter');
                if(value == "all")
                {
                    //$('.filter').removeClass('hidden');
                    $('.items-filter').show('1000');
                }
                else
                {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
                    $(".items-filter").not('.'+value).hide('3000');
                    $('.items-filter').filter('.'+value).show('3000');
                    if ($(".filter-deals").removeClass("active")) {
                $(this).removeClass("active");
            }
            $(this).addClass("active");

                }


            });
            document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
  });

        });        

    });*/
$(document).ready(function() { 

    (function ($) { 
        
        $('ul.dealTabs li ').click(function (g) {
            $('html').animate({
                        scrollTop: $(".dealTabs").offset().top
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
