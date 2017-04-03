$(document).ready(function() { 
    $("a.fancyimage").fancybox(); 
    $(".full_map").click(function(){
        window.open('https://goo.gl/US1GeD');
    });
    $("#vk").click(function(){
        window.open('https://vk.com');
    });
    $("#fb").click(function(){
        window.open('https://fb.com');
    });
    $("#tw").click(function(){
        window.open('https://twitter.com');
    });
    $(document).on('click', '.vehicle_choice', function(){
		$('.vehicle_choice').removeClass('shadowed');
		$(this).addClass('shadowed');
		$('.car_type').val($(this).attr('data-item'));
	});
    $(document).on('click', '#order_wreck', function(){
        $('#type_of_car').val($(this).attr('data-target'));
        window.scrollBy(0, -1500);
    });
    $(document).on('click', '#car_type', function(){
        document.getElementById("city").checked = true;
        document.getElementById("calc-wheel_blocked_0").checked = true;
        var type = $(this).attr('data-item');
        $('#car_num').val(type);
        if($('#city').prop('checked') && $('#calc-wheel_blocked_0').prop('checked'))
        {
            sum = vehicle[type];
        }
        $('#final_cost').val(sum);
    });
    $(document).on('click', '#calc-country_km', function(){
        var km = $(this).val();
        if(!$('#country').prop('checked')){
            document.getElementById("country").checked = true;
        };
        $('#from').val(1); //0 - город, 1 - загород
    });
    $(document).on('click', '#calc-wheel_blocked', function(){
        $('#final_cost').val(sum + wheelBlock);
    });
}); 
var vehicle = [800, 1200, 1500, 2000, 5000, 5000];
var loading = 1500;
var out = 30;
var wheelBlock = 500;
var sum = vehicle[0];

function count_km(){
    var x = document.getElementById("calc-country_km").value;
    $('#final_cost').val(sum + x * out + loading);
}