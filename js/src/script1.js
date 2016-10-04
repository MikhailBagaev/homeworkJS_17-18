
$(function() {
    var jcarousel = $('.jcarousel');
    jcarousel
        .on('jcarousel:create jcarousel:reload', function() {
                carousel = $(this),
                width = carousel.innerWidth();

            if (width > 900) {
                width = width / 4;
            } else if (width > 700) {
                width = width / 3;
            } else {
            	width = width /2;
            };
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
        })          
        .jcarousel({
            wrap: 'circular'
        });  
        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'                       
        });             	
        
        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });  
        $('.jcarousel-pagination')
            $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            }) 
            .jcarouselPagination({
        	perPage: 1,
            item: function(page) {        	
            return '<a href="#' + page + '">' + page + '</a>';
            }           
        });
 });