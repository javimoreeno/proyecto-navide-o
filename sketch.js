let coposDeNieve = []; // matriz de copos de nieve

function setup() {
  createCanvas(1250, 800);
  for (let i = 0; i < 100; i++) {
    coposDeNieve[i] = new CopoDeNieve();
  }
  letreroNavidad = new LetreroNavidad();
}

function draw() {
  background(0);
  for (let i = 0; i < coposDeNieve.length; i++) {
    coposDeNieve[i].mover();
    coposDeNieve[i].mostrar();
  }
  letreroNavidad.mover();
    letreroNavidad.mostrar();
}

class CopoDeNieve {
  constructor() {
    this.x = random(width);
    this.y = random(-100, -10);
    this.velocidad = random(1, 3);
    this.ángulo = random(0, TWO_PI);
  }

  mover() {
    this.x += sin(this.ángulo) * this.velocidad;
    this.y += this.velocidad;
    if (this.y > height) {
      this.y = random(-100, -10);
      this.velocidad = random(1, 3);
    }
  }

  mostrar() {
    fill(255);
    ellipse(this.x, this.y, 12, 12);
    triangle(this.x, this.y + 4, this.x, this.y - 4, this.x + 8, this.y);
    triangle(this.x, this.y + 4, this.x, this.y - 4, this.x - 8, this.y);
  }
}

class LetreroNavidad {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.velocidad = random(-2, 2);
    this.ángulo = random(0, TWO_PI);
  }

  mover() {
    this.x += this.velocidad;
    if (this.x > width || this.x < 0) {
      this.velocidad *= -1;
    }
  }

  mostrar() {
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Feliz Navidad", this.x, this.y);
  }
}
