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
document.addEventListener("DOMContentLoaded", loadFromLocalStorage);

const storedQuestions = JSON.parse(localStorage.getItem("askedQuestions")) || [];
let currentQuestion = null;
let score = 0;

const wrapper = document.getElementById("wrapper");

function getRandomQuestion() {
  const randomQuestion = quiz.filter((question) => question.asked === false); // filtert die Fragen, die noch nicht gestellt wurden
  const unaskedQuestion = Math.floor(Math.random() * randomQuestion.length); // generiert eine zufällige Zahl zwischen 0 und der Länge des gefilterten Arrays
  if (randomQuestion.length === 0) return null;

  console.log(randomQuestion[unaskedQuestion]);
  return randomQuestion[unaskedQuestion];
}

function createQuestion() {
  currentQuestion = getRandomQuestion();
  // create question
  if (!currentQuestion) {
    wrapper.innerHTML = "<h1>Quiz beendet 🎉</h1>";
    wrapper.innerHTML += `<p>Your Score: ${score} / ${quiz.length}</p>`;
  } else {
    const title = document.createElement("h1");
    title.classList.add("title");
    const titleText = document.createTextNode(currentQuestion.frage);
    title.appendChild(titleText);

    wrapper.innerHTML = "";
    wrapper.appendChild(title);

    createButtons(currentQuestion);
  }
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
      handelButtonClick(antwort, button);
    });

    buttonsDiv.appendChild(button);
  });

  wrapper.appendChild(buttonsDiv);
}

function handelButtonClick(antwort, button) {
  if (!antwort.korrekt) {
    // alert("Falsch! Versuche es nochmal.");
    button.classList.add("btn-not-correct");
    button.textContent += " 😔";
  } else if (antwort.korrekt) {
    score++;
    // alert("Richtig! Gut gemacht.");
    button.classList.add("btn-correct");
    button.textContent += " 🎉";
  }

  lösungZeigen();
  saveToLocalStorage();
}

function weiter() {
  createQuestion();
}

function lösungZeigen() {
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (currentQuestion.antworten[index].korrekt) {
      btn.classList.add("btn-correct");
      currentQuestion.asked = true;
    }
  });
}

function saveToLocalStorage() {
  localStorage.setItem("askedQuestions", JSON.stringify(quiz.filter((question) => question.asked === true)));
  localStorage.setItem("score", score);
  console.log("saved to local storage");
}

function loadFromLocalStorage() {
  if (storedQuestions) {
    storedQuestions.forEach((question) => {
      const quizQuestion = quiz.find((q) => q.frage === question.frage);
      if (quizQuestion) {
        quizQuestion.asked = true;
      }
    });
  }
  if (localStorage.getItem("score")) {
    score = parseInt(localStorage.getItem("score"));
  }
  createQuestion();
}

function resetQuiz() {
  quiz.forEach((question) => {
    question.asked = false;
  });
  localStorage.removeItem("askedQuestions");
  localStorage.removeItem("score");
  score = 0;
  createQuestion();
}
