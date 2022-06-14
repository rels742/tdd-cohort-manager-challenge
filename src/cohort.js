const Student = require('./student')

class Cohort {
  constructor(name) {
    this.students = []
    this.name = name
  }

  addStudent(studentID, firstName, lastName, githubUsername, email) {
    const newStudent = new Student(
      studentID,
      firstName,
      lastName,
      githubUsername,
      email
    )
    this.students.push(newStudent)
    const lastElement = this.students.length - 1
    return this.students[lastElement]
  }
}

module.exports = Cohort
