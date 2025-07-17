const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  //_id: { type: mongoose.Schema.Types.ObjectId, required: false },
  name: { type: String, required: true },
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Users", userSchema);