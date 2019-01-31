const Task = require('../classes/Task');
/*
  *This function takes sheet of tasks and returns collection of tasks
*/
function getTasks(sheetOfTasks) {
  const tasksObjects = {
    listOfTasks: [],
  };

  sheetOfTasks.forEach((element) => {
    let titleOfTask = element.task;

    // Correct titles of tasks
    switch (titleOfTask) {
      case 'CodeJam "Scoreboard"':
        titleOfTask = 'Code Jam "Scoreboard"';
        break;
      case 'RS Activist - ':
        titleOfTask = 'RS Activist';
        break;
      default: titleOfTask = titleOfTask.trim();
        break;
    }

    const taskLink = element.link;
    const taskStatus = element.Status;

    tasksObjects.listOfTasks.push(titleOfTask); // add tasks to array

    if (titleOfTask === 'Code Jam "Scoreboard"') {
      tasksObjects.listOfTasks.push('Presentation');
    }

    tasksObjects[titleOfTask] = new Task(titleOfTask, null, taskLink, taskStatus, null);
  });
  // Addd additional task to collection
  const linkToAdditionalTask = 'https://github.com/rolling-scopes-school/tasks/blob/2018-Q3/tasks/presentation.md';
  const additionalTask = new Task('Presentation', null, linkToAdditionalTask, 'Checked', null);
  tasksObjects.Presentation = additionalTask;

  return tasksObjects;
}

module.exports = getTasks;
