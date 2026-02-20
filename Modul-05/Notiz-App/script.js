console.log("Notiz-App gestartet");

const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const sideBar = document.getElementById("wrapper");

const saveBtn = document.getElementById("save");

const notes = [];

saveBtn.addEventListener("click", saveNote);

function saveNote() {
  if (titleInput.value == "" && text.value == "") {
    alert("it shold by some in this two fields");
  } else if (titleInput.value == "") {
    alert("please give some title 😁");
  } else if (text.value == "") {
    alert("I think you forgot to add the text 🙄");
  } else {
    const now = new Date();
    const formatted = now.toLocaleString("de-DE");
    const note = {
      // evtl hier prüfen ob updated TRUE ist????? bin mir noch nicht sicher
      title: titleInput.value,
      text: textInput.value,
      updateTime: formatted,
      updated: false,
    };

    notes.push(note);
    createNote(note);
    console.log(notes);
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
  sideBar.prepend(div);

  titleInput.value = "";
  textInput.value = "";

  div.addEventListener("click", () => {
    updateNote(note);
  });
}

function updateNote(note) {
  note.updated = true;
  titleInput.value = note.title;
  textInput.value = note.text;

  const findNoteIndex = notes.findIndex((index) => {
    return index.title === note.title;
  });

  console.log(findNoteIndex);
}

function createNewNote() {
  titleInput.value = "";
  textInput.value = "";
}
