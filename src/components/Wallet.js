import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Wallet = ({src, alt, name}) => {
  return (
      <div className=' flex w-[300px] justify-between items-center px-6 py-2 mb-2 border border-[#CFD8DC] rounded-lg'>
          <span className='flex items-center'> <img src={src} alt={alt} className='w-7 mr-2' /><p className='font-[Sora] font-black text-sm'>{name}</p> </span>
          <FontAwesomeIcon className='text-[#959DA6] text-sm' icon={faChevronRight}/>
    </div>
  )
}

export default Wallet;