const express = require("express");
const router = express.Router();
const path = require("node:path");
const taskListController = require("../controllers/taskList.controller");

router.post("/litagemtarefas/delete/:id", taskListController.delete);

module.exports = router;
