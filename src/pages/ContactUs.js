import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";

const ContactUs = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Contact us', active: true, route: '/contactus' },
    ]
    return (
        <div className="page-container bg-gry">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="pt-50 pb-50 d-flex align-items-center page-section-ptb forget-screen">
                <div className="container">
                    <div className="row justify-content-center no-gutters vertical-align">
                        Coming soon!
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default ContactUs;
