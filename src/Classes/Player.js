import Gameboard from "./Gameboard";

export default class Player {
	constructor() {
		this.board = new Gameboard();
	}

	get gameBoard() {
		return this.board;
	}

	static attack(gameboard, coordinate) {
		return gameboard.recieveAttack(coordinate);
	}
}
