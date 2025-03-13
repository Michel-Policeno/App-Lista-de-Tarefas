const btnAction = document.querySelectorAll(".btn-action");
const btnNewTaskList = document.getElementById("btn-new-Task-List");
const inputNameTaskList = document.getElementById("input-name-task");
import utils from "./utils.js";
import { showModalAlertNameNull } from "./modals/modalAlert.js";
import {
  AddEventListenerModalBotaoDelete,
  modalDeleteShow,
} from "./modals/modalDelete.js";
import {
  AddEventListenerModalBotaoEdit,
  modalEditShow,
} from "./modals/modalEdit.js";

//AddEventListener as buttons que execução as ações
utils.btnActionViews(btnAction, runActionBtn);
async function runActionBtn(actionBtn, iDBtn) {
  switch (actionBtn) {
    case "abrir":
      window.location.href = `/litagemtarefas/lista/${iDBtn}`;
      break;

    case "delete":
      AddEventListenerModalBotaoDelete(iDBtn);
      modalDeleteShow();
      break;

    case "editar":
      AddEventListenerModalBotaoEdit(iDBtn);
      modalEditShow();
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
    showModalAlertNameNull();
    return;
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
