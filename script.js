let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let scoreX = 0;
let scoreO = 0;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function handleClick(index) {
  if (gameBoard[index] === '' && !checkWinner()) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    if (checkWinner()) {
      alert(`Jugador ${currentPlayer} Gana!`);
      updateScore();
    } else if (!gameBoard.includes('')) {
      alert('Es un Empate!');
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      document.getElementById('turn').innerText = `Turno del jugador: ${currentPlayer}`;
    }
  }
}

function checkWinner() {
  for (const combo of winningCombinations) {
    const [a, b, c] = combo;
    if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function updateScore() {
  if (currentPlayer === 'X') {
    scoreX++;
    document.getElementById('scoreX').innerText = `Jugador X: ${scoreX}`;
  } else {
    scoreO++;
    document.getElementById('scoreO').innerText = `Jugador O: ${scoreO}`;
  }
}

function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
  document.getElementById('turn').innerText = 'Turno del jugador: X';
}