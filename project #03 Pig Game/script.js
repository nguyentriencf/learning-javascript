'use strict';

// slecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--0');


const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

let currentScore = 0;
// starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function() {
    // 1. generate a random dice roll
    let dice = Math.trunc(Math.random() * 6) + 1;
    // 2. display img
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. if dice is different 1 += current
    if (dice !== 1) {
        // add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore;
    } else {

    }
})