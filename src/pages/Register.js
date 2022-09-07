import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function Register() {
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <section className="height-100vh d-flex align-items-center page-section-ptb type-of-registration">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <h2 className="mb-20 text-center">Before Register Tell us about yourself</h2>
                            <div className="col-lg-8 col-md-6 clearfix registerInfo mb-30"><p className="text-center">You will need to list/enter at least two books to complete your registration.
                                You may want to have your books ready before you proceed. Thanks.</p></div></div>
                    </div>
                    <div className="row no-gutters extraLeftRigtPadding">
                        <div className="col-lg-6 col-md-6 type-coloum">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix bg-white card">
                                <img src="images/seller.png" alt="seller" />
                                <Link to="/register" className="button">I have the books</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 type-coloum">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix bg-white card">
                                <img src="images/searcher.png" alt="search" />
                                <Link to="/" className="button">I need to find some books</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Register;