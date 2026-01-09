let currentValue = "";
let currentOperator = "";
let prevValue = 0;
let calcValue = "";

const current = document.getElementById("current");
const calc = document.getElementById("calc");

function addValue(number) {
  currentValue += number;
  updateCurrentInput();
}

//Zahlen sollen addiert werden
function add(add) {
  calcValue += add;
}

// Zahlen sollen subtrahiert werden
function subtract() {}

// zahlen sollen multiplziert werden
function multiply() {}

// zahlen sollen geteilt werden
function divide() {}

// function addOperator(operator) {
//   if (currentValue === "") return;

//   currentOperator = operator;
//   console.log(currentOperator);
//   calc.innerHTML = currentValue + currentOperator;
//   current.innerHTML = "0";

//   currentValue = "";
// }

// function addOperator(operator) {
//   if (currentValue === "") return;
//   if (prevValue !== "") calculat();
//   prevValue = currentValue;
//   currentValue = "0";
//   currentOperator = operator;

//   test.innerHTML = prevValue + currentOperator + currentValue;
// }

function calculat() {
  switch (currentOperator) {
    case "+":
      calc.innerHTML = parseInt(prevValue) + parseInt(currentValue);
      break;

    case "-":
      calc.innerHTML = parseInt(prevValue) - parseInt(currentValue);
      break;

    case "*":
      calc.innerHTML = parseInt(prevValue) * parseInt(currentValue);
      break;

    case "/":
      if (currentValue === "0") {
        alert("can't devidy by zero");
        return;
      }
      calc.innerHTML = parseInt(prevValue) / parseInt(currentValue);
      break;

    default:
      break;
  }
  console.log("trest");
}

function clearValue() {
  currentValue = "";
  prevValue = "";
  currentOperator = "";
  current.innerHTML = "0";
  calc.innerHTML = "0";

  console.log("trest");
}

function updateCurrentInput() {
  current.innerHTML = currentValue;
}

function updateCalcInput() {
  calc.innerHTML = calcValue;
}
