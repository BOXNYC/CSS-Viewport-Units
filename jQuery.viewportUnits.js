/**
  * Moderizr-like pollyfill support test using jQuery
  */
(function($){
	$.viewportunits = false;
	$(function() {
	  var $window = $(window),
			  $body = $('body'),
			  $el = $('<div>').css('width', '50vw').appendTo($body),
			  w1 = Math.round($el.width()),
			  w2 = Math.round($window.width()/2);
		$el.remove();
	  if(w1 != w2) return;
	  $('html').addClass('viewportunits');
	  $.viewportUnits = true;
	});
})(jQuery);
