console.log("Notiz-App gestartet");

const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const sideBar = document.getElementById("wrapper");

const saveBtn = document.getElementById("save");

const notes = [];

const now = new Date();
const formatted = now.toLocaleString("de-DE");

function handelSaveBtn() {
  saveBtn.addEventListener("click", () => {
    const note = {
      title: titleInput.value,
      text: textInput.value,
      updateTime: formatted,
      showed: false,
    };

    notes.push(note);
    createNote();
    titleInput.value = "";
    textInput.value = "";
    console.log(notes);
  });
}

function createNote() {
  notes.forEach((note) => {
    if (!note.showed) {
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
      note.showed = true;
      console.log(note);
      div.addEventListener("click", () => {
        handelNoteClick(note);
      });
    }
  });
}

// eine IDEE versuch es mit created false true wenn erstellt created = true else false

function handelNoteClick(note) {
  titleInput.value = note.title;
  textInput.value = note.text;
  const findNote = notes.map((toUpdate) => {
    if (toUpdate.updateTime === note.updateTime) {
      toUpdate.title = titleInput.value;
      toUpdate.text = textInput.value;
      console.log(toUpdate.title);
      console.log("test");
    }
  });
}
handelSaveBtn();
