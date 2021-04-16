import React from 'react';
import '../styles/signup-form.css'
// import { PromiseProvider } from 'mongoose';

const SignupForm = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="signup-form-grid">
                        <h2 className="signup-style"><strong>Create an account</strong></h2>
                        <div className="signup-box">
                            <div className="signup-form-inner">
                                <form>
                                    <div>
                                        <label className="pull-left label-form">Email</label>
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
                                    <div>
                                        <label className="pull-left label-form">Repeat Password</label>
                                            <div className="input-box-div">
                                                <input type="password" className="input-box"/>
                                            </div>
                                    </div>
                                    <div>
                                        <input type="checkbox" className="input-checkbox"/>
                                        <div>
                                            <p className="terms-and-conditions">By registering on OLX, you accept our OLX Terms of Use.</p>
                                        </div>
                                    </div>
                                    <div className="signup-btn-div">
                                        <input type="button" value="Create" className="btn btn-lg btn-primary signup-btn"/>
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

export default SignupForm;