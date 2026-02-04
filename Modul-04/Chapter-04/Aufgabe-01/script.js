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
  // const newStudent = { ...randomStudent, id: Math.random() }; // dies hier ist moderner
  const newStudent = {
    id: Math.random(),
    Vorname: randomStudent.Vorname,
    Nachname: randomStudent.Nachname,
    Alter: randomStudent.Alter,
  };
  testArray.push(newStudent);
  console.log("the test array has: " + testArray.length);
  console.log(newStudent.id);

  createDiv(newStudent);
  saveToLocalStorage(testArray);
}

// create button
function createButton(card, newStudent) {
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deletebtn");
  const deleteButtonText = document.createTextNode("löschen");
  deleteButton.id = `student-${Math.random()}`;
  deleteButton.appendChild(deleteButtonText);
  deleteButton.addEventListener("click", () => {
    deleteContent(card, newStudent);
  });
  card.appendChild(deleteButton);
}

function deleteContent(card, newStudent) {
  deleteFromLocalStorage(newStudent);

  card.remove();
}

// create p-tag and span-tag
function createParagAndSpan(card, newStudent) {
  for (const key in newStudent) {
    console.log("the key is " + key);

    if (key === "id") continue;
    // create p-tag
    const paragraph = document.createElement("p");
    paragraph.id = Math.random();
    const paragraphText = document.createTextNode(key);
    paragraph.appendChild(paragraphText);
    console.log(paragraph);

    // create span-tag
    const span = document.createElement("span");
    const spanText = document.createTextNode(`: ${newStudent[key]}`);
    span.appendChild(spanText);

    paragraph.appendChild(span);
    card.appendChild(paragraph);
  }
}

function createDiv(newStudent) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = `card-${newStudent.Vorname}-${newStudent.Nachname}`;
  console.log(card);

  createParagAndSpan(card, newStudent);
  createButton(card, newStudent);
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

function deleteFromLocalStorage(newStudent) {
  testArray = testArray.filter((item) => {
    return item.id !== newStudent.id;
  });
  saveToLocalStorage(testArray);
}
