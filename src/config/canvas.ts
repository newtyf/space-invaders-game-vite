const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
const c: CanvasRenderingContext2D = canvas.getContext("2d")!;
canvas.width = innerWidth;
canvas.height = innerHeight;

export { canvas, c };