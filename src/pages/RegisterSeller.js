import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RegistrationForm from '../components/profile/RegistrationForm';

const RegisterSeller = () => {
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <RegistrationForm />
            <Footer />
        </div>
    )
}

export default RegisterSeller;
