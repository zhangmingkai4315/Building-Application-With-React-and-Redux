import expect from 'expect';
import * as courseActions from './courseActions';
import * as Types from './actionTypes';


describe('Course Action',()=>{
    describe('createCourseSuccess',()=>{
        it('should create a CREATE_COURSE_SUCCESS action',()=>{
            const course = {id:'clean code',title:'Clean Code'};
            const expectedAction = {
                type:Types.CREATE_COURSE_SUCCESS,course
            };

            const action = courseActions.createCourseSuccess(course);
            expect(action).toEqual(expectedAction);
        });
    });
});

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions',()=>{
    afterEach(()=>{
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading course',(done)=>{
        const expectedActions = [
            {type:Types.BEGIN_AJAX_CALL},
            {type:Types.LOAD_COURSES_SUCCESS,body:{courses:[{id:'clean-code',title:'Clean Code'}]}}
        ];

        const store = mockStore({courses:[]},expectedActions);
        store.dispatch(courseActions.loadCourse()).then(()=>{
            const storeActions = store.getActions();
            expect(storeActions[0].type).toEqual(Types.BEGIN_AJAX_CALL);
            expect(storeActions[1].type).toEqual(Types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});
