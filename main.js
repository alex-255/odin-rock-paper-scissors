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
  switch (numUserChoice) {
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
