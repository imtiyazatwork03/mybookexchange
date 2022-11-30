import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Search from "../components/home/Search";
import Breadcrumb from "../components/common/Breadcrumb";
import { useDispatch } from "react-redux";
import { resetSearchBook } from "../store/actions/book.action";
import RouteLink from "../components/common/RouteLink";

const Dashboard = () => {
    const breadcrumbs = [
        { name: 'Member Home', active: true, route: '/' },
    ]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetSearchBook())
    }, [dispatch]);
    return (
        <div className="page-container">
            <Header showAddInfo={true} sideProfile={true} />
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <RouteLink />
            <br></br> <br></br> <br></br>
            <section className="mainHmSec">
                <div className="container">
                    <div className="row no-gutters" style={{ justifyContent: 'center' }}>
                        <Search />
                        <div className="col-lg-12 col-md-12 text-center mt-10">
                            <p className="text-center mt-20">You can also search by alphabetical listings:</p>
                        </div>
                        <div className="col-md-8 text-center mb-30 mt-30 bookCat" style={{ margin: '0 auto' }}>
                            <Link to="/" className="button">General Books</Link>
                            <Link to="/" className="button">Text Books</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Dashboard;
