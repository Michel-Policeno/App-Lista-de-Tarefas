const path = require("node:path");
const taskList = require("../models/taskList");
const task = require("../models/tasks");

const tasksController = {
  showTask: (idList) => {
    task.showAllTaskListSelect(idList);
  },

  createTask: (req, res) => {
    const { name } = req.body;
    const { idList } = req.params;
    task.create(name, idList);

    //exibir tudo
    const taskSelect = taskList.show(idList);
    const tasks = task.showAllTaskListSelect(idList);
    res.render(path.resolve(__dirname, "../views/taskListSelect"), {
      taskSelect,
      tasks,
    });
  },

  update: (req, res) => {
    const { idList, idTask } = req.params;
    const { newName } = req.body;
    task.update(idTask, newName);

    //exibir tudo
    const taskSelect = taskList.show(idList);
    const tasks = task.showAllTaskListSelect(idList);
    res.render(path.resolve(__dirname, "../views/taskListSelect"), {
      taskSelect,
      tasks,
    });
  },

  delete: (req, res) => {
    const { idList, idTask } = req.params;
    task.delete(idTask);

    //exibir tudo
    const taskSelect = taskList.show(idList);
    const tasks = task.showAllTaskListSelect(idList);
    res.render(path.resolve(__dirname, "../views/taskListSelect"), {
      taskSelect,
      tasks,
    });
  },
};

module.exports = tasksController;
