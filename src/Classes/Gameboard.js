import Ship from './Ship';

export default class Gameboard {
	constructor() {
		this.board = Gameboard.createBoard();
	}

	static createBoard() {
		// DEFAULT VALUES
		const rows = 10;
		const columns = 10;

		return new Array(rows) // return new Array with the length of rows
			.fill([]) // fills empty item with empty array
			.map((grid) => grid.concat(new Array(columns).fill(false))); // fill empty array with false
	}

	static isValidShipLength(shipLength) {
		return shipLength >= 2 && shipLength <= 5;
	}

	static isOutOfBounds(pos) {
		return pos > 10 || pos < 0;
	}

	/**
	 *
	 * @param {number} shipLength
	 * @param {Array<x, y>} coordinate
	 */
	static isValidCoordinate(shipLength, coordinate) {
		if (shipLength !== coordinate.length) return false;
		return coordinate.every(
			([x, y]) => !Gameboard.isOutOfBounds(x) && !Gameboard.isOutOfBounds(y)
		);
	}

	/**
	 *
	 * @param {number} length
	 * @param {Array<x, y>} coordinate
	 */
	placeShip(length, coordinate) {
		if (
			!Gameboard.isValidCoordinate(length, coordinate) ||
			!Gameboard.isValidShipLength(length)
		)
			return;
		const ship = new Ship(length);
		coordinate.forEach(([x, y]) => {
			this.board[x][y] = ship;
		});
	}

	receiveAttack([x, y]) {
		const ship = this.board[x][y];
		if (
			ship === true ||
			(ship.hits &&
				ship.hits.find(
					(coordinate) => coordinate[0] === x && coordinate[1] === y
				))
		) {
			return 'You shot the same place...';
		}
		if (ship === false) {
			this.board[x][y] = true;
			return 'You Missed!';
		}
		ship.hit([x, y]);
    if (this.isAllSunk()) {
      return 'You sunk all the opponent ship!';
    }
		if (ship.isSunk) {
			return 'You sunk the opponent ship!';
		}
		return 'Perfect Hit!';
	}

	isAllSunk() {
		return this.board
			.map((row) => row.filter((cell) => cell.hits))
			.filter((arr) => arr.length > 0)
			.map((arr) => arr[0])
			.every((ship) => ship.isSunk);
	}
}
