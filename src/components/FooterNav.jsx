import React from "react";

// importing smaller footer nav item component
import FooterNavItem from "./FooterNavItem";

export default function FooterNav() {
  return (
    <div className="footer-nav white-background-color d-flex justify-content-center">
      <nav>
        <ul className="footer-nav">
          <FooterNavItem footerNavText="Home" footerNavUrl="#root" />
          <FooterNavItem footerNavText="MLB" footerNavUrl="#mlb-section" />
          <FooterNavItem
            footerNavText="AAA"
            footerNavUrl="#tripple-a-section"
          />
          <FooterNavItem footerNavText="AA" footerNavUrl="#double-a-section" />
          <FooterNavItem footerNavText="A+" footerNavUrl="#adv-a-section" />
          <FooterNavItem footerNavText="A" footerNavUrl="#low-a-section" />
          <FooterNavItem
            footerNavText="Prospects"
            footerNavUrl="#prospect-section"
          />
        </ul>
      </nav>
    </div>
  );
}
