const express = require("express");
const db = require("./src/utils/database/db");
const indexRoutes = require("./src/api/index/index.routes");
const playerRoutes = require("./src/api/players/players.routes");
const cors = require("cors");

db.connectDb();

const server = express();
const PORT = 8080;

server.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use("/", indexRoutes);
server.use("/players", playerRoutes);

server.use("*", (req, res) => {
  return res.status(404).json("Ruta no encontrada");
});

server.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "unexpected error");
});

server.listen(PORT, () => {
  console.log(`Servidor a todo gas en http://localhost:${PORT}`);
});
