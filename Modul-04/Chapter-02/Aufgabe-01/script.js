const schülerListe = [];

function createObject() {
  const schüler = {
    vorname: document.getElementById("vorname").value,
    nachname: document.getElementById("nachname").value,
    alter: document.getElementById("alter").value,
    klasse: document.getElementById("klasse").value,
    score: {
      englisch: document.getElementById("englisch").value,
      mathe: document.getElementById("mathe").value,
      deutsch: document.getElementById("deutsch").value,
    },
  };
  schülerListe.push(schüler);
  schowObject();
}

function schowObject() {
  console.log(schülerListe);
}
