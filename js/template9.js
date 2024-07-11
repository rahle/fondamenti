// Variabile per l'offset che determina il cambiamento nel colore delle forme
let offset = 0;
// Variabile per la velocità di cambiamento dell'offset
let speed = 0.05;

function setup() {
  // Crea il canvas con larghezza e altezza uguali a quella della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Disabilita il riempimento delle forme
  noFill();
  // Imposta lo spessore del tratto a 2 pixel
  strokeWeight(2);
  // Imposta la modalità colore a HSB con range da 0 a 255 per la tonalità
  colorMode(HSB, 255);
}

function draw() {
  // Imposta lo sfondo del canvas a nero
  background(0);
  
  // Ciclo per disegnare linee sinusoidali con spaziatura di 20px lungo l'asse y
  for (let y = 0; y < height; y += 20) {
    // Inizia un nuovo shape per disegnare una serie di linee connesse
    beginShape();
    // Ciclo per disegnare linee sinusoidali lungo l'asse x
    for (let x = 0; x < width; x += 20) {
      // Calcola il valore della tonalità in base alla posizione e all'offset
      let hue = (x + y + offset) % 256;
      // Imposta il colore del tratto con la tonalità calcolata, saturazione massima e luminosità massima
      stroke(hue, 255, 255);
      // Calcola lo spostamento verticale (yOffset) della linea sinusoidale
      let yOffset = sin(x * 0.1 + offset) * 20 + sin(y * 0.1 + offset) * 20;
      // Aggiunge un vertice al shape alla posizione (x, y + yOffset)
      vertex(x, y + yOffset);
    }
    // Termina il shape
    endShape();
  }
  
  // Incrementa l'offset per variare il colore e la forma delle linee nel tempo
  offset += speed;
  // Incrementa la velocità di cambiamento dell'offset nel tempo
  speed += 0.0005;
}
