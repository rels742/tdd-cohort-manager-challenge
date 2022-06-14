Cohort Manager 
communicates with the cohort class to store all cohort classes in an array. adds a new cohort, deletes one, can search for one. 

Cohort
communicates with cohort manager and students class. an array of objects that holds information on all students in a specified cohort. Adds students into that cohort from students class, removes student, searches for student.

Student 
communicates with cohorts. an array of objects of students. this data is used to create a new student, with their information such as id, first and last name, github username and so forth. this data is communicated to cohort class to be added into a specific cohort.