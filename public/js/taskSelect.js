const btnAction = document.querySelectorAll(".btn-actions");
const btnCreateTask = document.getElementById("btn-create-task");
const inputNameTask = document.getElementById("input-name-task");

btnAction.forEach((btnClick) => {
  btnClick.addEventListener("click", (ev) => {
    const [action, idBtn] = ev.target.id.split("-");
    runActionBtnTask(action, idBtn);
  });
});

async function runActionBtnTask(actionBtn, idTask) {
  switch (actionBtn) {
    case "editar":
      const newNameTask = prompt("Digite o novo nome da tarefa");
      if (!newNameTask.trim()) {
        alert("nome da tarefa inválido!");
        return;
      }
      await fetch(location.href + `/${idTask}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName: newNameTask }),
      })
        .then(() => {
          location.reload(); // Recarregar a página para atualizar a lista
        })
        .catch((err) => console.error("erro ao editar tarefa", err));

      break;
    case "deletar":
      await fetch(location.href + `/${idTask}`, {
        method: "DELETE",
      })
        .then(() => {
          location.reload(); // Recarregar a página para atualizar a lista
        })
        .catch((err) => console.error("erro ao excluir tarefa", err));
      break;

    default:
      console.log("opção inválida");
      break;
  }
}

//criar novas tarefas
btnCreateTask.addEventListener("click", async (ev) => {
  const nameTask = inputNameTask.value;
  if (!nameTask.trim()) {
    return alert("nome da tarefa é obrigatório");
  }
  await fetch(location.href, {
    //utilizando a url current para obter o id da lista que estamos acessando
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameTask }),
  })
    .then(() => {
      location.reload();
    })
    .catch((err) => console.error("erro criar nova tarefa", err));
});
