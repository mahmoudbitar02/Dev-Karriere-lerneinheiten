const titleInputEl = document.getElementById("title");
const contentInputEl = document.getElementById("text");
const sideBarEl = document.getElementById("wrapper");
const saveBtnEl = document.getElementById("save");
const deleteBtnEl = document.getElementById("delete");
const searchInputEl = document.getElementById("search-input");

const LOCALSTORAGE_KEY = "notes-app";

function clickNoteCard() {
  const noteCard = document.querySelectorAll(".notes-card");
  noteCard.forEach((card) => {
    card.addEventListener("click", () => {
      updateNote(card.getAttribute("data-id"));
    });
  });
}

saveBtnEl.addEventListener("click", handelClickSaveBtn);
deleteBtnEl.addEventListener("click", clickDeleteButton);
displayNotesList();
clickNoteCard();

function getNotes() {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
}

function displayNotesList() {
  const notes = getNotes();
  let html = "";

  const sortedNotes = notes.sort((noteA, noteB) => noteB.lastUpdated - noteA.lastUpdated);
  sortedNotes.forEach((note) => {
    html += `
    <div class="notes-card" data-id="${note.id}">
        <h5 class="notes-title">${note.title}</h5>
        <p class="notes-text">${note.content}</p>
        <span class="notes-date">${new Date(note.lastUpdated).toLocaleString("de-DE")}</span>
    </div>
  `;
  });

  sideBarEl.innerHTML = html;
}

function handelClickSaveBtn() {
  title = titleInputEl.value;
  content = contentInputEl.value;

  if (!title && !content) {
    alert("please enter the title and the content");
    return;
  } else if (!title) {
    alert("it looks like you forget to add the title 😁");
    return;
  } else if (!content) {
    alert("please give some text in the body 🙄");
    return;
  }

  getCurrentNoteId();

  saveNote(title, content, Number(getCurrentNoteId()));
  displayNotesList();
  clickNoteCard();
  titleInputEl.value = "";
  contentInputEl.value = "";
}

function clickDeleteButton() {
  const currentNoteId = getCurrentNoteId();

  if (!currentNoteId) return;
  deleteNote(currentNoteId);

  displayNotesList();
  clickNoteCard();

  titleInputEl.value = "";
  contentInputEl.value = "";
}

function updateNote(id) {
  const noteToUpdate = document.querySelector(`.notes-card[data-id="${id}"]`);

  if (noteToUpdate.classList.contains("focus")) return;

  removeClasslistFromAllNotes();
  noteToUpdate.classList.add("focus");

  const notes = getNotes();
  const selectNote = notes.find((note) => note.id === Number(id));
  if (!selectNote) return;
  titleInputEl.value = selectNote.title;
  contentInputEl.value = selectNote.content;
}

function removeClasslistFromAllNotes() {
  const allNotes = document.querySelectorAll(".notes-card");
  allNotes.forEach((note) => {
    note.classList.remove("focus");
  });
}

function getCurrentNoteId() {
  let currentNoteId = undefined;
  const currentNoteEl = document.querySelector(".focus");
  if (currentNoteEl) {
    currentNoteId = currentNoteEl.getAttribute("data-id");
  }

  return currentNoteId;
}

function createNewNote() {
  titleInputEl.value = "";
  contentInputEl.value = "";
  displayNotesList();
  removeClasslistFromAllNotes();
  titleInputEl.focus();
}

function deleteNote(id) {
  if (!id) return;

  const notes = getNotes();
  const filteredNotes = notes.filter((note) => note.id !== Number(id));
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filteredNotes));
}

function saveNote(title, content, id = undefined) {
  const notes = getNotes();

  if (!id) {
    notes.push({
      title,
      content,
      id: getNextId(),
      lastUpdated: new Date().getTime(),
    });
  } else {
    const indexNoteId = notes.findIndex((note) => note.id === id);
    if (indexNoteId > -1) {
      notes[indexNoteId] = {
        title,
        content,
        id,
        lastUpdated: new Date().getTime(),
      };
    }
  }
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
}

function getNextId() {
  const notes = getNotes();
  let nextId = 1;
  const sortedNotes = notes.sort((noteA, noteB) => noteA.id - noteB.id);
  for (let note of sortedNotes) {
    if (nextId < note.id) break;
    nextId = note.id + 1;
  }
  return nextId;
}
