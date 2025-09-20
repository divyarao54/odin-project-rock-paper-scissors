function getHumanChoice(){
    let choice = prompt("Choose one of rock, paper or scissors");
    return choice;
}

function getComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3);
    
    if(randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }

}

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return "Draw!"
    }
    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            return "Human wins!";
        } else {
            return "Computer Wins!";
        }
    }
    else if(humanChoice == "scissors"){
        if(computerChoice == "paper"){
            return "Human wins!";
        } else {
            return "Computer wins!";
        }
    }
    else if(humanChoice == "paper"){
        if(computerChoice == "rock"){
            return "Human wins!";
        } else {
            return "Computer wins!";
        }
    } 
    return "Invalid Entry.";
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log("Human chooses " + humanSelection + ".");
console.log("Computer chooses " + computerSelection + ".")
console.log(playRound(humanSelection, computerSelection));