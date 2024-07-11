// Variabili per il numero di colonne e righe
let cols, rows;
// Variabile per la scala del rumore Perlin
let noiseScale = 0.1;
// Offset per l'angolo basato sul rumore Perlin
let angleOff = 0;
// Offset per il valore di tonalità
let hueOff = 0;

function setup() {
  // Imposta il canvas alla larghezza e altezza della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Calcola il numero di colonne e righe in base alla dimensione della finestra
  cols = floor(width / 20);
  rows = floor(height / 20);
  // Imposta lo sfondo iniziale a nero
  background(0);
  // Imposta la modalità colore a HSB (tonalità, saturazione, brillantezza)
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  // Aggiunge uno sfondo nero trasparente per creare l'effetto di dissolvenza
  background(0, 10);
  
  // Ciclo per iterare attraverso tutte le colonne
  for (let x = 0; x < cols; x++) {
    // Ciclo per iterare attraverso tutte le righe
    for (let y = 0; y < rows; y++) {
      // Calcola la posizione x e y in base alla dimensione delle celle
      let xPos = x * 20;
      let yPos = y * 20;
      
      // Calcola il valore del rumore Perlin
      //(effetto visuale che produce una casualità organica utile per simulare elementi naturali) 
      //per la posizione corrente
      let noiseVal = noise(x * noiseScale, y * noiseScale, angleOff);
      // Calcola l'angolo in base al valore del rumore
      let angle = noiseVal * TWO_PI * 4;
      
      // Mappa il valore del rumore alla lunghezza della linea
      let len = map(noiseVal, 0, 1, 5, 20);
      
      // Calcola la posizione finale della linea
      let xEnd = xPos + cos(angle) * len;
      let yEnd = yPos + sin(angle) * len;
      
      // Mappa il valore del rumore al valore di tonalità
      let hueValue = (map(noiseVal, 0, 1, 0, 360) + hueOff) % 360;
      // Imposta il colore del bordo in base alla tonalità
      stroke(hueValue, 100, 100);
      // Disegna la linea dalla posizione iniziale alla posizione finale
      line(xPos, yPos, xEnd, yEnd);
    }
  }
  
  // Incrementa l'offset dell'angolo per animare il rumore Perlin
  angleOff += 0.01;
  // Incrementa l'offset della tonalità per variare i colori nel tempo
  hueOff += 1;
}
