$(document).ready(function () {
    widgetParallax();
    HasRoundtrip();
    flightClass();
});

//
function widgetParallax() {
    $('div.bg-widget-banner').each(function() {
        var $obj = $(this);
        if($(window).width() > 992 ){
            $(window).scroll(function() {
                var animSpeed;
                if ($obj.hasClass('bg-blur')) {
                    animSpeed = 10;
                } else {
                    animSpeed = 15;
                }
                var yPos = -($(window).scrollTop() / animSpeed);
                var bgpos = '50% ' + yPos + 'px';
                $obj.css('background-position', bgpos);

            });
        }
    });
}

//
$('#flightClass').click(function(e){
    e.preventDefault();
    $('#flightClassBox').show();
});
function flightClass() {
    var coachfieldId = $("#flightClass");
    var radBtn = $('#flightClassBox input[name=classradios-btn]');
    var seledValue = $('#flightClassBox input[name=classradios-btn]:checked').val();

    $(coachfieldId).val(seledValue);
    $(radBtn).on('change', function () {
        $(coachfieldId).val( $(this).val() );
        $('#flightClassBox').hide();
    });

}


$("#switch_city").on('click', function () {
    if ($('#Origin').val() != "" && $('#Destination').val() != "") {
        var iconplane = $('#Origin').val();
        $('#Origin').val($('#Destination').val());
        $('#Destination').val(iconplane);
        var iconplane = $('#subLocOrigin').val();
        $('#subLocOrigin').val($('#subLocDestination').val());
        $('#subLocDestination').val(iconplane);
    }
});

//////////////////////////////////////////////RoundTrip And OneWay///////////////////////////////////////////////////////////////////////////////////
function HasRoundtrip() {
    if ($("#RoundMultiOnewayTrip").val() == "ONEWAY") {
        $('.Switch-flight').removeClass("Off");
        $('.Switch-flight').addClass("On");
        $('.round-trip').addClass("Osn");
        $("#hide-round").toggleClass("hide-trip");
        $('.one-ways').removeClass("clor-light");
        $('.round-trip').addClass("clor-light");
    }

    $('.Switch-flight').click(function () {
        try {
            $('.Switch-flight.Round').toggleClass('On').toggleClass('Off');
            $("#hide-round").toggleClass("hide-trip");
            $('.one-ways').toggleClass("clor-light");
            $('.round-trip').toggleClass("clor-light");
            var flag = $("#hide-round").hasClass("hide-trip");
            switch (flag) {
                case true:
                    $("#RoundMultiOnewayTrip").val(1);
                    $("#txtReturn1").val('');
                    $('#arrdaymob').text('Select');
                    $('#arryearmob').text('Date');
                    $("#txtArrival").val('');
                    $('#arrday').text('Select');
                    $('#arrmonth').text('');
                    $('#arrdayname').text('');
                    $('#arryear').text('Date');


                    $("#date_picker_range #return_span").hide();
                    $('#xslanding_caldr').hide();
                    $(".dash_sign").css('display', 'none');

                    var i = 0;
                    $(".ui-datepicker-calendar td.dp-highlight").each(function (index) {
                        if (!$(this).hasClass('ui-datepicker-current-day')) {
                            $(this).removeClass('dp-highlight');
                            $(this).attr('data-highlightclass', 'dp-highlight');
                        }
                        else {
                            i++;
                            if (i > 1) {
                                $(this).removeClass('dp-highlight');
                                $(this).removeClass('ui-datepicker-current-day');
                                $(this).find('a').removeClass('ui-state-active');
                                $(this).attr('data-highlightclass', 'dp-highlight ui-datepicker-current-day');
                                $(this).find('a').attr('data-highlightclass', 'ui-state-active');

                            }
                        }
                    });

                    break;
                case false:
                    $("#RoundMultiOnewayTrip").val("ROUNDTRIP");
                    $("#txtArrival").datepicker();
                    $("#date_picker_range #return_span").show();
            }
        }
        catch (e) { }

    });
}
