let currentInput = 0;
let previousInput = 0;
let operator = "+";
let hasNewInput = false;

let histor = document.getElementById("history");
const currentResult = document.getElementById("current-result");
const interimResult = document.getElementById("interim-result");

function addNumber(number) {
  if (operator === "=") {
    currentInput = 0;
    previousInput = 0;
    updateCurrentInput(currentInput);
    updateInterimInput(0);
    operator = "+";
  }
  currentInput = currentInput * 10 + number;
  hasNewInput = true;
  updateCurrentInput(currentInput);
}

function addOperator(op) {
  if (!hasNewInput) {
    operator = op;
    updateInterimInput(previousInput + operator);
    return;
  }
  // if I change the "operator" in if statemant to "op" the calculator take the NEW operator (this "always" calculator using previous operator then store the new operator for the next step)
  let result = 0;
  if (operator === "+") {
    result = previousInput + currentInput;
  } else if (operator === "-") {
    result = previousInput - currentInput;
  } else if (operator === "*") {
    result = previousInput * currentInput;
  } else if (operator === "/") {
    if (currentInput === 0) {
      alert("cannot divide by zero");
      return;
    }
    result = previousInput / currentInput;
  }
  if (operator !== "=") {
    showHistory(result);
  }

  previousInput = result;
  currentInput = 0;
  hasNewInput = false;
  operator = op;

  updateCurrentInput(currentInput);
  updateInterimInput(previousInput + operator);
  console.log("test");
}

function equal() {
  addOperator("=");
  operator = "=";
  updateCurrentInput(previousInput);
  updateInterimInput(previousInput + operator);
}

function clearCalculator() {
  currentInput = 0;
  previousInput = 0;
  currentResult.innerHTML = 0;
  interimResult.innerHTML = 0;
  histor.innerHTML = "";
}

function updateCurrentInput(current) {
  currentResult.innerHTML = current;
}

function updateInterimInput(previos) {
  interimResult.innerHTML = previos;
}

function showHistory(result) {
  let element = document.createElement("p");
  element.innerHTML = previousInput + " " + operator + " " + currentInput + " = " + result;

  histor.prepend(element);
}
