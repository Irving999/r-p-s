console.log("hello World");

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
}

getHumanChoice();