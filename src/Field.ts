import { Delaunay } from 'd3-delaunay';
import { Cell } from './Cell';
import { range } from 'd3';

// Helpers
const getX = (cell: Cell) => cell.x;
const getY = (cell: Cell) => cell.y;
const { random: rnd } = Math;

export class Field {
  delGraph: Delaunay<Cell>;
  cells: Cell[];
  extent: Extent = [0, 0, 1000, 1000];
  constructor() {
    this.cells = range(100).map((i) => new Cell(i, rnd() * 100, rnd() * 100));
    this.delGraph = Delaunay.from(this.cells, getX, getY);
    for (const [i, polygon] of Array.from(
      this.delGraph.voronoi(this.extent).cellPolygons()
    ).entries()) {
      this.cells[i].polygon = polygon as Loop;
    }
  }
  update() {
    this.delGraph.
  }
}
