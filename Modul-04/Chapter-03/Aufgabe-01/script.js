const students = [
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

function createStudent() {
  const randomStudent = students[Math.floor(Math.random() * students.length)];
  console.log(randomStudent);

  const card = document.createElement("div");
  card.classList.add("card");

  for (const key in randomStudent) {
    // create p-tag and add the text
    const paragraph = document.createElement("p");
    const paragraphText = document.createTextNode(key); // key --> properates from the "students" object
    paragraph.appendChild(paragraphText);

    // create span-tag and add the text
    const span = document.createElement("span");
    const spanText = document.createTextNode(`: ${randomStudent[key]}`); // randmoStudent[key] --> the value from the
    span.appendChild(spanText);

    paragraph.appendChild(span);
    console.log(paragraph);

    card.appendChild(paragraph);
  }

  document.querySelector(".container").appendChild(card);

  console.log(card);
}
