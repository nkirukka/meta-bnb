import heroImg from '../assets/hero-img.png';
import mbToken from '../assets/mb-token.png';
import metaMask from '../assets/meta-mask.svg';
import openSea from '../assets/open-sea.svg';


const Hero = () => {
    return (
        <section>
            <div className='flex flex-col-reverse w-[90%] mx-auto mt-24 
            md:flex-row md:justify-center md:items-center md:px-1 md:gap-6'>
                <div className='md:w-[50%] xl:px-24 '>
                    <h1 className='text-center text-3xl my-8 text-[#434343] 
                    md:text-5xl md:text-left'>Rent a <span className='font-semibold text-[#A02279] '>Place </span>
                        away from <span className='font-semibold text-[#A02279] '>Home</span> in the <span className='font-semibold text-[#A02279] '>Metaverse</span></h1>
                    <p className='text-center md:text-left text-[#434343] mb-8 md:text-xl'>
                        We provide you access to luxury and affordable
                        houses in the metaverse, get a chance to turn
                        your imagination to reality at your comfort zone
                    </p>

                {/* ### SEARCH */}
                    <form className='md:flex'>
                        <input type='text'
                            placeholder='Search for location'
                            className='border-[1px] w-[100%] border-[#A3A3A3] py-2 pl-2 mb-2 rounded md:h-14 md:rounded-tr-none md:rounded-br-none md:w-[60%] md:border-r-0' />
                        <button type="submit"
                            className='w-[100%] bg-[#A02279] text-white rounded-md py-2 hover:bg-[#b62989] transition-colors md:h-14 md:rounded-tl-none md:rounded-bl-none md:w-[40%] '>Search</button>
                    </form>
                </div>

                <div className='max-w-[400px] mx-auto md:max-w-[50%]'><img src={heroImg} alt='banner' title='Home preview' /></div>
            </div>

            <footer className='flex flex-col max-h-32 mt-10 Hero-footer p-3 bg-[#A02279] md:flex-row'>
                <img src={mbToken} alt='MB Token' className='' />
                <img src={metaMask} alt='Meta mask' className='max-w-16' />
                <img src={openSea} alt='Open sea' className='max-w-16' />
            </footer>
        </section>
    );
}

export default Hero;