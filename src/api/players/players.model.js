const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const playersSchema = new Schema(
  {
    nombre: { type: String, required: true },
    img: { type: String, required: false },
    Equipo: { type: String, required: true },
    age: { type: Number },
    Dorsal: { type: String },
    Position: { type: String },
  },
  {
    timestamps: true,
  }
);

const Player = mongoose.model("players", playersSchema);

module.exports = Player;
