const CohortManager = require('../src/cohortManager.js')
// const Cohort = require('../src/cohort.js')

describe('Cohort', () => {
  it('can create a cohort with a cohort name', () => {
    const cohortManager = new CohortManager()
    const expected = 'Cohort 6'
    const result = cohortManager.createCohort(expected)
    expect(result).toEqual(expected)
  })

  it('searches for cohort by cohort name', () => {
    const cohortManager = new CohortManager()
    // const expected = ''
  })

  it('can add a student to a specific cohort', () => {
    const student = {
      cohort: 'Cohort 6',
      StudentID: 61,
      fistName: 'Lorel',
      lastName: 'Aboua',
      githubUsername: 'rels742',
      email: 'lorel.oboue@gmail.com'
    }
  })

  const expected = {
    name: student.cohort,
    students: [student]
  }

  const thisCohort = cohortManager.createCohort(expected.name)
  thisCohort.addStudent(student)

  expect(thisCohort.name).toEqual(expected.name)

  expect(thisCohort.students[0].StudentID).toEqual(student.StudentID)

  expect(thisCohort.students[0].firstName).toEqual(student.firstName)

  expect(thisCohort.students[0].lastName).toEqual(student.lastName)

  expect(thisCohort.students[0].githubUsername).toEqual(student.githubUsername)

  expect(thisCohort.students[0].email).toEqual(student.email)

  // write the tests first before moving onto the next test,
  // search for cohort by cohort name

  // it('creates a student to add to the cohort list', () => {
  //   const cohortManager = new CohortManager()
  //   const expected = {
  //     cohort: 'Class 6',
  //     id: 61,
  //     fist: 'Lorel',
  //     last: 'Aboua',
  //     github: 'rels742',
  //     email: 'lorel.oboue@gmail.com'
  //   }
  //   cohort.create(expected.cohort)
  //   const result = cohort.addStudent(expected)
  //   expect(result).toEqual(expected)
  // })

  //remove
  // search for cohort
})
