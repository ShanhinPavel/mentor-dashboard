const fs = require('fs');
const getWorkbook = require('./src/gettingData/excelToJson/main_functions/getWorkbook');
const getMentors = require('./src/gettingData/excelToJson/main_functions/getMentors');
const getTasks = require('./src/gettingData/excelToJson/main_functions/getTasks');
const getTotalJson = require('./src/gettingData/excelToJson/main_functions/getTotalJson');
const getStudents = require('./src/gettingData/excelToJson/main_functions/getStudents');

// Get excel files, transform to jsonObjects
const mentorsSheet = getWorkbook('Mentor-students pairs.xlsx', 1);
const tasksSheet = getWorkbook('Tasks.xlsx', 0);
const madeTasks = getWorkbook('Mentor score.xlsx', 0);

// Get collections
const mentorStudentCollection = getMentors(mentorsSheet);
const students = getStudents(madeTasks, tasksSheet);
const tasks = getTasks(tasksSheet);
const totalJson = getTotalJson(mentorStudentCollection, students, tasks);

fs.writeFileSync('mentor-student.json', totalJson);
