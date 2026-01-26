const students = [
  {
    vorname: "mahmoud",
    nachname: "bitar",
    alter: 28,
  },
  {
    vorname: "Torsten",
    nachname: "Müller",
    alter: 30,
  },
  {
    vorname: "Thomas",
    nachname: "Schneider",
    alter: 35,
  },
  {
    vorname: "Jan",
    nachname: "Meier",
    alter: 25,
  },
  {
    vorname: "Kay",
    nachname: "Körner",
    alter: 20,
  },
];

const randmoStudent = students[Math.floor(Math.random() * students.length)];
console.log(randmoStudent);

function createStudent() {
  const card = document.createElement("div");
  card.classList.add("card");
  console.log(card);

  const paragraph = document.createElement("p");
  const paragraphText = document.createTextNode("hello");
  paragraph.appendChild(paragraphText);

  const span = document.createElement("span");
  paragraph.appendChild(span);
  console.log(paragraph);
}
