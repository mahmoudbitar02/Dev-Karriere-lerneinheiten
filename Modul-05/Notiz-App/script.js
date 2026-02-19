console.log("Notiz-App gestartet");

const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");

const saveBtn = document.getElementById("save");

const notes = [];

function handelSaveBtn() {
  saveBtn.addEventListener("click", () => {
    const now = new Date();
    const formatted = now.toLocaleTimeString("de-DE");
    const note = {
      title: titleInput.value,
      text: textInput.value,
      updateTime: formatted,
    };

    notes.push(note);
    console.log(notes);
  });
}
handelSaveBtn();
