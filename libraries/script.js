const NOISE_SCALE = 0.01;
const BOUNDS = {x: window.innerWidth, y: window.innerHeight, vecSize: 10};
const NUM_POINTS = 1000;
const POINTS = [];

function setup() {
    createCanvas(BOUNDS.x, BOUNDS.y);
    const canvas = document.querySelector("canvas")
    background(0);
    strokeWeight(1);
    for(i = 0; i < NUM_POINTS; ++i){
      POINTS.push(new Pixel(random(BOUNDS.x),random(BOUNDS.y),BOUNDS.x,BOUNDS.y));
    }
    addEventListener("resize", (event) => {
      BOUNDS.x = window.innerWidth;
      BOUNDS.y = window.innerHeight;
      createCanvas(BOUNDS.x, BOUNDS.y);
      background(0);
    });
  }
  
function draw() {
  background(0,2);
  POINTS.forEach(element => {
    let vec = TWO_PI * noise((element.pos.x / BOUNDS.vecSize) * NOISE_SCALE,
                    (element.pos.y / BOUNDS.vecSize) * NOISE_SCALE,
                    frameCount * NOISE_SCALE * 0.1);
    element.move();
    element.draw();
    element.applyForce( sin(vec), cos(vec) );
  });
}