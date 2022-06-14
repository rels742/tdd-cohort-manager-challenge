const CohortManager = require('./cohort') // This links the data from cohort.js to this as the CohortManger class is the controller and needs to comminicate directly with the data from cohort.js.

class CohortManager {
  constructor() {
    this.cohorts = [] // Establishing the consrtuctor, this is the array of the different cohorts, in this array would hold the data and objects for the different cohorts and student details in each cohort.
  }

  // array.length - 1 is always the last element in our araay

  create(name) {
    this.cohorts.push(name)
    const lastElement = this.cohorts.length - 1
    return this.cohorts[lastElement]
  } // Trying to create a cohort and add it to the array of this.cohorts. Each time a cohort is added, the output will look like ['class 1', 'class 2', 'class 3'].

  // Return will always return the last added cohort.

  getCohort(name) {
    if (this.cohorts.includes(name.cohort)) {
      return this.cohort
    }
    // Trying to create code that, allows you to Search for a cohort.
    //If name is matched from a corhort class data then it will return that whole cohort data.
    //If the cohort cannot be found when searched for then it returns an error message
  }
}

module.exports = CohortManager
