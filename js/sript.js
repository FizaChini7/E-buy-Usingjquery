$(function($){
  //preloader js
  $(window).on('load',function(){
    $('.preloader').delay(300).fadeOut(1000);
  });

    //banner slider js

   $('#banner_part').slick({
    autoplay: true,
    speed: 500,
    arrows: true,
    dots: true,
     prevArrow: '<i class="fa-solid fa-arrow-left slick_arrows slick_left_arrow"></i>',
     nextArrow: '<i class="fa-solid fa-arrow-right slick_arrows slick_right_arrow"></i>',
     dotsClass: 'slick_dots banner_dots'
   });

   //latest_slide js
   $('.latest_slide').slick({
    slidesToShow: 4,
    arrows: true,
    dots:true,
    prevArrow: '<i class="fa-solid fa-arrow-left slick_arrows latest_slide_left_arrow"></i>',
     nextArrow: '<i class="fa-solid fa-arrow-right slick_arrows latest_slide_right_arrow"></i>',
     dotsClass: 'slick_dots latest_slide_dots'
   });

   //lightbox js
   new VenoBox({
    selector: ".VenoBox",
    spinner: 'grid',
    spinColor: 'red',
});
//wow js
new WOW().init();

//filter js
var mixer = mixitup('.filter_container');
$('.Featured_Products_menu ul li h4').on('click', function(){
  $('.Featured_Products_menu ul li h4').removeClass('active');
  $(this).addClass('active');
});
//counter up js
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
//menu js
var menuTop = $('#main_menu').offset().top;

$(window).on('scroll', function(){
   var scrollToTop = $(window).scrollTop();
   //menu js
   if(scrollToTop > menuTop){
      $('#main_menu').addClass('menuFix');
   }
   else{
    $('#main_menu').removeClass('menuFix');
   }

//back Top js

if(scrollToTop > 500){
  $('.backtop p').fadeIn(500)
}
else{
$('.backtop p').fadeOut(500)
}
});

//back top button
$('.backtop p').on('click', function(){
  $('html,body').animate({
      scrollTop: 0,
  },500);
});

//search
$('.active2 i').on('click', function(){
  $('.search_main').addClass('search_main_show');
});
$('.close_icon').on('click', function(){
  $('.search_main').removeClass('search_main_show');
});

});

