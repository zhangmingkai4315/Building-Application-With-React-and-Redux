import * as Types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusAction';
function loadCoursesSuccess(courses){
  return {
    type:Types.LOAD_COURSES_SUCCESS,
    courses
  };
}
export function loadCourse(){
  
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses()
                    .then(courses=>{dispatch(loadCoursesSuccess(courses));})
                    .catch(err=>{dispatch(ajaxCallError());throw(err);});
  };
}

export function updateCourseSuccess(course){
  return {
    type:Types.UPDATE_COURSE_SUCCESS,
    course
  };
}

export function createCourseSuccess(course){
  return {
    type:Types.CREATE_COURSE_SUCCESS,
    course
  };
}

export function saveCourse(course){
  return function(dispatch,getState){
     dispatch(beginAjaxCall());
    return courseApi.saveCourse(course)
                    .then(course=>{
                      course.id ?dispatch(updateCourseSuccess(course))
                                :dispatch(createCourseSuccess(course));})
                    .catch(err=>{dispatch(ajaxCallError());throw(err);});
  };
}

