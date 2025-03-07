const utils = {
  btnActionViews: (buttons, runActionBtn) => {
    buttons.forEach((btnClick) => {
      btnClick.addEventListener("click", (ev) => {
        //separando do id as informações de acão e identificado unico da tarefa
        const [action, idBtn] = ev.target.id.split("-");
        runActionBtn(action, idBtn);
      });
    });
  },
  addAtributeOpacity: (inputCheckbox, nameTaks) => {
    inputCheckbox.setAttribute("name", "opacity");
    nameTaks.setAttribute("name", "opacity");
  },
  removeAtributeOpacity: (inputCheckbox, nameTaks) => {
    inputCheckbox.removeAttribute("name", "opacity");
    nameTaks.removeAttribute("name", "opacity");
  },
};

export default utils;
