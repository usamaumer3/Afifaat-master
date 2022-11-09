import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/General/LandingPage/LandingPage";
import AboutPage from "./Pages/General/AboutPage/AboutPage";
import TutorDashboard from "./Pages/Tutor/TutorDashboard/TutorDashboard";
import Teachersignup from "./Pages/TeacherCourseForm/TeacherSignup/Teachersignup";
import StudentLogin from "./Pages/Student/StudentLogin/StudentLogin";
// import CourseSearchPage from "./Pages/Student/CourseSearchPage/CourseSearchPage";
import TeacherCourseForm from "./Pages/TeacherCourseForm/TeacherCourseForm";
import TeacherDashboard from "./Pages/General/TeacherDashboard/TeacherDashboard";
import CourseView from "./Pages/Student/CourseView/CourseView";
import TeacherLogin from "./Pages/TeacherCourseForm/TeacherLogin/TeacherLogin";
// import CourseView from "./Pages/Student/CourseView/CourseView";
import StudentSignup from "./Pages/Student/StudenntSignup/StudentSignup";
// import CourseSearchPage from "./Pages/Student/CourseSearchPage/CourseSearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery";
import "bootstrap/dist/js/bootstrap";

import './Courses.css'
import './Post-Template.css'
import './Blog-Template.css'
import './Student-Sign-up.css'


  
import './Teacher-Login.css'
import './Teachers-Course-Form.css'



import CourseSearchPage from "./Pages/Student/CourseSearchPage/CourseSearchPage";

// import StudentLogin from "./Pages/Student/StudentLogin/StudentLogin";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* General Page Routes */}
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/about" element={<AboutPage />} />

          {/* Tutor Routes */}
          <Route exact path="/tutor/dashboard" element={<TutorDashboard />} />
          <Route exact path="/TeacherDashboard" element={<TeacherDashboard />} />
          <Route exact path="/TeacherLogin" element={<TeacherLogin />} />
          <Route exact path="/CourseView" element={<CourseView />} />

          <Route exact path="/TeacherSignup" element={<Teachersignup />} />



          {/* Student Routes */}
          <Route exact path="/Teacher-Course-Form" element={<TeacherCourseForm />} />
          <Route exact path="/search" element={<CourseSearchPage />} />

          {/* <Route exact path="/course-view" element={<CourseView />} /> */}
          <Route exact path="/StudentLogin" element={<StudentLogin />} />
          <Route exact path="/StudentSignup" element={<StudentSignup />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
