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
};

export default utils;
