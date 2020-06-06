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
  
