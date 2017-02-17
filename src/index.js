import 'babel-polyfill';
import {render} from 'react-dom';
import { Router,browserHistory } from 'react-router';
import React from 'react';
import routes from './routes';

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(<Router history={browserHistory} routes={routes}/>,document.getElementById('app'));




