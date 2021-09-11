// document.querySelector('.message').textContent = 'Correct Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 39;

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function() {
    // console.log(document.querySelector('.guess').value)
    const guess = Number(document.querySelector('.guess').value)
        // console.log(guess, typeof guess)
    if (!guess) {
        //document.querySelector('.message').textContent = 'No number';
        displayMessage('No number');
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        // document.querySelector('.message').textContent = 'Correct Number';
        displayMessage('Correct Number')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
        //when  guess is too high
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
            displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game'
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game'
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     //when guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low'
    //         score--;
    //         document.querySelector('.score').textContent = score
    //     } else {
    //         document.querySelector('.message').textContent = 'You lose game'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    //document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
})