/* eslint-disable import/no-unresolved */
import { test, expect } from "bun:test";
import Ship from "../Classes/Ship";

test('Ship Sunk', () => {
  const newShip = new Ship(5);
  expect(newShip.isSunk).toBe(false);
  newShip.hit([1, 0]);
  expect(newShip.isSunk).toBe(false);
  newShip.hit([2, 0]);
  newShip.hit([3, 0]);
  newShip.hit([4, 0]);
  expect(newShip.isSunk).toBe(false);
  newShip.hit([5, 0]);
  expect(newShip.isSunk).toBe(true);
})