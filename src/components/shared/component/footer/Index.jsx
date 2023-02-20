import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          <h3>Are you ready to redefine your own customers' experience?</h3>
          <button className="btn btn-getstarted" type="button">Get Started</button>
          <h6>Melbourne, Sydney, Brisbane</h6>
          <p>1300 554 891 (+61 3 9993 4402), <a href="mailto:info@getstarted.com.au">info@getstarted.com.au</a></p>
        </div>
        <div className="footer-copyright-links">
          <p>©2016 Get Started. All Rights Reserved. Site Map . Privacy . T’s & C’s.</p>
          <div className="socials-container">
            <p>Follow US</p>
            <img src="/icons/socials/icon-social-facebook-rev.png" alt="Facebook"/>
            <img src="/icons/socials/icon-social-twitter-rev.png" alt="Twitter"/>
            <img src="/icons/socials/icon-social-google-rev.png" alt="Google Plus"/>
            <img src="/icons/socials/icon-social-linkedin-rev.png" alt="LinkedIn"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
