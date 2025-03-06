const express = require("express");
const router = express.Router();
const path = require("node:path");
const taskListController = require("../controllers/taskList.controller");

router.delete("/litagemtarefas/:id", taskListController.delete);
router.get("/novatarefa", taskListController.newTask);
router.put("/litagemtarefas/:id", taskListController.update);
router.post("/litagemtarefas", taskListController.newTaskList);

module.exports = router;
