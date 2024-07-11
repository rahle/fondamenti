// Array per memorizzare i colori generati casualmente
let colors = [];

function setup() {
  // Crea il canvas con larghezza e altezza uguali a quella della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Disabilita i bordi per le forme disegnate
  noStroke();
  
  // Genera 10 colori casuali e li aggiunge all'array colors
  for (let i = 0; i < 10; i++) {
    colors.push(color(random(255), random(255), random(255)));
  }
}

function draw() {
  // Imposta lo sfondo del canvas a bianco
  background(255);
  
  // Cicli per disegnare forme (ellissi) con spaziatura di 40px
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      // Calcola l'indice del colore da utilizzare basato sulla posizione nel canvas
      let col = colors[(x / 40 + y / 40) % colors.length];
      // Imposta il colore di riempimento con il colore recuperato dall'array
      fill(col);
      // Disegna un ellisse al centro della cella corrente con dimensioni oscillanti
      ellipse(x + 20, y + 20, 30 + sin(frameCount * 0.1) * 10, 30 + sin(frameCount * 0.1) * 10);
    }
  }
}
