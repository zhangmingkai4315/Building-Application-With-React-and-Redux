import {CREATE_COURSE} from './actionTypes';

export function createCouse(course){
  return {
    type:'CREATE_COURSE',
    course
  };
}


export default {createCouse};
