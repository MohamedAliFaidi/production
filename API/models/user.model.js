const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    required: true,
    default :"user"
  },
  avatar :{
    url :String,
    public_id:String,
  }
});
const User = mongoose.model("User", schema);

module.exports = User;
