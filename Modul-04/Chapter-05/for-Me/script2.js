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

const wrapper = document.getElementById("wrapper");

let score = 0;
let currentQuestion = null;
let askedQuestions = [];

function getRandomQuestion() {
  const unaskedQuestions = quiz.filter((q) => !q.asked);
  currentQuestion = quiz.splice(quiz.indexOf(unaskedQuestions[Math.floor(Math.random() * unaskedQuestions.length)]), 1)[0];
  console.log(quiz);
  return currentQuestion;
}

function createQuestion() {
  getRandomQuestion();

  wrapper.innerHTML = "";

  const question = document.createElement("h2");
  question.classList.add("title");
  const titleText = document.createTextNode(currentQuestion.frage);
  question.appendChild(titleText);
  wrapper.appendChild(question);

  createButtons();
}

function createButtons() {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");
  currentQuestion.antworten.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    const buttonText = document.createTextNode(answer.text);
    button.appendChild(buttonText);
    buttonsDiv.appendChild(button);

    button.addEventListener("click", () => {
      hadelButtonClick(answer, button);
    });
  });

  wrapper.appendChild(buttonsDiv);
  console.log(currentQuestion);
}

function hadelButtonClick(answer, button) {
  //   const allButtons = document.querySelectorAll(".btn");

  //   allButtons.forEach((btn) => {
  //     btn.disabled = true;
  //     button.classList.add(answer.korrekt ? "btn-correct" : "btn-not-correct");
  //     if (answer.korrekt) score++;
  //   });

  if (!answer.korrekt) button.classList.add("btn-not-correct");
  else score++;

  lösungZeigen();

  currentQuestion.asked = true;
  askedQuestions.push(currentQuestion);
}

function lösungZeigen() {
  const allButtons = document.querySelectorAll(".btn");

  allButtons.forEach((btn) => {
    btn.disabled = true;
    const answer = currentQuestion.antworten.find((answer) => answer.text === btn.textContent);
    if (answer.korrekt) btn.classList.add("btn-correct");
  });
}

function weiter() {
  if (quiz.length > 0) {
    createQuestion();
  } else {
    wrapper.innerHTML = `<h2 class="title">Quiz beendet! Deine Punktzahl: ${score / currentQuestion.antworten.length}/${askedQuestions.length}</h2>`;
  }
}

function resetQuiz() {
  askedQuestions.forEach((question) => {
    question.asked = false;
    quiz.push(question);
  });
  askedQuestions = [];
  score = 0;
  console.log(quiz);
}

createQuestion();
