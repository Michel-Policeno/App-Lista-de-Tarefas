const task = require("../models/selectedTask.model");
const sendDadaViews = require("../services/sendDadaViews.js");

const tasksController = {
  showTask: (idList) => {
    task.showAllTaskListSelect(idList);
  },

  createTask: (req, res) => {
    const { name } = req.body;
    const { idList } = req.params;
    task.create(name, idList);
    sendDadaViews.viewsSelectedTask(idList, res);
  },

  update: (req, res) => {
    const { idList, idTask } = req.params;
    const { newName } = req.body;
    task.update(idTask, newName);
    sendDadaViews.viewsSelectedTask(idList, res);
  },

  delete: (req, res) => {
    const { idList, idTask } = req.params;
    task.delete(idTask);
    sendDadaViews.viewsSelectedTask(idList, res);
  },
};

module.exports = tasksController;
