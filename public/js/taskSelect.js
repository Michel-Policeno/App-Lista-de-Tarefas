const btnAction = document.querySelectorAll(".btn-actions");
const btnCreateTask = document.getElementById("btn-create-task");
const inputNameTask = document.getElementById("input-name-task");

btnAction.forEach((btnClick) => {
  btnClick.addEventListener("click", (ev) => {
    console.log("botão click");
  });
});

btnCreateTask.addEventListener("click", async (ev) => {
  const nameTask = inputNameTask.value;
  if (!nameTask.trim()) {
    return alert("nome da tarefa é obrigatório");
  }
  await fetch(location.href, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: nameTask }),
  })
    .then(() => {
      location.reload(); // Recarregar a página para adicionar nova tarefa
    })
    .catch((err) => console.error("erro criar nova tarefa", err));
});
