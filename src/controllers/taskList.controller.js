const path = require("node:path");
const taskList = require("../models/taskList");

const taskListController = {
  homepage: (req, res) => {
    res.render(path.resolve(__dirname, "../views/homepage"));
  },

  listTasks: (req, res) => {
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },

  newTask: (req, res) => {
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/newTask"), { allTask });
  },

  delete: (req, res) => {
    const idDelete = req.params.id;
    taskList.delete(idDelete);
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },

  update: (req, res) => {
    const idUpdate = req.params.id;
    const newNome = req.body;
    console.log(newNome);
    console.log(idUpdate);
    taskList.update(idUpdate, newNome);
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },
};

module.exports = taskListController;
