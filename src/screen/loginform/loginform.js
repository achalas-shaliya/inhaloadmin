import React from 'react';
import {
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from "antd";
import "antd/dist/antd.css";
import {
  Row
} from 'antd';
import "../loginform/loginform.css";
import logo from "../../assets/New_V3.png";
import 'tachyons';

class loginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const {
      getFieldDecorator
    } = this.props.form;
    return (
      <Row type="flex" justify="center" >
        <div className=" dt mw9 pv6 ph5-ns ">
          <img src={logo} alt="logo" className="logo-inhalo" />
          <div className="main-intro" > Hey good to see you again! </div>
          <div className="sub-intro" > Log into get going </div>
          <Form onSubmit={this.handleSubmit} className="login-form" >
            <Form.Item > {
              getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: 'Please input your username!'
                }],
              })(<
                Input prefix={
                  <
                    Icon type="user"
                    style={
                      {
                        color: 'rgba(0,0,0,.25)'
                      }
                    }
                  />} placeholder="Username" />
              )
            }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{
                  required: true,
                  message: 'Please input your Password!'
                }],
              })(
                <Input prefix={
                  <Icon type="lock"
                    style={
                      {
                        color: 'rgba(0,0,0,.25)'
                      }
                    }
                  />} type="password" placeholder="Password" />
              )
              }
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox className={"white"} > Remember me </Checkbox>
              )
              }
              <a className="login-form-forgot" href="" > Forgot password </a><br></br>
              <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button><br></br>
              <div className={"white"} >Or</div><a href=""> register now! </a>
            </Form.Item>
          </Form>
        </div>
      </Row>
    );
  }
}

export default loginForm;