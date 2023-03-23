import React from "react";

export default function FooterNavItem({ footerNavUrl, footerNavText }) {
  return (
    <li className="pe-3">
      <a href={footerNavUrl}>{footerNavText}</a>
    </li>
  );
}
