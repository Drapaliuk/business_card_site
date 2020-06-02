$(document).ready(function(){
  $('.testimonials-slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      appendArrows: '.testimonials__inner',
      appendDots: '.testimonials__inner',
  });
})

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  // $("body").toggleClass("locked");
});

$('.overlay').click(function() {
  $(this).removeClass('open');
  $('.navBurger').removeClass('active');
});


$(document).ready(function(){
  $(".menu").on("click", "a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top - 20;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
