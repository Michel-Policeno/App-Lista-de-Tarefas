const express = require("express");
const homeRoutes = require("./routes/homepage.js");
const app = express();

// GET /
app.use(homeRoutes);

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor Iniciado com sucesso. http://localhost:${PORT}/`)
);
