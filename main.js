document.querySelector('.hamburger').addEventListener('click', function () {
	this.classList.toggle('is-active')
	document.querySelector('.mobile__navbar').classList.toggle('is-active')
})
