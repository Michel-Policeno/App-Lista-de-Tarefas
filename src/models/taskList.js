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
    const indexTask = allTaskList.findIndex(
      (task) => task.id === Number(idList)
    );
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
    //localizar listagem pelo ID
    const indexUpdate = allTaskList.findIndex(
      (taskList) => taskList.id == idList
    );
    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    //editar nome da listagem
    allTaskList[indexUpdate].name = newNameTaskList;
  },

  delete(idList) {
    //localizar listagem pelo ID
    const indexDelete = allTaskList.findIndex(
      (taskList) => taskList.id == idList
    );
    if (indexDelete === -1) {
      return console.log("id não encontrado");
    }
    //remover item da listagem
    return allTaskList.splice(indexDelete, 1);
  },
};

module.exports = taskList;
