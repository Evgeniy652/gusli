//---------------------------------------SLIDER-------------------------------------------//

// Показывает стартовое значение для слайдера
let CURRENT_SLIDER_NUMBER = 1;
// Показывает текущее значение для слайдера
const START_SLIDER_NUMBER = 1;
// Показывает кол-во фото для слайдера
const NUMBER_OF_PHOTOS_FOR_SLIDER = 43;
const sliderContainer = document.querySelector('.slider-container');

function postLoadSlider() {
  for (let index = START_SLIDER_NUMBER; index < NUMBER_OF_PHOTOS_FOR_SLIDER + 1; index++) {
    const foundSlide = document.querySelector(`[data-id="slide-${index}"]`);

    if (foundSlide) {
      continue;
    }

    loadSlide(index, 'hide-slide');
  }
}

// Next/previous controls
function rightSlide() {
  if (CURRENT_SLIDER_NUMBER === NUMBER_OF_PHOTOS_FOR_SLIDER) {
    CURRENT_SLIDER_NUMBER = START_SLIDER_NUMBER;
    const prevNumber = NUMBER_OF_PHOTOS_FOR_SLIDER;
    showSlide(prevNumber);

    return;
  }

  const prevNumber = CURRENT_SLIDER_NUMBER;
  CURRENT_SLIDER_NUMBER++;
  showSlide(prevNumber);
}

function leftSlide() {
  if (CURRENT_SLIDER_NUMBER === START_SLIDER_NUMBER) {
    CURRENT_SLIDER_NUMBER = NUMBER_OF_PHOTOS_FOR_SLIDER;
    const prevNumber = START_SLIDER_NUMBER;
    showSlide(prevNumber);
    return;
  }

  const prevNumber = CURRENT_SLIDER_NUMBER;
  CURRENT_SLIDER_NUMBER--;
  showSlide(prevNumber);
}

function showSlide(currentNumber) {
  const currentSlide = document.querySelector(`[data-id="slide-${currentNumber}"]`);
  const nextSlide = document.querySelector(`[data-id="slide-${CURRENT_SLIDER_NUMBER}"]`)

  if (!currentSlide) {
    console.log('There is not current slide, check please you functionality');
    return;
  }

  // Скрываем текущий слайд (фото)
  currentSlide.classList.add('hide-slide');

  if (nextSlide) {
    nextSlide.classList.remove('hide-slide');
    return;
  }

  loadSlide(CURRENT_SLIDER_NUMBER, '');
}

function loadSlide(number, hide) {
  const newSlide = `
  <div class="fade ${hide}" data-id="slide-${number}">
    <img class="foto" src="images/myslides/${number}.jpg" alt="фото-гусли-${number}">
    <div class="text"></div>
  </div>`;

  sliderContainer.insertAdjacentHTML('beforeend', newSlide);
}

//---------------------------------------SLIDER END-------------------------------------------//

//---------------------------------------VIEWER-------------------------------------------//

// View a list of images.
// Note: All images within the container will be found by calling `element.querySelectorAll('img')`.

const globalConfig = {
	movable: true,
};

function getGalleries() {
	const listOfGalleries = document.querySelectorAll('.images');

	[...listOfGalleries].forEach((ul) => {
		new Viewer(ul, globalConfig);
	});
}

getGalleries();

//---------------------------------------VIEWER END-------------------------------------------//

//---------------------------------------AFTER FIRST INITIALIZATION-------------------------------------------//

window.onload = () => {
  postLoadSlider();
}

//---------------------------------------AFTER FIRST INITIALIZATION END-------------------------------------------//
