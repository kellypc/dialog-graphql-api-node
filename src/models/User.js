const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  index: String,
  picture: String,
  age: String,
  eyeColor: String,
  name: String,
  company: String,
  email: String,
  phone: String,
  friends: {
    index: String,
    picture: String,
    age: String,
    eyeColor: String,
    name: String,
    company: String,
    email: String,
    phone: String,
  },
  greeting: String,
});

module.exports = mongoose.model("User", UserSchema);
