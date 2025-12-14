let humanScore = 0;
let computerScore = 0;

let humanChoice = "Rock"; //default choice as Rock
let computerChoice = getComputerChoice();

console.log(playGame());

function getComputerChoice() {
    let random = Math.random();
    if (random <= (1/3)){
        return "Rock";
    } else if (random <= (2/3)){
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter Rock, Paper, or Scissors:");
    return humanChoice;
}

function capitalize(str){
    const firstChar = str[0];
    const restOfString = str.slice(1);
    return firstChar.toUpperCase() + restOfString.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    const hChoice = capitalize(humanChoice.toLowerCase()); // Normalize human choice
    
    if (hChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((hChoice === "Rock") && (computerChoice === "Scissors") ||    // Human wins
               (hChoice === "Paper") && (computerChoice === "Rock") ||
               (hChoice === "Scissors") && (computerChoice === "Paper")) {
        humanScore++;
        console.log("You win! " + capitalize(hChoice) + " beats " + computerChoice + ".");
    } else {
        computerScore++;
        console.log("You lose! " + computerChoice + " beats " + capitalize(hChoice) + ".");
    }     
}

function playGame() {
    while ((humanScore + computerScore) < 5) {
        playRound(humanChoice, computerChoice);
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
    if ((humanScore+computerScore) === 5) {
        if (humanScore > computerScore) {
            return "Congratulations! You beat the computer " + humanScore + " to " + computerScore + ".";
        } else {
            return "Sorry, the computer beat you " + computerScore + " to " + humanScore + ". Better luck next time!";
        }
    }
}
