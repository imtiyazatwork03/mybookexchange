import React, { useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Breadcrumb from '../components/common/Breadcrumb';

function ForgotPassword() {
    const inputElement = useRef('');
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Forget password', active: true, route: '/forgetpassword' },
    ]
    const formSubmit = async (event) => {
        event.preventDefault();
        const text = inputElement.current.value.toLowerCase();
        console.log(text);
    }
    const sendAgain = () => {
        const text = inputElement.current.value.toLowerCase();
        console.log(text);
    }
    return (
        <div className="page-container bg-gry">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="pt-50 pb-50 d-flex align-items-center page-section-ptb forget-screen" >
                <div className="container">
                    <div className="row justify-content-center no-gutters vertical-align">
                        <div className="col-lg-4 col-md-6 bg-white">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix text-center">
                                {/* <img src="images/icon-forget-pswrd.png" alt="forgot" className="mb-20" /> */}
                                <h4>Forgot your password ?</h4>
                                <p>Enter your email address and we'll send you a new password</p>
                                <form className="text-left" onSubmit={formSubmit}>
                                    <div className="section-field mt-20 mb-20">
                                        <input type="email" placeholder="Email" id="email" className="form-control" name="email" ref={inputElement} required />
                                    </div>
                                    <button type="submit" className="button">Send</button>
                                </form>
                                <p className="mt-20 mb-0 dnthvAcnt" style={{ cursor: 'pointer' }} onClick={sendAgain}>Don't receive? <b>Send again</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ForgotPassword;
