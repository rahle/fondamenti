// Inizializzazione dell'angolo di rotazione
let angle = 0;

function setup() {
  // Imposta il canvas alla larghezza e altezza della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Imposta la modalità di disegno del rettangolo in modo che il punto di riferimento sia il centro
  rectMode(CENTER);
}

function draw() {
  // Imposta lo sfondo del canvas a bianco (255)
  background(255);
  // Trasla l'origine (0,0) al centro del canvas
  translate(width / 2, height / 2);
  
  // Ciclo per disegnare i rettangoli lungo l'asse x
  for (let x = -width / 2; x <= width / 2; x += 50) {
    // Ciclo per disegnare i rettangoli lungo l'asse y
    for (let y = -height / 2; y <= height / 2; y += 50) {
      // Salva lo stato attuale delle trasformazioni
      push();
      // Trasla l'origine al punto (x, y)
      translate(x, y);
      // Ruota il sistema di coordinate di un angolo specifico
      rotate(angle);
      // Disegna un rettangolo con il centro all'origine traslata
      rect(0, 0, 40, 40);
      // Ripristina lo stato precedente delle trasformazioni
      pop();
    }
  }
  
  // Incrementa l'angolo di rotazione
  angle += 0.01;
}
