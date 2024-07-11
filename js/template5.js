// Array per memorizzare gli oggetti quadrato
let squares = [];
// Numero di quadrati da generare
const numSquares = 20;

function setup() {
  // Crea il canvas con larghezza e altezza uguali a quella della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Imposta il punto centrale come punto di riferimento per i quadrati
  rectMode(CENTER);
  
  // Creazione dei quadrati iniziali
  for (let i = 0; i < numSquares; i++) {
    // Posizione iniziale x e y casuale nel centro del canvas
    let startX = width / 2;
    let startY = height / 2;
    // Velocità iniziale x e y casuali
    let speedX = random(-3, 3);
    let speedY = random(-3, 3);
    // Dimensione casuale del quadrato
    let size = random(20, 50);
    // Colore casuale per il quadrato
    let col = color(random(255), random(255), random(255));
    
    // Aggiungi un nuovo oggetto Square all'array squares
    squares.push(new Square(startX, startY, speedX, speedY, size, col));
  }
}

function draw() {
  // Imposta lo sfondo del canvas a grigio chiaro
  background(220);
  
  // Disegno e aggiornamento dei quadrati
  for (let square of squares) {
    square.update();
    square.display();
  }
}

// Definizione della classe Square
class Square {
  constructor(x, y, speedX, speedY, size, col) {
    this.x = x; // Posizione x del quadrato
    this.y = y; // Posizione y del quadrato
    this.speedX = speedX; // Velocità di spostamento lungo l'asse x
    this.speedY = speedY; // Velocità di spostamento lungo l'asse y
    this.size = size; // Dimensione del quadrato
    this.col = col; // Colore del quadrato
  }
  
  // Metodo per aggiornare la posizione del quadrato
  update() {
    // Aggiorna la posizione del quadrato in base alla velocità
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Controlla se il quadrato va oltre i bordi del canvas e inverte la direzione se necessario
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.speedY *= -1;
    }
  }
  
  // Metodo per disegnare il quadrato
  display() {
    // Imposta il colore di riempimento con il colore specificato
    fill(this.col);
    // Disegna il quadrato al centro della sua posizione con la dimensione specificata
    rect(this.x, this.y, this.size, this.size);
  }
}
