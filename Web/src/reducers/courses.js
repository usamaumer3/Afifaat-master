const courses = (courses = [], action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      return action.payload;
    case "FETCH_SINGLE_COURSE":
      return action.payload;
    case "FETCH_ALL_COURSES":
      return action.payload;
    case "UPDATE_COURSE":
      return { ...courses, ...action.payload };
    case "DELETE_COURSE":
      return [...courses.filter((item) => item._id !== action.payload)];
    default:
      return courses;
  }
};

export default courses;
