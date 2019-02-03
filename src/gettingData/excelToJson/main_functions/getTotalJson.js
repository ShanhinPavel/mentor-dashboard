const cloneObject = require('../utils/cloneObject');
/*
  *This function creates json which contains tasks and mentors with students
  *This function takes three parametres.
  *We get mentors collection and add students to every mentor
  *then we add collection mentors and tasks to resulted json
*/
function getTotalJson(mentorCollection, studentCollection, taskCollection) {
  // Create collection where we will keep data parsed from excel files
  const totalJson = {};
  const mentorStudent = cloneObject(mentorCollection); // clone mentor collection

  // Iterate through array of students, take mentor from collection by key from student object
  const studentsArray = Object.keys(studentCollection);

  studentsArray.forEach((student) => {
    // Get mentor github
    const { mentorGithub } = studentCollection[student];
    // Get mentor object
    const mentor = mentorStudent[mentorGithub];
    const array = mentor.listOfStudents;
    array.push(student); // push student into array of students each mentor
    const studentsObject = mentor.students;
    studentsObject[student] = studentCollection[student];
  });

  const arrayOfMentors = Object.keys(mentorStudent);

  totalJson.tasks = taskCollection;
  totalJson.allMentorsNames = arrayOfMentors;
  totalJson.mentor = mentorStudent;

  return JSON.stringify(totalJson);
}

module.exports = getTotalJson;
