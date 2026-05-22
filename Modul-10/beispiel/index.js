"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students = [];
const student = {
    name: "Mahmoud",
    age: 18,
    isFinished: true,
};
function addStudent(student) {
    students.push(student);
    if (student.isFinished)
        console.log(`the ${student.name} has passd the exam`);
}
addStudent(student);
//# sourceMappingURL=index.js.map