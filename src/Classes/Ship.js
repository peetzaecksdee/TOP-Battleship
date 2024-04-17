class Ship {
  constructor(length) {
    this.length = length || 0;
    this._hit = 0;
    this._isSunk = false;
  }

  hit() {
    this._hit++;
    if (this._hit >= this.length) {
      this._isSunk = true;
    }
  }

  get isSunk() {
    return this._isSunk;
  }
}

export default Ship;
