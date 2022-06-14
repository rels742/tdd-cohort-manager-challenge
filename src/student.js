const Cohort = require('./cohort')

class Student {
  constructor(cohort, studentID, firstName, lastName, githubUsername, email) {
    this.cohort = cohort
    this.studentID = studentID
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
  }
}

module.exports = Student
