import React,{PropTypes,Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  courseActions from '../../actions/courseActions';
class CoursePage extends Component{
  constructor(props){
    super(props);
    this.states ={
      course:{
        title:''
      }
    };
    this.onSaveCourse = this.onSaveCourse.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.courseRow = this.courseRow.bind(this);
  }
  onSaveCourse(){
    // console.log(this.states.course);
    this.props.actions.createCouse(this.state.course);
  }
  onTitleChange(e){
    let course = this.states.course;
    course.title=e.target.value;
    this.setState({course:course});
  }
  courseRow(course,index){
    return (
      <div key={index}>{course.title}</div>
    );
  }
  render(){
    return (
      <div>
        <h3>Courses</h3>
        {this.props.courses.map(this.courseRow)}
        <input typ="text" value={this.states.course.title} onChange={this.onTitleChange}/>
        <input type="submit" value="保存" onClick={this.onSaveCourse}/>
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
