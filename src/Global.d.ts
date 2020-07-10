declare global {
  type Pos = { x: number; y: number };
  type Pt = [number, number];
  type Loop = Pt[];
  type Shape = Loop[];
  type Extent = [number, number, number, number];
}
export {};
