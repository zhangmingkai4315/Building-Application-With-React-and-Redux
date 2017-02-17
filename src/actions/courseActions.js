export const CREATE_COURSE='CREATE_COURSE';

export function createCouse(course){
  return {
    type:'CREATE_COURSE',
    course
  };
}


export default {createCouse};
