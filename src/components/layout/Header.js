import React from "react";
import { Link } from "react-router-dom";

const Header = ({ showAddInfo }) => {
  return (
    <header className="hm main-header">
      <div className="container">
        {showAddInfo ? (
          <>
            <Link className="logo" to="/">
              <img src="images/logo-dark.png" alt="logo" />
            </Link>
            <nav className="middleNav">
              <Link to="/">About</Link>
              <Link to="/term-and-condition">User Agreement</Link>
              <Link to="/">Updates</Link>
              <Link to="/">Contact Us</Link>
            </nav>
          </>
        ) : null}
        <div className="rightNav">
          <Link to="/login" className="button yellow">
            Login
          </Link>
          <Link to="/register" className="button">
            Join Now
          </Link>
        </div>
        <div className="rightNav mbl dropdown">
          <Link
            data-toggle="dropdown"
            to="/"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="zmdi zmdi-menu ti-align-right"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-right">
            <Link to="/" className="dropdown-item">
              Home
            </Link>
            <Link to="/" className="dropdown-item">
              About
            </Link>
            <Link to="/term-and-condition" className="dropdown-item">
              User Agreement
            </Link>
            <Link to="/" className="dropdown-item">
              Updates
            </Link>
            <Link to="/" className="dropdown-item">
              Contact Us
            </Link>
            <Link to="/" className="dropdown-item">
              Login
            </Link>
            <Link to="/login" className="dropdown-item">
              Join Now
            </Link>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
    </header>
  );
};

export default Header;
