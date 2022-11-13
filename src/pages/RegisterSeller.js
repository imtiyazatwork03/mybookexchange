import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import RegistrationForm from '../components/profile/RegistrationForm';
import Breadcrumb from '../components/common/Breadcrumb';

const RegisterSeller = () => {
    const breadcrumbs = [
        { name: 'Dashboard', active: true, route: '/' },
        { name: 'Register seller', active: false },
    ]
    return (
        <div className="wrapper">
            <Header showAddInfo={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <RegistrationForm />
            <Footer />
        </div>
    )
}

export default RegisterSeller;
