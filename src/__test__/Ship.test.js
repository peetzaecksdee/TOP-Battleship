import Ship from "../Classes/Ship";

test('Ship Sunk', () => {
  const newShip = new Ship(5);
  expect(newShip.isSunk).toBe(false);
  newShip.hit();
  expect(newShip.isSunk).toBe(false);
  newShip.hit();
  newShip.hit();
  newShip.hit();
  expect(newShip.isSunk).toBe(false);
  newShip.hit();
  expect(newShip.isSunk).toBe(true);
})