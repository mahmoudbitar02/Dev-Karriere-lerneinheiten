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

  for (const scoreKey in student.score) {
    if (student.score[scoreKey] === "") {
      student.score[scoreKey] = 5;
    } else if (student.score[scoreKey] < 1 || student.score[scoreKey] > 6) {
      alert(`Ungültiger Wert für ${scoreKey}. Bitte geben Sie eine Zahl zwischen 1 und 6 ein.`);
      return;
    } else {
      student.score[scoreKey] = Number(student.score[scoreKey]);
      console.log(student.score[scoreKey]);
    }
  }

  if (student.vorName.length < 2) {
    alert("Vorname muss mindestens 2 Zeichen lang sein.");
    return;
  } else if (student.alter < 6) {
    alert("Alter muss mindestens 6 Jahre sein.");
    return;
  }
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
