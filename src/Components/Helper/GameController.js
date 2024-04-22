import Gameboard from '../../Classes/Gameboard';

function loadBoard() {
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('container');

  const pboard = document.createElement('div');
  pboard.classList.add('board-container');
  const oboard = document.createElement('div');
  oboard.classList.add('board-container');

  const playerBoard = new Gameboard();
  const opponentBoard = new Gameboard();

  playerBoard.placeShip(5, [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4]]);
  playerBoard.placeShip(4, [[5, 4], [6, 4], [7, 4], [8, 4]]);
  playerBoard.placeShip(3, [[8, 6], [9, 6], [7, 6]]);
  playerBoard.placeShip(3, [[4, 0], [4, 1], [4, 2]]);
  playerBoard.placeShip(2, [[2, 9], [2, 8]]);
  opponentBoard.placeShip(5, [[8, 3], [8, 4], [8, 5], [8, 6], [8, 7]]);
  opponentBoard.placeShip(4, [[3, 4], [3, 3], [3, 2], [3, 1]]);
  opponentBoard.placeShip(3, [[1, 8], [2, 8], [3, 8]]);
  opponentBoard.placeShip(3, [[9, 7], [9, 8], [9, 9]]);
  opponentBoard.placeShip(2, [[3, 6], [4, 6]]);

  for (let i = 0; i < 100; i += 1) {
    const pcell = document.createElement('div');
    const ocell = document.createElement('div');
    pcell.classList.add('cell');
    ocell.classList.add('cell');
    if (playerBoard.board[i % 10][Math.floor(i / 10)]) pcell.classList.add('occupied');
    if (opponentBoard.board[i % 10][Math.floor(i / 10)]) ocell.classList.add('occupied');

    pboard.appendChild(pcell);
    oboard.appendChild(ocell);
  }

  gameContainer.appendChild(pboard);
  gameContainer.appendChild(oboard);

  return gameContainer;
}

export { loadBoard }