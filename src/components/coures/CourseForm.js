import React, {Component, PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course,allAuthors,onSave,onChange,saving,errors})=>{
    return(
        <form>
            <h1>课程管理页面</h1>
            <TextInput 
                name = "title" 
                label = "标题" 
                value = {course.title} 
                onChange = {onChange} 
                error = {errors.title}/>
            <SelectInput 
                name = "authorId" 
                label = "作者" 
                value = {course.authorId}
                defaultOption = "选择作者"
                options = {allAuthors}
                onChange = {onChange} 
                error = {errors.authorId}/>
            <TextInput 
                name = "category" 
                label = "目录" 
                value = {course.category} 
                onChange = {onChange} 
                error = {errors.category}/>
            <TextInput 
                name = "length" 
                label = "长度" 
                value = {course.length} 
                onChange = {onChange} 
                error = {errors.length}/>

            <input type="submit" 
                disabled = {saving} 
                value={saving?'loading...':'Save'} 
                className="btn btn-primary"
                onClick={onSave}/>

        </form>
    );
};

CourseForm.propTypes = {
    course:PropTypes.object.isRequired,
    allAuthors:PropTypes.array,
    onSave:PropTypes.func.isRequired,
    onChange:PropTypes.func.isRequired,
    saving:PropTypes.bool,
    errors:PropTypes.object
};


export default CourseForm;