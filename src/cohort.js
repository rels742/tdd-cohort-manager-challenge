class Cohort {
  constructor() {
    /// add constructors
    this.cohorts = []
    this.students = []
  }

  // array.length - 1 is always the last element in our araay

  create(name) {
    this.cohorts.push(name)
    const lastElement = this.cohorts.length - 1
    return this.cohorts[lastElement]
  }

  //   const expected = {
  //     cohort: 'Class 6',
  //     id: 61,
  //     fist: 'Lorel',
  //     last: 'Aboua',
  //     github: 'rels742',
  //     email: 'lorel.oboue@gmail.com'
  //   }

  addStudent(studentDetails) {
    console.log('trying to add students', this.students)
    if (this.cohorts.includes(studentDetails.cohort)) {
      this.students.push(studentDetails)
      console.log('added student', studentDetails)
    }

    const lastElement = this.students.length - 1
    return this.students[lastElement]
  }
}

module.exports = Cohort
