const express = require("express");
const router = express.Router();
const path = require("node:path");
const taskController = require("../controllers/tasks.controller");

// router.delete("/litagemtarefas/:id", taskListController.delete);
// router.put("/litagemtarefas/:id", taskListController.update);
router.post("/litagemtarefas/lista/:idList", taskController.createTask);
// router.get("/litagemtarefas/lista/:id", taskListController.taskListSelect);

module.exports = router;
