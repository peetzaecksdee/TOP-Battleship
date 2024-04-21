export default class Player {
	constructor() {
		this.usedMoves = [];
		this.lastHit = null;
	}

	static attack(gameboard, coordinate) {
		return gameboard.recieveAttack(coordinate);
	}

	static deviateAttack([dx, dy]) {
		if (dx === -1 && dy === -1) return [];

		if (dx === 1) {
			if (dy === -1) return [1, 1];
			if (dy === 1) return [-1, 1];
		} else if (dx === -1) {
			if (dy === 1) return [-1, -1];
		}
		return [];
	}

	calculateMove(gameboard, [x, y], [dx, dy]) {
		if (!dx || !dy) {
			this.lastHit = null;
			return this.calculateMove(
				[Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
				[0, 0]
			);
		}

		const updatedAttack = [x + dx, y + dy];
		if (
			this.usedMoves.some(
				(coordinate) =>
					coordinate[0] === updatedAttack[0] &&
					coordinate[1] === updatedAttack[1]
			)
		) {
			return this.calculateMove(
				gameboard,
				[x, y],
				Player.deviateAttack([dx, dy])
			);
		}

		this.usedMoves.push(updatedAttack);
		return gameboard.recieveAttack(updatedAttack);
	}

	computerAttack(gameboard) {
		if (this.lastHit) {
			const [x, y] = this.lastHit;
			const calcMove = this.calculateMove(gameboard, [x, y], [1, -1]);
			if (calcMove === 'You Missed!') this.lastHit = [x, y];
			else if (calcMove === 'You sunk the opponent ship!') this.lastHit = null;
			return calcMove;
		}

		return this.calculateMove(
			[Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)],
			[0, 0]
		);
	}
}
