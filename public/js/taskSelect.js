const btnAction = document.querySelectorAll(".btn-actions");
const btnCreateTask = document.getElementById("btn-create-task");
const inputNameTask = document.getElementById("input-name-task");

btnAction.forEach((btnClick) => {
  btnClick.addEventListener("click", (ev) => {
    console.log("botão click");
  });
});

btnCreateTask.addEventListener("click", (ev) => {
  console.log(inputNameTask.value);
});
