import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              {/* <i class='fab fa-typo3' /> */}
              <img src='images/logo.png' alt='KASHFY Logo' className='navbar-logo-img' />
              ASHFY
            </Link>
          </div>
          <small class='website-rights'>KASHFY © 2024</small>
          <div class='social-icons'>
          <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/miftahul-kashfy/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/miftahul.jannat.355'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/mj_kashfy/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link tiktok'
              to='https://www.tiktok.com/@mjkashfy'
              target='_blank'
              aria-label='Tiktok'
            >
              <i class='fab fa-tiktok' />
            </Link>
            <Link
              class='social-icon-link Pinterest'
              to='https://www.pinterest.com/kashfym/'
              target='_blank'
              aria-label='Pinterest'
            >
              <i class='fab fa-pinterest' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
