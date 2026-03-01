const LOCALSTORAGE_KEY = "notizapp-notizen";

function getNotes() {
  return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
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
    const indexOfNoteWithId = notes.findIndex((note) => note.id === id);
    if (indexOfNoteWithId > -1) {
      notes[indexOfNoteWithId] = {
        title,
        content,
        id,
        lastUpdated: new Date().getTime(),
      };
    }
  }

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(notes));
}

function deleteNote(id) {
  if (!id) return;

  const notes = getNotes();
  const filteresNotes = notes.filter((note) => note.id !== Number(id));
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(filteresNotes));
}

function getNextId() {
  const notes = getNotes();
  let nextId = 1;
  const sortedNotesId = notes.sort((noteA, noteB) => noteA.id - noteB.id);

  for (let note of sortedNotesId) {
    if (nextId < note.id) break;
    nextId = note.id + 1;
  }
  return nextId;
}
