import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

const AppRouter = withRouter(App);

ReactDOM.render(<BrowserRouter><AppRouter /></BrowserRouter>, document.getElementById('root'));

/* Clear */