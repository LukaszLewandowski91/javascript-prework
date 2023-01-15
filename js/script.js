let wynikGracza = 0;
let wynikKomputera = 0;
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1), addFigurePlayer('<i class="fa-solid fa-hand-back-fist"></i>');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2), addFigurePlayer('<i class="fa-solid fa-hand"></i>');
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3), addFigurePlayer('<i class="fa-solid fa-hand-scissors"></i>');
  });

  function addFigurePlayer(playFigure){
    let div = document.createElement('div');
    div.innerHTML = playFigure;
    document.getElementById('playerField').appendChild(div);
  }
  
  function addFigureComputer(playFigure){
    let div = document.createElement('div');
    div.innerHTML = playFigure;
    document.getElementById('computerField').appendChild(div);
  }

function backgroundColor(argPlayer, argComputer){
	console.log(argPlayer);
	let player = document.getElementById('playerField');
	let computer = document.getElementById('computerField');

	if (player.classList.contains('winGreen')){
		player.classList.remove('winGreen');
	} else if (player.classList.contains('loseRed')){
		player.classList.remove('loseRed');
	} else if (player.classList.contains('drawWhite')){
		player.classList.remove('drawWhite');
	}

	if (computer.classList.contains('winGreen')){
		computer.classList.remove('winGreen');
	} else if (computer.classList.contains('loseRed')){
		computer.classList.remove('loseRed');
	} else if (computer.classList.contains('drawWhite')){
		computer.classList.remove('drawWhite');
	}

	player.classList.add(argPlayer);
	console.log(argComputer);
	computer.classList.add(argComputer);
}

function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else if(argMoveId == 2){
		return 'papier'
	} else if(argMoveId ==3){
		return 'nożyce'
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
  }
  
  function displayResult(argComputerMove, argPlayerMove){
	//printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	  backgroundColor('winGreen','loseRed');
	  printResult(1,0);
	  wynikGracza ++;
	  finalResult(wynikGracza,wynikKomputera);
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Komputer wygrywa!');
		backgroundColor('loseRed','winGreen');
		printResult(0,1);
		wynikKomputera ++;
	  	finalResult(wynikGracza,wynikKomputera);
	} else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Komputer wygrywa!');
		backgroundColor('loseRed','winGreen');
		printResult(0,1);
		wynikKomputera ++;
	  	finalResult(wynikGracza,wynikKomputera);
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
		backgroundColor('winGreen','loseRed');
		printResult(1,0);
		wynikGracza ++;
	  	finalResult(wynikGracza,wynikKomputera);
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Komputer wygrywa!');
		backgroundColor('loseRed','winGreen');
		printResult(0,1);
		wynikKomputera ++;
	  	finalResult(wynikGracza,wynikKomputera);
	} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
		backgroundColor('winGreen','loseRed');
		printResult(1,0);
		wynikGracza ++;
	  	finalResult(wynikGracza,wynikKomputera);
	} else if(argComputerMove == argPlayerMove){
		printMessage('Remis');
		backgroundColor('drawWhite','drawWhite')
		printResult(0,0);
	}else {
		printMessage('Nieznany ruch, brak rozstrzygnięcia');
	}
	}

function playGame(playerInput){
	clearMessages();
	let randomNumber = Math.floor(Math.random() * 3 + 1);

	console.log('Wylosowana liczba to: ' + randomNumber);
	if(randomNumber == 1){
		addFigureComputer('<i class="fa-solid fa-hand-back-fist"></i>');
	} else if(randomNumber == 2){
		addFigureComputer('<i class="fa-solid fa-hand"></i>');
	} else {
		addFigureComputer('<i class="fa-solid fa-hand-scissors"></i>');
	}
	let computerMove = getMoveName(randomNumber);

	//printMessage('Mój ruch to: ' + computerMove);

	console.log('Gracz wpisał: ' + playerInput);

	let playerMove = getMoveName(playerInput);

	//printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove,playerMove);
}

function finalResult(finalPlayer, finalComputer){
	//let tablePlayer = document.getElementById('gracz');
	//let tableComputer = document.getElementById('komputer');
	console.log(finalPlayer);
	console.log(finalComputer);
	document.getElementById('gracz').innerHTML = finalPlayer;
	document.getElementById('komputer').innerHTML = finalComputer;
}
