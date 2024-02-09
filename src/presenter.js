import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const mulbtn = document.querySelector('#mult-button');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + firstNumber + " + " + secondNumber + " = " + sumar(firstNumber, secondNumber) + "</p>";
});

mulbtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log('click');
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + firstNumber + " * " + secondNumber + " = " + multiplicar(firstNumber, secondNumber) + "</p>";
}); 