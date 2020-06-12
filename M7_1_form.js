
// FORM

$('.footer__callback, .button-about, .callback, .header__phone')

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

	// $('.form_button').cick(function(){
	// 	$('.confirmation').fadeIn(400);

	// });


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
	// плавный скролл по якорю
	$(document).ready(function(){
    $(".menu, .menu__popup").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    	});
	});
	
