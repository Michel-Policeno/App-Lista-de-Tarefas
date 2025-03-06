const express = require("express");
const path = require("node:path");
const homeRoutes = require("./routes/homepage.route.js");
const taskListRoutes = require("./routes/taskList.route.js");
const selectedTaskRoutes = require("./routes/selectedTask.route.js");
const app = express();

app.use(express.json()); //habilita json
app.use(express.urlencoded({ extended: true })); //configuração ler dados da requisição
//configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public")); //configuração arquivos Estaticos

//rotas
app.use(homeRoutes);
app.use(selectedTaskRoutes);
app.use(taskListRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor Iniciado com sucesso. http://localhost:${PORT}/`)
);
