function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
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
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Komputer wygrywa!');
	} else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Komputer wygrywa!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Komputer wygrywa!');
	} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz');
	} else if(argComputerMove == argPlayerMove){
		printMessage('Remis');
	}else {
		printMessage('Nieznany ruch, brak rozstrzygnięcia');
	}
	}