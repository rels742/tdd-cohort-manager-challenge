Cohort Manager 
communicates with the cohort class to store all cohort classes in an array. adds a new cohort, deletes one, can search for one. 

Cohort
communicates with cohort manager and students class. an array of objects that holds information on all students in a specified cohort. Adds students into that cohort from students class, removes student, searches for student.

Student 
communicates with cohorts. an array of objects of students. this data is used to create a new student, with their information such as id, first and last name, github username and so forth. this data is communicated to cohort class to be added into a specific cohort.


//Notes used in different js folders throughout various points in the project.

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

// getCohort(name) {
// input: a string with the name of the cohort I want to find
// output: a Cohort class object, if cohort is found, else an error string/message
// steps:
// loop through all the cohorts in the cohorts array
// for each cohort, compare the cohort.name with name
// if names match, return the found cohort
// if we reach the end of the cohorts for loop without finding a cohort, then return the error
// }


// createStudent() {
//   // a method that will create the student with their details
// }

// addStudent(studentDetails) {
//   // console.log('trying to add students', this.students)
//   if (this.cohorts.includes(studentDetails.cohort)) {
//     this.students.push(studentDetails)
//     // console.log('added student', studentDetails)
//   }
//   const lastElement = this.students.length - 1

//   return this.students[lastElement]

//   // Update this so it adds into a spefic cohort
//   // update this so it also removes a student from a specific cohort
// }

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
