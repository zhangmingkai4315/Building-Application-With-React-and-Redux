import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import CourseForm from './CourseForm';


function setUp(save){
    let props = {
        course:{},
        saving:save,
        errors:{},
        onSave:()=>{},
        onChange:()=>{}
    };

    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();
    return {
        props,output,renderer
    };
}

describe('Courseform test via react test utils',()=>{
    it('renders from form and h1',()=>{
        const {output} = setUp();
        expect(output.type).toBe('form');
        let [h1]=output.props.children;
        expect(h1.type).toBe('h1');
    });

    it('saving button will not labeled save when not saving',()=>{
        const {output} = setUp(false);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('Save');
    });

    it('saving button will labeled saving when  saving',()=>{
        const {output} = setUp(true);
        const submitButton = output.props.children[5];
        expect(submitButton.props.value).toBe('loading...');
    });
});