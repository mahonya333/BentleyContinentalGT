$(function () {
  $(".reviews-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-arrow slick-prev"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
    </svg></button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next"><svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
    </svg></button>`,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: ".reviews-slider-img",
  });

  $(".reviews-slider-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
  });

  let slideMassive = $(".reviews-slider__item");
  $("#reviews__total-slides").text("0" + slideMassive.length);

  $(".reviews-slider").on("afterChange", function (event, slick, currentSlide) {
    let slideNumber =
      currentSlide < 9 ? "0" + (currentSlide + 1) : currentSlide + 1;
    $("#reviews__current-slide").text(slideNumber);
  });
});
// Подробнее http://api.yandex.ru/maps/
ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [53.90473, 27.551899],
    zoom: 10,
  });
});
