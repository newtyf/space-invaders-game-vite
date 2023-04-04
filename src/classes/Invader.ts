import { c } from "../config/canvas";
import { coordinate } from "../types";

export class Invader {
  position: coordinate = { x: 0, y: 0 };
  private velocity: coordinate = { x: 0, y: 0 };
  private image: HTMLImageElement = new Image();
  width: number = 0;
  height: number = 0;
  rotation: number = 0;

  constructor(position: coordinate) {
    this.image.src = "/invader.png";
    this.image.onload = () => {
      const scale = 1;
      this.width = this.image.width * scale;
      this.height = this.image.height * scale;
    };
    this.position = position;
  }

  draw(): void {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
  }
}
