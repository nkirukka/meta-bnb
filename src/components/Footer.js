import footerLogo from '../assets/footer-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className='bg-[#1D1D1E] py-10 px-16'>
          <div>
              <img src={footerLogo} alt='logo' />

              {/* ### SOCIALS */}
              <div>
                  <FontAwesomeIcon icon={faFacebookF}/>
                  <FontAwesomeIcon icon={faInstagram}/>
                  <FontAwesomeIcon icon={faTwitter}/>
              </div>
              <p>&copy; 2022 Metabnb </p>
          </div>

          {/* ### FOOTER NAV */}
          <section>
              
              {/* ### COMMNUNITY */}
              <ul>
                  <li><Link to={'/community'}>Community</Link></li>
                  <li><a href='/nft'>NFT</a></li>
                  <li><a href='/tokens'>Tokens</a></li>
                  <li><a href='/landlords'>Landlord</a></li>
                  <li><a href='/discord'>Discord</a></li>
              </ul>

              {/* ### PLACES */}
              <ul>
                  <li><Link to={'/places'}>Community</Link></li>
                  <li><a href='/castle'>Castle</a></li>
                  <li><a href='/farms'>Farms</a></li>
                  <li><a href='/beach'>Beach</a></li>
                  <li><a href='/Learn-more'>Learn more</a></li>
              </ul>

              {/* ### ABOUT US */}
              <ul>
                  <li><Link to={'/about-us'}>About us</Link></li>
                  <li><a href='/road-map'>Road map</a></li>
                  <li><a href='/creators'>Creators</a></li>
                  <li><a href='/career'>Career</a></li>
                  <li><a href='/contact-us'>Contact us</a></li>
              </ul>
          </section>
    </footer>
  )
}

export default Footer;