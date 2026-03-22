const student = {
  name: "Sudarshan",
  marks: 45,
  
  getResult: function () {
    if (this.marks >= 40) {
      return "Pass";
    } else {
      return "Fail";
    }
  }
};

console.log(student.getResult()); // Pass