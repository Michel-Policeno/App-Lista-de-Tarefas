const path = require("node:path");
const taskList = require("../models/taskList.model");
const task = require("../models/selectedTask.model");

const sendDadaViews = {
  viewsSelectedTask: (idTaskList, response) => {
    const taskSelect = taskList.show(idTaskList);
    const tasks = task.showAllTaskListSelect(idTaskList);
    response.render(path.resolve(__dirname, "../views/selectedTask"), {
      taskSelect,
      tasks,
    });
  },
  viewsTaskList: (response) => {
    const allTask = taskList.showAll();
    const tasks = task.showAll();
    response.render(path.resolve(__dirname, "../views/taskList"), {
      allTask,
      tasks,
    });
  },
};

module.exports = sendDadaViews;
