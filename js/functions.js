function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = '<h1>' + msg + '</h1>';
	document.getElementById('messages').appendChild(div);
}

function printResult(resultPlayer, resultComputer){
	let tbody = document.getElementById('game-history');
	let newRow = tbody.insertRow();
	let cellPlayer = newRow.insertCell();
	let cellComputer = newRow.insertCell();
	let textPlayer = document.createTextNode(resultPlayer);
	let textComputer = document.createTextNode(resultComputer);

	cellPlayer.appendChild(textPlayer);
	cellComputer.appendChild(textComputer);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('playerField').innerHTML = '';
	document.getElementById('computerField').innerHTML = '';
}