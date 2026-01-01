let humanScore = 0;
let computerScore = 0;

let humanChoice = "Rock"; //default choice as Rock
let computerChoice = getComputerChoice();


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

function capitalize(str){
    const firstChar = str[0];
    const restOfString = str.slice(1);
    return firstChar.toUpperCase() + restOfString.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    let result = "";
    computerChoice = getComputerChoice();
    const hChoice = capitalize(humanChoice.toLowerCase()); // Normalize human choice
    
    if (humanScore ===5 || computerScore ===5){
        resetGame();
    }

    if (hChoice === computerChoice) {
        result = ("It's a tie!");
        results.textContent = result;
    } else if ((hChoice === "Rock") && (computerChoice === "Scissors") ||    // Human wins
               (hChoice === "Paper") && (computerChoice === "Rock") ||
               (hChoice === "Scissors") && (computerChoice === "Paper")) {
        humanScore++;
        result = ("You win! " + capitalize(hChoice) + " beats " + computerChoice + ".");
        results.textContent = result;
        scoreBoard.textContent = ("Human score: " + humanScore + " Computer score: " + computerScore);
    } else {
        computerScore++;
        result = ("You lose! " + computerChoice + " beats " + capitalize(hChoice) + ".");
        results.textContent = result;
        scoreBoard.textContent = ("Human score: " + humanScore + " Computer score: " + computerScore);
    }
    checkGameEnd();     
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click',() => playRound("Rock",computerChoice));
paper.addEventListener('click',() => playRound("Paper",computerChoice));
scissors.addEventListener('click',() => playRound("Scissors",computerChoice));

const results = document.querySelector('#results');
const scoreBoard = document.querySelector('#scoreboard');
const finalResult = document.querySelector('#finalresult');

function checkGameEnd() {
    if (humanScore ===5){
    finalResult.textContent = "Congratulations! You won the game!";
    } else if (computerScore ===5){
    finalResult.textContent = "Computer won the game! Try again!";
    }
}

function resetGame() {
    //Initialize result if new game
    humanScore = 0;
    computerScore = 0;
    scoreBoard.textContent = ("Human score: " + humanScore + " Computer score: " + computerScore);
    finalResult.textContent = "";
}