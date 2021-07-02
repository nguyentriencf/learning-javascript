'use strict';

// slecting element

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--0');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1')

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let score, currentScore, activePlayer, playing;


const init = function() {
    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    diceEl.classList.add('hidden');
}
init();

const switchPlayer = function() {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function() {
    if (playing) {
        // 1. generate a random dice roll
        let dice = Math.trunc(Math.random() * 6) + 1;
        // 2. display img
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;
        //3. if dice is different 1 += current
        if (dice !== 1) {
            // add dice to current score
            currentScore += dice;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

        } else {
            // switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (playing) {
        // 1. add current score to active player's score
        score[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
        //2. Check if player's score is >= 100
        // finish game
        if (score[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            playing = false;
            //1. finish the game
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // 3. switch to the player next player's
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);