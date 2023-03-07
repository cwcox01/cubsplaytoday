import React from "react";

// importing NavbarItem which contains li element
import NavbarItem from "./NavbarItem";

export default function NavbarDisplay() {
  return (
    <ul className="pe-4">
      <NavbarItem navbarUrl="#mlb-section" navbarText="MLB" />
      <NavbarItem navbarUrl="#tripple-a-section" navbarText="AAA" />
      <NavbarItem navbarUrl="#double-a-section" navbarText="AA" />
      <NavbarItem navbarUrl="#adv-a-section" navbarText="A Adv." />
      <NavbarItem navbarUrl="#low-a-section" navbarText="Low A" />
      <NavbarItem navbarUrl="#prospect-section" navbarText="Prospects" />
    </ul>
  );
}
