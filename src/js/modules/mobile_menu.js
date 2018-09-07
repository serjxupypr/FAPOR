let mobileMenu = {
    init: function () {
        $('.mobile-menu-opener').click(function () {
            $(this).toggleClass('opened');
            $('.main-header-navigation').stop().slideToggle(200);
        });
    }
};


export default mobileMenu;