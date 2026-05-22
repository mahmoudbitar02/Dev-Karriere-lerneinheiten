import type { Student } from "./Student";
console.log("Hello World");

// TODO 1: Variable mit Type
let numberVariable: number;

var stringVariable: string = "test";

// TODO 2: Funktion mit Rückgabe und Parameter
function sum(a: number, b: number): number {
  return a + b;
}

const summe = sum(1, 2);

// TODO 3: Objekt mit Type

var student: Student = {
  name: "Peter",
  age: 18,
  email: "peter@gmail.com",
  hasFinished: true,
};

const students: Student[] = [];

function addStudent(student: Student): void {
  students.push(student);
}

addStudent(student);

// TODO 4: Type extern einbinden
