import settingsIcon from '../assets/settings.svg';

const Filter = () => {
  return (
      <div className='flex justify-center w-[80%] mx-auto'>
          <ul className='flex gap-6'>
              <li>Restaurant</li>
              <li>Cottage</li>
              <li>Castle</li>
              <li>Fantastic city</li>
              <li>Beach</li>
              <li>Cabins</li>
              <li>Off-grid</li>
              <li>Farm</li>
          </ul>

          <div className='flex'>
              <p>Location</p>
              <img src={ settingsIcon} alt='settings' className='w-6'/>
          </div>
    </div>
  )
}

export default Filter;