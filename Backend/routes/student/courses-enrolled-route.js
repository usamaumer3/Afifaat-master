const express = require("express");
const router = express.Router();
const CoursesEnrolled = require("@models/student/courses-enrolled-model");
const StudentProfileModel = require("@models/student/profile-model");
const Course = require("@models/course/course-model");


router.post("/enroll", async (req, res) => {
  const routeWords = req.originalUrl.split("/");
  const course_id = routeWords[2];
  const student_id = routeWords[4];
  const body = req.body;

  const student = await StudentProfileModel.findOne({ _id: student_id }).exec();
  if (!student) {
    res.status(404).send("Student doesn't exist");
    return;
  }

  const record = await CoursesEnrolled.findOne({
    course_id: course_id,
    student_id: student_id,
  }).exec();

  if (record) {
    res.status(409).send("You are already enrolled");
    return;
  }
  const course = await Course.findOneAndUpdate(
    { _id: course_id },
    { $inc: { students_enrolled: 1 } }
  ).exec();
  if (!course) {
    res.status(404).send("Course doesn't exist");
    return;
  }
  //enroling student in a course
  var enrolled = await new CoursesEnrolled({ course_id, student_id });
  enrolled = await enrolled.save();
  res.status(200).send(enrolled);
});

router.delete("/withdraw", async (req, res) => {
  const routeWords = req.originalUrl.split("/");
  const course_id = routeWords[2];
  const student_id = routeWords[4];
  const doc = await CoursesEnrolled.deleteOne({
    course_id: course_id,
    student_id: student_id,
  }).exec();
  if (doc.deletedCount === 1) {
    const course = await Course.findOneAndUpdate(
      { _id: course_id },
      { $inc: { students_enrolled: -1 } }
    ).exec();
  } else {
    return res.status(404).send({
      status: 404,
      message: "You are not enrolled to be able to withdraw from this course.",
    });
  }

  res.status(200).send("You have successfully withdrawn from this course.");
});

router.get("/enrolled-courses", async (req, res) => {
  const routeWords = req.originalUrl.split("/");
  const student_id = routeWords[4];
  const docs = await CoursesEnrolled.find({
    student_id: student_id,
  }).exec();
  res.status(200).send(docs);
});

module.exports = router;
