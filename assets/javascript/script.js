/* Rules Modal Window */

const rules = document.querySelector('.rules');
const rulesOverlay = document.querySelector('.rules-overlay');
const btnsOpenModal = document.querySelectorAll('.show-rules');
const btnCloseModal = document.querySelector('.close-rules');

const openModal = function () {
    rules.classList.remove('hide');
    rulesOverlay.classList.remove('hide');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

const closeModal = function () {
    rules.classList.add('hide');
    rulesOverlay.classList.add('hide');
};

btnCloseModal.addEventListener('click', closeModal);
rulesOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !rules.classList.contains('hide')) {
        closeModal();
    }
});