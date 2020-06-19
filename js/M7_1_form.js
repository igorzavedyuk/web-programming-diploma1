
// FORM

$('.footer__callback, .button-about, .callback, .header__phone').click(function(){
		
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
	
// SLIDER 	

const slider = document.querySelector('.swiper-container');


 let mySwiper = new Swiper (slider, {
    
    slidesPerView: 1,

    spaceBetween: 30,

    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
    // кликабельный паджинейшн
  },
  	slideToClickedSlide:'true',
  	// кликабельные слайды , работают при вытертом доп класе у контейнера swiper-no-swiping
  	loop: 'true',
  	// закольцованнсть слайдера
  	// slidesPerGroup:'2', количестсво слайдов в группе
   // кнопки навигации
   // centeredSlides:'true',
   // слайд по центру активный
   navigation: {  
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    breakpoints: {
// при ширине менять к-во слайдов
      769: {
      slidesPerView: 2,
      spaceBetween: 35,
      // centeredSlides:'true',
    },
      1101:{
      slidesPerView: 3,
      spaceBetween: 30,
      // centeredSlides:'false',
    
    }
  }
})

var screen = window.innerWidth;
console.log (screen)