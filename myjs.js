const choices = ["rock", "paper", "scissors"];

function getComputerChoice (){
    let randInd = Math.floor((Math.random())*3);
    let computerChoice = (choices[randInd]);
    return computerChoice;
}

let humanScore = 0, computerScore = 0;

function playRound (humanChoice, computerChoice) {
    switch (true) {
        case (humanChoice == computerChoice):
            console.log("same choices. zero score.")
            break
        case (humanChoice == "rock" && computerChoice == "paper" ):
        case (humanChoice == "paper" && computerChoice == "scissors"):
        case (humanChoice == "scissors" && computerChoice == "rock"):
            computerScore++;
            console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
            break;

        default:
            humanScore++;
            console.log(`you won! ${humanChoice} beats ${computerChoice}`);
    }
    console.log(`human: ${humanScore}, computer: ${computerScore}`)
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const humanChoiceText = document.querySelector(".humanChoice");
const computerChoiceText = document.querySelector(".computerChoice")

const playButton = document.querySelector("#play");
const score = document.querySelector(".score");

const selButtons = document.querySelector(".humanSelection");

const choiceButtons = [rock, paper, scissors];
let computerChoice;

for (let i =0; i<3; i++){choiceButtons[i].addEventListener("click", ()=>{
    computerChoice = getComputerChoice();
    humanChoiceText.textContent = choiceButtons[i].textContent.toLowerCase();
    computerChoiceText.textContent = computerChoice;
    humanChoice = humanChoiceText.textContent.toLowerCase();
    playRound(humanChoice, computerChoice) ;
    score.textContent = `human: ${humanScore} - computer: ${computerScore}`;
    if (humanScore==5) {
        score.textContent = "You won!";
        selButtons.style.visibility = "hidden";
    } else if (computerScore==5) {
        score.textContent = "Computer won!";
        selButtons.style.visibility = "hidden";
    }
})}

playButton.addEventListener("click", ()=>{ 
    selButtons.style.visibility = "visible";
    humanScore =0;
    computerScore=0;
    score.textContent = `human: ${humanScore} - computer: ${computerScore}`;
    humanChoiceText.textContent = "human choice";
    computerChoiceText.textContent = "computer choice";
});