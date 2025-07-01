let round = 1, numberOfRounds = 5, humanScore = 0, computerScore = 0, gameWinner;

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

function checkWinner() {
  if (round > numberOfRounds) {
    if (humanScore > computerScore) {
      return "You Win! Hooray!"
    } else if (humanScore < computerScore) {
      return "HAHAHA! You lost to an NPC!"
    } else {
      return "Tie!";
    }
  }
  return; 
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
      return "Tie!";
  }

  switch (humanChoice) {
    case "rock":
      if (computerChoice === "scissors") {
        return "You win! Rock beats Scissors!";
      } else {
        return "You lose! Paper beats Rock!";
      }

    case "paper":
      if (computerChoice === "rock") {
        return "You win! Paper beats Rock!";
        
      } else {
        return "You lose! Scissors beats Paper!";
      }

    case "scissors":
      if (computerChoice === "paper") {
        return "You win! Scissors beats Paper!";
      } else {
        return "You lose! Rock beats Scissors!"; 
      }

    default:
      return "Invalid choice. Please choose rock, paper, or scissors";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  const result = document.querySelector('.result');

  buttons.forEach(button => {
    button.addEventListener('click', (e) => {
      const playerChoice = e.target.className;
      const computerChoice = getComputerChoice();
      const roundResult = playRound(playerChoice, computerChoice);
      
      const humanScoreDisplay = document.querySelector('.human-score');
      const computerScoreDisplay = document.querySelector('.computer-score');
      
      let outcome = "";

      if (roundResult.includes("You win!")) {
        result.style.cssText = "color: #06D6A0";
        outcome = roundResult.replace("You win!", "");
        humanScore++;
        round++;
      } else if (roundResult.includes("You lose!")) {
        result.style.cssText = 'color: #FF4242';
        outcome = roundResult.replace("You lose!", "");
        computerScore++;
        round++;
      } else {
        outcome = roundResult;
        result.style.cssText = 'color: #080F0F';
      }
      
       // Update score display
      humanScoreDisplay.textContent = `Human score: ${humanScore}`;
      computerScoreDisplay.textContent = `Computer score: ${computerScore}`;

      // Check for game winner
      gameWinner = checkWinner();

      // Show outcome or final result
      if (gameWinner !== undefined) {
        result.style.cssText = gameWinner.includes("You Win!")
          ? 'color: #06D6A0'
          : 'color: #FF4242';
        result.textContent = gameWinner;
      } else {
        result.textContent = outcome;
      }
    });
  });
});