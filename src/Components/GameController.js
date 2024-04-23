import Gameboard from '../Classes/Gameboard';
import gameTextChanger from './Helper/gameText';

function init() {
	const playerBoard = new Gameboard();
	const opponentBoard = new Gameboard();
	let playerTurn = true;

	const isPlayerTurn = () => playerTurn;

	function attack(coordinate) {
		const board = playerTurn ? opponentBoard : playerBoard;
		const feedBack = board.receiveAttack(coordinate);
		if (feedBack !== 'You shot the same place...') playerTurn = !playerTurn;
		gameTextChanger(feedBack);
	}

	function boardListener() {
		document.querySelector('#player').addEventListener('mousedown', (ev) => {
			if (!isPlayerTurn()) return;

			attack([ev.target.dataset.cols, ev.target.dataset.rows]);
			ev.target.classList.add('hit');
		});
		document.querySelector('#opponent').addEventListener('mousedown', (ev) => {
			if (isPlayerTurn()) return;

			attack([ev.target.dataset.cols, ev.target.dataset.rows]);
			ev.target.classList.add('hit');
		});
	}

	boardListener();

	return { playerBoard, opponentBoard, attack, isPlayerTurn };
}

export default init;
