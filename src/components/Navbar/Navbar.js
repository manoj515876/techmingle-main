import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navBarbg">
      <div className="brandName">TechMingle</div>
      <div className="navBar">
        <div className="About">
          <Link to="/">About </Link>
        </div>
        <div className="Gaming">
          <Link to="/Gaming"><box-icon name='joystick' animation='tada' ></box-icon>Gaming</Link>
        </div>
        <div className="Practice">
          <Link to="/Practice">Tech Practice</Link>
        </div>
        <div className="Podcast">
          <Link to="/Podcast">Podcast</Link>
        </div>
        <div className="Workshop">
          <Link to="/Workshop">Programs & Workshops</Link>
        </div>
        <div className="Books">
          <Link to="/Books">Books</Link>
        </div>
        <div className="Jobs">
          <Link to="/Jobs">Jobs/Internships</Link>
        </div>
        <div className="Articles">
          <Link to="/Articles">Articles</Link>
        </div>
        <div className="Clubs">
          <Link to="/Clubs">Clubs</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
