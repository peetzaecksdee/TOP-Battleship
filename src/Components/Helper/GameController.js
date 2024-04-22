function attack(board, pos) {
	return board.receiveAttack([pos % 10, Math.floor(pos / 10)]);
}

export { attack };
