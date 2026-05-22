const student = {
    name: "Mahmoud",
    age: 18,
    isFinished: true,
};
const student2 = {
    name: "Ahmad",
    age: 18,
    isFinished: true,
};
const students = [];
function addStudent(student) {
    students.push(student);
    console.log(`The Student ${student.name} has passed the exam`);
}
addStudent(student);
addStudent(student2);
export {};
//# sourceMappingURL=index.js.map