const Choice = ["rock", "paper", "scissors"];
let humanScore = 0,
    computerScore = 0;

const playerChoiceContainer = document.querySelector(".player-choice");
const resultsPanel = document.querySelector("#round-result");
const humanScorePanel = document.querySelector("#humanScore");
const computerScorePanel = document.querySelector("#computerScore");
const buttons = document.querySelectorAll("button");

const getComputerChoice = () => Choice[Math.floor(Math.random() * 3)];

const getRoundWinner = (computerChoice, humanChoice) => {
    switch (computerChoice) {
        case "rock":
            if (humanChoice == "rock") {
                resultsPanel.textContent = "You chose rock and computer chose rock, it's a tie!";
                return 2;
            } else if (humanChoice == "paper") {
                resultsPanel.textContent = "You chose paper and computer chose rock, you win!";
                return 0;
            } else {
                resultsPanel.textContent = "You chose scissors and computer chose rock, you lost!";
                return 1;
            }

        case "paper":
            if (humanChoice == "rock") {
                resultsPanel.textContent = "You chose rock and computer chose paper, you lost!";
                return 1;
            } else if (humanChoice == "paper") {
                resultsPanel.textContent = "You chose paper and computer chose paper, it's a tie!";
                return 2;
            } else {
                resultsPanel.textContent = "You chose scissors and computer chose paper, you win!";
                return 0;
            }

        case "scissors":
            if (humanChoice == "rock") {
                resultsPanel.textContent = "You chose rock and computer chose scissors, you win!";
                return 0;
            } else if (humanChoice == "paper") {
                resultsPanel.textContent = "You chose paper and computer chose scissors, you lost!";
                return 1;
            } else {
                resultsPanel.textContent = "You chose scissors and computer chose scissors, it's a tie!";
                return 2;
            }
    }
}

const getHowManyRounds = () => parseInt(prompt("How many round do you want to play?"));

const endGame = () => {
    playerChoiceContainer.removeEventListener('click', playerChoiceHandler);

    buttons.forEach(btn => {
        btn.classList.remove("hovered");
        btn.style.cssText = "background-color: grey;";
    });
}

const editScores = (winner) => {
    if (winner === 0) humanScore++;
    else if (winner === 1) computerScore++;

    humanScorePanel.textContent = "Human Score : " + humanScore;
    computerScorePanel.textContent = "Computer Score : " + computerScore;

    if (computerScore === 5) {
        endGame();
        resultsPanel.textContent = "Computer Won!";
    } else if (humanScore === 5) {
        endGame();
        resultsPanel.textContent = "You Won!";
    }
}

const playRound = (humanChoice) => {
    let computerChoice = getComputerChoice();
        
    humanChoice = Choice[humanChoice];

    let roundWinner = getRoundWinner(computerChoice, humanChoice);

    editScores(roundWinner);
}

const playerChoiceHandler = (e) => {
    let target = e.target;

    switch (target.id) {
        case 'rock':
            playRound(0);
            break;
        case 'paper':
            playRound(1);
            break;
        case 'scissors':
            playRound(2);
            break;
    }
};

playerChoiceContainer.addEventListener('click', playerChoiceHandler);