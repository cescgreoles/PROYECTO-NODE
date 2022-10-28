const mongoose = required("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: { type: String, required: false, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    photo: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, 10000);
  next();
});

const User = mongoose.model("users", userSchema);
module.exports = User;
