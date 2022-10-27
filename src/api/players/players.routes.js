const express = require("express");
const Player = require("./players.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const allplayers = await Player.find();
    console.log(allplayers);
    return res.status(200).json(allplayers);
  } catch (error) {
    return next(error);
    // return res.status(500).json("Error en el servidor");
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const playerToFind = await Player.findById(id);
    console.log(playerToFind);
    return res.status(200).json(playerToFind);
  } catch (error) {
    const customErorr = new Error("Don't Work");
    return next(customErorr);
  }
});

router.post("/create", async (req, res, next) => {
  try {
    const player = req.body;
    const newPlayer = new Player(player);
    const created = await newPlayer.save();
    return res.status(201).json(created);
  } catch (error) {
    return next(error);
  }
});

router.post("/delete/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const playerToDelete = await Player.findByIdAndDelete(id);
    return (
      res.status(204),
      json("Se ha conseguido borrar el personaje", playerToDelete)
    );
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
