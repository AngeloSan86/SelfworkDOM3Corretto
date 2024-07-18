let timerAttivo = false;
let intervalId;

const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const textCountdown = document.querySelector("#textCountdown");
const secondiInput = document.querySelector("#secondiInseriti"); 


function getInitialSeconds() {
  let inputValue = secondiInput.value;
  let seconds = parseInt(inputValue);


  if (isNaN(seconds) || seconds <= 0) {
    alert("Inserire numero positivo");
    return 0; 
  }

  return seconds;
}

let secondiInseriti = getInitialSeconds(); 
textCountdown.innerHTML = secondiInseriti; 


secondiInput.addEventListener("input", () => {
  let newSeconds = getInitialSeconds(); 
  secondiInseriti = newSeconds;
  textCountdown.innerHTML = newSeconds;
});

startButton.addEventListener("click", () => {
  timerAttivo = !timerAttivo;

  if (timerAttivo) {

    intervalId = setInterval(Countdown, 1000);
    startButton.innerHTML = "Pausa"; 
  } else {

    clearInterval(intervalId);
    startButton.innerHTML = "Riprendi";
  }
});

resetButton.addEventListener("click", () => {

  clearInterval(intervalId);
  timerAttivo = false;
  secondiInseriti = getInitialSeconds();
  textCountdown.innerHTML = secondiInseriti;
  startButton.innerHTML = "Start";
});



resetButton.addEventListener("click", () => {

    document.querySelector("#secondiInseriti").value = 0;
  // Resetta il countdown
  clearInterval(intervalId);
  timerAttivo = false;
  secondiInseriti = 0; 
  textCountdown.innerHTML = secondiInseriti; // Aggiorna il testo del countdown
  startButton.innerHTML = "Start"; // Aggiorna il testo del bottone (opzionale)
});

function Countdown() {
  if (timerAttivo) {
    if (secondiInseriti > 0) {
      secondiInseriti--;
      textCountdown.innerHTML = secondiInseriti; // Aggiorna il testo del countdown
    } else {
      // Countdown terminato (opzionale: reset o azione specifica)
      clearInterval(intervalId);
      timerAttivo = false;
      startButton.innerHTML = "Start"; // Aggiorna il testo del bottone (opzionale)
      alert("Countdown terminato!")
    }
  }
}
