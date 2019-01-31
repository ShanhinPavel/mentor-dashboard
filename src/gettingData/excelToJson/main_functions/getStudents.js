const getGithubLogin = require('../utils/getGithubLogin');
const Student = require('../classes/Student');
const getTasks = require('./getTasks');
/*
*This function get three collection of tasks and return collection of students.
*/
function getStudents(mentorScore, sheetWithTasks) {
  // set object like collection
  const students = {};

  // in this cylce we create students and add task to them
  mentorScore.forEach((solvedTask) => {
    const mentorGithubLink = solvedTask['Ссылка на GitHub ментора в формате: https://github.com/nickname'];
    const studentGithubLink = solvedTask['Ссылка на GitHub студента в формате: https://github.com/nickname'];

    // Take githubs of students and mentors and give them to values
    let mentorGithub = getGithubLogin(mentorGithubLink).toLowerCase();
    let studentGithub = getGithubLogin(studentGithubLink).toLowerCase();

    /* *Fixes mistake in excel file
       *A mentor and student are confused
    */
    if ((mentorGithub === 'artsiom-zhuk' && studentGithub === 'mkinitcpio')
        || (mentorGithub === 'nemkev' && studentGithub === 'shank111')
        || (mentorGithub === 'aliakseibabko-2018q3' && studentGithub === 'shutya')) {
      [mentorGithub, studentGithub] = [studentGithub, mentorGithub];
    }

    /*
      *Example has already had the student in collection
      *If no create new student.
    */
    if (!students[studentGithub]) {
      const tasks = getTasks(sheetWithTasks); // clone taskCollection
      delete tasks.listOfTasks;
      const student = new Student(studentGithub, mentorGithub, tasks); // create new student
      students[studentGithub] = student; // add student to students object
    }

    // Take student from student collection and set task properties
    const taskTitle = solvedTask['Таск'];
    const taskObject = students[studentGithub].tasks[taskTitle];
    const pullReqLink = solvedTask['Ссылка на Pull Request'];
    const mark = solvedTask['Оценка'];
    // Fill in properties
    taskObject.mark = mark;
    taskObject.pullRequest = pullReqLink;
  });

  return students;
}

module.exports = getStudents;
