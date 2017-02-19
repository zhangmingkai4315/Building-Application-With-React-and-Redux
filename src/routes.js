import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/home/Home';
import About from './components/about/About';
import CoursePage from  './components/coures/CoursePage';
import ManageCoursePage from  './components/coures/ManageCoursePage';
export default(
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/courses" component={CoursePage}/>
      <Route path="/course/:id" component={ManageCoursePage}/>
      <Route path="/course" component={ManageCoursePage}/>
    </Route>
);
