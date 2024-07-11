// Variabile per l'offset che determina il cambiamento nel colore delle forme
let offset = 0;

function setup() {
  // Crea il canvas con larghezza e altezza uguali a quella della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Disabilita i bordi per le forme disegnate
  noStroke();
  // Imposta la modalità colore a HSB con range da 0 a 255 per la tonalità
  colorMode(HSB, 255);
}

function draw() {
  // Imposta lo sfondo del canvas a nero
  background(0);
  
  // Cicli annidati per disegnare rettangoli con spaziatura di 20px
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      // Calcola il valore della tonalità in base alla posizione e all'offset
      let hue = (x + y + offset) % 255;
      // Imposta il colore di riempimento con la tonalità calcolata, saturazione e luminosità massime
      fill(hue, 255, 255);
      // Disegna un rettangolo alla posizione (x, y) con dimensioni 20x20
      rect(x, y, 20, 20);
    }
  }
  
  // Incrementa l'offset per variare il colore delle forme nel tempo
  offset += 1;
}
