import AuthorApi from '../api/mockAuthorApi';
import * as Types from './actionTypes';
import {beginAjaxCall,ajaxCallError} from './ajaxStatusAction';
export function loadAuthorSuccess(authors){
    return {
        type:Types.LOAD_AUTH_SUCCESS,
        authors
    };
}

export function loadAuthors (){
    return dispatch => {
        dispatch(beginAjaxCall());
        return AuthorApi.getAllAuthors().then(authors=>{
            dispatch(loadAuthorSuccess(authors));
        }).catch(e=>{
            dispatch(ajaxCallError());
            throw(e);
        });
    };
}