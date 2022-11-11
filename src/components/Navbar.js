import { NavLink } from 'react-router-dom';
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
            <section className='w-[85%] mx-auto my-[2em] flex justify-between relative'>
                <img src={navLogo}
                    alt='logo'
                    title='Meta Logo'
                    className='w-[100px]'
                />
                <nav className={`Nav ${btnChange ? 'active' : null} absolute left-[110%] top-[-2em] text-white w-[80vw] h-[100vh] pt-[6em] px-[1em] text-xl `} >
                    <ul className='flex flex-col gap-8'>
                        {navItems.map((item) => {
                            return <li key={item.name}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'Active-nav' : 'hover:border-b-4 border-b-blue-600 transition-all')}
                                    to={item.link}
                                onClick={()=>{setBtnChange(false)}}>
                                    {item.name}
                                </NavLink>
                            </li>
                        })}
                    </ul>
                </nav>

                <button type='button'>Connect wallet </button>
                <button
                    type='button'
                    aria-label='Open nav menu'
                    role='Open'
                    onClick={handleClick}
                    className='relative'
                >
                    <img
                        src={btnChange ? closeIcon : hamburger}
                        alt={hamburger}
                    className='w-[20px] h-[20px]'/>
                </button>
            </section>
        </>
    );
};

export default Navbar;