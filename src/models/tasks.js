const tasks = [
  {
    id: new Date.now(),
    name: "limparCasa",
    dateCreatead: new Date().toUTCString(),
    description: "varrer e passa pano na cozinha e também sala",
    check: false,
    idTaskList: "idTaksCasa",
    user: "123",
  },

  {
    id: new Date.now(),
    name: "fazer comprar",
    dateCreatead: new Date().toUTCString(),
    description: "fazer lista de compras",
    check: false,
    idTaskList: "idTaksCasa",
    user: "123",
  },
];

// id, nome, data_criacao, descrição ,tarefa-feita(boleano), id lista original da tarefe
const task = {
  show(idTask) {
    return task.find((element) => element.id === idTask);
  },

  showAll() {
    return task;
  },

  create(name, description) {
    const newTalks = {
      id: new Date.now(),
      name,
      dateCreatead: new Date().toUTCString(),
      description,
      check: false,
      idTaskList: "valor recebido",
      user: "userCadastrado",
    };
    return newTalks;
  },

  save(name, description) {
    const newTasks = this.create(name, description);
    return tasks.unshift(newTasks);
  },

  update(idUpdate, name, description) {
    const indexUpdate = tasks.findIndex((task) => task.id === idUpdate);

    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    //atualiza tarefa, removendo anterior e atribuindo uma nova no lugar
    const taskUpdate = this.create(name, description);
    return tasks.splice(indexUpdate, 1, taskUpdate);
  },

  delete(idDelete) {
    const indexTaskDelete = tasks.findIndex((task) => task.id === idDelete);
    //verifica se alguma tarefa foi encontrada
    if (indexTaskDelete === -1) {
      return console.log("id não encontrado");
    }
    //remove tarefa
    return task.splice(indexTaskDelete, 1);
  },
};
