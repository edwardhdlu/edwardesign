$(function(){
 var transitionHeader = $(window).height() - 75;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= transitionHeader ) {
           $('.header').addClass('transition');
        }
        else {
            $('.header').removeClass('transition');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
    }
});

$(document).ready(function () {
  $('#load1').css('visibility','visible').hide().fadeIn(1000);
  $('#load2').css('visibility','visible').hide().delay(1000).fadeIn(1000);
  $('.scroll_arrow').css('visibility','visible').hide().delay(2000).fadeIn(1000, 
    function() {
      $(this).css({'-webkit-transition': 'all 0.5s',
                   '-moz-transition': 'all 0.5s',
                   'transition': 'all 0.5s'})
  });

  $(".scroll_arrow").click(function() {
    $('html, body').animate({
      scrollTop: $(".about").offset().top - 110
    }, 1000);
  });

  $('#home_link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  $('#about_link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(".about").offset().top - 110
    }, 1000);
  });

  $('#work_link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(".work").offset().top - 110
    }, 1000);
  });

  $('#contact_link').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(".contact").offset().top - 110
    }, 1000);
  });
});

