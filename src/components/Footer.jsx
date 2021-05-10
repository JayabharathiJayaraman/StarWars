import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              StarWars
              </Link>
          </div>
          <small class='website-rights'>Starwars © 2021</small>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <Link className='home' to='/'>Home</Link>
            </div>
            <div class='footer-link-items'>
              <Link className='people' to='/people'>People</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Footer;