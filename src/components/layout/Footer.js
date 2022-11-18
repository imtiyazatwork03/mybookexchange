import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="/term-and-condition">User Agreement</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Updates</Link>
          <Link to="#">Contact Us</Link>
        </nav>
        <p className="Copyright">Copyright @ mybookexchange | 2022</p>
        <div className="clearfix"></div>
      </div>
    </footer>
  );
};

export default Footer;
