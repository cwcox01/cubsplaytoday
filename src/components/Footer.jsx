import React from "react";

// importing social media sharing
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import FooterContent from "./FooterContent";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer className="white-text-color d-flex flex-column align-items-center">
      <FooterContent />
      <div className="social-media-share white-background-color d-flex justify-content-center">
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
      <FooterNav />
    </footer>
  );
}

export default Footer;
