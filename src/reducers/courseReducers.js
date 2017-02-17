import * as Types from '../actions/actionTypes';

export default (state=[],action)=>{
  switch(action.type){
    case Types.CREATE_COURSE:
      return [...state,Object.assign({},action.course)];
    default:
      return state;
  }
};
