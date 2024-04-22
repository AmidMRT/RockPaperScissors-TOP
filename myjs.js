const choices = ["rock", "paper", "scissors"];

function getComputerChoice (){
    let randInd = Math.floor((Math.random())*3);
    let computerChoice = (choices[randInd]);
    return computerChoice;
}


function getHumanChoice (){
    let promptCondition = true;
    let humanChoice;
    while (promptCondition) {
        humanChoice = prompt("ROCK PAPER SCICCORS, GO!!").toLowerCase();
        if (choices.includes(humanChoice)) {
            promptCondition = false;
        }
    }
    return humanChoice;
   
}


//getComputerChoice();
//getHumanChoice();

let humanScore = 0, computerScore = 0;

function playRound (humanChoice, computerChoice) {
    switch (humanChoice, computerChoice) {
        case (humanChoice == computerChoice):
            console.log("same choices. zero score.")
            break
        case ("rock", "paper" ):
        case ("paper", "sciccors"):
        case ("sciccors", "rock"):
            computerScore++;
            console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
            break;

        default:
            humanScore++;
            console.log(`you won! ${humanChoice} beats ${computerChoice}`);
    }
    console.log(`human: ${humanScore}, computer: ${computerScore}`)
}

function playGame (rounds) {
    
    for (let i = 0 ; i<rounds ; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore >= computerScore) {
        console.log ("you won the whole game")
    } else { console.log ("you lost to the computer")}
}

playGame (5);