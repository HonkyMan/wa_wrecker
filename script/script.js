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
    $(document).on('click', '#order_wreck', function(){
        $('#type_of_car').val($(this).attr('data-target'));
        window.scrollBy(0, -1500);
    });
}); 