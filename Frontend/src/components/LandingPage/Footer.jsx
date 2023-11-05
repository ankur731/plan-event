import React from 'react'
import "./Footer.css";
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <div className='footer'>
    <div className='footer-header'>
      <div className='footer-row'>
        <h1>L O G O</h1>
        <div className='socialMediaIcons'>
            <InstagramIcon />
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
        </div>
      </div>
      <div className='footer-row'>
        <h4>Service</h4>
        <p>Home</p>
        <p>Service</p>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Gallery</p>
      </div>
      <div className='footer-row'>
        <h4>Links</h4>
        <p>Home</p>
        <p>Service</p>
        <p>Contact Us</p>
        <p>About Us</p>
        <p>Gallery</p>
      </div>
      <div className='footer-row'>
        <h4>Reach us at</h4>
        <p>99XXXXXX67</p>
        <p>info@directory.com</p>
      </div>
      </div>
      <div className='footer-bottom'>
      <EmailIcon  className='email-icon'/>
        <p>info@directory.com</p>
        <h6>Copyright © 2023 test. All Rights Reserved.</h6>
      </div>
    </div>
  )
}

export default Footer
