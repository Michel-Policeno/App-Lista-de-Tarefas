const findElementByID = require("../services/findElementByDB");

const tasks = [
  {
    id: 321,
    name: "Exemplo de tarefa",
    dateCreatead: new Date().toUTCString(),
    check: false,
    idTaskList: 123,
  },
];

// id, nome, data_criacao, tarefa-feita(boleano), idLista(fk)
const task = {
  showAll(idTask) {
    return tasks;
  },

  showTask(idTask) {
    return tasks.find((element) => element.id === idTask);
  },

  showAllTaskListSelect(idList) {
    return tasks.filter((element) => element.idTaskList === Number(idList));
  },

  create(name, idList) {
    const newTask = {
      id: Date.now(),
      name,
      dateCreatead: new Date().toUTCString(),
      check: false,
      idTaskList: Number(idList),
    };
    return tasks.unshift(newTask);
  },

  update(idUpdate, newName) {
    const indexUpdate = findElementByID(idUpdate, tasks);
    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    //atualiza o nome da tarefa
    tasks[indexUpdate].name = newName;
  },

  delete(idDelete) {
    const indexDelete = findElementByID(idDelete, tasks);
    if (indexDelete === -1) {
      return console.log("id não encontrado");
    }
    //remove tarefa
    return tasks.splice(indexDelete, 1);
  },

  toggleCheckTask(idTaskCheck, statusTaskCheck) {
    const indexTaskCheck = findElementByID(idTaskCheck, tasks);
    if (indexTaskCheck === -1) {
      return console.log("id não encontrado");
    }
    tasks[indexTaskCheck].check = statusTaskCheck;
  },
};

module.exports = task;
