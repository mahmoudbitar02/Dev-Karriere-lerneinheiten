console.log("Notiz-App gestartet");

const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const sideBar = document.getElementById("wrapper");
const saveBtn = document.getElementById("save");
const deleteBtn = document.getElementById("delete");
const searchInput = document.getElementById("search-input");

let notes = [];
let findNoteIndex = null;

searchInput.addEventListener("input", handelSearch);

function handelSearch() {
  const input = searchInput.value.toLowerCase().trim();

  const words = input.split(/\s/);

  const filteredNotes = notes.filter((note) => {
    const title = note.title;
    return words.every((word) => title.includes(word));
  });

  filterdListNote(filteredNotes);
}

setInterval([]);

function filterdListNote(notes) {
  sideBar.innerHTML = "";
  notes.sort((noteA, noteB) => noteB.updatedAt - noteA.updatedAt);
  notes.forEach((note) => createNote(note));
}

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  titleInput.focus();
});

deleteBtn.addEventListener("click", deleteNote);
saveBtn.addEventListener("click", saveNote);
textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.shiftKey) {
    e.preventDefault();
    saveNote();
  }
});

function saveNote() {
  if (titleInput.value == "" && textInput.value == "") {
    alert("it shold by some in this two fields");
  } else if (titleInput.value == "") {
    alert("please give some title 😁");
  } else if (textInput.value == "") {
    alert("I think you forgot to add the text 🙄");
  } else {
    const now = new Date();
    const formatted = now.toLocaleString("de-DE");

    if (findNoteIndex !== null) {
      notes[findNoteIndex].title = titleInput.value;
      notes[findNoteIndex].text = textInput.value;
      notes[findNoteIndex].updateTime = formatted;
      notes[findNoteIndex].updated = true;
      notes[findNoteIndex].updatedAt = Date.now();
      console.log("should not created");
      console.log(notes[findNoteIndex].updatedAt);

      console.log("should not created");

      renderNotes();
      findNoteIndex = null;
    } else {
      const note = {
        title: titleInput.value,
        text: textInput.value,
        updateTime: formatted,
        updated: false,
        updatedAt: Date.now(),
      };

      notes.push(note);
      console.log(notes);
    }
    renderNotes();
    titleInput.focus();
  }
}

function createNote(note) {
  const div = document.createElement("div");
  div.classList.add("notes-card");
  const title = document.createElement("h5");
  title.classList.add("notes-title");
  title.textContent = note.title;
  const paragraph = document.createElement("p");
  paragraph.classList.add("notes-text");
  paragraph.textContent = note.text;
  const timeSpan = document.createElement("span");
  timeSpan.classList.add("notes-date");
  timeSpan.textContent = note.updateTime;

  div.appendChild(title);
  div.appendChild(paragraph);
  div.appendChild(timeSpan);
  sideBar.appendChild(div);
  saveToLocastorage();

  titleInput.value = "";
  textInput.value = "";

  div.addEventListener("click", () => {
    updateNote(note);
  });
}

function updateNote(note) {
  findNoteIndex = notes.indexOf(note);
  titleInput.value = note.title;
  textInput.value = note.text;
  saveToLocastorage();

  setClasses(note);

  console.log("hello From update" + findNoteIndex);
  console.log(note);
  searchInput.value = "";
}

function renderNotes() {
  sideBar.innerHTML = "";
  notes.sort((a, b) => b.updatedAt - a.updatedAt);
  notes.forEach((note) => createNote(note));
}

function deleteNote() {
  const note = notes[findNoteIndex];
  if (!note) return;

  notes = notes.filter((item) => {
    return item.updateTime !== note.updateTime;
  });
  saveToLocastorage();
  renderNotes();
  titleInput.focus();
}

function saveToLocastorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadFromLocalStorage() {
  notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.forEach((note) => createNote(note));
}

function deleteFromLocalStorage() {
  deleteNote();
}

function createNewNote() {
  titleInput.value = "";
  textInput.value = "";
  findNoteIndex = null;
  titleInput.focus();
}

function setClasses(note) {
  console.log("the the teh ");
  console.log(note);
  console.log("the the teh ");
}

function getCurrentNote() {
  const currentNote = document.querySelectorAll(".notes-card");
}

function getNexId() {
  let nextId = 1;
}
