import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const OverlayWallet = () => {
    return (
        <section>
            <header>
                <h4>Connect Wallet</h4>
                <span><FontAwesomeIcon icon={faClose}/></span>
            </header>

            <div>
                <h5>Choose your preferred wallet:</h5>
            </div>
        </section>
    );
}
    
export default OverlayWallet;