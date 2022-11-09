const express = require("express");

//Student route files
const studentProfileRouter = require("./student/profile-route");
const studentCoursesEnrolledRouter = require("./student/courses-enrolled-route");

//Tutor route files
const tutorProfileRouter = require("./tutor/profile-route");

//Course route files
const CourseRouter = require("./course/course-route");

const CourseSearchRouter = require("./course/course-search-route");

//Admin route Files

var routes = (app) => {
  app.use(express.json());

  app.get("", (req, res) => {
    res.send("<h1>Welcome to the Study-Smart backend</h1>");
  });

  // Student Routes
  app.use("/profile/student", studentProfileRouter);
  app.use(
    "/course/:course_id/student/:student_id",
    studentCoursesEnrolledRouter
  );

  // Tutor Routes
  app.use("/profile/tutor", tutorProfileRouter);
  app.use("/tutor/courses", CourseRouter);

  //Courses Search Route
  app.use("/courses/search", CourseSearchRouter);
};

module.exports = routes;
