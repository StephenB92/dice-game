/* Rules Modal Window */
/* Credit to Jonas Schmedmann and the course "The Complete Javascript Course 2022: 
From Zero to Expert", Modal Window Section for Code used to create and style the 
"rules" modal window */

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

const playerName1 = document.querySelector('.input-name-1')

const name1 = function() {
    let myName = prompt("Enter your name");
    document.getElementsByClassName('.input-name-1').textContent = myName;
};

playerName1.addEventListener('click', name1);




