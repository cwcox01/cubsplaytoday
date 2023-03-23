import React from "react";

// importing social media sharing
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import FooterContent from "./FooterContent";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer>
      <FooterContent />
      <div className="social-media-share">
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
