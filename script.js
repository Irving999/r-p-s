function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    return input;
}

function playGame() {
    let humanScore = 0, computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            console.log("Tie!");
            return;
        }
    
        switch (humanChoice) {
            case "rock":
              if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
              } else {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
              }
              break;
        
            case "paper":
              if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
              } else {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
              }
              break;
        
            case "scissors":
              if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
              } else {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
              }
              break;
        
            default:
              console.log("Invalid choice. Please choose rock, paper, or scissors.");
              break;
          }
    }
}

playGame();