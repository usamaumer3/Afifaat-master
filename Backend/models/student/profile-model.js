const mongoose = require("mongoose");
const profileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  profile_image: String,
  language: String,
  isBlocked: Boolean,
});
const profileModel = mongoose.model("student-profile", profileSchema);
module.exports = profileModel;
