const MOCK_NOTES = [
  {
    title: "test",
    content: "hello from the first note",
    id: 1,
    lastUpdated: new Date().getTime(),
  },
  {
    title: "test 2",
    content: "hello from the first note",
    id: 2,
    lastUpdated: new Date().getTime(),
  },
  {
    title: "test 3",
    content: "hello from the first note",
    id: 3,
    lastUpdated: new Date().getTime(),
  },
];

const notesListEl = document.querySelector(".notes-list");

function displayNotesList() {
  const notes = MOCK_NOTES;

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

displayNotesList();
