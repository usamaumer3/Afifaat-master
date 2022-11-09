import axios from "axios";

const serverBaseUrl = "http://localhost:8000";

//Student Urls
const studentProfileUrl = serverBaseUrl + "/profile/student";
const courseSearchUrl = serverBaseUrl + "/courses/search";

//Tutor Urls
const tutorProfileUrl = serverBaseUrl + "/profile/tutor";
const tutorCoursesUrl = serverBaseUrl + "/tutor/courses";
const fetchTutorCoursesUrl = tutorCoursesUrl + "/all/";
const createCourseUrl = tutorCoursesUrl + "/create";

const getCourseUrl =
  "http://localhost:8000/tutor/courses/633682d329b3a8daed5300d5";

//Admin Urls

//Requests Headers
//Simple Request Header
const applyHeader = () => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  };
};

//Request with file Header
const applyHeaderMulti = (config) => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (data) => config(data),
  };
};

//Student Requests

//Tutor Requests
export const fetchTutorCoursesRequest = async (tutorId) =>
  await axios.get(fetchTutorCoursesUrl + tutorId, applyHeader());
export const fetchTutorCourseRequest = async (course) =>
  await axios.post(tutorCoursesUrl, course, applyHeader());
export const createCourseRequest = async (course) =>
  await axios.post(createCourseUrl, course, applyHeader());

export const getCourseRequest = async (id) =>
  await axios.get("http://localhost:8000/tutor/courses/" + id);

//Admin Requests
