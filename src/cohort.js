const Student = require('./student')

class Cohort {
  constructor(name) {
    // add constructors
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

// array.length - 1 is always the last element in our araay

// create(name) {
//   this.cohorts.push(name)
//   const lastElement = this.cohorts.length - 1
//   return this.cohorts[lastElement]
// }

//   const expected = {
//     cohort: 'Class 6',
//     id: 61,
//     fist: 'Lorel',
//     last: 'Aboua',
//     github: 'rels742',
//     email: 'lorel.oboue@gmail.com'
//   }

// console.log('trying to add students', this.students)
// if (this.cohorts.includes(studentDetails.cohort)) {
//   this.students.push(studentDetails)
//   // console.log('added student', studentDetails)
// }
// const lastElement = this.students.length - 1

// }
