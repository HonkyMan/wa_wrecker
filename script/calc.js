var vehicle = [800, 1200, 1500, 2000, 5000, 5000]; var loading = 500; var out = 30; var helmPrice = 500; var wheelPrice = 500;
var type = 0;       //тип авто
var distance = 0;   //Расстояние от города
var wheelBlock = 0; //Блокированы колеса || не блокированы
var helmBlock = 0;  //Блокирован руль || не блокирован
var sum = 0;
var count = 0;

$(document).ready(function() { 
    $(document).on('click', '.vehicle_choice', function(){
		$('.vehicle_choice').removeClass('shadowed');
		$(this).addClass('shadowed');
		$('.car_type').val($(this).attr('data-item'));
        type = $(this).attr('data-item');
        calculation();
	});

    $(document).on('click', '#city', function(){ //Выбор по городу
        calculation(0);
    });

    $(document).on('click', '#country', function(){ //Выбор за городом
        count_km();
    });

    $(document).on('click', '#calc-country_km', function(){
        var km = $(this).val();
        if(!$('#country').prop('checked')){
            document.getElementById("country").checked = true;
        };
        $('#from').val(1); //0 - город, 1 - загород
    });

    $(document).on('click', '#calc-wheel_blocked', function(){
        var temporary = $(this).attr('data-wheel');
        if(temporary != 0) wheelBlock = 1; //$(this).attr('data-wheel');
        else wheelBlock = 0;
        calculation();
    });
    $(document).on('click', '#calc-helm_blocked', function(){
        if(count == 0) {helmBlock = 1; ++count;}
        else if(count == 1) {helmBlock = 0; --count;}
        calculation();
    });
}); 

function calculation(x = 0)
{
    distance = x;
    sum = vehicle[type] + out * distance + wheelBlock * wheelPrice + helmBlock * helmPrice;
    if(distance != 0) sum += loading;
    $('#final_cost').val(sum);
}

function count_km(){
    var x = document.getElementById("calc-country_km").value;
    calculation(x);
}




// $(document).on('click', '#car_type', function(){
    //     //document.getElementById("city").checked = true;
    //     //document.getElementById("calc-wheel_blocked_0").checked = true;
    //     type = $(this).attr('data-item');
    //     $('#car_num').val(type);
    //     if($('#city').prop('checked') && $('#calc-wheel_blocked_0').prop('checked'))
    //     {
    //         sum = vehicle[type];
    //     }
    //     $('#final_cost').val(sum);
    // });