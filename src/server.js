const express = require("express");
const path = require("node:path");
const homeRoutes = require("./routes/homepage.js");
const taskListRoutes = require("./routes/taskList.js");
const taskRoutes = require("./routes/task.js");
const app = express();

app.use(express.json()); //habilita json
app.use(express.urlencoded({ extended: true })); //configuração ler dados da requisição
//configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public")); //configuração arquivos Estaticos

//rotas
app.use(homeRoutes);
app.use(taskRoutes);
app.use(taskListRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor Iniciado com sucesso. http://localhost:${PORT}/`)
);
