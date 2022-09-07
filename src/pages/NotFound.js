import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function NotFound() {
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <section className="height-100vh d-flex align-items-center page-section-ptb error-page" >
                <div className="container">
                    <img src="images/error-img.png" alt="not-found" />
                    <h1>404</h1>
                    <h2>error</h2>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default NotFound;