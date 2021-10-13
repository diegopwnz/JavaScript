const modal = document.querySelectorAll('.modal');

const openModal = document.getElementById('openModal')
const closeButton = document.getElementById('closeButton');

closeButton.addEventListener('click', (event) => {
	modal[0].classList.add('hidden')
})


openModal.addEventListener('click', (event) => {
	modal[0].classList.remove('hidden')
})