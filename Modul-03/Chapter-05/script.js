let currentValue = "0";
let currentOperator = "";
let prevValue = 0;

const current = document.getElementById("current");
const calc = document.getElementById("calc");

function addValue(number) {
  currentValue = number;
  current.innerHTML = currentValue;
}

function addOperator(operator) {
  if (currentValue === "") return;

  prevValue = calc.innerHTML;

  calc.innerHTML = parseInt(prevValue) + parseInt(currentValue) + operator;

  current.innerHTML = "0";
}

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
