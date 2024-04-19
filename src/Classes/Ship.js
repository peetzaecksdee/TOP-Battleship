class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }

  hit(coordinate) {
    this.hits.push(coordinate);
  }

  get isSunk() {
    return this.hits.length === this.length;
  }
}

export default Ship;
