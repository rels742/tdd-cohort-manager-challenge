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
    for (let i = 0; i < this.cohorts.length; i++) {
      if (this.cohorts[i] === name) {
        return this.cohorts[i]
      }
      return this.cohorts[i]
    }
  }
  // search for cohort code solution. I need to look for a cohort, loop through, this.cohorts .name (i think), if theres a match, return true, if not return false. - search for cohort by cohort name
}

module.exports = CohortManager
