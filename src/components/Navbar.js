import { NavLink, Link } from 'react-router-dom';
import navLogo from '../assets/nav-logo.svg';
import hamburger from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close.svg';
import { useState } from 'react';

const Navbar = () => {
    const [btnChange, setBtnChange] = useState(false);
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Places To Stay',
            link: '/places-to-stay'
        },
        {
            name: 'NFTs',
            link: '/nfts'
        },
        {
            name: 'Community',
            link: '/community'
        }
    ]
    const handleClick = () => {
        setBtnChange(!btnChange);
    }
    return (
        <>
            <section className='w-[90%] max-w-[75em] mx-auto my-[2em] flex justify-between items-end relative'>
                
                {/* ### NAV LOGO */}
                <Link
                    to='/'>
                    <img
                        src={navLogo}
                        alt='logo'
                        title='Meta Logo'
                        className='w-[120px] md:w-[150px]'
                    />
                </Link>

                {/* ### NAV MENU */}
                <nav className={`Nav ${btnChange ? 'active' : null} absolute bg-[#A02279] translate-x-[100vw] top-[-2em] text-white w-[80vw] h-[100vh] pt-[6em] px-[1em] text-xl 
                md:relative md:left-0 md:h-auto md:w-auto md:top-0 md:pt-0 md:text-[#434343] md:bg-transparent`} >
                    <ul className='flex flex-col gap-8 md:flex-row'>
                        {navItems.map((item) => {
                            return <li key={item.name}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'Active-nav whitespace-nowrap' : 'hover:border-b-4 border-b-blue-600 transition-all whitespace-nowrap')}
                                    to={item.link}
                                    onClick={() => { setBtnChange(false) }}>
                                    {item.name}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </nav>

                {/* ### CONNECT WALLET */}
                <button
                    type='button'
                    className='text-xs bg-[#A02279] px-4 py-2 text-white rounded hover:bg-[#b62989] transition-all whitespace-nowrap'
                >
                    Connect wallet
                </button>
                
                {/* ### TOGGLE NAV MENU */}
                <button
                    type='button'
                    aria-label='Open nav menu'
                    role='Open'
                    onClick={handleClick}
                    className='relative md:hidden'
                >
                    <img
                        src={btnChange ? closeIcon : hamburger}
                        alt={hamburger}
                        className='w-[15px] h-[15px]' />
                </button>
            </section>
        </>
    );
};

export default Navbar;