const titleInputEl = document.getElementById("title-input");
const contentInputEl = document.getElementById("content-input");

const newNoteButtonEl = document.querySelector(".create-new");
const noteListEl = document.querySelector(".notes-list");
const saveButtonEl = document.querySelector(".save-note");
const deleteButtonEl = document.querySelector(".delete-note");

saveButtonEl.addEventListener("click", clickSaveButton);
newNoteButtonEl.addEventListener("click", newNote);
deleteButtonEl.addEventListener("click", clickDeleteButton);

displayNote();
applyListeners();

function applyListeners() {
  const noteEntryEl = document.querySelectorAll(".note-entry");
  noteEntryEl.forEach((note) => {
    note.addEventListener("click", () => selectId(note.getAttribute("data-id")));
  });
}

function displayNote() {
  const notes = getNotes();
  let html = "";

  const sortedNotes = notes.sort((noteA, noteB) => noteB.lastUpdated - noteA.lastUpdated);

  sortedNotes.forEach((note) => {
    html += `
        <div class="note-entry" data-id=${note.id}>
            <div class="note-title">${note.title}</div>
            <div class="note-content-teaser">${note.content}</div>
            <div class="note-date">${new Date(note.lastUpdated).toLocaleString("de-DE")}</div>
        </div>
    `;
  });
  noteListEl.innerHTML = html;
}

function clickSaveButton() {
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

  getCurrentlySelectedId();

  saveNote(title, content, Number(getCurrentlySelectedId()));
  displayNote();
  applyListeners();

  titleInputEl.value = "";
  contentInputEl.value = "";
}

function selectId(id) {
  const slectedNoteEl = document.querySelector(`.note-entry[data-id="${id}"]`);

  if (slectedNoteEl.classList.contains("selected-note")) return;

  removeselectedClassFromAllNotes();
  slectedNoteEl.classList.add("selected-note");

  const notes = getNotes();

  const selectNote = notes.find((note) => note.id === Number(id));
  if (!selectNote) return;
  titleInputEl.value = selectNote.title;
  contentInputEl.value = selectNote.content;
}

function clickDeleteButton() {
  const currentlySelectedId = getCurrentlySelectedId();

  if (!currentlySelectedId) return;

  deleteNote(currentlySelectedId);

  titleInputEl.value = "";
  contentInputEl.value = "";
  displayNote();
  applyListeners();
}

function newNote() {
  titleInputEl.value = "";
  contentInputEl.value = "";
  removeselectedClassFromAllNotes();
}

function removeselectedClassFromAllNotes() {
  const notesEntriesEls = document.querySelectorAll(".note-entry");
  notesEntriesEls.forEach((noteEntry) => {
    noteEntry.classList.remove("selected-note");
  });
}

function getCurrentlySelectedId() {
  let currentId = undefined;
  const currentSelectedNoteEl = document.querySelector(".selected-note");
  if (currentSelectedNoteEl) {
    currentId = currentSelectedNoteEl.getAttribute("data-id");
  }
  return currentId;
}
