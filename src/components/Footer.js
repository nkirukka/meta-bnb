import footerLogo from '../assets/footer-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
      <footer>
          <div>
              <img src={footerLogo} alt='logo' />
              <div>
                  <FontAwesomeIcon icon={faFacebookF}/>
                  <FontAwesomeIcon icon={faInstagram}/>
                  <FontAwesomeIcon icon={faTwitter}/>
              </div>
          </div>
    </footer>
  )
}

export default Footer;