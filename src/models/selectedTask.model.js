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
    const indexUpdate = tasks.findIndex((task) => task.id === Number(idUpdate));

    //verifica se alguma tarefa foi encontrada
    if (indexUpdate === -1) {
      return console.log("id não encontrado");
    }
    //atualiza o nome da tarefa
    tasks[indexUpdate].name = newName;
  },

  delete(idDelete) {
    const indexTaskDelete = tasks.findIndex(
      (task) => task.id === Number(idDelete)
    );
    //verifica se alguma tarefa foi encontrada
    if (indexTaskDelete === -1) {
      return console.log("id não encontrado");
    }
    //remove tarefa
    return tasks.splice(indexTaskDelete, 1);
  },
};

module.exports = task;
