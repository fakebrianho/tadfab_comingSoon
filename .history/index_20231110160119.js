let slideIndex = 0 // start with the first image
const slides = document.querySelectorAll('.slide')
const enterPassword = document.querySelector('.nav_login')

function showSlides() {
	console.log('hi')
	for (let i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active') // hide all slides
	}

	slideIndex++
	if (slideIndex > slides.length) {
		slideIndex = 1 // reset to first image if it's the last one
	}

	slides[slideIndex - 1].classList.add('active') // show current image
	setTimeout(showSlides, 4000) // change image every 3 seconds
}
window.onload = function () {
	showSlides()
}

enterPassword.addEventListener('click', () => {
	const comingSoon = document.querySelector('.content_comingSoon')
	const signUp = document.querySelector('.content_signUp')
	const passwordInput = document.querySelector('.content_subscribe')
	const input = passwordInput.querySelector('.emailPassword')
	input.placeholder = 'PASSWORD'
	comingSoon.classList.add('hidden')
	signUp.classList.add('hidden')
	passwordInput.classList.add('move_up')
})
