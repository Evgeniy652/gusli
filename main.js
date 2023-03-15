const slideshowContainer = document.querySelector(".slideshow-container");
let countAllSlides = 32;
let currentSlideNumber = 1;
slideshowContainer.insertAdjacentHTML("afterbegin", `
<div class="mySlides fade">
<img class="foto" src="images/myslides/${currentSlideNumber}.jpg" alt="фото-гусли-${currentSlideNumber}">
<div class="text"></div>
</div>
`);
function nextSlides(n) {
  currentSlideNumber += n;
  if(currentSlideNumber === 0) {
    currentSlideNumber= countAllSlides;
  }
  if(currentSlideNumber>countAllSlides){
    currentSlideNumber= 1;
  }
  const mySlides = document.querySelector('.mySlides');
  mySlides.innerHTML = `
  <img class="foto" src="images/myslides/${currentSlideNumber}.jpg" alt="фото-гусли-${currentSlideNumber}">
  <div class="text"></div>
`
}

  
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

function hideUnusedPhotos() {
	const listOfImages = document.querySelectorAll('li.hide');

	// скрыть картинки с классом hide
	[...listOfImages].forEach((li) => {
		li.style.display = 'none';
	});
}

getGalleries();
hideUnusedPhotos();





