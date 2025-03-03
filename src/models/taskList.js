const allTaskList = [
  {
    id: Date.now(),
    name: "casa",
    dateCreated: new Date().toUTCString(),
    task: [
      {
        id: Date.now(),
        name: "varrer casa",
        dateCreatead: new Date().toUTCString(),
        description: "varrer e passa pano na cozinha e também sala",
        check: false,
        idTaskList: "idTaksCasa",
        user: "123",
      },
    ],
  },
  {
    id: Date.now(),
    name: "trabalho",
    dateCreated: new Date().toUTCString(),
    task: [
      {
        id: Date.now(),
        name: "limparCasa",
        dateCreatead: new Date().toUTCString(),
        description: "varrer e passa pano na cozinha e também sala",
        check: false,
        idTaskList: "idTaksCasa",
        user: "123",
      },
    ],
  },
];

// id, name, dateCreated, task[]
const taskList = {
  showAll() {
    return allTaskList;
  },

  create(name) {
    const newTalk = {
      id: Date.now(),
      name,
      dateCreated: new Date().toUTCString(),
      task: [],
    };
    return newTalk;
  },

  save(nameTaskList) {
    const newTalks = this.create(nameTaskList);
    return allTaskList.unshift(newTalks);
  },

  update(idList, newNameTaskList) {
    const indexUpdate = allTaskList.findIndex(
      (taskList) => taskList.id == idList
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
