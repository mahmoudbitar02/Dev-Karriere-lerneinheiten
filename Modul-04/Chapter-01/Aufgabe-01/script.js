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
  console.log("Die Summe ist: " + sum);
}

function addNumber() {
  const inputNumber = document.getElementById("add-number").value;
  arr.push(Number(inputNumber));
  showArray();
}

function deleteIdNumber() {
  const index = document.getElementById("delete-number").value;

  if (index < 0 || index >= arr.length) {
    console.log("Die Position muss kleiner als " + arr.length + " sein.");
    return;
  }
  arr.splice(index, 1);
  showArray();
}

function deleteContent() {
  const valueToDelete = document.getElementById("delete-content").value;
  arr = arr.filter((number) => number != valueToDelete);
  // oder man erstellt ein neues Array und weist es dem alten Array zu diese methode ist aber effizienter
  //   const newListe = arr.filter((number) => number == valueToDelete);
  //   arr = newListe;
  showArray();
}
