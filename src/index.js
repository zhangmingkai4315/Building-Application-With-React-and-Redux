import 'babel-polyfill';
import {render} from 'react-dom';
import { Router,browserHistory } from 'react-router';
import React from 'react';
import routes from './routes';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configStore from './store/configStore';
import {Provider} from 'react-redux';

import {loadCourse} from './actions/courseActions';

const store = configStore();
store.dispatch(loadCourse());


render(<Provider store = {store}>
          <Router history={browserHistory} routes={routes}/>
       </Provider>,document.getElementById('app'));




