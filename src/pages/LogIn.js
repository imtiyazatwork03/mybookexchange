import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import { signIn, getProfile, signInWithGoogle } from '../store/actions/auth.action';
import { toast } from "react-toastify";
import { signInWithPopup } from 'firebase/auth';
import { Auth, Google } from '../utils/firebase';

const LogIn = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Login', active: true, route: '/login' },
    ]
    const [passwordShown, setPasswordShown] = useState(false);
    const [input, setInput] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const formSubmit = async (event) => {
        event.preventDefault();
        const user = await dispatch(signIn(input));
        const { success, reason, data } = user;
        if (success) {
            const prop = data?.data;
            toast.success(reason);
            localStorage.setItem('token', prop?.token);
            await dispatch(getProfile());
            navigate('/')
        } else toast.error(reason);
    }
    const logInWithGoogle = async () => {
        const result = await signInWithPopup(Auth, Google);
        const { displayName, localId, email } = result._tokenResponse;
        const postData = { email, google_id: localId, name: displayName };
        const user = await dispatch(signInWithGoogle(postData));
        const { success, reason, data } = user;
        if (success) {
            const prop = data?.data;
            toast.success(reason);
            localStorage.setItem('token', prop?.token);
            await dispatch(getProfile());
            navigate('/dashboard')
        } else toast.error(reason);
    }
    return (
        <div className="page-container bg-gry">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="pt-40 pb-40 d-flex align-items-center page-section-ptb forget-screen">
                <div className="container">
                    <div className="row justify-content-center no-gutters vertical-align">
                        <div className="col-lg-4 col-md-6 bg-white">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                                <h4>Login Account</h4>
                                <hr className="mt-20 mb-10" />
                                <div className="mb-10">
                                    <button type="button" className="button" onClick={logInWithGoogle}>
                                        <ion-icon name="logo-google"></ion-icon> Continue using google
                                    </button>
                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '50%', borderBottom: '1px solid #c1cad4', marginBottom: '10px' }}></div>
                                    <div style={{ paddingRight: '10px', paddingLeft: '10px' }}>OR</div>
                                    <div style={{ width: '50%', borderBottom: '1px solid #c1cad4', marginBottom: '10px' }}></div>
                                </div>
                                <form className="text-left" onSubmit={formSubmit}>
                                    <div className="section-field mt-20 mb-20">
                                        <input
                                            type="email"
                                            name="email"
                                            onChange={onInputChange}
                                            placeholder="Email"
                                            id="email"
                                            className="required form-control"
                                            required
                                        />
                                    </div>
                                    <div className="section-field mt-20 mb-20" style={{ position: 'relative', display: 'flex' }}>
                                        <input
                                            type={passwordShown ? "text" : "password"}
                                            name="password"
                                            onChange={onInputChange}
                                            placeholder="Password"
                                            id="password"
                                            className=" form-control"
                                            required
                                        />
                                        <ion-icon onClick={togglePasswordVisiblity} name="eye-outline" style={{ position: 'absolute', right: '10px', top: '18px', cursor: 'pointer' }}></ion-icon>
                                    </div>
                                    <p className="mt-20 mb-20 text-right">
                                        <Link to="/forgetpassword">Forget Password?</Link>
                                    </p>
                                    <div className="mb-10">
                                        <button type="submit" className="button">Login</button>
                                    </div>
                                    {/* <button type="button" className="button" onClick={logInWithFacebook}>
                                        <ion-icon name="logo-facebook"></ion-icon> Login with facebook
                                    </button> */}
                                </form>
                                <p className="mt-20 mb-0 dnthvAcnt">
                                    Don't have an account?{" "}
                                    <Link to="/joinnow">
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
