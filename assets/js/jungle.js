$(function(){

	$(window).scrollTop(0);
	
	$('.top-gioithieu').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop: $('#gioithieu').offset().top}, 1000);
	});
	$('.top-khoahoc').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop: $('#khoahoc').offset().top}, 1000);
	});


	$(window).scroll(function(e) {
		event.preventDefault();
		var position = $('html').scrollTop();
		console.log(position);
		if (position > 100){
			$('.hinh-gioithieu').addClass('fadeinleft');
			$('.nd-gioithieu').addClass('fadeinright');
			$('.cate-gioithieu').addClass('zoomin');
		}else{
			$('.hinh-gioithieu').removeClass('fadeinleft');
			$('.nd-gioithieu').removeClass('fadeinright');
			$('.cate-gioithieu').removeClass('zoomin');
		}
		
		
		// pricing-area
		
		if (position > 800){
			$('.cate-khoahoc').addClass('zoomin');
			$('.pricing-area').addClass('zoomin');
		}else{
			$('.pricing-area').removeClass('zoomin');
			$('.cate-khoahoc').removeClass('zoomin');
		}

		if (position > 2300){
			$('.cate-sukien').addClass('zoomin');
			// $('.pricing-area').addClass('zoomin');
		}else{
			// $('.pricing-area').removeClass('zoomin');
			$('.cate-sukien').removeClass('zoomin');
		}



	})



})