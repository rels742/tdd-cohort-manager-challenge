const Cohort = require('./cohort')

class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = new Cohort(name)
    this.cohorts.push(newCohort)
    const lastElement = this.cohorts.length - 1
    return this.cohorts[lastElement]
  }

  getCohort(name) {
    if (this.cohorts.includes(name.cohort)) {
      return this.cohort
    }
  }

  // search for cohort code solution. I need to look for a cohort, loop through, this.cohorts .name (i think), if theres a match, return true, if not return false. - search for cohort by cohort name
}

module.exports = CohortManager

// Establishing the consrtuctor, this is the array of the different cohorts, in this array would hold the data and objects for the different cohorts and student details in each cohort.

// array.length - 1 is always the last element in our araay

// addStudent(studentID, firstName, lastName, githubUsername, email) {
//   const newStudent = new Student(studentID, firstName, lastName, githubUsername, email)
//   this.students.push(newStudent)
//   const lastElement = this.students.length - 1
//   return this.students[lastElement]

// Trying to create a cohort and add it to the array of this.cohorts. Each time a cohort is added, the output will look like ['class 1', 'class 2', 'class 3'].

// Return will always return the last added cohort.

// Trying to create code that, allows you to Search for a cohort.
//If name is matched from a corhort class data then it will return that whole cohort data.
//If the cohort cannot be found when searched for then it returns an error message
