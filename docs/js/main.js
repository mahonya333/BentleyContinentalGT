$(function(){
    $('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-arrow slick-prev">Prev</button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next">Next</button>',
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.reviews-slider-img',
    });

    $('.reviews-slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
    });

    let slideMassive = $(".reviews-slider__item");
    $("#reviews__total-slides").text('0' + slideMassive.length);

    $(".reviews-slider").on('afterChange', function (event, slick, currentSlide) {
        let slideNumber = (currentSlide < 9) ? ('0'+ (currentSlide + 1)) : (currentSlide + 1);
        $("#reviews__current-slide").text(slideNumber);
    });


});
// Подробнее http://api.yandex.ru/maps/
ymaps.ready(function () {
    var map = new ymaps.Map('map', {
        center: [53.90473, 27.551899],
        zoom: 10
    });
});
