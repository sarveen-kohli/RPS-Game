/*global console*/

// eslint-disable-line no-console 
console.log("I Rock");


let userScore=0;
let compScore=0;


const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("computer-score");
const result_p= document.querySelector(".result>p");


//rock_div.addEventListener('click',function(){console.log("I am Rock")});
//paper_div.addEventListener('click',function(){console.log("I ("am Paper")});

//scissor_div.addEventListener('click',function(){console.log("I am scissor")})

function getComputerChoice()
{
    const Choices=['r','p','s'];
  //  console.log(Math.floor(Math.random()*3));
    const randomNumber=Math.floor(Math.random()*3);
    
   // console.log("I am comp choice :"+ Choices[randomNumber]);
    return Choices[randomNumber];
   
}

function win(userChoice,computerChoice)
{
    userScore++;
   // console.log("USER WINS");
   // console.log("user score: "+ userScore);
    
   userScore_span.innerHTML=userScore;
  // result1.innerHTML= userChoice;// + "beats" + computerChoice+ "You win!";
    result_p.innerHTML= userChoice+ ": beats " + computerChoice+ " You win!";

}
 

function loose()
{
  compScore++;
    
 // console.log("USER Looses");
  // console.log("Comp score: "+ compScore);
     compScore_span.innerHTML=compScore;
    result_p.innerHTML= userChoice+ ": beats " + computerChoice+ " You win!";
    
}

function draw()
{
     console.log("It is a draw");
    
}

function game(userChoice)
{
    
   /* console.log("Hi");
    console.log("User choice is : "+userChoice);
   
    console.log("computer choice is: "+ computerChoice);*/
    const computerChoice=getComputerChoice();
    switch(userChoice+computerChoice)
        {
                
            case "rs":
            case "pr":
            case "sp":
                win(userChoice,computerChoice);
                break;
            case "rp":
                 case "ps":
                 case "sr":
                loose(userChoice,computerChoice);
                 break;
                 case "rr":
                 case "pp":
                 case "ss":
                draw(userChoice,computerChoice);
                 break;
                
        }
}
function main()
{

rock_div.addEventListener('click',function(){game("r")});
paper_div.addEventListener('click',function(){game("p")});
scissor_div.addEventListener('click',function(){game("s")});
getComputerChoice();

}
main();