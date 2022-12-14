$(function () {
  $('.toggler').click(function () {
    $('.header').toggleClass('opened');
  });

  $('.dropdown').click(function () {
    $(this).toggleClass('active');
  });

  $('.carousel').slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  });


  initializeFirstScreenSlider();
  initializePlaylistSliders();
});

const initializeFirstScreenSlider = () => {
  const sliders = $('.sliders');
  const currentSlideSpan = $('.counter #current');
  const totalSlidesSpan = $('.counter #total');

  sliders.on('init reInit', function (event, slick, currentSlide, nextSlide) {
    totalSlidesSpan.text(`0${slick.slideCount}`);
  });


  sliders.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    currentSlideSpan.text(`0${i}`);
  });

  sliders.slick({
    autoplay: 2000,
    dots: false,
    prevArrow: $('.prev-loc'),
    nextArrow: $('.next-loc'),
    infinite: true,
    speed: 500,

  });
};

const initializePlaylistSliders = () => {
  $('.playlist-slider').slick({
    mobileFirst: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerPadding: '30px',
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '60px',
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '110px',
          slidesToShow: 3,
        }
      }
    ]
  });
};




