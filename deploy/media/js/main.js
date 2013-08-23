require.config({
	baseUrl: 'libs',
	paths: {
		jquery: 'http://code.jquery.com/jquery-2.0.3.min',
		modernizr: 'modernizr-1.7.min',
		dd_belatedpng: 'dd_belatedpng'
	}
});

require(['jquery'], function($) {

  // settings
  var $slider = $('.slider'); // class or id of carousel slider
  var $slide = 'figure'; // could also use 'img' if you're not using a ul
  var $transition_time = 1000; // 1 second
  var $time_between_slides = 4000; // 4 seconds

  function slides(){
    return $slider.find($slide);
  }

  slides().fadeOut();

  // set active classes
  slides().first().addClass('active');
  slides().first().fadeIn($transition_time);

  // auto scroll 
  $interval = setInterval(
    function(){
      var $i = $slider.find($slide + '.active').index();

      slides().eq($i).removeClass('active');
      slides().eq($i).fadeOut($transition_time);

      if (slides().length == $i + 1) $i = -1; // loop to start

      slides().eq($i + 1).fadeIn($transition_time);
      slides().eq($i + 1).addClass('active');
    }
    , $transition_time +  $time_between_slides
  );

});
