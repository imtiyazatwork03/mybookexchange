import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/common/Breadcrumb";

const Updates = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Updates', active: true, route: '/updates' },
    ]
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <section className="height-100vh d-flex align-items-center page-section-ptb forget-screen">
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

export default Updates;
