$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
    });
    $('.hero_slides_change').text(1)
    $('.owl-carousel').on('changed.owl.carousel', function(e) {
        if (!e.namespace || e.property.name != 'position') return  
        $('.hero_slides_change').text((e.item.index-1))
    })
    $('.header-burger__menu').on('click', () => {
        $('.header-burger__menu_active').toggleClass('active_burger');
        $('.header-burger__menu').toggleClass('active_menu');
    })
});