// Variabile per controllare lo spaziamento tra le forme sull'asse x
let spacingX = 50;
// Variabile per controllare lo spaziamento tra le forme sull'asse y
let spacingY = 50;
// Variabile per controllare l'angolo di rotazione delle forme
let angle = 0;
// Variabile per controllare la variazione di dimensione delle forme
let expand = 0.2;
// Variabile per controllare la dimensione delle forme
let rectsize = 15;

function setup() {
  // Crea il canvas con larghezza e altezza uguali a quella della finestra del browser
  createCanvas(windowWidth, windowHeight);
  // Imposta la modalità di disegno del rettangolo al centro
  rectMode(CENTER);
}

function draw() {
  // Imposta lo sfondo del canvas a grigio chiaro
  background(220);
  
  // Senza riempimento per rendere trasparente l'interno delle forme
  noFill();
  
  // Incrementa l'angolo di rotazione ad ogni ciclo di disegno
  angle += 0.009;
  
  // Modifica la dimensione delle forme ad ogni ciclo di disegno
  rectsize = rectsize + expand;
  
  // Cicli annidati per disegnare le forme lungo l'asse x e y con spaziatura specificata
  for (let x = 0; x < width; x += spacingX) {
    for (let y = 0; y < height; y += spacingY) {
      // Salva lo stato attuale delle trasformazioni
      push();
      // Trasla l'origine al punto (x, y)
      translate(x, y);
      // Ruota la forma dell'angolo corrente
      rotate(angle);
      // Disegna un'ellisse al centro della forma traslata e ruotata
      ellipse(0, 0, rectsize, rectsize);
      // Disegna un rettangolo al centro della forma traslata e ruotata
      rect(0, 0, rectsize, rectsize);
      // Ripristina lo stato precedente delle trasformazioni
      pop();
    }
  }
  
  // Se la dimensione delle forme diventa troppo grande le fa contrarre, se troppo piccole le fa espandere
  if (rectsize >= 80 || rectsize <= 10) {
    expand = expand * -1; // Inverte la direzione di variazione della dimensione
  }
}
