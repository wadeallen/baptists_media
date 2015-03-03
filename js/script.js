$(function() {

    impress().init();

    // Counter

	window.addEventListener('impress:stepenter', function() {
	    	$('.counts.active .timer').countTo({
	    	formatter: function (value, options) {
            return value.toFixed(1);
        }
	    	});
    });
    
    // Baptist Distinctive Points

	window.addEventListener('impress:stepenter', function() {
	  $('.point.active p').addClass('animated bounceInRight');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('point.past p').removeClass('animated bounceInRight');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('point.future p').removeClass('animated bounceInRight');
	});

	// Pictures Overview

	window.addEventListener('impress:stepenter', function() {
	  $('#overphoto.active h1').addClass('animated bounceInRight');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#overphoto.past h1').removeClass('animated bounceInRight');
	});
	window.addEventListener('impress:stepenter', function() {
	  $('#overphoto.future h1').removeClass('animated bounceInRight');
	});
	
});


// disable mousewheel
$(document).ready(function(){

document.onmousewheel = function(){ stopWheel(); } /* IE7, IE8 */
if(document.addEventListener){ /* Chrome, Safari, Firefox */
  document.addEventListener('DOMMouseScroll', stopWheel, false);
}

function stopWheel(e){
  if(!e){ e = window.event; } /* IE7, IE8, Chrome, Safari */
  if(e.preventDefault) { e.preventDefault(); } /* Chrome, Safari, Firefox */
  e.returnValue = false; /* IE7, IE8 */
  };
});



