
function renderBoard(playerBoard, opponentBoard) {
	const main = document.querySelector('main');

	const gameContainer = document.createElement('div');
	gameContainer.classList.add('container');

	const pboard = document.createElement('div');
	pboard.classList.add('board-container');
	pboard.id = 'player';
	const oboard = document.createElement('div');
	oboard.classList.add('board-container');
	oboard.id = 'opponent';

	for (let i = 0; i < 100; i += 1) {
		const pcell = document.createElement('div');
		const ocell = document.createElement('div');
		pcell.dataset.cols = i % 10;
		pcell.dataset.rows = Math.floor(i / 10);
		ocell.dataset.cols = i % 10;
		ocell.dataset.rows = Math.floor(i / 10);

		// pcell.addEventListener('click', () => {
		// 	attack(playerBoard, i);
		// 	pcell.classList.add('hit');
		// });

		pcell.classList.add('cell');
		ocell.classList.add('cell');
		if (playerBoard[i % 10][Math.floor(i / 10)])
			pcell.classList.add('occupied');
		if (opponentBoard[i % 10][Math.floor(i / 10)])
			ocell.classList.add('occupied');

		pboard.appendChild(pcell);
		oboard.appendChild(ocell);
	}

	gameContainer.appendChild(pboard);
	gameContainer.appendChild(oboard);

	main.appendChild(gameContainer);
}

export default renderBoard;
