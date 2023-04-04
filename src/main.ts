import { Grid, Player } from "./classes";
import { c, canvas } from "./config/canvas";
import { backMusic, shootSound } from "./config/music";
import { keys } from "./utils";

const player = new Player();
const grids = [new Grid(3, 10)]

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
  player.update();

  if (keys.a.pressed && player.position.x >= 0) {
    player.moveLeft(4);
    player.rotation = -Math.PI / 20;
  } else if (
    keys.d.pressed &&
    player.position.x + player.width <= canvas.width
  ) {
    player.moveRight(4);
    player.rotation = Math.PI / 20;
  } else {
    player.dontMove();
    player.rotation = 0;
  }

  player.projectiles.forEach((projectile, index) => {
    projectile.update();
    if (projectile.position.y <= 0) {
      setTimeout(() => {
        player.deleteProjectile(index);
      }, 0);
    }
  });
  grids.forEach(grid => {
    grid.update()
    grid.items.forEach(invader => invader.update())
  })
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
      shootSound.currentTime = 0;
      shootSound.play();
      player.basicAttack();

      /* //TODO: PROJECTILE DOUBLE
      projectiles.push(
        new Projectile(
          {
            x: player.position.x + player.width / 2 - 10,
            y: player.position.y,
          },
          { x: 0, y: -2 }
        ),
        new Projectile(
          {
            x: player.position.x + player.width / 2 + 10,
            y: player.position.y,
          },
          { x: 0, y: -2 }
        )
      );
    */

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
