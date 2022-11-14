import footerLogo from '../assets/footer-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#1D1D1E] py-10 px-16 text-white flex flex-col-reverse text-center
      md:flex-row md:justify-around md:items-center md:text-left'>
            <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
                <img src={footerLogo} alt='logo' className='w-48' />

                {/* ### SOCIALS */}
                <div className='flex gap-4 my-11 justify-center md:justify-start'>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
                <p>&copy; 2022 Metabnb </p>
            </div>

            {/* ### FOOTER NAV */}
            <section className='flex flex-col gap-9 py-10 md:w-[70%] md:flex-row md:justify-around'>
              
                {/* ### COMMNUNITY */}
                <ul className='flex flex-col gap-1'>
                    <li className='pb-6'><Link className='font-black' to={'/community'}>Community</Link></li>
                    <li className='font-light'><a href='/nft'>NFT</a></li>
                    <li className='font-light'><a href='/tokens'>Tokens</a></li>
                    <li className='font-light'><a href='/landlords'>Landlord</a></li>
                    <li className='font-light'><a href='/discord'>Discord</a></li>
                </ul>

                {/* ### PLACES */}
                <ul className='flex flex-col gap-1'>
                    <li className='pb-6'><Link className='font-black' to={'/places'}>Places</Link></li>
                    <li className='font-light'><a href='/castle'>Castle</a></li>
                    <li className='font-light'><a href='/farms'>Farms</a></li>
                    <li className='font-light'><a href='/beach'>Beach</a></li>
                    <li className='font-light'><a href='/Learn-more'>Learn more</a></li>
                </ul>

                {/* ### ABOUT US */}
                <ul className='flex flex-col gap-1'>
                    <li className='pb-6'><Link className='font-black' to={'/about-us'}>About us</Link></li>
                    <li className='font-light'><a href='/road-map'>Road map</a></li>
                    <li className='font-light'><a href='/creators'>Creators</a></li>
                    <li className='font-light'><a href='/career'>Career</a></li>
                    <li className='font-light'><a href='/contact-us'>Contact us</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;