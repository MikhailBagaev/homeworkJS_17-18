$(function() {
    $( '.drop' ).hover(
        function(){
            $(this).children('.sub-menu').stop().slideDown(600);
        },
        function(){
            $(this).children('.sub-menu').stop().slideUp(600);
        });  
    $('.drop').hover(
        function(){
    $('.sub-menu li a').addClass('hover');
    });
});