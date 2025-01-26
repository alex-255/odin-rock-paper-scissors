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

const getHumanChoice = () => {
  const numUserChoice = prompt(
    "Enter 1 for Rock, 2 for Paper, 3 for Scissors:"
  );
  switch (numUserChoice.toLowerCase()) {
    case "1":
    case "rock":
      return "rock";

    case "2":
    case "paper":
      return "paper";

    case "3":
    case "scissors":
      return "scissors";

    default:
      break;
  }
};

const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log("Tie game.");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore++;
      console.log("Computer wins! Paper wraps rock.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore++;
      console.log("You won! Paper wraps rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore++;
      console.log("You won! Rock breaks scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore++;
      console.log("Computer wins! Rock breaks scissors.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore++;
      console.log("You won! Scissors cuts paper.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore++;
      console.log("Computer wins! Scissors cuts paper.");
    }
  };

  for (let index = 0; index < 5; index++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (computerScore > humanScore) {
    console.log("The winner for all rounds is COMPUTER!");
  } else if (computerScore < humanScore) {
    console.log("The winner for all rounds is HUMAN!");
  } else {
    console.log("No winner - it's a tie.");
  }
};
playGame();
