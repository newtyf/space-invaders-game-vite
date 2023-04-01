import { Player } from "./classes/Player";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const c: CanvasRenderingContext2D = canvas.getContext("2d")!;
const backMusic = new Audio("/public/audio/backgroundMusic.wav");

canvas.width = innerWidth;
canvas.height = innerHeight;

const player = new Player(canvas);
const keys = {
  a: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  space: {
    pressed: false,
  },
};

function animate() {
  requestAnimationFrame(animate);
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update(c);

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -5;
    player.rotation = -.15
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 5;
  } else {
    player.velocity.x = 0;
  }
}

//* LISTENERS
window.addEventListener("keydown", (event) => {
  backMusic.play();
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      break;
    case "a":
      keys.a.pressed = true;
      break;
    case " ":
      keys.space.pressed = true;
    default:
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case " ":
      keys.space.pressed = false;
    default:
      break;
  }
});

//* GAME ANIMATE
animate();
