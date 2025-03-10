const findElementByID = require("../services/findElementByDB");

const allTaskList = [
  {
    id: 123,
    name: "Exemplo",
    dateCreated: new Date().toUTCString(),
  },
];

// id, name, dateCreated
const taskList = {
  show(idList) {
    const indexTask = findElementByID(idList, allTaskList);
    if (indexTask === -1) {
      return console.log("id não encontrado");
    }
    return allTaskList[indexTask];
  },

  showAll() {
    return allTaskList;
  },

  create(name) {
    const newTask = {
      id: Date.now(),
      name,
      dateCreated: new Date().toUTCString(),
    };
    return allTaskList.unshift(newTask);
  },

  save(nameTaskList) {
    const newTalks = this.create(nameTaskList);
    return allTaskList.unshift(newTalks);
  },

  update(idList, newNameTaskList) {
    const indexUpdate = findElementByID(idList, allTaskList);
    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    //editar nome da listagem
    allTaskList[indexUpdate].name = newNameTaskList;
  },

  delete(idList) {
    const indexDelete = findElementByID(idList, allTaskList);
    if (indexDelete === -1) {
      return console.log("id não encontrado");
    }
    //remover item da listagem
    return allTaskList.splice(indexDelete, 1);
  },
};

module.exports = taskList;
