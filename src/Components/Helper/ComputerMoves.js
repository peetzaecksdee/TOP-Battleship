import Gameboard from "../../Classes/Gameboard";

function computerMove() {
	let lastHit = null;
	const usedMoves = [];

	function deviateAttack([dx, dy]) {
		if (dx === -1 && dy === 0) return [];

    /* 
    [0, 0]
    [0, 1]
    [0, -1]
    [1, 0]
    [-1, 0]
    */
		if (dx === 0) {
			if (dy === 0) return [0, 1];
			if (dy === 1) return [0, -1];
      if (dy === -1) return [1, 0];
    } else {
      return [-1, 0];
    }
		return [];
	}

	function calculateMove([x, y], [dx, dy]) {
		if (dx == null || !dy == null || (Gameboard.isOutOfBounds(x) || Gameboard.isOutOfBounds(y)) || (Gameboard.isOutOfBounds(x + dx) || Gameboard.isOutOfBounds(y + dy))) {
			lastHit = null;
			return calculateMove(
				[Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)],
				[0, 0]
			);
		}

		const updatedAttack = [x + dx, y + dy];
		if (
			usedMoves.some(
				(coordinate) =>
					coordinate[0] === updatedAttack[0] &&
					coordinate[1] === updatedAttack[1]
			)
		) {
			return calculateMove([x, y], deviateAttack([dx, dy]));
		}

		usedMoves.push(updatedAttack);
		return updatedAttack;
	}

  function randomFirstConsecutiveMove() {
    const x = 1 - Math.round(Math.random() * 2);
    const y = x === 0 ? 1 - Math.round(Math.random() * 2) : 0;
    return [x, y]
  }

	function computerAttack() {
		if (lastHit) {
			const [x, y] = lastHit;
			const calcMove = calculateMove([x, y], randomFirstConsecutiveMove());
			return calcMove;
		}

		return calculateMove(
			[Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)],
			[0, 0]
		);
	}

  function changeLastHit(coord) {
    lastHit = coord
  }

  return {computerAttack, changeLastHit}
}

export default computerMove;
