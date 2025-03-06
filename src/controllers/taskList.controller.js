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

  //alterar essa parte, não teremos essa pagina de nova tarefa
  newTask: (req, res) => {
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/newTask"), { allTask });
  },

  delete: (req, res) => {
    const idDelete = req.params.id;
    taskList.delete(idDelete);
    //devolver todas as listas
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    taskList.update(id, name);
    //devolver todas as listas
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },

  newTaskList: (req, res) => {
    const { name } = req.body;
    const newTaskList = taskList.create(name);
    if (!newTaskList) {
      console.log("Erro ao Criar nova lista de tarefas");
    }

    //devolver todas as listas
    const allTask = taskList.showAll();
    res.render(path.resolve(__dirname, "../views/taskList"), { allTask });
  },
};

module.exports = taskListController;
