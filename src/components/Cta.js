import ctaImg from '../assets/cta-img.png';


const Cta = () => {
    return (
        <section className='text-center mt-20 py-16 px-4 bg-[#A02279] text-white md:flex md:justify-center md:items-center md:text-left'>
            <div className='max-w-xl mx-auto  '>
                <h4 className='font-black text-4xl pb-8 xl:text-6xl'>Metabnb NFTs</h4>
                <p className='pb-8 xl:text-lg'>
                    Discover our NFT gift cards collection.
                    Loyal customers gets amazing gift cards
                    which are traded as NFTs. These NFTs gives
                    our cutomer access to loads of our
                    exclusive services.
                </p>
                <a href='/' className='bg-white text-[#A02279] py-3 px-6 rounded-lg '>Learn more</a>
            </div>
            <img src={ctaImg} alt='homes' className='mt-12 max-w-xl mx-auto xl:max-w-3xl' />
        </section>
    );
}

export default Cta;