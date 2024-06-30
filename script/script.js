//slider1
//slider-button-prev1
//slider-button-next1
//slider__image image1-1 image1-2
//
//slider2
//slider-button-prev2
//slider-button-next2
//slider__image image2-1 image2-2

{const slider = document.querySelector('.slider1');
const prevButton = document.querySelector('.slider-button-prev1');
const nextButton = document.querySelector('.slider-button-next1');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      
      slide.style.opacity = 1;
    } else {
      
      slide.style.opacity = 0;
    }
  });
}

// Инициализация слайдера
updateSlider();}
{
    const slider = document.querySelector('.slider2');
const prevButton = document.querySelector('.slider-button-prev2');
const nextButton = document.querySelector('.slider-button-next2');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      
      slide.style.opacity = 1;
    } else {
      
      slide.style.opacity = 0;
    }
  });
}

// Инициализация слайдера
updateSlider();
}