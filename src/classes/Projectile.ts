import { c } from "../config/canvas";
import { coordinate } from "../types";

export class Projectile {
  position: coordinate;
  velocity: coordinate;

  constructor(position: coordinate, velocity: coordinate) {
    this.position = position;
    this.velocity = velocity
  }

  draw() {
    c.beginPath()
    c.arc(this.position.x, this.position.y, 3, 0, Math.PI * 2)
    c.fillStyle = "red"
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
  }
}
