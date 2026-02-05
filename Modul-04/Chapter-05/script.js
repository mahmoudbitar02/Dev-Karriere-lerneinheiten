const quiz = [
  {
    asked: false,
    frage: "Was ist die Hauptstadt von Deutschland?",
    antworten: [
      { text: "Berlin", korrekt: true },
      { text: "München", korrekt: false },
      { text: "Hamburg", korrekt: false },
      { text: "Köln", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Wie viele Kontinente gibt es auf der Erde?",
    antworten: [
      { text: "5", korrekt: false },
      { text: "6", korrekt: false },
      { text: "7", korrekt: true },
      { text: "8", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Welches Tier ist das größte Landsäugetier?",
    antworten: [
      { text: "Elefant", korrekt: true },
      { text: "Giraffe", korrekt: false },
      { text: "Nashorn", korrekt: false },
      { text: "Nilpferd", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Wie viele Tage hat ein Schaltjahr?",
    antworten: [
      { text: "365", korrekt: false },
      { text: "366", korrekt: true },
      { text: "364", korrekt: false },
      { text: "360", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Welcher Planet ist der Sonne am nächsten?",
    antworten: [
      { text: "Merkur", korrekt: true },
      { text: "Venus", korrekt: false },
      { text: "Erde", korrekt: false },
      { text: "Mars", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Wer malte die Mona Lisa?",
    antworten: [
      { text: "Leonardo da Vinci", korrekt: true },
      { text: "Vincent van Gogh", korrekt: false },
      { text: "Pablo Picasso", korrekt: false },
      { text: "Claude Monet", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Welches Element hat das chemische Symbol O?",
    antworten: [
      { text: "Sauerstoff", korrekt: true },
      { text: "Gold", korrekt: false },
      { text: "Eisen", korrekt: false },
      { text: "Wasserstoff", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Wie viele Minuten hat eine Stunde?",
    antworten: [
      { text: "30", korrekt: false },
      { text: "45", korrekt: false },
      { text: "60", korrekt: true },
      { text: "90", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Welches Land hat die größte Bevölkerung?",
    antworten: [
      { text: "China", korrekt: false },
      { text: "Indien", korrekt: true },
      { text: "USA", korrekt: false },
      { text: "Russland", korrekt: false },
    ],
  },
  {
    asked: false,
    frage: "Wofür steht die Abkürzung CPU?",
    antworten: [
      { text: "Central Processing Unit", korrekt: true },
      { text: "Computer Personal Unit", korrekt: false },
      { text: "Central Program Utility", korrekt: false },
      { text: "Control Processing User", korrekt: false },
    ],
  },
];

let currentQuestion = null;

let askedQuestions = [];

const wrapper = document.getElementById("wrapper");

function getRandomQuestion() {
  const randomQuestion = quiz.filter((question) => question.asked === false);
  const unaskedQuestion = Math.floor(Math.random() * randomQuestion.length);

  console.log(randomQuestion[unaskedQuestion]);
  return randomQuestion[unaskedQuestion];
}

function createQuestion() {
  currentQuestion = getRandomQuestion();
  // create question
  const title = document.createElement("h1");
  title.classList.add("title");
  const titleText = document.createTextNode(currentQuestion.frage);
  title.appendChild(titleText);

  wrapper.innerHTML = "";
  wrapper.appendChild(title);

  createButtons(currentQuestion);
}

function createButtons(currentQuestion) {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");
  currentQuestion.antworten.forEach((antwort, index) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.id = index;
    const buttonText = document.createTextNode(antwort.text);
    button.appendChild(buttonText);
    button.addEventListener("click", () => {
      handelButtonClick(antwort, button, currentQuestion);
    });

    buttonsDiv.appendChild(button);

    console.log(button);
  });

  wrapper.appendChild(buttonsDiv);
}

function handelButtonClick(antwort, button, currentQuestion) {
  const allButtons = document.querySelectorAll(".btn");
  if (!antwort.korrekt) {
    button.classList.add("btn-not-correct");
  } else if (antwort.korrekt) {
    button.classList.add("btn-correct");
  }
  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (currentQuestion.antworten[index].korrekt) {
      btn.classList.add("btn-correct");
      btn.asked = true;
    }
    console.log(btn.id);
  });
}

createQuestion();
