const path = require("node:path");
const taskList = require("../models/taskList.model");
const sendDataViews = require("../services/sendDataViews.js");

const taskListController = {
  homepage: (req, res) => {
    res.render(path.resolve(__dirname, "../views/homepage"));
  },

  listTasks: (req, res) => {
    sendDataViews.viewsTaskList(res);
  },

  delete: (req, res) => {
    const idDelete = req.params.id;
    taskList.delete(idDelete);
    sendDataViews.viewsTaskList(res);
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    taskList.update(id, name);
    sendDataViews.viewsTaskList(res);
  },

  newTaskList: (req, res) => {
    const { name } = req.body;
    const newTaskList = taskList.create(name);
    if (!newTaskList) {
      console.log("Erro ao Criar nova lista de tarefas");
    }

    sendDataViews.viewsTaskList(res);
  },

  taskListSelect: (req, res) => {
    const { id } = req.params;
    sendDataViews.viewsSelectedTask(id, res);
  },
};

module.exports = taskListController;
