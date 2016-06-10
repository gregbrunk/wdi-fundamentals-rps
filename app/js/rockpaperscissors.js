function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

var getPlayerMove = function(move) {
    return move || getInput();
};

var getComputerMove = function(move) {
    return move || randomPlay();
};

var getWinner = function(playerMove,computerMove) {
    var winner;

    if (playerMove == computerMove) {
        winner = "tie";
    } else if ((playerMove == "rock" && computerMove == "scissors") || (playerMove == "scissors" && computerMove == "paper") || (playerMove == "paper" && computerMove == "rock")) {
        winner = "player";
    } else {
        winner = "computer";
    }
    return winner;
};

var playToFive = function() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while ((playerWins < 5) && (computerWins < 5)) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
   
        if (winner == 'player') {
            playerWins += 1;
        } else if (winner == 'computer') {
            computerWins +=1;
        } else if (winner == 'tie') {
            console.log('The score was a tie, play again!');
        }
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently - player: ' + playerWins + ' and computer: ' + computerWins);
    }
    
    if (playerWins == 5) {
        console.log ('The Player has won!');
    } else if (computerWins == 5) {
        console.log ('The Computer has won!');
    } else {
        console.log ('Well, crap. This should not have happened. Everyone loses!');
    }
    return [playerWins, computerWins];
};