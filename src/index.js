import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Form from '../node_modules/antd/lib/form/Form' 
import loginForm from './screen/loginform/loginform';

const mountNode = document.getElementById('root');
const Wrappedlogin = Form.create()(loginForm);

ReactDOM.render(<Wrappedlogin />, mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
