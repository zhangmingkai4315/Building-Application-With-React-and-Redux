import {CREATE_COURSE,LOAD_COURSES_SUCCESS} from './actionTypes';
import courseApi from '../api/mockCourseApi';
export function createCouse(course){
  return {
    type:'CREATE_COURSE',
    course
  };
}
function loadCoursesSuccess(courses){
  return {
    type:'LOAD_COURSES_SUCCESS',
    courses
  };
}
export function loadCourse(){
  return function(dispatch){
    return courseApi.getAllCourses()
                    .then(courses=>{dispatch(loadCoursesSuccess(courses));})
                    .catch(err=>{throw(err);});
  };
}

