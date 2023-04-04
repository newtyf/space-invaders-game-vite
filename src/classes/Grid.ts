import { coordinate } from "../types";
import { Invader } from "./Invader";

export class Grid {
  position: coordinate = { x: 0, y: 0 };
  velocity: coordinate = { x: 0, y: 0 };
  readonly items: Invader[] = [];

  constructor(rows: number, columns: number) {
    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        this.items.push(new Invader({ x: 30 * x, y: 30 * y }));
      }
    }
  }

  update() {}
}
