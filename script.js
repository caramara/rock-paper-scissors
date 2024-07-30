console.log("Hello to the console Rock Paper Scissors game!")
//Initialize variables
let humanScore=0;
let computerScore=0;
let rounds=5;
let humanChoice, computerChoice;
playGame();

//Get Human Choice
function getHumanChoice(){
    let choice = prompt("What's your choice? 1: Paper, 2: Scissors, 3: Rock","").toLowerCase();
  
    switch(choice){
        case "1":
            return parseInt(choice);
        case "2": 
            return parseInt(choice);
        case "3":
            return parseInt(choice);
        case "rock":
            return 3;
        case "scissors":
            return 2;
        case "paper":
            return 1;
        default:
            console.warn("Invalid choice");
    }
    
}
//Get Computer Choice
function getComputerChoice(){
    //randomly return Rock, Paper or Scissors
    let choice = Math.floor(Math.random()*3+1);
    return choice;
}
//Game logic
function playRound(humanChoice, computerChoice){
    if(
        (humanChoice===3 && computerChoice===2)||
        (humanChoice===2 && computerChoice===1)||
        (humanChoice===1 && computerChoice===3)
    ){
        ++humanScore;
        console.log(`Human wins this round`);
    }else if(
        (humanChoice===3 && computerChoice===1)||
        (humanChoice===2 && computerChoice===3)||
        (humanChoice===1 && computerChoice===2)
    ){
        ++computerScore;
        console.log(`Computer wins this round`);
    }else{
        console.log("Tie");
    }
}
function playGame(){
    //Play game for 5 rounds
    for(let i=1;i<=rounds;i++){
        console.log(`Round: ${i}`);
        humanChoice = getHumanChoice();
        console.log(`Human choice: ${humanChoice}`);
        computerChoice = getComputerChoice();
        console.log(`Computer choice: ${computerChoice}`);
        playRound(humanChoice, computerChoice);
    }
    if(humanScore>computerScore){
        console.log(`Human wins the game!: ${humanScore}`);
    }else if(computerScore>humanScore){
        console.log(`Computer wins the game!: ${computerScore}`);
    }else{
        console.log("Tie!");
    }
}