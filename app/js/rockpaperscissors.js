////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move;
    
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return getInput() || move;
}

function getComputerMove(move) {
    var move;
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        return "tie";
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "player";
        }
        else {
            return "computer";
        }
    }     
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
        return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            return "player";
        }
        else {
            return "computer";
        }
    }
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");

    while (playerWins<=4 && computerWins<=4){
        var pMove = getPlayerMove();
        var cMove = getComputerMove();
        console.log('Player chose ' + pMove +' while computer chose ' + cMove);
        var winner = getWinner(pMove, cMove);
        console.log('Winner is ' + winner);
        
        if (winner =="player"){
            playerWins++;
            //return playerWins;
        }
        else if (winner=="computer"){
            computerWins++;
            //return computerWins;
        }
        else if (winner =="tie"){
            playerWins = playerWins;
            computerWins = computerWins;
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n')
    }

}

var playerWins = 0;
var computerWins = 0;

playToFive();