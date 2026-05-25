const quiz = [
  {
    asked: false,
    question: "Was ist die Hauptstadt von Deutschland?",
    answers: [
      { text: "Berlin", correct: true },
      { text: "München", correct: false },
      { text: "Hamburg", correct: false },
      { text: "Köln", correct: false },
    ],
  },
  {
    asked: false,
    question: "Wie viele Kontinente gibt es auf der Erde?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    asked: false,
    question: "Welches Tier ist das größte Landsäugetier?",
    answers: [
      { text: "Elefant", correct: true },
      { text: "Giraffe", correct: false },
      { text: "Nashorn", correct: false },
      { text: "Nilpferd", correct: false },
    ],
  },
  {
    asked: false,
    question: "Wie viele Tage hat ein Schaltjahr?",
    answers: [
      { text: "365", correct: false },
      { text: "366", correct: true },
      { text: "364", correct: false },
      { text: "360", correct: false },
    ],
  },
  {
    asked: false,
    question: "Welcher Planet ist der Sonne am nächsten?",
    answers: [
      { text: "Merkur", correct: true },
      { text: "Venus", correct: false },
      { text: "Erde", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    asked: false,
    question: "Wer malte die Mona Lisa?",
    answers: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    asked: false,
    question: "Welches Element hat das chemische Symbol O?",
    answers: [
      { text: "Sauerstoff", correct: true },
      { text: "Gold", correct: false },
      { text: "Eisen", correct: false },
      { text: "Wasserstoff", correct: false },
    ],
  },
  {
    asked: false,
    question: "Wie viele Minuten hat eine Stunde?",
    answers: [
      { text: "30", correct: false },
      { text: "45", correct: false },
      { text: "60", correct: true },
      { text: "90", correct: false },
    ],
  },
  {
    asked: false,
    question: "Welches Land hat die größte Bevölkerung?",
    answers: [
      { text: "China", correct: false },
      { text: "Indien", correct: true },
      { text: "USA", correct: false },
      { text: "Russland", correct: false },
    ],
  },
  {
    asked: false,
    question: "Wofür steht die Abkürzung CPU?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Program Utility", correct: false },
      { text: "Control Processing User", correct: false },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  document.getElementById("show-sulotion").addEventListener("click", showAnswer);
  document.getElementById("next-question").addEventListener("click", nextQuestion);
  document.getElementById("reset").addEventListener("click", resetQuiz);
});

const storedQuestions = JSON.parse(localStorage.getItem("askedQuestions")) || [];
let currentQuestion = null;
let score = 0;

const wrapper = document.getElementById("wrapper");

function getRandomQuestion() {
  const randomQuestion = quiz.filter((question) => question.asked === false); // filtert die questionn, die noch nicht gestellt wurden
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
    const titleText = document.createTextNode(currentQuestion.question);
    title.appendChild(titleText);

    wrapper.innerHTML = "";
    wrapper.appendChild(title);

    createButtons(currentQuestion);
  }
}

function createButtons(currentQuestion) {
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");
  currentQuestion.answers.forEach((antwort, index) => {
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
  if (!antwort.correct) {
    // alert("Falsch! Versuche es nochmal.");
    button.classList.add("btn-not-correct");
    button.textContent += " 😔";
  } else if (antwort.correct) {
    score++;
    // alert("Richtig! Gut gemacht.");
    button.classList.add("btn-correct");
    button.textContent += " 🎉";
  }

  showAnswer();
  saveToLocalStorage();
}

function nextQuestion() {
  createQuestion();
}

function showAnswer() {
  const allButtons = document.querySelectorAll(".btn");
  allButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (currentQuestion.answers[index].correct) {
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
      const quizQuestion = quiz.find((q) => q.question === question.question);
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
