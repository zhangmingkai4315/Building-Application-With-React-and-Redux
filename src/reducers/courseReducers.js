import {CREATE_COURSE} from '../actions/courseActions';

export default (state=[],action)=>{
  switch(action.type){
    case CREATE_COURSE:
      return [...state,Object.assign({},action.course)];
    default:
      return state;
  }
};
