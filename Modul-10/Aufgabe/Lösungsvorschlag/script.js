const questions = [
    {
        id: 1,
        question: "Was ist die Hauptstadt von Deutschland?",
        answers: [
            { id: "a", text: "Berlin", korrekt: true },
            { id: "b", text: "München", korrekt: false },
            { id: "c", text: "Hamburg", korrekt: false },
            { id: "d", text: "Köln", korrekt: false },
        ],
    },
    {
        id: 2,
        question: "Wie viele Kontinente gibt es auf der Erde?",
        answers: [
            { id: "a", text: "5", korrekt: false },
            { id: "b", text: "6", korrekt: false },
            { id: "c", text: "7", korrekt: true },
            { id: "d", text: "8", korrekt: false },
        ],
    },
    {
        id: 3,
        question: "Welches Tier ist das größte Landsäugetier?",
        answers: [
            { id: "a", text: "Elefant", korrekt: true },
            { id: "b", text: "Giraffe", korrekt: false },
            { id: "c", text: "Nashorn", korrekt: false },
            { id: "d", text: "Nilpferd", korrekt: false },
        ],
    },
    {
        id: 4,
        question: "Wie viele Tage hat ein Schaltjahr?",
        answers: [
            { id: "a", text: "365", korrekt: false },
            { id: "b", text: "366", korrekt: true },
            { id: "c", text: "364", korrekt: false },
            { id: "d", text: "360", korrekt: false },
        ],
    },
    {
        id: 5,
        question: "Welcher Planet ist der Sonne am nächsten?",
        answers: [
            { id: "a", text: "Merkur", korrekt: true },
            { id: "b", text: "Venus", korrekt: false },
            { id: "c", text: "Erde", korrekt: false },
            { id: "d", text: "Mars", korrekt: false },
        ],
    },
    {
        id: 6,
        question: "Wer malte die Mona Lisa?",
        answers: [
            { id: "a", text: "Leonardo da Vinci", korrekt: true },
            { id: "b", text: "Vincent van Gogh", korrekt: false },
            { id: "c", text: "Pablo Picasso", korrekt: false },
            { id: "d", text: "Claude Monet", korrekt: false },
        ],
    },
    {
        id: 7,
        question: "Welches Element hat das chemische Symbol O?",
        answers: [
            { id: "a", text: "Sauerstoff", korrekt: true },
            { id: "b", text: "Gold", korrekt: false },
            { id: "c", text: "Eisen", korrekt: false },
            { id: "d", text: "Wasserstoff", korrekt: false },
        ],
    },
];
let currentQuestion = questions[0];
let currentQuestionPointer = -1;
// TODO 11: Fragen Rendern
function renderQuestion(question) {
    var _a;
    const questionDiv = document.createElement("div");
    questionDiv.id = String(question.id);
    questionDiv.classList.add("question");
    const questiotitle = document.createElement("div");
    questiotitle.classList.add("question-title");
    questiotitle.appendChild(document.createTextNode(question.question));
    const questionAnswers = document.createElement("div");
    questionAnswers.classList.add("question-answers");
    // [a,b,c,d]
    // zufällige reinfolge der Antworten
    const answerCopy = [];
    question.answers.forEach((answer) => answerCopy.push(answer));
    while (answerCopy.length > 0) {
        const randomPointer = Math.floor(Math.random() * answerCopy.length);
        const answer = answerCopy.splice(randomPointer, 1)[0];
        if (!answer)
            continue;
        const answerDiv = document.createElement("button");
        answerDiv.id = answer.id;
        // answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
        answerDiv.addEventListener("click", () => {
            validate(answer.id);
        });
        answerDiv.classList.add("answer");
        answerDiv.appendChild(document.createTextNode(answer.text));
        questionAnswers.appendChild(answerDiv);
    }
    //   question.answers.forEach((answer) => {
    //     const answerDiv = document.createElement("button");
    //     answerDiv.id = answer.id;
    //     answerDiv.setAttribute("onclick", `validate('${answer.id}')`);
    //     answerDiv.classList.add("answer");
    //     answerDiv.appendChild(document.createTextNode(answer.text));
    //     questionAnswers.appendChild(answerDiv);
    //   });
    questionDiv.appendChild(questiotitle);
    questionDiv.appendChild(questionAnswers);
    (_a = document.getElementById("display-question")) === null || _a === void 0 ? void 0 : _a.appendChild(questionDiv);
}
// TODO 12: "Next" Logik
function nextQuestion() {
    var _a;
    if (currentQuestion)
        (_a = document.getElementById(String(currentQuestion.id))) === null || _a === void 0 ? void 0 : _a.remove();
    if (currentQuestionPointer + 1 < questions.length) {
        currentQuestionPointer++;
        currentQuestion = questions[currentQuestionPointer];
    }
    else {
        currentQuestionPointer = 0;
        currentQuestion = questions[currentQuestionPointer];
    }
    if (!currentQuestion)
        return;
    renderQuestion(currentQuestion);
}
// TODO 13: Frage beantworten Logik
function validate(answerId) {
    var _a, _b, _c;
    if (!currentQuestion)
        return;
    const correctAnswer = currentQuestion.answers.find((answer) => answer.korrekt);
    if (!correctAnswer)
        return;
    if (correctAnswer.id === answerId) {
        // alert("Richtig!");
        (_a = document.getElementById(answerId)) === null || _a === void 0 ? void 0 : _a.classList.add("correct");
    }
    else {
        alert("Falsch!");
        (_b = document.getElementById(answerId)) === null || _b === void 0 ? void 0 : _b.classList.add("incorrect");
        (_c = document.getElementById(correctAnswer.id)) === null || _c === void 0 ? void 0 : _c.classList.add("correct");
    }
}
// TODO 14: Lösung anzeigen
function showSolution() {
    var _a;
    if (!currentQuestion)
        return;
    const correctAnswer = currentQuestion.answers.find((answer) => answer.korrekt);
    if (!correctAnswer)
        return;
    (_a = document.getElementById(correctAnswer.id)) === null || _a === void 0 ? void 0 : _a.classList.add("correct");
}
window.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    if (!currentQuestion)
        return;
    renderQuestion(currentQuestion);
    console.log(currentQuestion);
    (_a = document.getElementById("showSolution")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", showSolution);
    (_b = document.getElementById("showNextQuestion")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", nextQuestion);
});
export {};
//# sourceMappingURL=script.js.map