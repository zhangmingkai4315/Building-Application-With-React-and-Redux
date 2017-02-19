import * as Types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state=initialState.numberAjaxCall,action){
    if(action.type === Types.BEGIN_AJAX_CALL){
        return state +1;
    }else if(action.type.substring(action.type.length-8)=='_SUCCESS'||action.type === Types.AJAX_CALL_ERROR){
        return state-1;
    }
    return state;
}