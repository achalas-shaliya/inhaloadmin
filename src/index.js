import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import SignUp from './screen/signup/SignUp';
// import Form from '../node_modules/antd/lib/form/Form'
// import loginForm from './screen/loginform/loginform';
import Landing from './screen/landing/Landing';

const mountNode = document.getElementById('root');
// const Wrappedlogin = Form.create()(loginForm);

ReactDOM.render(<Landing />, mountNode);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
