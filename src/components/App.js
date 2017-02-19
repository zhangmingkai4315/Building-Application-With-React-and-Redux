import React,{PropTypes,Component} from 'react';
import {Header} from './layout';
import {connect} from 'react-redux';

class App extends Component{
  render(){
    return(
      <div>
        <Header loading={this.props.loading}/>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = {
  children:PropTypes.object.isRequired,
  loading:PropTypes.bool.isRequired
};

function mapStateToProps(state,ownProps){
  return {
    loading:state.ajaxCalls>0
  };
}



export default connect(mapStateToProps)(App);
