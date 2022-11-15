import settingsIcon from '../assets/settings.svg';

const Filter = () => {
  return (
      <div className='flex justify-center items-center gap-10 mt-40 w-[80%] mx-auto'>
          <ul className='flex gap-20'>
              <li>Restaurant</li>
              <li>Cottage</li>
              <li>Castle</li>
              <li>Fantastic city</li>
              <li>Beach</li>
              <li>Cabins</li>
              <li>Off-grid</li>
              <li>Farm</li>
          </ul>

          <div className='flex gap-4 border-2 border-[#B4B4B4] py-2 px-4'>
              <p>Location</p>
              <img src={ settingsIcon} alt='settings' className='w-6'/>
          </div>
    </div>
  )
}

export default Filter;