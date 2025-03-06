const path = require("node:path");
const taskList = require("../models/taskList");
const task = require("../models/tasks");

const taskListController = {
  homepage: (req, res) => {
    res.render(path.resolve(__dirname, "../views/homepage"));
  },

  listTasks: (req, res) => {
    const allTask = taskList.showAll();
    const tasks = task.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), {
      allTask,
      tasks,
    });
  },

  delete: (req, res) => {
    const idDelete = req.params.id;
    taskList.delete(idDelete);
    //devolver todas as listas
    const allTask = taskList.showAll();
    const tasks = task.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), {
      allTask,
      tasks,
    });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    taskList.update(id, name);
    //devolver todas as listas
    const allTask = taskList.showAll();
    const tasks = task.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), {
      allTask,
      tasks,
    });
  },

  newTaskList: (req, res) => {
    const { name } = req.body;
    const newTaskList = taskList.create(name);
    if (!newTaskList) {
      console.log("Erro ao Criar nova lista de tarefas");
    }

    //devolver todas as listas
    const allTask = taskList.showAll();
    const tasks = task.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), {
      allTask,
      tasks,
    });
  },

  taskListSelect: (req, res) => {
    const { id } = req.params;
    const taskSelect = taskList.show(id);
    const tasks = task.showAllTaskListSelect(id);
    res.render(path.resolve(__dirname, "../views/taskListSelect"), {
      taskSelect,
      tasks,
    });
  },
};

module.exports = taskListController;
