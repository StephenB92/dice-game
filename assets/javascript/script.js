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

/* Function allowing players to enter own name */

const playerName1 = document.querySelector('.input-name-1');

const name1 = function () {
    let myName1 = prompt("Enter your name");
    document.querySelector('.input-name-1').innerText = myName1;
};

const playerName2 = document.querySelector('.input-name-2');

const name2 = function () {
    let myName2 = prompt("Enter your name");
    document.querySelector('.input-name-2').innerText = myName2;
};

playerName1.addEventListener('click', name1);
playerName2.addEventListener('click', name2);

/* Logic which allows the Dice Game to function */

/* Converting the HTML elements to variables */

const player1 = document.querySelector('.player-0');
const player2 = document.querySelector('.player-1');
const score1 = document.querySelector('.score-0');
const score2 = document.querySelector('.score-1');
const total1 = document.querySelector('.total-0');
const total2 = document.querySelector('.total-1');
const currentDice = document.querySelector('.dice');
const newGame = document.querySelector('.button-new');
const rollDice = document.querySelector('.button-roll');
const bankPoints = document.querySelector('.button-bank');

/* Base Game values */

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const startGame = function () {
    currentScore = 0;
    activePlayer = 0;
    score1.textcontent = 0;
    score2.textcontent = 0;
    total1.textcontent = 0;
    total2.textcontent = 0;
    currentDice.classList.add('hide');
    player1.classList.add('active-player');
    player2.classList.remove('active-player');
};
startGame();

/* Rolling the Dice function */

rollDice.addEventListener('click', function () {
    /* Creating a random dice and displaying it */
    let dice = Math.trunc(Math.random() * 6) + 1;
    currentDice.classList.remove('hide');
    currentDice.src = `assets/images/dice-${dice}.png`;
    /* Checking if Dice = 1 and adding to Current Score if !== 1 */
    if (dice !== 1) {
        currentScore += dice;
        document.querySelector(`.score-${activePlayer}`).textContent = currentScore;
    } else {
        /* Switching player if Dice = 1 */
        document.querySelector(`.score-${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player1.classList.toggle('active-player');
        player2.classList.toggle('active-player');
    }
});

/* New Game Button */
newGame.addEventListener('click', startGame);