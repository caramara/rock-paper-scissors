//Initialize variables
let humanScore=0;
let computerScore=0;
let rounds=5;
let counter=0;
let humanChoice, computerChoice;
let output = ["paper", "scissors", "rock"];

//Manipulate HTML
const game = document.querySelector('#game');
const results = document.querySelector('#results');
const score = document.querySelector('#score');
score.textContent=`Round: ${counter} Score: Human: ${humanScore} Computer: ${computerScore}`;

game.addEventListener('click', (e)=>{
    let target = e.target;
    switch(target.id){
        case 'rock':
            playRound(2, getComputerChoice());
            counter++;
            break;
        case 'paper':
            playRound(0, getComputerChoice());
            counter++;
            break;
        case 'scissors':
            playRound(1, getComputerChoice());
            counter++;
            break;
    }
    score.textContent=`Round: ${counter} Score: Human: ${humanScore} Computer: ${computerScore}`;

    if(counter===5){
        if(humanScore>computerScore){
            //console.log(`Human wins the game!: ${humanScore}`);
            results.textContent="Human wins the game!";
            
        }else if(computerScore>humanScore){
           //console.log(`Computer wins the game!: ${computerScore}`);
            results.textContent="Computer wins the game!";
        }else if(computerScore===humanScore){
            //console.log("Tie!");
            results.textContent="Tie!";
        }
        counter = 0;
        humanScore = 0;
        computerScore = 0;
    }
});
//playGame();

//Get Human Choice
function getHumanChoice(){
    let choice = prompt("What's your choice? 1: Paper, 2: Scissors, 3: Rock","").toLowerCase();
  
    switch(choice){
        case "1":
            return 0;
        case "2": 
            return 1;
        case "3":
            return 2;
        case "rock":
            return 2;
        case "scissors":
            return 1;
        case "paper":
            return 0;
        default:
            console.warn("Invalid choice");
    }
    
}
//Get Computer Choice
function getComputerChoice(){
    //randomly return Rock, Paper or Scissors
    let choice = Math.floor(Math.random()*3);
    return choice;
}
//Game logic
function playRound(humanChoice, computerChoice){
    if(
        (humanChoice===2 && computerChoice===1)||
        (humanChoice===1 && computerChoice===0)||
        (humanChoice===0 && computerChoice===2)
    ){
        ++humanScore;
        //console.log(`Human wins this round`);
        results.textContent = 'Human wins this round';
    }else if(
        (humanChoice===2 && computerChoice===0)||
        (humanChoice===1 && computerChoice===2)||
        (humanChoice===0 && computerChoice===1)
    ){
        ++computerScore;
        //console.log(`Computer wins this round`);
        results.textContent = 'Computer wins this round';
    }else{
        //console.log("Tie");
        results.textContent = 'Tie';
    }
}
/*function playGame(){
    //Play game for 5 rounds
    for(let i=1;i<=rounds;i++){
        console.log(`Round: ${i}`);
        humanChoice = getHumanChoice();
        console.log(`Human choice: ${output.at(humanChoice)}`);
        computerChoice = getComputerChoice();
        console.log(`Computer choice: ${output.at(computerChoice)}`);
        playRound(humanChoice, computerChoice);
    }
    if(humanScore>computerScore){
        console.log(`Human wins the game!: ${humanScore}`);
    }else if(computerScore>humanScore){
        console.log(`Computer wins the game!: ${computerScore}`);
    }else{
        console.log("Tie!");
    }
}*/