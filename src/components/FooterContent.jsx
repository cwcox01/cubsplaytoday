import React from "react";

export default function FooterContent() {
  return (
    <div className="pt-3 pb-3">
      <div className="cubs-flag mb-3 mt-3 d-flex justify-content-center rounded-1 white-background-color">
        <h1 className="mb-0">W</h1>
      </div>
      <div className="d-flex flex-column align-items-center ">
        <p className="mb-0">Cubs Play Today</p>
        <p className="mb-0">Cory Cox &copy; </p>
        <p className="email-me">
          <a href="mailto:corycox.com">Email</a>
        </p>
      </div>
    </div>
  );
}
