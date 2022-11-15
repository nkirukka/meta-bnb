import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Wallet = ({src, alt, name}) => {
  return (
      <div>
          <span> <img src={src} alt={alt} /><p>{name}</p> </span>
          <FontAwesomeIcon icon={faChevronRight}/>
    </div>
  )
}

export default Wallet;