import { Link } from 'react-router-dom';


const Community = () => {
  return (
    <section className="h-[60.5vh] w-[80%] m-auto text-center pt-20">
      <div className='max-w-3xl w-[100%] m-auto'>
        <h2 className='text-7xl md:text-9xl text-[#A02279] font-black mb-9'>SORRY</h2>
        <p className='font-black text-xl mb-5'>PAGE UNDER CONSTRUCTION</p>
        <p className='mb-10'>Please check back later.</p>
        <Link to='/' className='bg-[#A02279] py-3 px-6 text-white hover:bg-[#b62989] transition-colors'>GO TO HOMEPAGE</Link>
      </div>
    </section>
  );
}

export default Community