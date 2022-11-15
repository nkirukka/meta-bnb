import { useEffect, useState } from 'react';
import settingsIcon from '../assets/settings.svg';

const Filter = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='flex flex-col justify-end items-end gap-10 mt-40 w-[80%] mx-auto 
        md:justify-center md:items-center md:gap-0 md:-mb-9'>

            <div onClick={handleOpen} className=' flex gap-4 border-2 border-[#B4B4B4] py-2 px-4 cursor-pointer md:self-end'>
                <p>Location</p>
                <img src={settingsIcon} alt='settings' className='w-6' />
            </div>
            {isOpen && <ul className='flex flex-col gap-2 bg-white shadow-sm shadow-black py-3 px-5 absolute top-[35%] 
            md:flex-row md:justify-evenly md:w-[80%] md:relative md:top-[-2.9em] md:self-start md:shadow-none md:bg-none'>
                <li>Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li className='whitespace-nowrap'>Fantastic city</li>
                <li>Beach</li>
                <li>Cabins</li>
                <li className='whitespace-nowrap'>Off-grid</li>
                <li>Farm</li>
            </ul>}
        </div>
    );
}

export default Filter;