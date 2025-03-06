const btnAction = document.querySelectorAll(".btn-action");
const btnNewTaskList = document.getElementById("btn-new-Task-List");
const inputNameTaskList = document.getElementById("input-name-task");

//adicionar eventListener para todos os botões de ação
btnAction.forEach((btnClick) => {
  btnClick.addEventListener("click", (ev) => {
    const [action, idBtn] = ev.target.id.split("-");
    runActionBtn(action, idBtn);
  });
});

async function runActionBtn(actionBtn, iDBtn) {
  //executa as respectivas ações dos btn
  switch (actionBtn) {
    case "abrir":
      window.location.href = `/litagemtarefas/lista/${iDBtn}`;
      break;

    case "delete":
      if (confirm("Confirma exclusão dessa listagem de tarefas?")) {
        await fetch(`/litagemtarefas/${iDBtn}`, { method: "DELETE" })
          .then(() => {
            location.reload(); // Atualiza a página após a remoção
          })
          .catch((err) => console.error("Erro ao deletar:", err));
      }
      break;

    case "editar":
      const newName = prompt("Digite o novo nome da Lista");
      if (!newName) {
        alert("O nome da lista não pode estar vazio!");
        return;
      }

      await fetch(`/litagemtarefas/${iDBtn}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      })
        .then(() => {
          location.reload(); // Recarregar a página para atualizar a lista
        })
        .catch((err) => console.error("erro ao editar", err));

      break;
    default:
      alert("opção invalida");

      break;
  }
}

//adicionar eventListener para btn Criar Nova Lista
btnNewTaskList.addEventListener("click", async () => {
  let nameNewTaskList = inputNameTaskList.value;
  if (!nameNewTaskList.trim()) {
    nameNewTaskList = "listagem de tarefa sem nome";
  }
  await fetch("/litagemtarefas/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameNewTaskList }),
  })
    .then(() => {
      location.reload(); // Recarregar a página para adicionar nova tarefa
    })
    .catch((err) => console.error("erro criar nova lista", err));
});
