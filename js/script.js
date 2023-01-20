let playerResult = 0;
let computerResult = 0;
const PAPER = "papier";
const ROCK = "kamień";
const SCISSORS = "nożyce";

document.getElementById("play-rock").addEventListener("click", function () {
  playGame(1);
  addFigurePlayer('<i class="fa-solid fa-hand-back-fist"></i>');
});
document.getElementById("play-paper").addEventListener("click", function () {
  playGame(2);
  addFigurePlayer('<i class="fa-solid fa-hand"></i>');
});
document.getElementById("play-scissors").addEventListener("click", function () {
  playGame(3);
  addFigurePlayer('<i class="fa-solid fa-hand-scissors"></i>');
});

function addFigurePlayer(playFigure) {
  let div = document.createElement("div");
  div.innerHTML = playFigure;
  document.getElementById("playerField").appendChild(div);
}

function addFigureComputer(playFigure) {
  let div = document.createElement("div");
  div.innerHTML = playFigure;
  document.getElementById("computerField").appendChild(div);
}

function backgroundColor(argPlayer, argComputer) {
  console.log(argPlayer);
  console.log(argComputer);
  let player = document.getElementById("playerField");
  let computer = document.getElementById("computerField");

  if (player.classList.contains("winGreen")) {
    player.classList.remove("winGreen");
  } else if (player.classList.contains("loseRed")) {
    player.classList.remove("loseRed");
  } else if (player.classList.contains("drawWhite")) {
    player.classList.remove("drawWhite");
  }

  if (computer.classList.contains("winGreen")) {
    computer.classList.remove("winGreen");
  } else if (computer.classList.contains("loseRed")) {
    computer.classList.remove("loseRed");
  } else if (computer.classList.contains("drawWhite")) {
    computer.classList.remove("drawWhite");
  }
  player.classList.add(argPlayer);
  computer.classList.add(argComputer);
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return ROCK;
  } else if (argMoveId == 2) {
    return PAPER;
  } else if (argMoveId == 3) {
    return SCISSORS;
  } else {
    printMessage("Nie znam ruchu o id " + argMoveId + ".");
    return "nieznany ruch";
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (
    (argComputerMove == ROCK && argPlayerMove == PAPER) ||
    (argComputerMove == PAPER && argPlayerMove == SCISSORS) ||
    (argComputerMove == SCISSORS && argPlayerMove == ROCK)
  ) {
    printMessage("Ty wygrywasz!");
    userWins();
  } else if (
    (argComputerMove == PAPER && argPlayerMove == ROCK) ||
    (argComputerMove == SCISSORS && argPlayerMove == PAPER) ||
    (argComputerMove == ROCK && argPlayerMove == SCISSORS)
  ) {
    printMessage("Komputer wygrywa!");
    computerWins();
  } else if (argComputerMove == argPlayerMove) {
    printMessage("Remis");
    backgroundColor("drawWhite", "drawWhite");
    printResult(0, 0);
  } else {
    printMessage("Nieznany ruch, brak rozstrzygnięcia");
  }
}

function userWins() {
  backgroundColor("winGreen", "loseRed");
  printResult(1, 0);
  playerResult++;
  finalResult(playerResult, computerResult);
}

function computerWins() {
  backgroundColor("loseRed", "winGreen");
  printResult(0, 1);
  computerResult++;
  finalResult(playerResult, computerResult);
}

function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log("Wylosowana liczba to: " + randomNumber);

  if (randomNumber == 1) {
    addFigureComputer('<i class="fa-solid fa-hand-back-fist"></i>');
  } else if (randomNumber == 2) {
    addFigureComputer('<i class="fa-solid fa-hand"></i>');
  } else {
    addFigureComputer('<i class="fa-solid fa-hand-scissors"></i>');
  }

  let computerMove = getMoveName(randomNumber);
  console.log("Gracz wpisał: " + playerInput);
  let playerMove = getMoveName(playerInput);
  displayResult(computerMove, playerMove);
}

function finalResult(finalPlayer, finalComputer) {
  console.log(finalPlayer);
  console.log(finalComputer);
  document.getElementById("player").innerHTML = finalPlayer;
  document.getElementById("computer").innerHTML = finalComputer;
}
