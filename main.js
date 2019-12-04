function startSlider() {

	      setInterval(function() {
	      	 var inWrap = $('.inner-wrapper');
          inWrap.animate({'left': '-200%'},1000, function() {
                inWrap.css('left', '-100%');
                $('.slide').last().after($('.slide').first());
            });
        }, 4000);

    }
    startSlider() ;

$(function() {

  var inWrap = $('.inner-wrapper');

  $('.prev').on('click', function() {

    inWrap.animate({left: '0%'}, 1000, function(){

      inWrap.css('left', '-100%');

      $('.slide').first().before($('.slide').last());

    });


  });



  $('.next').on('click', function() {

    inWrap.animate({left: '-200%'}, 1000, function(){

      inWrap.css('left', '-100%');

      $('.slide').last().after($('.slide').first());

    });


  });


})
$(document).ready(function(){
$('.filter-button').click(function(){
	var value= $(this).attr('data-filter');
	if (value=="all")
	{
		$('.filter').show('3000');
	}
	else{
		$('.filter').not('.'+value).hide('1000');
		$('.filter').filter('.'+value).show('5000');
	}
});
});

 