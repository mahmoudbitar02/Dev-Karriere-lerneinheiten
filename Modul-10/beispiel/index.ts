type Student = {
  name: string;
  age: number;
  isFinished: boolean;
};

const students: Student[] = [];

const student: Student = {
  name: "Mahmoud",
  age: 18,
  isFinished: true,
};

function addStudent(student: Student): void {
  students.push(student);
  if (student.isFinished) console.log(`the ${student.name} has passd the exam`);
}

addStudent(student);
