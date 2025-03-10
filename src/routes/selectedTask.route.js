const express = require("express");
const router = express.Router();
const taskSelectedController = require("../controllers/selectedTask.controller");

router.delete(
  "/litagemtarefas/lista/:idList/:idTask",
  taskSelectedController.delete
);
router.put(
  "/litagemtarefas/lista/:idList/:idTask",
  taskSelectedController.update
);
router.post("/litagemtarefas/lista/:idList", taskSelectedController.createTask);
router.put(
  "/litagemtarefas/lista/:idList/:idTask/:check",
  taskSelectedController.checkTask
);

module.exports = router;
