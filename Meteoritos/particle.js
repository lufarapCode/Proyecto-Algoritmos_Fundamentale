

function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y); // lugar donde se creara la particula
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;
  this.acc = createVector(0, 0);
  
  if (this.firework) {
    this.vel = createVector(15, random(12, 25));  // altura maxima de la partícula 
  } else {
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1,1));   // 
  }
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() { // toma la velocidad y la añade a la posicion
    if (!this.firework) {    // y toma la aceleracion y la añade a la velocidad
      this.vel.mult(0.9);  
      this.lifespan -= 0.5;
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

  this.show = function() { // dibuja la particula
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
  // En general la particula  es un objeto
  // y en firework creamos el objeto y trabajamos con el
  // creamos un array de particulas
}
