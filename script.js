alert("Welcome Player !!");
let player = prompt("Enter Your Name");
console.log(player);
let nam = document.getElementById("username");
nam.innerText = player;
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const conclusion = document.querySelector("#conclusion");
const result = document.querySelector("#result");
const game = () => {
    const score = ["rock", "paper", "scissors"];
    const value = Math.floor(Math.random() * 3);
    return score[value];
};
const drawGame = () => {
    conclusion.innerText = "Game was Draw. Play again.";
};
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      conclusion.innerText = `You win! ${userChoice} beats ${compChoice}`;
    } 
    else {
      compScore++;
      compScorePara.innerText = compScore;
      conclusion.innerText = `You lost. ${compChoice} beats ${userChoice}`;
    }
  };
const playgame = (userchoice) => {
    const computerchoice = game();
    if (userchoice === computerchoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
          userWin = computerchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          userWin = computerchoice === "scissors" ? false : true;
        } else {
          userWin = computerchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, computerchoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log(userchoice);
        playgame(userchoice);
    });
});