let currentValue = "";
let currentOperator = "+";
let prevValue = "0";

const current = document.getElementById("current");
const calc = document.getElementById("calc");

function addValue(number) {
  currentValue += number;
  updateCurrentInput();
}

//Zahlen sollen addiert werden
function add() {
  performOperator();
  currentOperator = "+";
  currentValue = "0";
  updateCalcInput();

  updateCurrentInput();

  /**
    1. Input Zahl (1)
    2. Add
    3. Gebe Zahl ein (2)
    4. Subtract (Operator)
    5. 1+2 ausführen und als Ergebnis gespeichert (3)
    6. Gebe Zahl ein (1)
    7. Multiply (Operator)
    8. 3-1 ausgeführt (2)
    9. Gebe Zahl ein (2)
    10. Operator
    11. 2*2 ausgeführt

**/
}

// Zahlen sollen subtrahiert werden
function subtract() {
  performOperator();
  currentOperator = "-";
  currentValue = "0";
  updateCalcInput();
  updateCurrentInput();
}

// zahlen sollen multiplziert werden
function multiply() {}

// zahlen sollen geteilt werden
function divide() {}

function performOperator() {
  let result = 0;
  if (currentOperator === "+") {
    result = Number(prevValue) + Number(currentValue);
    console.log(result);
  } else if (currentOperator === "-") {
    result = Number(prevValue) - Number(currentValue);
  }

  prevValue = result;
}

function updateCurrentInput() {
  current.innerHTML = currentValue;
}

function updateCalcInput() {
  calc.innerHTML = prevValue + currentOperator;
}

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
