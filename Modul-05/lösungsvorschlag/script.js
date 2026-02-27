const notesListEl = document.querySelector(".notes-list");
const saveButtonEL = document.querySelector(".save-note");
const titleInputEl = document.getElementById("title-input");
const contentInputEl = document.getElementById("content-input");

saveButtonEL.addEventListener("click", clickSaveButton);
displayNotesList();
applyListeners();

function applyListeners() {
  const notesEntriesEls = document.querySelectorAll(".note-entry");

  notesEntriesEls.forEach((noteEntry) => {
    noteEntry.addEventListener("click", () => selectNote(noteEntry.getAttribute("data-id")));
  });
}

function displayNotesList() {
  const notes = getNotes();
  const sortedNotes = notes.sort((noteA, noteB) => noteB.lastUpdated - noteA.lastUpdated);

  let html = "";

  sortedNotes.forEach((note) => {
    html += `
        <div class="note-entry" data-id=${note.id}>
            <div class="note-title">${note.title}</div>
            <div class="note-content-teaser">${note.content}</div>
            <div class="note-date">${new Date(note.lastUpdated).toLocaleString("de-DE")}</div>
          </div>
    `;
  });
  notesListEl.innerHTML = html;
}

function clickSaveButton() {
  const title = titleInputEl.value;
  const content = contentInputEl.value;

  if (!title || !content) {
    alert("Bitte Title und Inhalt eingeben ");
    return;
  }

  let currentId = undefined;

  const currentlySelectedNoteEl = document.querySelector(".selected-note");

  if (currentlySelectedNoteEl) {
    currentId = currentlySelectedNoteEl.getAttribute("data-id");
  }

  saveNote(title, content, Number(currentId));
  titleInputEl.value = "";
  contentInputEl.value = "";
  displayNotesList();
  applyListeners();
}

function selectNote(id) {
  const slectedNoteEl = document.querySelector(`.note-entry[data-id="${id}"]`);

  if (slectedNoteEl.classList.contains("selected-note")) return;

  const notesEntriesEls = document.querySelectorAll(".note-entry");
  notesEntriesEls.forEach((noteEntry) => {
    noteEntry.classList.remove("selected-note");
  });

  slectedNoteEl.classList.add("selected-note");

  const notes = getNotes();

  const slectedNote = notes.find((note) => note.id === Number(id));

  if (!slectedNote) return;

  titleInputEl.value = slectedNote.title;
  contentInputEl.value = slectedNote.content;
}
