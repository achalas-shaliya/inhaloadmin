import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './SingUp.css'
import Background from '../../assets/559116.png';
import 'tachyons';
import { Layout } from 'antd';


const { Content } = Layout;

class SignUp extends Component {

    render() {
        return (
            <div>
                <Layout>
                    <Content className={"vh-100 w-100  bg-dark-gray white cover tc-l"} style={{ backgroundImage: `url(${Background})` }}>
                        <div className={"pa4-l"}>
                            <form className={"bg-light-red mw7 center pa4 br2-ns ba b--black-10 tc-l"}>
                                <fieldset className={"cf bn ma0 pa0"}>
                                    <legend className={"pa0 f5 f4-ns mb3 white-80"}>
                                        Sign up for our newsletter
                                    </legend>
                                    <div className={"cf"}>
                                        <input className={"f6 f5-l bn center mv2 black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"} placeholder="Your First Name" type="text" name="first-name" id="first-name" />
                                        <input className={"f6 f5-l bn center mv2 black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"} placeholder="Your Last Name" type="text" name="last-name" id="last-name" />
                                        <input className={"f6 f5-l bn center mv2 black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"} placeholder="Your Email Address" type="text" name="email-address" id="email-address" />
                                        <input className={"f6 f5-l bn center mv2 black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"} placeholder="Your Contact No" type="text" name="contact-no" id="contact-no" />
                                        <input className={"f6 f5-l bn center mv2 black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"} placeholder="Your Password" type="password" name="password" id="password" />
                                        <input className={"f6 f5-l bn center mv2 black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns"} placeholder="Confirm Your Passowrd" type="password" name="password-conf" id="password-conf" />
                                    </div>
                                    <div className={"cf"}>
                                        <input className={"f6 f5-l bn center button-reset mv4 pv3 tc bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"}
                                            type="button" value="Subscribe"
                                        />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default SignUp;