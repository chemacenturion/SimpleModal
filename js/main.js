// Start writing JavaScript here!
const modalButton = document.querySelector('.jsModalButton')

modalButton.addEventListener('click', event => {
    document.body.classList.add('modal-is-open')
})