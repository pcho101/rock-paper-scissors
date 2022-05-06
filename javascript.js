const choice = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let selection = Math.floor(Math.random()*choice.length);
    return choice[selection]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == computerSelection) {
        console.log('Tie!');
        return 2;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        return 1;
    }
    else {
        console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let player = prompt('Rock, paper or scissors?');
        let result = playRound(player, computerPlay());
        if (result == 0) {
            computerScore++
        }
        else if (result == 1) {
            playerScore++
        }
    }
    if (playerScore > computerScore) {
        console.log('You beat the computer!');
    }
    else if(playerScore < computerScore) {
        console.log('You lost to the computer!');
    }
    else {
        console.log('Tie after 5 rounds.');
    }
}

game();
