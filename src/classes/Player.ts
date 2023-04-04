import { canvas, c } from "../config/canvas";
import { coordinate } from "../types";
import { Projectile } from "./Projectile";

export class Player {
  position: coordinate = { x: 0, y: 0 };
  private velocity: coordinate = { x: 0, y: 0 };
  private image: HTMLImageElement = new Image();
  width: number = 0;
  height: number = 0;
  rotation: number = 0;
  projectiles: Projectile[] = [];

  constructor() {
    this.image.src = "/spaceship.png";
    this.image.onload = () => {
      const scale = 0.15;
      this.width = this.image.width * scale;
      this.height = this.image.height * scale;
      this.position = {
        x: canvas.width / 2 - this.width / 2,
        y: canvas.height - this.height - 20,
      };
    };
  }

  draw(): void {
    c.save();
    c.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    );
    c.rotate(this.rotation);
    c.translate(
      -this.position.x - this.width / 2,
      -this.position.y - this.height / 2
    );
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
    c.restore();
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
  }

  moveRight(velocityX: number) {
    this.velocity.x = velocityX;
  }
  moveLeft(velocityX: number) {
    this.velocity.x = -velocityX;
  }
  dontMove() {
    this.velocity.x = 0;
  }

  basicAttack() {
    this.projectiles.push(
      new Projectile(
        {
          x: this.position.x + this.width / 2,
          y: this.position.y,
        },
        { x: 0, y: -2 }
      )
    );
  }

  deleteProjectile(index: number) {
    this.projectiles.splice(index, 1)
  }
}
