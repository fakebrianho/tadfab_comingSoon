let slideIndex = 0 // start with the first image
const slides = document.querySelectorAll('.slide')

function showSlides() {
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active') // hide all slides
	}

	slideIndex++
	if (slideIndex > slides.length) {
		slideIndex = 1 // reset to first image if it's the last one
	}

	slides[slideIndex - 1].classList.add('active') // show current image
	setTimeout(showSlides, 3000) // change image every 3 seconds
}
window.onload = function () {
	showSlides()
}
