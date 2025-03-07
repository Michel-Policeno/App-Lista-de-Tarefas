const path = require("node:path");
const taskList = require("../models/taskList.model");
const sendDadaViews = require("../services/sendDadaViews.js");

const taskListController = {
  homepage: (req, res) => {
    res.render(path.resolve(__dirname, "../views/homepage"));
  },

  listTasks: (req, res) => {
    sendDadaViews.viewsTaskList(res);
  },

  delete: (req, res) => {
    const idDelete = req.params.id;
    taskList.delete(idDelete);
    sendDadaViews.viewsTaskList(res);
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    taskList.update(id, name);
    sendDadaViews.viewsTaskList(res);
  },

  newTaskList: (req, res) => {
    const { name } = req.body;
    const newTaskList = taskList.create(name);
    if (!newTaskList) {
      console.log("Erro ao Criar nova lista de tarefas");
    }

    sendDadaViews.viewsTaskList(res);
  },

  taskListSelect: (req, res) => {
    const { id } = req.params;
    sendDadaViews.viewsSelectedTask(id, res);
  },
};

module.exports = taskListController;
