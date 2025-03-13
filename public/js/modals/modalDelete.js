const btnConfirmDelete = document.getElementById("confirmDeleteBtn");
const modalDelete = new bootstrap.Modal(
  document.getElementById("confirmDeleteModal")
);

async function deleteListTask(event) {
  //armazena o ID que adicionamos dinamicamente ao dataset-deleteId
  const currentIDDelete = event.currentTarget.dataset.deleteId;
  if (!currentIDDelete) return;

  //enviar o cancelamento para o backend
  await fetch(`/litagemtarefas/${currentIDDelete}`, { method: "DELETE" })
    .then(() => {
      location.reload();
    })
    .catch((err) => console.error("Erro ao deletar:", err));

  modalDelete.hide();
}

export function AddEventListenerModalBotaoDelete(currentDeleteID) {
  btnConfirmDelete.dataset.deleteId = currentDeleteID;
  // Garante que sempre temos apenas um único evento no botão delete
  btnConfirmDelete.removeEventListener("click", deleteListTask);
  btnConfirmDelete.addEventListener("click", deleteListTask);
}

export function modalDeleteShow() {
  modalDelete.show();
}
