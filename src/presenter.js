import sumar from "./sumador";
import multiplicar from "./multiplicador";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const div2 = document.querySelector("#resultado-div2");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  // Verificar el botón que activó el evento
  const clickedButton = event.submitter;

  if (clickedButton.id === "sumar-button") {
    // Si se hizo clic en el botón de sumar
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
    div2.innerHTML = "";  // Se borra el valor de multiplicación
  } else if (clickedButton.id === "multiplicar-button") {
    // Si se hizo clic en el botón de multiplicar
    div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
    div.innerHTML = "";  // Se borra el valor de suma
  }
});

