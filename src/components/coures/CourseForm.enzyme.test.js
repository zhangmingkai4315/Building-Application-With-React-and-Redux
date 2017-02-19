import expect from 'expect';
import {mount,shallow} from 'enzyme';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';



function setUp(save){
    let props = {
        course:{},
        saving:save,
        errors:{},
        onSave:()=>{},
        onChange:()=>{}
    };

    return shallow(<CourseForm {...props}/>);
}

describe('Courseform test via enzyme test utils',()=>{
    it('renders from form and h1',()=>{
        const wrapper = setUp(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toEqual('课程管理页面');
    });

    it('saving button will not labeled save when not saving',()=>{
        const wrapper = setUp(false);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('saving button will labeled saving when  saving',()=>{
        const wrapper = setUp(true);
        expect(wrapper.find('input').length).toBe(1);
        expect(wrapper.find('input').props().value).toBe('loading...');
    });
});