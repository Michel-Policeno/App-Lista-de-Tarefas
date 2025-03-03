const allTaskList = [
  {
    id: Date.now(),
    name: "casa",
    description: "limpeza casa",
    dateCreated: new Date().toUTCString(),
    user: "123",
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
      {
        id: Date.now(),
        name: "lavar banheiro",
        dateCreatead: new Date().toUTCString(),
        description: "lavar box e pia",
        check: false,
        idTaskList: "idTaksCasa",
        user: "123",
      },
      {
        id: Date.now(),
        name: "descongela geladeira",
        dateCreatead: new Date().toUTCString(),
        description: "desligar a noite",
        check: false,
        idTaskList: "idTaksCasa",
        user: "123",
      },
    ],
  },
  {
    id: Date.now(),
    name: "trabalho",
    description: "agenda trabalho",
    dateCreated: new Date().toUTCString(),
    user: "0007",
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
  {
    id: Date.now(),
    name: "igreja",
    description: "sem descrição",
    dateCreated: new Date().toUTCString(),
    user: "0007",
    task: [],
  },
];

// id, name, description, dateCreated, user
const taskList = {
  showAll() {
    return allTaskList;
  },

  create(name, description) {
    const newTalk = {
      id: Date.now(),
      name,
      description,
      dateCreated: new Date().toUTCString(),
      user: "id do usuario",
    };
    return newTalk;
  },

  save(nameTaskList, descriptionTaskList) {
    const newTalks = this.create(nameTaskList, descriptionTaskList);
    return allTaskList.unshift(newTalks);
  },

  update(idList, newNameTaskList, newDescriptionTaskList) {
    const indexUpdate = allTaskList.findIndex(
      (taskList) => taskList.id === idList
    );
    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    const taskUpdate = this.create(newNameTaskList, newDescriptionTaskList);
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
