{
  let playerResult = 0,
    computerResult = 0;
  const PAPER = "papier",
    ROCK = "kamień",
    SCISSORS = "nożyce";

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

  const addFigurePlayer = function (playFigure) {
    let div = document.createElement("div");
    div.innerHTML = playFigure;
    document.getElementById("playerField").appendChild(div);
  }

  const addFigureComputer = function (playFigure) {
    let div = document.createElement("div");
    div.innerHTML = playFigure;
    document.getElementById("computerField").appendChild(div);
  }

  const backgroundColor = function (argPlayer, argComputer) {
    console.log(argPlayer);
    console.log(argComputer);
    let player = document.getElementById("playerField"),
      computer = document.getElementById("computerField");

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

  const getMoveName = function (argMoveId) {
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

  const displayResult = function (argComputerMove, argPlayerMove) {
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

  const userWins = function () {
    backgroundColor("winGreen", "loseRed");
    printResult(1, 0);
    playerResult++;
    finalResult(playerResult, computerResult);
  }

  const computerWins = function () {
    backgroundColor("loseRed", "winGreen");
    printResult(0, 1);
    computerResult++;
    finalResult(playerResult, computerResult);
  }

  const playGame = function (playerInput) {
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

    let computerMove = getMoveName(randomNumber),
      playerMove = getMoveName(playerInput);
    console.log("Gracz wpisał: " + playerInput);

    displayResult(computerMove, playerMove);
  }

  const finalResult = function (finalPlayer, finalComputer) {
    console.log(finalPlayer);
    console.log(finalComputer);
    document.getElementById("player").innerHTML = finalPlayer;
    document.getElementById("computer").innerHTML = finalComputer;
  }
}
