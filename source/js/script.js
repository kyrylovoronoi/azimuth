'use strict';
(function () {

    var menuBtn = document.querySelector('.menu_icon');
    var menuContainer = document.querySelector('.menu_container');
    menuBtn.addEventListener('click', function () {
        if (menuBtn.classList.contains('closed')) {
            menuBtn.classList.remove('closed');
            menuBtn.classList.add('opened');
            menuContainer.classList.add('opened');
            menuContainer.classList.remove('closed');
        } else {
            menuBtn.classList.add('closed');
            menuBtn.classList.remove('opened');
            menuContainer.classList.remove('opened');
            menuContainer.classList.add('closed');
        }
    });

    //LIGHTBOX
    $('a.post1__more').fancybox({
        'overlayShow': true,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'hideOnContentClick': true,
        'centerOnScroll': true
    });

    // var windowWidth = document.documentElement.clientWidth;
    //
    // if(windowWidth < 800){
    //     $(document).ready(function() {
    //         $("a.post1__more").fancybox({
    //             'overlayShow': true,
    //             'transitionIn': 'elastic',
    //             'transitionOut': 'elastic',
    //             'hideOnContentClick': true,
    //             'centerOnScroll': true,
    //             'frameWidth': 30,
    //             'frameHeight': 30
    //         });
    //     });
    // }else{
    //
    // }

})();

