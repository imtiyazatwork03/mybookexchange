import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

function Main() {
    return (
        <section className="mainHmSec">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-lg-12 col-md-12 text-center mb-20">
                        <Link className="" to="/">
                            <img src="images/main-logo.png" alt="logo"
                                style={{ maxWidth: '578px', width: '100%' }} />
                        </Link>
                        <p className="text-center mt-20">Mybookexchange.com (MBE) is a 'pure' book exchange site.</p>
                        <p className="text-center">No Selling | No Buying | No points/credit system</p>
                    </div>
                    <Search />
                    <div className="col-lg-12 col-md-12 text-center mt-40">
                        <p className="text-center mt-20">You can also search by alphabetical listings:</p>
                    </div>
                    <div className="col-md-8 text-center mb-30 mt-30 bookCat" style={{ margin: '0 auto' }}>
                        <Link to="/" className="button">General Books</Link>
                        <Link to="/" className="button">Text Books</Link>
                    </div>
                </div>
            </div>
            <div className="row no-gutters">
                <div className="col-lg-12 col-md-12">
                    <img src="images/hm-books.png" alt="hm-books" className="hm-books" />
                </div>
            </div>
        </section>
    )
}

export default Main;