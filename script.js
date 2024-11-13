const Choice = ["rock", "paper", "scissors"];
let humanScore = 0, 
    computerScore = 0;

const getComputerChoice = () => Choice[Math.floor(Math.random() * 3)];

const getHumanChoice = () => Choice[parseInt(prompt("Please enter a number of the following:\n[1] : rock\n[2] : paper\n[3] : scissors")) - 1];

const getRoundWinner = (computerChoice, humanChoice) => {
    switch (computerChoice) {
        case "rock":
            if (humanChoice == "rock") {
                console.log("You chose rock and computer chose rock, it's a tie!");
                return null;
            } else if (humanChoice == "paper") {
                console.log("You chose paper and computer chose rock, you win!");
                return 0;
            } else {
                console.log("You chose scissors and computer chose rock, you lost!");
                return 1;
            }

        case "paper":
            if (humanChoice == "rock") {
                console.log("You chose rock and computer chose paper, you lost!");
                return 1;
            } else if (humanChoice == "paper") {
                console.log("You chose paper and computer chose paper, it's a tie!");
                return null;
            } else {
                console.log("You chose scissors and computer chose paper, you win!");
                return 0;
            }

        case "scissors":
            if (humanChoice == "rock") {
                console.log("You chose rock and computer chose scissors, you win!");
                return 0;
            } else if (humanChoice == "paper") {
                console.log("You chose paper and computer chose scissors, you lost!");
                return 1;
            } else {
                console.log("You chose scissors and computer chose scissors, it's a tie!");
                return null;
            }
    }
}

