(function () {

    //MOBILE MENU
    var menu_mobile = document.querySelector('.menu_mobile');
    var menu_mobile__container = document.querySelector('.menu_mobile__container');
    menu_mobile.addEventListener('click', function () {
        menu_mobile.classList.toggle('opened');
        menu_mobile__container.classList.toggle('opened');
    });

    //SLIDERS
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        speed: 300,
        arrows: false,
        dots: true,
        adaptiveHeight: true
    });

    //LIGHTBOX
    $('a.post1__more').fancybox({
        'overlayShow': true,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'hideOnContentClick': true,
        'centerOnScroll': true
    });

})();

