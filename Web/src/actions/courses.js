import * as api from "../api";

//Action Creators
export const getSearchedCourses = (search, page) => async (dispatch) => {
  try {
    // const { data } = await api.courseSearchRequest(search, page);

    //Action to call a reducer
    // dispatch({ type: "FETCH_SEARCHED_COURSES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getCourse = (id) => async (dispatch) => {
  try {
    const { data } = await api.getCourseRequest(id);

    //Action to call a reducer
    dispatch({ type: "FETCH_COURSES", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
