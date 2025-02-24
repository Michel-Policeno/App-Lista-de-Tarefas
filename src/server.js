const express = require("express");
const path = require("node:path");
const homeRoutes = require("./routes/homepage.js");
const app = express();

// GET /
app.use(homeRoutes);

//configurar EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//configuração arquivos Estaticos
app.use(express.static("public"));

//configuração ler dados da requisição
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor Iniciado com sucesso. http://localhost:${PORT}/`)
);
