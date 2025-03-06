const express = require("express");
const router = express.Router();
const taskListController = require("../controllers/taskList.controller");

router.get("/", taskListController.homepage);
router.get("/litagemtarefas", taskListController.listTasks);

module.exports = router;
