import React from 'react';
import '../styles/login-form.css'
import {Link} from 'react-router-dom'
// import { PromiseProvider } from 'mongoose';

const LoginForm = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="login-form-grid">
                        <h2 className="login-style"><strong>Log In</strong></h2>
                        <div className="login-box">
                            <div className="login-form-inner">
                                <form>
                                    <div>
                                        <label className="pull-left label-form">Your Email</label>
                                            <div className="input-box-div">
                                                <input type="text" className="input-box"/>
                                            </div>
                                    </div>
                                    <div>
                                        <label className="pull-left label-form">Password</label>
                                            <div className="input-box-div">
                                                <input type="password" className="input-box"/>
                                            </div>
                                    </div>
                                    <div className="login-btn-div">
                                        <input type="button" value="Log in" className="btn btn-lg btn-primary login-btn"/>
                                    </div>
                                    <div className="create-your-account">
                                        <p>Don't have an account? <Link to="/user-register">create your account</Link> </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;