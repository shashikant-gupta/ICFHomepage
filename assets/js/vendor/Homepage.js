$(function() {
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

            

        });

    });