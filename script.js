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

function playRound(humanChoice, computerChoice) {
let humanScore = 0, computerScore = 0;

if (humanChoice === computerChoice) {
    return "Tie!";
}

switch (humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors.";
      } else {
        computerScore++;
        return "You lose! Paper beats Rock.";
      }

    case "paper":
      if (computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
        
      } else {
        computerScore++;
        return "You lose! Scissors beats Paper.";
      }

    case "scissors":
      if (computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper.";
      } else {
        computerScore++;
        return "You lose! Rock beats Scissors."; 
      }

    default:
      return "Invalid choice. Please choose rock, paper, or scissors.";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.target.style.cssText = "background-color: #06D6A0";
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  const result = document.querySelector('.result');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      let outcome = playRound(e.target.className, getComputerChoice());
      
      if (outcome.includes("You win!")) {
        result.style.cssText = "color: #06D6A0";
      } else if (outcome.includes("You lose!")) {
        result.style.cssText = "color: #FF4242";
      } else {
        result.style.cssText = "color: #080F0F";
      }
      result.textContent = outcome;
    });
  });
});


