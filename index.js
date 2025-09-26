function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Draw!";
    }
    else if (humanChoice === "rock") {
        return (computerChoice === "scissors") ? "Human wins!" : "Computer wins!";
    }
    else if (humanChoice === "scissors") {
        return (computerChoice === "paper") ? "Human wins!" : "Computer wins!";
    }
    else if (humanChoice === "paper") {
        return (computerChoice === "rock") ? "Human wins!" : "Computer wins!";
    }
    return "Invalid Entry.";
}

let computerPoints = 0;
let humanPoints = 0;

function resetGame() {
    computerPoints = 0;
    humanPoints = 0;

    document.querySelector('.human-choice-display').textContent = "";
    document.querySelector('.computer-choice-display').textContent = "";
    document.querySelector('.res-display').textContent = "";
    document.querySelector('.computer-points').textContent = "Computer Points: 0";
    document.querySelector('.human-points').textContent = "Human Points: 0";
    document.querySelector('.game-results').textContent = "";

    document.querySelector('.playing-buttons').style.pointerEvents = "auto";
}

function handleClick(event) {
    let target = event.target;
    if (!['rock', 'paper', 'scissors'].includes(target.id)) {
        return;
    }

    const computerSelection = getComputerChoice();
    const res = playRound(target.id, computerSelection);

    switch (res) {
        case "Computer wins!":
            computerPoints++;
            break;
        case "Human wins!":
            humanPoints++;
            break;
    }

    document.querySelector('.human-choice-display').textContent = `Human choice: ${target.id}`;
    document.querySelector('.computer-choice-display').textContent = `Computer choice: ${computerSelection}`;
    document.querySelector('.res-display').textContent = res;
    document.querySelector('.computer-points').textContent = `Computer Points: ${computerPoints}`;
    document.querySelector('.human-points').textContent = `Human Points: ${humanPoints}`;

    if (computerPoints >= 5 || humanPoints >= 5) {
        document.querySelector('.game-results').textContent =
            computerPoints > humanPoints ? "Computer wins the game!" : "Human wins the game";
        document.querySelector('.playing-buttons').style.pointerEvents = "none";
    }
}

document.querySelector('.playing-buttons').addEventListener('click', handleClick);

const startGameButton = document.querySelector('.start-game');
const game = document.querySelector('.game');

startGameButton.addEventListener('click', () => {
    resultsContainer = document.querySelector('.results-container');
    game.style.display = "block";
    resultsContainer.style.display = "block";
    resultsContainer.style.background = "antiquewhite";
    resultsContainer.style.boxShadow = "0px 8px 16px 0px rgba(0, 0, 0, 0.5)"
    resultsContainer.style.padding = "50px";
    resetGame();
});
