const task = require("../models/selectedTask.model");
const sendDataViews = require("../services/sendDataViews.js");

const tasksController = {
  showTask: (idList) => {
    task.showAllTaskListSelect(idList);
  },

  createTask: (req, res) => {
    const { name } = req.body;
    const { idList } = req.params;
    task.create(name, idList);
    sendDataViews.viewsSelectedTask(idList, res);
  },

  update: (req, res) => {
    const { idList, idTask } = req.params;
    const { newName } = req.body;
    task.update(idTask, newName);
    sendDataViews.viewsSelectedTask(idList, res);
  },

  delete: (req, res) => {
    const { idList, idTask } = req.params;
    task.delete(idTask);
    sendDataViews.viewsSelectedTask(idList, res);
  },
};

module.exports = tasksController;
