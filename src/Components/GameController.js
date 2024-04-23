import Player from '../Classes/Player';
import renderBoard from './Helper/BoardRenderer';
import computerMove from './Helper/ComputerMoves';
import gameTextChanger from './Helper/gameText';

function init() {
	const player = new Player();
	const opponent = new Player();
	const playerBoard = player.gameBoard;
	const opponentBoard = opponent.gameBoard;
	const computer = computerMove();
	const isWithBot = true;
	let playerTurn = true;

	playerBoard.placeShip(5, [
		[1, 0],
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
	]);
	playerBoard.placeShip(4, [
		[5, 4],
		[6, 4],
		[7, 4],
		[8, 4],
	]);
	playerBoard.placeShip(3, [
		[8, 6],
		[9, 6],
		[7, 6],
	]);
	playerBoard.placeShip(3, [
		[4, 0],
		[4, 1],
		[4, 2],
	]);
	playerBoard.placeShip(2, [
		[2, 9],
		[2, 8],
	]);
	opponentBoard.placeShip(5, [
		[8, 3],
		[8, 4],
		[8, 5],
		[8, 6],
		[8, 7],
	]);
	opponentBoard.placeShip(4, [
		[3, 4],
		[3, 3],
		[3, 2],
		[3, 1],
	]);
	opponentBoard.placeShip(3, [
		[1, 8],
		[2, 8],
		[3, 8],
	]);
	opponentBoard.placeShip(3, [
		[9, 7],
		[9, 8],
		[9, 9],
	]);
	opponentBoard.placeShip(2, [
		[3, 6],
		[4, 6],
	]);

	const isPlayerTurn = () => playerTurn;

	function computerAttack() {
		const playerBoardElement = document.querySelector('#player');
		const generatedAttack = computer.computerAttack();
		playerBoardElement
			.querySelector(
				`[data-cols='${generatedAttack[0]}'][data-rows='${generatedAttack[1]}']`
			)
			.classList.add('hit');
		const feedBack = playerBoard.receiveAttack(generatedAttack);
		if (feedBack === 'You Missed!') {
			playerTurn = true;
		} else {
			if (feedBack === 'Perfect Hit!') {
				computer.changeLastHit(generatedAttack);
			} else if (feedBack === 'You sunk the opponent ship!') {
				computer.changeLastHit(null)
			}
			setTimeout(() => computerAttack(), 1000);
		}
		gameTextChanger(feedBack);
	}

	function attack(coordinate) {
		const board = playerTurn ? opponentBoard : playerBoard;
		const feedBack = board.receiveAttack(coordinate);
		if (feedBack === 'You Missed!') playerTurn = !playerTurn;
		gameTextChanger(feedBack);
	}

	function boardListener() {
		document.querySelector('#player').addEventListener('mousedown', (ev) => {
			if (isPlayerTurn()) return;

			attack([ev.target.dataset.cols, ev.target.dataset.rows]);
			ev.target.classList.add('hit');
		});
		document.querySelector('#opponent').addEventListener('mousedown', (ev) => {
			if (!isPlayerTurn()) return;
			attack([ev.target.dataset.cols, ev.target.dataset.rows]);
			ev.target.classList.add('hit');

			if (isWithBot && !isPlayerTurn())
				setTimeout(() => computerAttack(), 1000);
		});
	}

	renderBoard(playerBoard.gameBoard, opponentBoard.gameBoard);
	boardListener();

	return { attack, isPlayerTurn };
}

export default init;
