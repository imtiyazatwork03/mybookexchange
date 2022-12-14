import React from 'react';
import { Link } from 'react-router-dom';
import SideProfile from '../cart/SideProfile';

const Header = ({ hideLogo, showAddInfo, showLogin, sideProfile }) => {
    return (
        <header className="hm main-header">
            <div className="container">
                {showAddInfo ?
                    <>
                        {
                            hideLogo ?
                                null :
                                <Link className="logo" to="/">
                                    <img src="/images/mbe-main-logo.png" alt="logo"
                                        style={{ width: '270px' }} />
                                </Link>
                        }
                        <nav className="middleNav">
                            <Link to="/aboutus">About</Link>
                            <Link to="/updates">Updates</Link>
                            <Link to="/contactus">Contact Us</Link>
                        </nav>
                    </>
                    : null}
                {showLogin ?
                    <div className="rightNav">
                        <Link to="/login" className="button yellow">Login</Link>
                        <Link to="/joinnow" className="button">Join Now</Link>
                    </div>
                    : null}
                {sideProfile ?
                    <SideProfile />
                    : null}
                <div className="rightNav mbl dropdown">
                    <Link data-toggle="dropdown" to="/" role="button" aria-haspopup="true" aria-expanded="false">
                        <i className="zmdi zmdi-menu ti-align-right"></i>
                    </Link>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link to="/" className="dropdown-item">Home</Link>
                        <Link to="/" className="dropdown-item">About</Link>
                        <Link to="/" className="dropdown-item">User Agreement</Link>
                        <Link to="/" className="dropdown-item">Updates</Link>
                        <Link to="/" className="dropdown-item">Contact Us</Link>
                        <Link to="/" className="dropdown-item">Login</Link>
                        <Link to="/login" className="dropdown-item">Join Now</Link>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </header>
    )
}

export default Header
