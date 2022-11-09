const mongoose = require("mongoose");


const outlineSchema = new mongoose.Schema({
  heading: String,
  text: String
});

const courseSchema = new mongoose.Schema({
  name: String,
  status: String,
  students_enrolled: Number,
  added_date: {type:Date, default:Date.now()},
  description: String,
  updated_date: String,
  tutor_id: String,
  price: Number,
  duration: String,
  start_time: {type:Date, default:Date.now()},
  languages: [String],
  outline: [outlineSchema],
  course_image : String,
  course_video: String,
});

const courseModel = mongoose.model("courses", courseSchema);
module.exports = courseModel;