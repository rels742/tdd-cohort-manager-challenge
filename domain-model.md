<!-- The Cohort Manager should be able to support the following interactions

- Create a cohort with a cohort name
- Search for a cohort by cohort name
- Add student to a specific cohort
- Remove a cohort by cohort name
- Remove student from a specific cohort
- Return errors if student or cohort not found

A cohort should have a list of students. Each student should have a studentID, first name, last name, github username, email. -->

User story 1 
As a user, I should be able to search for a student by student ID.

Domain Model 1
//Two Tests:
// 1. Able to add the students from the cohort into a list. with a cohort name (class 6). so test with just one user first. 

//2. second test that expects the whole list of users with their objects in the array. 

//3. third test, that allows you to search for a cohort class by name and return the whole list. so maybe one of the keys for each student should be, corhot name = class 6 and if that does not match (===) return, cohort name cannot be found.

1. addStudent()
   <!-- let/const classList = [] -->
   [{}] chort:, id:, first name:, last name:, github:, email:

2. classSearc()



User story 
as a user i would like to be able to search for a cohort by cohort name.
- Search for a cohort by cohort name

for code solution I would be using find.
ideas are, if cohortname which i will use a parameter is in the includes of this.cohort then return true and return the last element 





 
