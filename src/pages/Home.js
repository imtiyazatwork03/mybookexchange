import React from 'react'
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Banner from '../components/home/Banner';
import Main from '../components/home/Main';

const Home = () => {
    return (
        <div className="wrapper">
            <Banner />
            <Header showAddInfo={false} showLogin={true} />
            <Main />
            <Footer />
        </div>
    )
}

export default Home