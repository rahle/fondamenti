// Inizializzazione dell'offset, usato per spostare le linee orizzontalmente
let offset = 0;

function setup() {
  // Imposta il canvas alla larghezza e altezza della finestra del browser
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Imposta lo sfondo del canvas a bianco (255)
  background(255);
  
  // Ciclo per disegnare le linee verticali
  for (let x = 0; x < width; x += 20) {
    // Imposta lo spessore della linea a 10 pixel
    strokeWeight(10);
    // Imposta il colore della linea a nero
    stroke(0);
    // Disegna una linea verticale dal punto (x + offset, 0) al punto (x + offset, height)
    line(x + offset, 0, x + offset, height);
  }
  
  // Aggiorna l'offset per creare l'effetto di movimento delle linee
  offset = (offset + 1) % 20;
}
