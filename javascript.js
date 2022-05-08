const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const score = document.querySelector('h2');
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#container');
    

function computerPlay() {
    let selection = Math.floor(Math.random()*choice.length);
    return choice[selection]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        container.textContent = 'Tie!';
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
            playerSelection == 'paper' && computerSelection == 'rock' ||
            playerSelection == 'scissors' && computerSelection == 'paper') {
        container.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
        playerScore++
    }
    else {
        container.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
        computerScore++
    }
    score.textContent = `Player score: ${playerScore} Computer score:${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            container.textContent = 'GAME OVER! You beat the computer! Click any button to start again.';
        }
        else {
            container.textContent = 'GAME OVER! You lost to the computer! Click any button to start again.';
        }
        playerScore = 0;
        computerScore = 0;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    });
});

