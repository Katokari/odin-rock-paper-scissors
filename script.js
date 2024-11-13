const Choice = ["rock", "paper", "scissors"];

let getComputerChoice = () => Choice[Math.floor(Math.random() * 3)];

let getHumanChoice = () => Choice[parseInt(prompt("Please enter a number of the following:\n[1] : rock\n[2] : paper\n[3] : scissors")) - 1];

