import { Player, Projectile } from "./classes";

const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const c: CanvasRenderingContext2D = canvas.getContext("2d")!;
const backMusic = new Audio("/audio/backgroundMusic.wav");

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

const projectile = new Projectile({x: 200, y: 200}, {x: 1, y: 0})

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update(c);
  projectile.update(c)

  if (keys.a.pressed && player.position.x >= 0) {
    player.velocity.x = -5;
    player.rotation = -Math.PI / 20;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.velocity.x = 5;
    player.rotation = Math.PI / 20;
  } else {
    player.velocity.x = 0;
    player.rotation = 0;
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

//? for mobile
// window.addEventListener("touchmove", (event) => {
//   console.log(event.touches.item(0)?.clientX)
// })

//* GAME ANIMATE
animate();
