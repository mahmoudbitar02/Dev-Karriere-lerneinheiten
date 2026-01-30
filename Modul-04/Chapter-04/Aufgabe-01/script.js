let students = [
  {
    Vorname: "Mahmoud",
    Nachname: "Bitar",
    Alter: 28,
  },
  {
    Vorname: "Torsten",
    Nachname: "Müller",
    Alter: 30,
  },
  {
    Vorname: "Thomas",
    Nachname: "Schneider",
    Alter: 35,
  },
  {
    Vorname: "Jan",
    Nachname: "Meier",
    Alter: 25,
  },
  {
    Vorname: "Kay",
    Nachname: "Körner",
    Alter: 20,
  },
];

let testArray = [];

document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

// create random student
function createStudent() {
  const randomStudent = students[Math.floor(Math.random() * students.length)];
  testArray.push(randomStudent);
  console.log("the test array has: " + testArray.length);

  createDiv(randomStudent);
  saveToLocalStorage(testArray);
}

// create button
function createButton(card) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deletebtn");
  const deleteButtonText = document.createTextNode("löschen");
  id = deleteButton.id = `student-${Math.random()}`;
  deleteButton.appendChild(deleteButtonText);
  deleteButton.addEventListener("click", () => {
    deleteContent(card, id);
  });
  card.appendChild(deleteButton);
}

function deleteContent(card) {
  deleteFromLocalStorage(card.id);

  card.remove();
  console.log("from delete " + card.id);
}

// create p-tag and span-tag
function createParagAndSpan(card, randomStudent) {
  for (const key in randomStudent) {
    console.log(key);

    // create p-tag
    const paragraph = document.createElement("p");
    paragraph.id = Math.random();
    const paragraphText = document.createTextNode(key);
    paragraph.appendChild(paragraphText);
    console.log(paragraph);

    // create span-tag
    const span = document.createElement("span");
    const spanText = document.createTextNode(`: ${randomStudent[key]}`);
    span.appendChild(spanText);

    paragraph.appendChild(span);
    card.appendChild(paragraph);
  }
}

function createDiv(randomStudent) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `card-${randomStudent.Vorname}-${randomStudent.Nachname}`;
  console.log("random student from create div " + randomStudent.Vorname);
  console.log(card);

  createParagAndSpan(card, randomStudent);
  createButton(card, randomStudent);
  updateContainer(card);
}

// update Container
function updateContainer(card) {
  document.querySelector(".container").appendChild(card);
}

function saveToLocalStorage(testArray) {
  localStorage.setItem("testArray", JSON.stringify(testArray));
}

function loadFromLocalStorage() {
  testArray = JSON.parse(localStorage.getItem("testArray")) || [];
  testArray.forEach(createDiv);
}

function deleteFromLocalStorage(id) {
  testArray = testArray.filter((item) => {
    item.Vorname !== id.includes();
    console.log("item from delete " + item.Vorname);
  });
  saveToLocalStorage(testArray);
}
