const users = [
  { name: "Sudarshan", courses: ["HTML", "CSS", "JavaScript"] },
  { name: "Preeti", courses: ["Python", "AI"] },
  { name: "Praveen", courses: ["JavaScript", "React"] },
  { name: "Rukmini", courses: ["Python", "Data Science"] }
];

function getUsersByCourse(courseName) {
  let result = [];

  for (let user of users) {
    if (user.courses.includes(courseName)) {
      result.push(user.name);
    }
  }

  return result;
}

console.log(getUsersByCourse("Python"));

//Output: [ 'Preeti', 'Rukmini' ]