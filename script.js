$(function(){
 var transitionHeader = 600;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= transitionHeader ) {
           $('.header').addClass('transition');
           $('.menu').addClass('transition');
        }
        else {
            $('.header').removeClass('transition');
            $('.menu').removeClass('transition');
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
      scrollTop: $(".about").offset().top + 70
    }, 1000);
  });
});

