const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Aplicacion Node.js funcionando en Docker");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
