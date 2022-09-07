import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function LogIn() {
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <section className="height-100vh d-flex align-items-center page-section-ptb forget-screen" >
                <div className="container">
                    <div className="row justify-content-center no-gutters vertical-align">
                        <div className="col-lg-4 col-md-6 bg-white">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                                <img src="images/icon-forget-pswrd.png" className="mb-20" alt="forgot-password" />
                                <h4>Login Account</h4>
                                <div className="section-field mt-20 mb-20">
                                    <input type="text" name="username" placeholder="User Name" id="username" className="required form-control" />
                                </div>
                                <div className="section-field mt-20 mb-20">
                                    <input type="password" placeholder="Password" id="password" className=" form-control" name="password" />
                                </div>
                                <p className="mt-20 mb-20 text-right">
                                    <Link to="/">Forgot Password?</Link>
                                </p>
                                <Link to="/" className="button">Login</Link>
                                <p className="mt-20 mb-0 dnthvAcnt">
                                    Don't have an account?
                                    <Link to="/">
                                        <b>Join Now</b>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default LogIn;
