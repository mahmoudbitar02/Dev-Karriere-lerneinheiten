let arr = [1, 2, 3, 4, 5];

function showArray() {
  console.log(arr);
  arr.forEach((number) => {
    console.log(number);
  });
}

function multiplyArray() {
  arr = arr.map((number) => {
    return number * 2;
  });
  showArray();
}

function sumArray() {
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  console.log(sum);
}

function addNumber() {
  const inputNumber = document.getElementById("add-number").value;
  arr.push(Number(inputNumber));
  showArray();
}

function deleteIdNumber() {
  const index = document.getElementById("delete-number").value;
  arr.splice(index, 1);
  showArray();
}

function deleteContent() {
  const valueToDelete = document.getElementById("delete-content").value;
  arr = arr.filter((number) => number != valueToDelete);
  showArray();
}
