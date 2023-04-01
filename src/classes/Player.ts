type cooridnate = {
  x: number;
  y: number;
};

export class Player {
  position: cooridnate = { x: 200, y: 200 };
  velocity: cooridnate = { x: 0, y: 0 };
  private image: HTMLImageElement = new Image();
  width: number = 90;
  height: number = 60;
  rotation: number = 0

  constructor(canvas: HTMLCanvasElement) {
    this.image.src = "/public/spaceship.png";
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

  draw(c: CanvasRenderingContext2D): void {

    c.save()
    c.translate(this.position.x, this.position.y)
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    c.restore()
  }

  update(c: CanvasRenderingContext2D) {
    this.draw(c);
    this.position.x += this.velocity.x;
  }
}