const button = document.getElementById('button');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
var screen = document.querySelector(".intro");
var game = document.querySelector(".game");
let computer = 0;
let player = 0;
var options = document.querySelectorAll('.options button');
var playerOption = document.querySelectorAll('.player-hand');
var compOption= document.querySelectorAll(".computer-hand");
const compOptions = ["rock", "paper", "scissors"];
const compNumber = Math.floor(Math.random() * 3);
const compChoice = compOptions[compNumber];
var playerScore = document.querySelector(".player-score p");
var computerScore = document.querySelector(".computer-score p");

const rps = ()=> {
}
button.addEventListener('click',() => {
  // Screen.classList.add("fadeOut")
  console.log("Hit button")
})

const playRPS = ()=> {
  // #options.forEach((option => {
  //  option.addEventListener("click", function(){
      // console.log(this)
}

const startRPS = ()=>{
  
      handComparison(this.textContent, compChoice);

  }
  
  rock.addEventListener('click',() => {
    // Screen.classList.add("fadeOut")
    console.log("Hit button")
  })


  paper.addEventListener('click',() => {
    // Screen.classList.add("fadeOut")
    console.log("Hit button")
  })

  scissors.addEventListener('click',() => {
    // Screen.classList.add("fadeOut")
    console.log("Hit button")
  })

  const updateScore = () =>{
    playerScore.textContent = pScore;
    computerScore.textcontent = cScore;
  }

  const handComparison = (playerChoice, compChoice) =>{
    if(playerChoice === compChoice) {
      ServiceWorkerContainer.textContent = 'It is a tie';
      return;
    }
    if(playerChoice === 'rock'){
      if(compChoice === 'scissors'){
        ServiceWorkerContainer.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }else{
        ServiceWorkerContainer.textContent = 'Computer Wins';
        cScore++;
        updateScore();
        return;
      }
    }
    if(playerChoice === 'paper'){
      if(compChoice === 'scissors'){
        ServiceWorkerContainer.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }else{
        ServiceWorkerContainer.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }if(playerChoice === 'scissors'){
      if(compChoice === 'rock'){
        ServiceWorkerContainer.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }else{
        ServiceWorkerContainer.textContent = 'Player Wins';
        pScore++;
        updateScore();
        return;
      }
    }
  }
    startRPS()

  playRPS();