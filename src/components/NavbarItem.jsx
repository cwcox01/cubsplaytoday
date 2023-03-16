import React from "react";

export default function NavbarItem({ navbarUrl, navbarText }) {
  return (
    <li className="pe-3 nav-item">
      <a href={navbarUrl}>{navbarText}</a>
    </li>
  );
}
