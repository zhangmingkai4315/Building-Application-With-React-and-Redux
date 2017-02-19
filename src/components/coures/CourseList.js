import React,{PropTypes,Component} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses})=>{
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>标题</th>
                    <th>作者</th>
                    <th>分类</th>
                    <th>时间长度</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course=>{
                    return <CourseListRow key={course.id} course={course}/>;
                })}
            </tbody>
        </table>
    );
} ;

CourseList.propTypes = {
    courses : PropTypes.array.isRequired
};

export default CourseList;