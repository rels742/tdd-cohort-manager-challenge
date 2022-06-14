class Cohort {
  constructor() {
    // add constructors
    this.cohorts = []
    this.students = []
  }

  // array.length - 1 is always the last element in our araay

  create(name) {
    this.cohorts.push(name)
    const lastElement = this.cohorts.length - 1
    return this.cohorts[lastElement]
  }
}

module.exports = Cohort

//   const expected = {
//     cohort: 'Class 6',
//     id: 61,
//     fist: 'Lorel',
//     last: 'Aboua',
//     github: 'rels742',
//     email: 'lorel.oboue@gmail.com'
//   }
