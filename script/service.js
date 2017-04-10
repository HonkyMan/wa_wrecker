$(document).ready(function(){
    $('.my_img_1').hover(
        function() { $('.my_img_1').attr('src', 'images/services/car_1_hover.png'); },
        function() { $('.my_img_1').attr('src', 'images/services/car_1.png'); } 
    );
    $('.my_img_2').hover(
        function() { $('.my_img_2').attr('src', 'images/services/car_2_hover.png'); },
        function() { $('.my_img_2').attr('src', 'images/services/car_2.png'); } 
    );
    $('.my_img_3').hover(
        function() { $('.my_img_3').attr('src', 'images/services/car_3_hover.png'); },
        function() { $('.my_img_3').attr('src', 'images/services/car_3.png'); } 
    );
    $('.my_img_4').hover(
        function() { $('.my_img_4').attr('src', 'images/services/car_4_hover.png'); },
        function() { $('.my_img_4').attr('src', 'images/services/car_4.png'); } 
    );
    $('.my_img_5').hover(
        function() { $('.my_img_5').attr('src', 'images/services/car_5_hover.png'); },
        function() { $('.my_img_5').attr('src', 'images/services/car_5.png'); } 
    );
    $('.my_img_6').hover(
        function() { $('.my_img_6').attr('src', 'images/services/car_6_hover.png'); },
        function() { $('.my_img_6').attr('src', 'images/services/car_6.png'); } 
    );
    $(function(){
          $("#phone-1").mask("+7(999) 999-99-99");
          $("#phone-2").mask("+7(999) 999-99-99");
          $("#phone").mask("+7(999) 999-99-99");
    });
});