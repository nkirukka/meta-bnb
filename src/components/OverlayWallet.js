import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Wallet from './Wallet';

import foxIcon from '../assets/fox.png';
import walletIcon from '../assets/wallet-connect.png';

const OverlayWallet = (props) => {
    const handleClick = () =>{
        props.open(false);
    }
    return (
        <section
            onClick={handleClick}
            className='bg-[#0f00007a] absolute top-0 bottom-0 left-0 right-0 pt-40 z-10'>
            <div className='bg-white w-[80%] max-w-[25em] mx-auto rounded-2xl'>
                <header className='flex w-[100%] justify-between py-4 px-6 border-b border-[#CFD8DC]'>
                    <h4 className='font-black'>Connect Wallet</h4>
                    <span><FontAwesomeIcon onClick={handleClick} className='text-[#575454] cursor-pointer' icon={faClose} /></span>
                </header>

                <div className='px-6 py-4' >
                    <h5 className='text-sm pb-1'>Choose your preferred wallet:</h5>
                    <Wallet src={foxIcon} alt='Metamask' name='MetaMask' />
                    <Wallet src={walletIcon} alt='Wallet Connect' name='Wallet Connect' />
                </div>
            </div>
        </section>
    );
}
    
export default OverlayWallet;