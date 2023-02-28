import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="site-header ps-3">Cubs</h1>
      <div className="cubs-flag-nav cubs-flag-nac ps-3 pe-3">
        <h1 className="mb-0">W</h1>
      </div>
      <nav className="site-nav">
        <ul className="pe-4">
          <li className="pe-3">
            <a href="#mlb-section">MLB</a>
          </li>
          <li className="pe-3">
            <a href="#tripple-a-section">AAA</a>
          </li>
          <li className="pe-3">
            <a href="#double-a-section">AA</a>
          </li>
          <li className="pe-3">
            <a href="#adv-a-section">A Adv.</a>
          </li>
          <li className="pe-3">
            <a href="#low-a-section">Low A</a>
          </li>
          <li className="pe-3">
            <a href="#prospect-section">Prospects</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
