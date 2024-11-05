const movable = document.querySelector("#movable"); //html elementet som skal flyttes!
let coords = {
  //Initialisere koordinatene for det moveable elementet
  xPos: 100, //horizontal position
  yPos: 100, // Vertical position
};
//function for å oppdatere posisjon
function refreshPosition() {
  movable.style.left = `${coords.xPos}px`; //setter den til horizontal posit
  movable.style.top = `${coords.yPos}px`; // setter den til vertical posit
}
//funksjon for å håndtere tastetrykk
function onKeyPress(event) {
  const moveDistance = 10; //Definere hvor mange px elementet skal flyttes hvert tastetrykk!
  const { key } = event; // hvilken tast som skal trykke
  // Sjekke om hvilken pil ble trykke, og oppdatere posisjon til element!
  if (key === "ArrowUp") {
    // pil opp!
    coords.yPos = Math.max(0, coords.yPos - moveDistance); // Flytter element opp
  } else if (key === "ArrowDown") {
    // pil ned!
    coords.yPos = Math.min(window.innerHeight - 50, coords.yPos + moveDistance); // Flytter element ned
  } else if (key === "ArrowLeft") {
    //pil venstre!
    coords.xPos = Math.max(0, coords.xPos - moveDistance); // Flytter til venstre
  } else if (key === "ArrowRight") {
    //pil høyre!
    coords.xPos = Math.min(window.innerWidth - 50, coords.xPos + moveDistance); // Flytter til høyre
  }
  refreshPosition(); // oppdatere element position på skjermen!
}
//Funsjon for å håndtere musklikk!
function onMouseClick(event) {
  const { pageX, pageY } = event; // musens posisjon (x og y)

  // Sentraliser elementet på museklikk
  coords.xPos = pageX - 25; // Sentralisere ved å trekke 25 px fra musklikk x-posit
  coords.yPos = pageY - 25; // yposit

  // Begrenser element innenfor visningsport grenser
  coords.xPos = Math.min(Math.max(0, coords.xPos), window.innerWidth - 50); // Hindrer at elementet går utenfor venstre/høyre kant
  coords.yPos = Math.min(Math.max(0, coords.yPos), window.innerHeight - 50); //topp og bunn

  refreshPosition();
} // Oppdaterer posisjon etter klikk!

//Legg til eventlistener for tastatur- og mushandling
document.addEventListener("keydown", onKeyPress); // Lytter etter trykke pil
document.addEventListener("click", onMouseClick); // Lytter etter musklikk
refreshPosition(); //Still inn startposisjon av den movable element!
