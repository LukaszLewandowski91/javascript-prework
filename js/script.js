document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1), addFigurePlayer('<i class="fa-solid fa-hand-back-fist"></i>');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2), addFigurePlayer('<i class="fa-solid fa-hand"></i>');
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3), addFigurePlayer('<i class="fa-solid fa-hand-scissors"></i>');
  });