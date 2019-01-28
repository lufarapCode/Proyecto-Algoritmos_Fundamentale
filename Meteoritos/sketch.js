

var fireworks = [];
var gravity;

function setup() {
  createCanvas(1350, 600);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(8);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(30, 0, 6, 20);
  
  if (random(1) < 0.03) {
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
