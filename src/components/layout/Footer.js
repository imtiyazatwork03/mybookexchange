import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutus">About</Link>
          <Link to="/term-and-condition">User Agreement</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/updates">Updates</Link>
          <Link to="/contactus">Contact Us</Link>
        </nav>
        <p className="Copyright">Copyright @ mybookexchange | 2022</p>
        <div className="clearfix"></div>
      </div>
    </footer>
  );
};

export default Footer;
