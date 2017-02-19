import expect from 'expect';
import courseReducer from './courseReducers';

import * as actions from '../actions/courseActions';
import * as Types from '../actions/actionTypes';
describe('Course reducer test',()=>{
    it('should add course when passed CREATE_COURSE_SUCCESS',()=>{
        const initState=[{title:'a'}];
        const action = actions.createCourseSuccess({title:'b'});
        const newState = courseReducer(initState,action);
        expect(newState.length).toBe(2);
        expect(newState[1]).toInclude({title:'b'});
    });
});


