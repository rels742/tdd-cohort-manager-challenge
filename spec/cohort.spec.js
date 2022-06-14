// const Cohort = require('../src/cohortManager.js')
const Cohort = require('../src/cohort.js')

describe('Cohort', () => {
  it('can create a cohort with a cohort name', () => {
    const cohort = new Cohort()
    const expected = 'Cohort 6'
    const result = cohort.create(expected)
    expect(result).toEqual(expected)
  })

  it('searches for cohort by cohort name', () => {
    const cohort = new Cohort()
    // const expected = ''
  })

  it('creates a student to add to the cohort list', () => {
    const cohort = new Cohort()
    const expected = {
      cohort: 'Class 6',
      id: 61,
      fist: 'Lorel',
      last: 'Aboua',
      github: 'rels742',
      email: 'lorel.oboue@gmail.com'
    }
    cohort.create(expected.cohort)
    const result = cohort.addStudent(expected)
    expect(result).toEqual(expected)
  })

  //remove
  // search for cohort
})
