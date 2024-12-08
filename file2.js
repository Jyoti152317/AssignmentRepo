const students = [
  { name: "Alice", marks: 58 },

  { name: "Bob", marks: 85 },

  { name: "Charlie", marks: 92 },

  { name: "David", marks: 45 },
];

function proceesStudents() {
  const filter = students.filter((ele) => {
    return ele.marks > 60;
  });
  const sort = filter.sort((a, b) => b.marks - a.marks);
  const map = sort.map((ele) => ele.name);
  return map;
}
console.log(proceesStudents());
