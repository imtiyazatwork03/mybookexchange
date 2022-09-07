import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

function UnderConstruction() {
  return (
    <div className="wrapper">
      <Header showAddInfo={true} />
      <section className="height-100vh d-flex align-items-center page-section-ptb forget-screen" >
        <div className="container">
          <div className="row justify-content-center no-gutters vertical-align">
            <img src="images/under-construction.png" alt="downtime" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default UnderConstruction;