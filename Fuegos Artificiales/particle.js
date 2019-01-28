
function Particle(x, y, hu, firework) { // color y posicion de la particula
  this.pos = createVector(x, y); // lugar donde se creara la particula
  this.firework = firework; 
  this.lifespan = 255; // esperanza de vida de la particula 
  this.hu = hu;  // color de la particula
  this.acc = createVector(0, 0);
  
  if (this.firework) {
    this.vel = createVector(-1, random(-12, -15));  // altura maxima de la partícula 
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,50));  
  }
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.8);  
      this.lifespan -= 0.3;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hu, 255, 255);
    }
    
    point(this.pos.x, this.pos.y);
  }
}
