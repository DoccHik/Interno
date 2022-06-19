window.addEventListener('load', function() {
    let menuBurgerIcon = document.querySelector('.header-menu__icon');
    let menuBurgerBody = document.querySelector('.header-menu__body');
    let body = document.querySelector('body');

    // const header = document.querySelector('.header');
    // const headerHeight = header.offsetHeight;
    // console.log(headerHeight);
    // const main = document.querySelector('.main');
    // const mainHight = main.offsetHeight;
    // console.log(mainHight);
    // let lastScrollTop = 0;

    // window.addEventListener('scroll', () => {
    //     let scrollDistance = window.scrollY;


    //     // // console.log(scrollDistance)
    //     // if (scrollDistance >= headerHeight) {
    //     //     header.classList.add('header-fixed');
    //     // } else {
    //     //     header.classList.remove('header-fixed');
    //     // }

    //     if (scrollDistance > lastScrollTop) {
    //         header.classList.add('header-fixed');
    //     } else {
    //         header.classList.remove('header-fixed');
    //     }

    //     lastScrollTop = scrollDistance;
    // })

    menuBurgerIcon.addEventListener('click', function() {
        this.classList.toggle('active');
        menuBurgerBody.classList.toggle('active');
        body.classList.toggle('lock');

    });

    // Скролл при клике по ссылкам Jquery

    $("a").on("click", function(e) {
        e.preventDefault();
        var anchor = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 60
        }, 800);
    });

})