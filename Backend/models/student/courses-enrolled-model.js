const mongoose = require("mongoose");
const coursesEnrolledSchema = mongoose.Schema(
  {
    student_id: String,
    course_id: String,
  },
  { timestamps: true }
);

const CoursesEnrolled = mongoose.model(
  "enrolled-course",
  coursesEnrolledSchema
);

module.exports = CoursesEnrolled;
