import React,{Component} from 'react';
import {Link} from 'react-router';
export default class Home extends Component{
  render(){
    return (<div className="jumbotron">
              <h1>This is a home page</h1>
              <p>Using React and Redux to made this page</p>
              <Link to="about" className="btn btn-primary">About me</Link>
            </div>);
  }
}
