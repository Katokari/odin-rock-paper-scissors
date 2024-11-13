const Choice = ["rock", "paper", "scissors"];
let humanScore = 0, 
    computerScore = 0;

const getComputerChoice = () => Choice[Math.floor(Math.random() * 3)];

const getHumanChoice = () => Choice[parseInt(prompt("Please enter a number of the following:\n[1] : rock\n[2] : paper\n[3] : scissors")) - 1];

const getRoundWinner = (computerChoice, humanChoice) => {
    switch (computerChoice) {
        case "rock":
            humanChoice == "rock" ? console.log("You chose rock and computer chose rock, its a tie!") : 
            humanChoice == "paper" ? console.log("You chose paper and computer chose rock, you win!") :
            console.log("You chose scissors and computer chose rock, you lost!");
            break;

        case "paper":
            humanChoice == "rock" ? console.log("You chose rock and computer chose paper, you lost!") : 
            humanChoice == "paper" ? console.log("You chose paper and computer chose rock, its a tie!") :
            console.log("You chose scissors and computer chose rock, you win!");
            break;

        case "scissors":
            humanChoice == "rock" ? console.log("You chose rock and computer chose rock, you win!") : 
            humanChoice == "paper" ? console.log("You chose paper and computer chose rock, you lost!") :
            console.log("You chose scissors and computer chose rock, its a tie!");
            break;
    }
} 

