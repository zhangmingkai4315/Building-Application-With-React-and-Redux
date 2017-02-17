import React,{PropTypes,Component} from 'react';
import {Header} from './layout';
class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {
  children:PropTypes.object.isRequired
};

export default App;
