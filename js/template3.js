// Creo il vettore contenente gli oggetti neve
let neve = [];

function setup() {
  // Imposta il canvas alla larghezza e altezza della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Imposta la modalità angolo a gradi
  angleMode(DEGREES);
  
  // Creo 300 oggetti neve
  for (let i = 0; i < 300; i++) {
    // Aggiungo oggetti al vettore neve
    neve.push(new Neve());
  }
}

function draw() {
  // Imposta lo sfondo del canvas a nero (0)
  background(0);

  // Calcola il tempo attuale in secondi
  let tempoAttuale = frameCount / 60;

  // Aggiorna e mostra ogni oggetto neve presente nel vettore
  for (let fiocco of neve) {
    // Aggiorna la posizione e la vista di ogni oggetto neve
    fiocco.aggiorna(tempoAttuale);
    fiocco.mostra();
  }
}

// Definisce la classe che gestisce l'oggetto neve
class Neve {
  constructor() {
    // Posizione iniziale sull'asse x (centrato)
    this.posX = 0;
    // Posizione iniziale casuale sull'asse y (sopra la finestra)
    this.posY = random(-height, 0);
    // Angolo iniziale casuale
    this.angoloIniziale = random(0, 360);
    // Dimensione casuale del fiocco di neve
    this.dimensione = random(2, 5);
    // Raggio casuale per il movimento sinusoidale
    this.raggio = sqrt(random(pow(width / 2, 2)));
    // Colore casuale del fiocco di neve (toni di bianco)
    this.colore = color(random(200, 256), random(200, 256), random(200, 256));
  }

  // Metodo per aggiornare la posizione del fiocco di neve
  aggiorna(tempo) {
    // Definisce la velocità angolare
    let velocita = 35;

    // Calcola l'angolo corrente
    let angolo = this.angoloIniziale + velocita * tempo;

    // La posizione x segue un'onda sinusoidale
    this.posX = width / 2 + this.raggio * sin(angolo);

    // Fiocchi di neve di dimensioni diverse cadono a velocità y diverse
    let yVel = 8 / this.dimensione;
    this.posY += yVel;

    // Quando il fiocco di neve raggiunge il fondo, spostalo in alto
    if (this.posY > height) {
      this.posY = -50;
    }
  }

  // Metodo per mostrare il fiocco di neve
  mostra() {
    // Imposta il colore di riempimento del fiocco di neve
    fill(this.colore);
    // Rimuove i bordi del fiocco di neve
    noStroke();
    // Disegna il fiocco di neve come un'ellisse
    ellipse(this.posX, this.posY, this.dimensione);
  }
}
