import React,{PropTypes,Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
class ManageCoursePage extends Component{
  constructor(props,context){
    super(props);
    this.state = {
      course:Object.assign({},this.props.course),
      errors:{},
      saving:false
    };
    this.updateCourseState=this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.course.id!=nextProps.course.id){
      this.setState({course:Object.assign({},nextProps.course)});
    }
  }
  updateCourseState(e){
    const field = e.target.name;
    let course = this.state.course;
    course[field]=e.target.value;
    return this.setState({course});
  }
  saveCourse(e){
    e.preventDefault();
    this.setState({saving:true});
    this.props.actions.saveCourse(this.state.course)
    .then(()=>{
    // 自动跳转到我们需要的页面
      this.setState({saving:false});
      toastr.success('保存成功');
      this.context.router.push('/courses');
    },err=>{
      this.setState({saving:false});
      toastr.error("保存失败:",err);
    });
  }

  render(){
    return (
    <div>
      <CourseForm
        allAuthors={this.props.authors}
        onChange = {this.updateCourseState}     
        course={this.state.course}
        saving={this.state.saving}
        onSave ={this.saveCourse}
        errors={this.state.errors}/>
    </div>);
  }
}

ManageCoursePage.contextTypes = {
  router:PropTypes.object.isRequired
};

ManageCoursePage.propTypes = {
  authors:PropTypes.array.isRequired,
  course:PropTypes.object.isRequired,
  actions:PropTypes.object.isRequired
};

function getCourseById(courses,id){
  let course=courses.filter(c=>c.id==id);
  if(course){
    return course[0];
  }else{
    return null;
  }
}
function mapStateToProps(state,ownProps){
  let course = {id:'',watchHref:'',title:'',authorId:'',length:'',category:''};
  let id = ownProps.params.id;
  if(id && state.courses.length>0){
    course=getCourseById(state.courses,id);
  }
  const authorsFormatterForDropDown=state.authors.map(a=>{
    return {
      value:a.id,
      text:a.firstName+' '+a.lastName
    };
  });

  return {
    course,
    authors:authorsFormatterForDropDown
  };
}

function mapDispatchToProps (disptach){
  return {
    actions:bindActionCreators(courseActions,disptach)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
