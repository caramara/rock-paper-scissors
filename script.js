
//Get Human Choice
function getHumanChoice(){
    let choice = ParseInt(prompt("What's your choice? 1: Rock, 2:Paper, 3:Scissors",""));
    if(choice!== 1 || choice!==2 || choice!==3){
        console.warn("Invalid Choice");
    }else{
        return (choice===1)?"Rock":(choice===2)?"Paper":"Scissors";
    }
}
//Get Computer Choice
function getComputerChoice(){
    //randomly return Rock, Paper or Scissors
    let choice = Math.floor(Math.random()*3);
    if(choice!== 1 || choice!==2 || choice!==3){
        console.warn("Invalid Choice");
    }else{
        return (choice===1)?"Rock":(choice===2)?"Paper":"Scissors";
    }
}
