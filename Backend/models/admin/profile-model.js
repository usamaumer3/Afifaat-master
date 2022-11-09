const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  firstNmae: String,
  lastName: String,
  email: String,
  password: String,
});

const courseModel = mongoose.model("courses", courseSchema);
module.exports = courseModel;