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
export {};
//# sourceMappingURL=index.js.map