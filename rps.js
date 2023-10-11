let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
updateScoreEl();
/* if (score===null) {
  score ={
    wins: 0,
    losses: 0,
    ties: 0
  }; 

} */
let isautoplaying = false;
let intervalid;
function autoplay() {
  if (!isautoplaying) {
    intervalid = setInterval(() => {
      const playerMove = move();
      playGame(playerMove);
    }, 1000);
    isautoplaying = true;


  } else {
    clearInterval(intervalid);
    isautoplaying = false;

  }
}
document.querySelector('.js-rockbutton').addEventListener('click', () => {
  playGame('Rock');
});
document.querySelector('.js-paperbutton').addEventListener('click', () => {
  playGame('Paper');
});
document.querySelector('.js-scissorsbutton').addEventListener('click', () => {
  playGame('Scissors');
});
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('Rock');

  } else if (event.key === 'p') {
    playGame('Paper');
  } else if (event.key === 's') {
    playGame('Scissors');
  }
});

function playGame(playerMove) {

  const computerMove = move();
  let result = '';

  if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';

    } else if (computerMove === 'Paper') {
      result = 'You lose.';

    } else if (computerMove === 'Scissors') {
      result = 'You win.';
    }






  }
  else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win.';

    } else if (computerMove === 'Paper') {
      result = 'Tie.';

    } else if (computerMove === 'Scissors') {
      result = 'You lose.';
    }



  }
  else if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';

    } else if (computerMove === 'Paper') {
      result = 'You win.';

    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }


  }
  if (result === 'You win.') {
    score.wins += 1;
  }
  else if (result === 'You lose.') {
    score.losses += 1;

  }
  else if (result === 'Tie.') {
    score.ties += 1;
  }
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreEl();

  document.querySelector('.js-res')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move">Computer<img src="images/${computerMove}-emoji.png" class="move">`;


}


function updateScoreEl() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};



function move() {
  let randomNum = Math.random();
  let computerMove = '';
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = 'Rock';
  }
  else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'Paper';
  }
  else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
};
