import * as Types from '../actions/actionTypes';
import initialState from './initialState';
export default (state=initialState.authors,action)=>{
  switch(action.type){
    case Types.LOAD_AUTH_SUCCESS:
      return action.authors;
    default:
      return state;
  }
};
