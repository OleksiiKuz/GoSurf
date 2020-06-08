$(function(){

   $('.header-slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow_left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt=""></img>',
      asNavFor: '.slider-dots'
   });

   $('.slider-dots').slick ({
   slidesToShow: 4,
   slidesToScroll: 4,
   asNavFor: '.header-slider',

   });

   $('.surf-slider').slick ({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow_left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt=""></img>',
      asNavFor: '.map-slider',
      responsive: [
         {
            breakpoint: 1210,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            }
         }]
   });

   $('.map-slider').slick ({
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.surf-slider',
      focusOnSelect: true
   });

   $('.holder-slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow_left.svg" alt=""></img>',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow_right.svg" alt=""></img>',
      asNavFor: '.slider-dots'
   });


   //=================

   jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
   jQuery('.quantity').each(function () {
      var spinner = jQuery(this),
         input = spinner.find('input[type="number"]'),
         btnUp = spinner.find('.quantity-up'),
         btnDown = spinner.find('.quantity-down'),
         min = input.attr('min'),
         max = input.attr('max');

      btnUp.click(function () {
         var oldValue = parseFloat(input.val());
         if (oldValue >= max) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue + 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });

      btnDown.click(function () {
         var oldValue = parseFloat(input.val());
         if (oldValue <= min) {
            var newVal = oldValue;
         } else {
            var newVal = oldValue - 1;
         }
         spinner.find("input").val(newVal);
         spinner.find("input").trigger("change");
      });

   });

   $('.quantity-button').on('click', function () {
      let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('guest');

      $('.summ').html('$' + summ);
   });

   let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1 ) * $('.summ').data('guest');

   $('.summ').html('$' +  summ);



   $('.surfboadr-box__circle').on('click', function () {
      $(this).toggleClass('active')
      
   });

   $('.surfboadr-box__circle').on('click', function () {
      $('.surfboard-box__content').toggleClass('plus')

   });

   $('.surfboadr-box__circle--2').on('click', function () {
      $(this).toggleClass('active')

   });

   $('.surfboadr-box__circle--2').on('click', function () {
      $('.surfboard-box__content--2').toggleClass('plus')

   });

   $('.surfboadr-box__circle--3').on('click', function () {
      $(this).toggleClass('active')

   });

   $('.surfboadr-box__circle--3').on('click', function () {
      $('.surfboard-box__content--3').toggleClass('plus')

   });

   $('.menu-btn').on('click', function () {
      $('.menu-list').toggleClass('active')

   });

   $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top
      }, 1000, 'linear');
   });

   new WOW().init();

});