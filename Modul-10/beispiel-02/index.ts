type Student = {
  name: string;
  age: number;
  isFinished: true;
};

const student: Student = {
  name: "Mahmoud",
  age: 18,
  isFinished: true,
};

const student2: Student = {
  name: "Ahmad",
  age: 18,
  isFinished: true,
};

const students: Student[] = [];

function addStudent(student: Student) {
  students.push(student);
  console.log(`The Student ${student.name} has passed the exam`);
}

addStudent(student);
addStudent(student2);
