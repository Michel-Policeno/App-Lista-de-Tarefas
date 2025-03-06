const path = require("node:path");
const tasks = require("../models/tasks");

const tasksController = {
  showTask: (idList) => {
    tasks.showAllTaskListSelect(idList);
  },
};

module.exports = tasksController;
