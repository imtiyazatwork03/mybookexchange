import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";

const LogIn = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/dashboard' },
        { name: 'Login', active: false },
    ]
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="height-100vh d-flex align-items-center page-section-ptb forget-screen">
                <div className="container">
                    <div className="row justify-content-center no-gutters vertical-align">
                        <div className="col-lg-4 col-md-6 bg-white">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                                <img
                                    src="images/icon-forget-pswrd.png"
                                    className="mb-20"
                                    alt="forgot-password"
                                />
                                <h4>Login Account</h4>
                                <div className="section-field mt-20 mb-20">
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        id="username"
                                        className="required form-control"
                                    />
                                </div>
                                <div className="section-field mt-20 mb-20" style={{ position: 'relative', display: 'flex' }}>
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        placeholder="Password"
                                        id="password"
                                        className=" form-control"
                                        name="password"
                                    />
                                    <ion-icon onClick={togglePasswordVisiblity} name="eye-outline" style={{ position: 'absolute', right: '10px', top: '18px', cursor: 'pointer' }}></ion-icon>
                                </div>
                                <p className="mt-20 mb-20 text-right">
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                </p>
                                <Link to="/dashboard" className="button">
                                    Login
                                </Link>{" "}
                                <p className="mt-20 mb-0 dnthvAcnt">
                                    Don't have an account?{" "}
                                    <Link to="/register">
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
    );
}

export default LogIn;
