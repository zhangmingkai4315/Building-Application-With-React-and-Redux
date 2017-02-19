import expect from 'expect';
import {mount,shallow} from 'enzyme';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import {ManageCoursePage} from './ManageCoursePage';

describe('manage course page',()=>{
    it('set error message when trying to save empty title',()=>{
        // mount 挂载子组件，可以进行更多的交互
        let props = {
            course:{
                id:'',
                watchHref:'',
                title:'',
                authorId:'',
                length:'',
                category:''
            },
            actions:{
                saveCourse:()=>{
                    return Promise.resolve();
                }
            },
            authors:[]
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveBtn = wrapper.find('input').last();
        expect(saveBtn.prop('type')).toBe('submit');
        saveBtn.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters');

    });
});