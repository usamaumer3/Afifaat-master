const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  qualification: String,
  field: String,
  institute: String,
  startDate: Date,
  endDate: Date,
});

const experienceSchema = new mongoose.Schema({
  title: String,
  field: String,
  organization: String,
  startDate: Date,
  endDate: Date,
});

const profileSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  profile_image: String,
  language: String,
  Education: [educationSchema],
  Experience: [experienceSchema],
  isBlocked: Boolean,
});

const profileModel = mongoose.model("tutor-profile", profileSchema);
module.exports = profileModel;
