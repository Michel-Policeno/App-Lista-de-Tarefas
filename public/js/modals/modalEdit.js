import { showModalAlertNameNull } from "./modalAlert.js";

const btnEditNameList = document.getElementById("confirmEditNameBtn");
const newNameTaskList = document.getElementById("floatingInput");
const modalEditNameTaskList = new bootstrap.Modal(
  document.getElementById("confirmEditNameModal")
);

async function editNameTaskList(event) {
  const currentEditID = event.currentTarget.dataset.editId;
  if (!currentEditID) return;
  if (!newNameTaskList.value.trim()) {
    modalEditNameTaskList.hide();
    showModalAlertNameNull();
    return;
  }

  await fetch(`/litagemtarefas/${currentEditID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newNameTaskList.value }),
  })
    .then(() => {
      location.reload(); // Recarregar a página para atualizar a lista
    })
    .catch((err) => console.error("erro ao editar", err));

  modalEditNameTaskList.hide();
}

export function AddEventListenerModalBotaoEdit(currentEditID) {
  btnEditNameList.dataset.editId = currentEditID;
  // Garante que sempre temos apenas um único evento no botão delete
  btnEditNameList.removeEventListener("click", editNameTaskList);
  btnEditNameList.addEventListener("click", editNameTaskList);
}

export function modalEditShow() {
  modalEditNameTaskList.show();
}
