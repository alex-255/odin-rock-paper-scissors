const getComputerChoice = () => {
  const numChoice = Math.floor(Math.random() * 3) + 1;

  switch (numChoice) {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";

    default:
      break;
  }
};

let humanScore = 0;
let computerScore = 0;

const root = document.querySelector(".root");
const gameResultDiv = document.querySelector(".game-result");
const score = document.querySelector(".score");

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    gameResultDiv.textContent = "Tie game.";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    gameResultDiv.textContent = "Computer wins! Paper wraps rock.";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    gameResultDiv.textContent = "You won! Paper wraps rock.";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    gameResultDiv.textContent = "You won! Rock breaks scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    gameResultDiv.textContent = "Computer wins! Rock breaks scissors.";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    gameResultDiv.textContent = "You won! Scissors cuts paper.";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    gameResultDiv.textContent = "Computer wins! Scissors cuts paper.";
  }
  score.textContent =
    "Your score: " + humanScore + ". Computer score: " + computerScore + ".";

  if (humanScore >= 5 || computerScore >= 5) {
    if (computerScore > humanScore) {
      gameResultDiv.textContent = "The winner for all rounds is a COMPUTER!";
    } else if (computerScore < humanScore) {
      gameResultDiv.textContent = "The winner for all rounds is a HUMAN!";
    }

    // end of game
    humanScore = 0;
    computerScore = 0;
    root.removeChild(buttonRock);
    root.removeChild(buttonPaper);
    root.removeChild(buttonScissors);
    let buttonNewGame = document.createElement("button");
    buttonNewGame.setAttribute("class", "button-new-game");
    buttonNewGame.textContent = "Play again";
    root.appendChild(buttonNewGame);
    buttonNewGame = document.querySelector(".button-new-game");
    buttonNewGame.addEventListener("click", () => {
      // reload the current page
      window.location.reload();
    });
  }
};

const buttonRock = document.querySelector(".button-rock");
const buttonPaper = document.querySelector(".button-paper");
const buttonScissors = document.querySelector(".button-scissors");

buttonRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
buttonPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
buttonScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
