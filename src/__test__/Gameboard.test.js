/* eslint-disable import/no-unresolved */
import { test, expect } from 'bun:test';
import Gameboard from '../Classes/Gameboard';

test('Static Tests', () => {
	expect(Gameboard.createBoard()[0]).toBeArrayOfSize(10);
	expect(Gameboard.isValidShipLength(1)).toBeFalse();
	expect(Gameboard.isValidShipLength(2)).toBeTrue();
	expect(Gameboard.isValidCoordinate(5, [1, 1, 1, 1, 1, 1])).toBeFalse();
	expect(
		Gameboard.isValidCoordinate(5, [
			[0, 1],
			[0, 2],
			[0, 3],
			[0, 4],
			[0, 5],
		])
	).toBeTrue();
	expect(
		Gameboard.isValidCoordinate(5, [
			[0, 20],
			[0, 2],
			[0, 3],
			[0, 4],
			[0, 5],
		])
	).toBeFalse();
});

test('Game Test', () => {
	const gameBoard = new Gameboard();
	gameBoard.placeShip(5, [
		[0, 1],
		[0, 2],
		[0, 3],
		[0, 4],
		[0, 5],
	]);
	gameBoard.placeShip(2, [
		[2, 1],
		[2, 2],
	]);
	expect(gameBoard.board[0][3]).toEqual({ length: 5, hits: [] });
	expect(gameBoard.receiveAttack([0, 4])).toBe('Perfect Hit!');
	expect(gameBoard.receiveAttack([0, 4])).toBe('You shot the same place...');
	expect(gameBoard.receiveAttack([3, 6])).toBe('You Missed!');
	expect(gameBoard.receiveAttack([0, 3])).toBe('Perfect Hit!');
	expect(gameBoard.receiveAttack([0, 2])).toBe('Perfect Hit!');
	expect(gameBoard.receiveAttack([0, 1])).toBe('Perfect Hit!');
	expect(gameBoard.receiveAttack([0, 5])).toBe('You sunk the opponent ship!');
  expect(gameBoard.isAllSunk()).toBeFalse();
	expect(gameBoard.receiveAttack([2, 1])).toBe('Perfect Hit!');
	expect(gameBoard.receiveAttack([2, 2])).toBe('You sunk all the opponent ship!');
  expect(gameBoard.isAllSunk()).toBeTrue();
});
