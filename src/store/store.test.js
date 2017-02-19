import expect from 'expect';
import {createStore} from 'redux';

import rootReducer from '../reducers';
import initalState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store test',function(){
    it('Handle create course',function(){
        const store = createStore(rootReducer,initalState);
        const course= {
            title:'clean code'
        };
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);
        const acture = store.getState().courses[0];
        const expected = {
            title:'clean code'
        };
        // expect(acture).to
        expect(acture).toEqual(expected);
    });
});