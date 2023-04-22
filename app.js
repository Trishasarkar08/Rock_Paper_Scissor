const computerChoiceDisplay=document.getElementById('computer-choice');
const UserChoiceDisplay=document.getElementById('your-choice');
const ResultDisplay=document.getElementById('result');

const possibleChoice = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;
possibleChoice.forEach(possibleChoice=>possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id
    UserChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice()
    Result()
    
}))

function generateComputerChoice(){
    const randomNum = Math.floor(Math.random()*3);
    if(randomNum === 0){
        computerChoice = 'rock'
    }
    if(randomNum === 1){
        computerChoice = "paper"
    }
    if(randomNum === 2){
        computerChoice = "scissor"
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function Result(){
    if(computerChoice === userChoice){
        result = "It's Draw!!!";
    }
    if(computerChoice ==="rock" && userChoice === "paper"){
        result = "You Win!!!";
    }
    if(computerChoice ==="rock" && userChoice === "scissor"){
        result = "You lost!!!";
    }
    if(computerChoice ==="paper" && userChoice === "rock"){
        result = "You lost!!!";
    }
    if(computerChoice ==="paper" && userChoice === "scissor"){
        result = "You Win!!!";
    }
    if(computerChoice ==="scissor" && userChoice === "rock"){
        result = "You Win!!!";
    }
    if(computerChoice ==="scissor" && userChoice === "paper"){
        result = "You lost!!!";
    }
    ResultDisplay.innerHTML = result;
}