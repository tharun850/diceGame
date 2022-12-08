const btn = document.getElementById("start-btn");
const player1Dice = document.getElementById((id = "player1Dice"));
const player2Dice = document.getElementById((id = "player2Dice"));
const heading = document.getElementById("heading");
const imgSrc = "images/dice";
const imgType = ".png";
const player1Score = document.getElementById("player1Score");
const player2Score = document.getElementById("player2Score");

function runDice() {
  let num1 = Math.floor(Math.random() * 6) + 1;
  let num2 = Math.floor(Math.random() * 6) + 1;
  let player1Img = imgSrc + num1 + imgType;
  let player2Img = imgSrc + num2 + imgType;
  player1Dice.setAttribute("src", player1Img);
  player2Dice.setAttribute("src", player2Img);
  btn.textContent="Play Again";
  if (num1 > num2) {
    heading.textContent = "🚩 Player1 Wins";
    let score = parseInt(player1Score.textContent);
    score +=1;
    player1Score.textContent=score;
  }
  else if(num2>num1){
    heading.textContent = "Player2 Wins 🚩";
    let score = parseInt(player2Score.textContent);
    score +=1;
    player2Score.textContent=score;
  }
  else{
    heading.textContent = "Draw";
  }
}
