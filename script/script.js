$(document).ready(function() { 
    var year = new Date();
    year = year.getFullYear();
    var obj = document.getElementById("this-year");
    obj.innerHTML = year;
    
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
    $(document).on('click', '#order_wreck', function(){
        $('#type_of_car').val($(this).attr('data-target'));
        window.scrollBy(0, -1500);
    });
    $(function(){
          $("#phone-1").mask("+7(999) 999-99-99");
          $("#phone-2").mask("+7(999) 999-99-99");
          $("#phone-3").mask("+7(999) 999-99-99");
          $("#phone").mask("+7(999) 999-99-99");
    });
}); 