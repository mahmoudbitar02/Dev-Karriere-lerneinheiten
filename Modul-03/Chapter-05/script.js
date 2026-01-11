let currentValue = "";
let currentOperator = "+";
let prevValue = "0";
let hasClickennumber = false;

const current = document.getElementById("current");
const calc = document.getElementById("calc");
const verlauf = document.getElementById("calc-history");

function addValue(number) {
  if (currentOperator === "=") {
    prevValue = "0";
    currentValue = "0";
    console.log(currentOperator);

    currentOperator = "+";
    updateCalcInput("0");
    updateCurrentInput(currentValue);
    console.log(currentOperator);
  }
  currentValue = number;
  hasClickennumber = true;
  updateCurrentInput(currentValue);
}

//Zahlen sollen addiert werden
function add() {
  performOperator();
  currentOperator = "+";
  updateCalcInput(prevValue + currentOperator);

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
  updateCalcInput(prevValue + currentOperator);
  updateCurrentInput(currentValue);
}

// zahlen sollen multiplziert werden
function multiply() {
  performOperator();
  currentOperator = "*";
  currentValue = "0";

  updateCurrentInput(currentValue);

  updateCalcInput(prevValue + currentOperator);
}

// zahlen sollen geteilt werden
function divide() {
  performOperator();
  currentOperator = "/";
  currentValue = "0";
  updateCurrentInput(currentValue);
  updateCalcInput(prevValue + currentOperator);
}

function performOperator() {
  if (!hasClickennumber) return;

  let result = 0;
  if (currentOperator === "+") {
    result = Number(prevValue) + Number(currentValue);

    console.log(result);
  } else if (currentOperator === "-") {
    result = Number(prevValue) - Number(currentValue);
  } else if (currentOperator === "*") {
    result = Number(prevValue) * Number(currentValue);
  } else if (currentOperator === "/") {
    if (currentValue === "00") {
      alert("cannot devide by zero");
      return;
    } else {
      result = Number(prevValue) / Number(currentValue);
    }
  }
  verlaufHistory(result);

  prevValue = result;
  currentValue = "0";
  hasClickennumber = false;
  updateCurrentInput(currentValue);
}

function updateCurrentInput(text) {
  current.innerHTML = text;
}

function updateCalcInput(text) {
  calc.innerHTML = text;
}

function verlaufHistory(result) {
  const el = document.createElement("p");
  el.innerHTML = prevValue + currentOperator + currentValue + " = " + result;
  verlauf.prepend(el);
}

function calculat() {
  performOperator();
  currentOperator = "=";
  updateCalcInput(prevValue + currentOperator);
  updateCurrentInput(prevValue);
  console.log("calculate operator -->" + currentOperator);
}

function clearValue() {
  currentValue = "0";
  prevValue = "0";
  currentOperator = "+";
  verlauf.innerHTML = "";
  updateCurrentInput(currentValue);
  updateCalcInput(prevValue);

  console.log("trest");
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

// function calculat() {
//   switch (currentOperator) {
//     case "+":
//       calc.innerHTML = parseInt(prevValue) + parseInt(currentValue);
//       break;

//     case "-":
//       calc.innerHTML = parseInt(prevValue) - parseInt(currentValue);
//       break;

//     case "*":
//       calc.innerHTML = parseInt(prevValue) * parseInt(currentValue);
//       break;

//     case "/":
//       if (currentValue === "0") {
//         alert("can't devidy by zero");
//         return;
//       }
//       calc.innerHTML = parseInt(prevValue) / parseInt(currentValue);
//       break;

//     default:
//       break;
//   }
//   console.log("trest");
// }
