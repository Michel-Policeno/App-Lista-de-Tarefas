const express = require("express");
const router = express.Router();
const taskListController = require("../controllers/taskList.controller");

router.delete("/litagemtarefas/:id", taskListController.delete);
router.put("/litagemtarefas/:id", taskListController.update);
router.post("/litagemtarefas", taskListController.newTaskList);
router.get("/litagemtarefas/lista/:id", taskListController.taskListSelect);

module.exports = router;
