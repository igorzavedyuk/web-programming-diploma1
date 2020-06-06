
// FORM

$('.footer__callback, .button-about, .callback, .header__phone')

	// .css({
	// 	'margin-left': '20px',
	// 	'margin-button':'40px'
	// })
	// .click(function(){

	// 	ВАРИАНТ 1  $('.popup').fadeIn(400);
	// 		if (window_width < 576) {
 //    		$('.popup__form').width(300) .height(450);
 //    	} else {
 //    		$('.popup__form').width(500);
 //    	};
		
	// 	$("body").addClass("fixed");
	// });

// КАК БЫЛО $('.popup').fadeIn(400);
// 		$('.popup__form').animate({
// 			width: '500px',
// 			height: '450px'
// 		}, 400);
// 		$("body").addClass("fixed");
// 	});

// ВАРИАНТ 2
	// $('.popup').fadeIn(400);
	// 	$('.popup__form').animate({
	// 		width: '310px',
	// 		height: '450px'
	// 	}, 400);
	// 	$("body").addClass("fixed");
	// });
	// ВАРИАНТ 3
	.click(function(){
		
	var mql = window.matchMedia('all and (max-width: 576px)');
if (mql.matches) {
	$('.popup').fadeIn(400);
	$('.popup__form').animate({
			width: '300px',
			height: '450px'
		}, 400);
		$("body").addClass("fixed");
	
    // размер окна 576px или меньше
} else {
	$('.popup').fadeIn(400);
	$('.popup__form').animate({
			width: '569px',
			height: '450px'
		}, 400);
		$("body").addClass("fixed");
	};
    // нет, размер окна более 576px 

	function hideForm(item){
		item.fadeOut(1500);
	}

	$('body').on('click', '.form_close', function(event){
		event.preventDefault();

		let item = $(this).parents('.popup');

		hideForm(item);

		let items = $('.popup');

		$("body").removeClass("fixed");
	});

	$('.header__burger').click(function(){
		$('.popup__nav').fadeIn(400);
		$('.menu__popup').animate({
			width: '190px',
			height: '190px'
		}, 400);
		$("body").addClass("fixed");
	});

	$('.form_close').click(function(){
		$('.popup__nav').fadeOut(400);
		$('.menu__popup').animate({
			width: 0,
			height: 0
		}, 400);
		$("body").removeClass("fixed");
		});
});
// NAV
	$('.header__burger').click(function(){
		$('.popup__nav').fadeIn(400);
		$('.menu__popup').animate({
			width: '190px',
			height: '190px'
		}, 400);
		$("body").addClass("fixed");
	});

	$('.form_close').click(function(){
		$('.popup__nav').fadeOut(400);
		$('.menu__popup').animate({
			width: 0,
			height: 0
		}, 400);
		$("body").removeClass("fixed");
		});

	// $('.form_close').click(function(event){
	// 	if(event.target != this) {
	// 		$(this).fadeOut(400);
	// 		$('.popup').animate({
	// 		width: 0,
	// 		height: 0
	// 	}, 400);
	// 	}
	// 	$("body").removeClass("fixed");

	// });
