import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import Wallet from './Wallet';

import foxIcon from '../assets/fox.png';
import walletIcon from '../assets/wallet-connect.png';

const OverlayWallet = () => {
    return (
        <section>
            <header>
                <h4>Connect Wallet</h4>
                <span><FontAwesomeIcon icon={faClose} /></span>
            </header>

            <div>
                <h5>Choose your preferred wallet:</h5>
                <Wallet src={foxIcon} alt='Metamask' name='MetaMask' />
                <Wallet src={walletIcon} alt='Wallet Connect' name='Wallet Connect' />
            </div>
        </section>
    );
}
    
export default OverlayWallet;