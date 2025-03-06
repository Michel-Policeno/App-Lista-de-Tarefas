const express = require("express");
const router = express.Router();
const path = require("node:path");
const taskController = require("../controllers/tasks.controller");

router.delete("/litagemtarefas/lista/:idList/:idTask", taskController.delete);
router.put("/litagemtarefas/lista/:idList/:idTask", taskController.update);
router.post("/litagemtarefas/lista/:idList", taskController.createTask);
// router.get("/litagemtarefas/lista/:id", taskListController.taskListSelect);

module.exports = router;
