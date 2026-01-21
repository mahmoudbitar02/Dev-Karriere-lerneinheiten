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
  const index = schülerListe.findIndex((schülerInListe) => {
    return schülerInListe.vorname === schüler.vorname && schülerInListe.nachname === schüler.nachname;
  });

  if (index !== -1) {
    // index !== -1 --> Schüler bereits vorhanden
    schülerListe[index] = schüler; // Aktualisiere den vorhandenen Schüler
    schowObject();
    return;
  }
  schülerListe.push(schüler);
  schowObject();

  //   Alternative Methode zur Überprüfung auf Duplikate
  //   const prüfNachDoppelten = schülerListe.find((dopp) => dopp.vorname === schüler.vorname && dopp.nachname === schüler.nachname);
  //   if (prüfNachDoppelten) {
  //     alert("Dieser Schüler ist bereits in der Liste vorhanden.");
  //     return;
  //   }
}

function schowObject() {
  console.log(schülerListe);
}
