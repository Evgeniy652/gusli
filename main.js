
  
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


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}



