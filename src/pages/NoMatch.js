import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
      <section className="h-[50.5vh] text-center pt-20">
          <div className='max-w-3xl m-auto'>
              <h2 className='text-9xl text-[#A02279] font-black mb-9'>Oops!</h2>
              <p className='font-black text-xl mb-5'>404 - PAGE NOT FOUND</p>
              <p className='mb-10'>The page you are looking for might been removed, had its name changed or is temporarily unavailable.</p>
              <Link to='/' className='bg-[#A02279] py-3 px-6 text-white hover:bg-[#b62989] transition-colors'>GO TO HOMEPAGE</Link>
          </div>
    </section>
  )
}

export default NoMatch;