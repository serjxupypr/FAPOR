let slickSlider = {
    init: function () {
        this.$testimonialsSlider = $('.testimonials-list').slick({
            slidesToShow: 1,
            nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow-right"></span></button>',
            prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow-left"></span></button>',
            dots: false
        });
    }
};


export default slickSlider;