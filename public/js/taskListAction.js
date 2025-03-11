const btnAction = document.querySelectorAll(".btn-action");
const btnNewTaskList = document.getElementById("btn-new-Task-List");
const inputNameTaskList = document.getElementById("input-name-task");
const domModalDelete = document.getElementById("confirmDeleteModal");
const btnConfirmDelete = document.getElementById("confirmDeleteBtn");
let modalDelete = new bootstrap.Modal(domModalDelete);
let currentDeleteID = null; // Armazena o ID da cotação a ser deletada
import utils from "./utils.js";

async function deleteListTask() {
  if (!currentDeleteID) return;

  await fetch(`/litagemtarefas/${currentDeleteID}`, { method: "DELETE" })
    .then(() => {
      location.reload(); // Atualiza a página após a remoção
    })
    .catch((err) => console.error("Erro ao deletar:", err));

  modalDelete.hide();
}
// Garante que sempre temos apenas um único evento no botão
btnConfirmDelete.removeEventListener("click", deleteListTask);
btnConfirmDelete.addEventListener("click", deleteListTask);

//AddEventListener as buttons que execução as ações
utils.btnActionViews(btnAction, runActionBtn);
async function runActionBtn(actionBtn, iDBtn) {
  switch (actionBtn) {
    case "abrir":
      window.location.href = `/litagemtarefas/lista/${iDBtn}`;
      break;

    case "delete":
      currentDeleteID = iDBtn; // Armazena o ID da cotação que será deletada
      modalDelete.show();
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
