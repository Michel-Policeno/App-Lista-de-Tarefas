const allTaskList = [
  {
    id: Date.now(),
    name: "casa",
    dateCreated: new Date().toUTCString(),
    user: "123",
  },
  {
    id: Date.now(),
    name: "trabalho",
    dateCreated: new Date().toUTCString(),
    user: "0007",
  },
  {
    id: Date.now(),
    name: "igreja",
    dateCreated: new Date().toUTCString(),
    user: "0007",
  },
];

// id, nome, data-criacao, usuario
const taskList = {
  showAll() {
    return allTaskList;
  },

  create(name) {
    const newTalk = {
      id: Date.now(),
      name,
      dateCreated: new Date().toUTCString(),
      user: "id do usuario",
    };
    return newTalk;
  },

  save(nameTaskList) {
    const newTalks = this.create(nameTaskList);
    return allTaskList.unshift(newTalks);
  },

  update(idList, newNameTaskList) {
    const indexUpdate = allTaskList.findIndex(
      (taskList) => taskList.id === idList
    );
    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    const taskUpdate = this.create(newNameTaskList);
    return allTaskList.splice(indexUpdate, 1, taskUpdate);
  },

  delete(idList) {
    const indexDelete = allTaskList.findIndex(
      (taskList) => taskList.id == idList
    );
    if (indexDelete === -1) {
      return console.log("id não encontrado");
    }
    return allTaskList.splice(indexDelete, 1);
  },
};

module.exports = taskList;
