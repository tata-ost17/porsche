$(function(){
   $('.header__slider-top').slick({
      dots: true,
      prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/prev-arrow.svg" alt=""></button>',
      nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next-arrow.svg" alt=""></button>',
      asNavFor: '.header__slider-img',
      
   });

   $('.header__slider-img').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      asNavFor: '.header__slider-top',
      responsive: [
         {
            breakpoint: 501,
            settings: {
               slidesToShow: 2
            }
         }
      ]
        
   });

   $('.menu__btn').on('click', function () {
      $('.menu__btn').toggleClass('menu__btn--active');
      $('.menu__list').toggleClass('menu__list--active');
   });
  
});