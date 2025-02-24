const express = require("express");
const router = express.Router();
const path = require("node:path");
const taskListController = require("../controllers/taskList.controller");

router.get("/", taskListController.homepage);

router.post("/litagemtarefas", taskListController.listarTarefas);

module.exports = router;
