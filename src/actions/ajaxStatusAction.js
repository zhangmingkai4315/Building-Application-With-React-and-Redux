import * as Types from './actionTypes';

export function beginAjaxCall(){
    return {
        type:Types.BEGIN_AJAX_CALL
    };
}

export function ajaxCallError(error){
    return {
        type:Types.AJAX_CALL_ERROR,error
    };
}