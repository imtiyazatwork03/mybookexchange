import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";

const Register = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Join Now', active: true, route: '/joinnow' },
    ]
    return (
        <div className="page-container bg-gry">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="pt-50 pb-50 d-flex align-items-center page-section-ptb type-of-registration" style={{ background: '#edf2f5' }}>
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12">
                            <h2 className="mb-20 text-center">
                                New Member Registration
                            </h2>
                            <div className="col-lg-8 col-md-6 clearfix registerInfo mb-30">
                                <p className="text-center">
                                    You will need to list/add at least two books to complete your registration.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters extraLeftRigtPadding">
                        <div className="col-lg-6 col-md-6 type-coloum">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix bg-white card">
                                <img src="images/seller.png" alt="seller" />
                                <Link to="/register" className="button">
                                    I have books
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 type-coloum">
                            <div className="pt-30 pr-30 pb-30 pl-30 clearfix bg-white card">
                                <img src="images/searcher.png" alt="seller" />
                                <Link to="/" className="button">
                                    I need to find some books
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Register;
