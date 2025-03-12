const btnAction = document.querySelectorAll(".btn-actions");
const btnCreateTask = document.getElementById("btn-create-task");
const inputNameTask = document.getElementById("input-name-task");
const inputsCheckTask = document.querySelectorAll(".form-check-input");
const taskCheckTrue = document.querySelectorAll(".check-true");
const domAlertNameNullModal = document.getElementById("alertNameNullModal");
const domModalEditName = document.getElementById("confirmEditNameModal");
const btnEditNameList = document.getElementById("confirmEditNameBtn");
const newNameTaskList = document.getElementById("floatingInput");
let modalEditNameTaskList = new bootstrap.Modal(domModalEditName);
let currentEditID = null;
import utils from "./utils.js";

//inicia adicionando efeito opacity nas tarefas marcadas anteriormente com feitas
taskCheckTrue.forEach((element) => {
  element.setAttribute("name", "opacity");
  element.checked = true;
});

//add atributo para efeito opacity quando a tarefa é realizada
inputsCheckTask.forEach((input) => {
  input.addEventListener("click", async (ev) => {
    const idTask = input.value;
    let span = document.getElementById(`span-${idTask}`);
    input.checked
      ? utils.addAtributeOpacity(input, span)
      : utils.removeAtributeOpacity(input, span);
    //enviar informação para o backend
    await fetch(location.href + `/${idTask}/${input.checked}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idTask }),
    }).catch((err) => console.error("erro ao alterar status de tarefa", err));
  });
});

//modal edit task
async function editNameTaskList() {
  let newNameTask = newNameTaskList.value;
  if (!currentEditID) return;
  if (!newNameTask.trim()) {
    modalEditNameTaskList.hide();
    const modalAlertNameNull = new bootstrap.Modal(domAlertNameNullModal);
    modalAlertNameNull.show();
    return;
  }
  await fetch(location.href + `/${currentEditID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newName: newNameTask }),
  })
    .then(() => {
      location.reload(); // Recarregar a página para atualizar a lista
    })
    .catch((err) => console.error("erro ao editar", err));

  modalEditNameTaskList.hide();
}

// Garante que sempre temos apenas um único evento no botão
btnEditNameList.removeEventListener("click", editNameTaskList);
btnEditNameList.addEventListener("click", editNameTaskList);

//AddEventListener aos buttons que execução as ações
utils.btnActionViews(btnAction, runActionBtnTask);
async function runActionBtnTask(actionBtn, idTask) {
  switch (actionBtn) {
    case "editar":
      currentEditID = idTask;
      modalEditNameTaskList.show();
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
    const modalAlertNameNull = new bootstrap.Modal(domAlertNameNullModal);
    modalAlertNameNull.show();
    return;
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
