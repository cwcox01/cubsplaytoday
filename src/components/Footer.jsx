import React from "react";

// importing social media sharing
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";

function Footer() {
  return (
    <footer className="pt-3 ps-5">
      <div className="cubs-flag ps-3 pe-3 mb-3">
        <h1 className="mb-0">W</h1>
      </div>

      <p className="mb-0">Cubs Play Today</p>
      <p className="mb-0">Cory Cox &copy; </p>
      <p className="email-me">
        <a href="mailto:corycox.com">Email</a>
      </p>
      <div>
        <FacebookShareButton
          className="facebook-share"
          url={"https://cubsplaytoday.com"}
        >
                  
          <FacebookIcon size={16} round />
                
        </FacebookShareButton>
        <TwitterShareButton
          className="twitter-share"
          url={"https://cubsplaytoday.com"}
        >
            
          <TwitterIcon size={16} round />
        </TwitterShareButton>
      </div>
    </footer>
  );
}

export default Footer;
