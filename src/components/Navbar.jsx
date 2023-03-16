import React from "react";
import { useState } from "react";

// importing NavbarDisplay for navbar into smaller component
import NavbarDisplay from "./NavbarDisplay";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="navbar">
      <h1 className="site-header ps-3">Cubs</h1>
      <div className="cubs-flag-nav cubs-flag-nac ps-3 pe-3">
        <h1 className="mb-0">W</h1>
      </div>

      <nav className="site-nav">
        <div
          className={`navbar-toggle ${isActive ? "active" : ""}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`navbar-menu ${isActive ? "active" : ""}`}>
          <NavbarDisplay />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
