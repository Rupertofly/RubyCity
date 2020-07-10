export class Cell {
  pos: Pos;
  index: number;
  polygon: Loop;
  get x(): number {
    return this.pos.x;
  }
  get y(): number {
    return this.pos.y;
  }
  setPos(x: number, y: number): Cell {
    this.pos = { x, y };

    return this;
  }
  constructor(index: number, x: number, y: number) {
    this.index = index;
    this.setPos(x, y);
  }
}
