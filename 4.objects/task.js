function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age,
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName
}

Student.prototype.addMarks = function (...marksToAdd) {
  if ("marks" in this) {
    this.marks.push(...marksToAdd);
  }
}

Student.prototype.getAverage = function () {
  if ("marks" in this && this.marks.length > 0) {
    return this.marks.reduce((acc, item) => acc + item / this.marks.length, 0);
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}