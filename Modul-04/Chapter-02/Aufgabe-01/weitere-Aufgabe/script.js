const students = [];

function createObject() {
  const student = {
    vorName: document.getElementById("vorname").value,
    nachName: document.getElementById("nachname").value,
    alter: document.getElementById("alter").value,
    klasse: document.getElementById("klasse").value,
    score: {
      englisch: document.getElementById("englisch").value,
      mathe: document.getElementById("mathe").value,
      deutsch: document.getElementById("deutsch").value,
    },
  };
  const index = students.findIndex((studentsInListe) => {
    return studentsInListe.vorName === student.vorName && studentsInListe.nachName === student.nachName && studentsInListe.alter === student.alter;
  });
  if (index !== -1) {
    students[index] = student;
    schowObject();
    return;
  }
  students.push(student);
  schowObject();
}

function schowObject() {
  console.log(students);
}
