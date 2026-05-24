type Person = {
  userId: number;
  name: string;
  alter: number;
};

const testObject: Person = {
  userId: 1,
  name: "Jochen",
  alter: 36,
};
console.log(testObject.name);

// TODO 1: Serialisieren und Deserialisieren
const serialObject = JSON.stringify(testObject);
const deserialObject: Person = JSON.parse(serialObject);

// TODO 2: (De-)Serialisierung ausgeben

console.log(serialObject, deserialObject);

// TODO 3: Vergleich zwischen original und Deserialisiert ziehen
console.log(deserialObject === testObject);

// TODO 4: Auf Namen zugreifen
console.log(deserialObject.name);

type ArrayType = (string | number | boolean | Person)[];

const testArray: ArrayType = ["a", 1, true, testObject];

// TODO 5: Serialisierung und Deserialisierung
const serialArray = JSON.stringify(testArray);
const desserialArray: ArrayType = JSON.parse(serialArray);

// TODO 6: (De-)Serialisierung ausgeben

console.log(serialArray, desserialArray);

// TODO 7: Vergleich zwischen original und Deserialisiert ziehen
console.log(desserialArray === testArray);

// TODO 8: Auf Eintrag zugreifen
console.log(desserialArray[3]);
