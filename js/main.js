// Start writing JavaScript here!
const modalButton = document.querySelector('.jsModalButton')

modalButton.addEventListener('click', event => {
    document.body.classList.add('modal-is-open')
})

const closeButton = document.querySelector('.jsModalClose')
closeButton.addEventListener('click', event => {
    document.body.classList.remove('modal-is-open')
})