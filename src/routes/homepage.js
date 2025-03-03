const express = require("express");
const router = express.Router();
const path = require("node:path");
const taskListController = require("../controllers/taskList.controller");

router.get("/", taskListController.homepage);

router.get("/litagemtarefas", taskListController.listTasks);
router.get("/novatarefa", taskListController.newTask);

module.exports = router;
