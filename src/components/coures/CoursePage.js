import React,{PropTypes,Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursePage extends Component{
  constructor(props){
    super(props);
    this.courseRow = this.courseRow.bind(this);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }
  courseRow(course,index){
    return (
      <div key={index}>{course.title}</div>
    );
  }
  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render(){
    return (
      <div>
        <h2>课程</h2>
        <input type="submit" value="新增课程" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={this.props.courses}/>
      </div>
    );
  }
}

CoursePage.propTypes = {
  actions:PropTypes.object,
  courses:PropTypes.array
};

function mapStateToProps(state){
  return {
    courses:state.courses
  };
}

function mapDispatchToProps (disptach){
  return {
    actions:bindActionCreators(courseActions,disptach)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(CoursePage);
