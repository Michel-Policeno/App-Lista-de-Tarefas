const path = require("node:path");
const taskList = require("../models/taskList");

const taskListController = {
  homepage: (req, res) => {
    res.render(path.resolve(__dirname, "../views/homepage"));
  },

  listarTarefas: (req, res) => {
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },

  delete: (req, res) => {
    const idDelete = req.params.id;
    taskList.delete(idDelete);
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },
};

module.exports = taskListController;
