let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let studenMarks: number[] = [75, 80, 82];
let addedStudentMarks: number[] = [];

for (let marks of studenMarks) {
  //   console.log(marks);
  addedStudentMarks.push(marks + 10);
}
// console.log(addedStudentMarks);

console.log(`Updated Marks:`);
for (let i: number = 0; i < studentNames.length; i++) {
  console.log(`${studentNames[i]} : ${addedStudentMarks[i]}`);
}

let total: number = 0;
for (let i: number = 0; i < addedStudentMarks.length; i++) {
  total += addedStudentMarks[i];
}
console.log(`Average Marks: ${total / addedStudentMarks.length}`);
