class Students {
  constructor() {
    this.students = []
  }

  createStudent() {
    // a method that will create the student with their details
  }

  addStudent(studentDetails) {
    // console.log('trying to add students', this.students)
    if (this.cohorts.includes(studentDetails.cohort)) {
      this.students.push(studentDetails)
      // console.log('added student', studentDetails)
    }
    const lastElement = this.students.length - 1

    return this.students[lastElement]

    // Update this so it adds into a spefic cohort
    // update this so it also removes a student from a specific cohort
  }
}

module.exports = Students
