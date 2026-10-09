import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <a href="/" className="logo">
          <span className="logo-icon">✦</span>
          <span>MyWebsite</span>
        </a>

        {/* Navigation */}
        <nav className="nav">
          <a href="/" className="nav-link active">
            Home
          </a>

          <a href="/about" className="nav-link">
            About
          </a>

          <a href="/catalog" className="nav-link">
            Catalog
          </a>

          <a href="/project" className="nav-link">
            Project
          </a>

          <a href="/information" className="nav-link">
            Information
          </a>

          <a href="/contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Button */}
        <button className="header-btn">
          Get Started
          <span>→</span>
        </button>

      </div>
    </header>
  );
};

export default Header;