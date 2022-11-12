import heroImg from '../assets/hero-img.png';
import mbToken from '../assets/mb-token.png';
import metaMask from '../assets/meta-mask.svg';
import openSea from '../assets/open-sea.svg';


const Hero = () => {
    return (
        <section>
            <div className='flex flex-col-reverse w-[90%] mx-auto mt-24 '>
                <div>
                    <h1 className='text-center text-3xl my-8 text-[#434343]'>Rent a <span className='font-semibold text-[#A02279] '>Place </span>
                        away from <span className='font-semibold text-[#A02279] '>Home</span> in the <span className='font-semibold text-[#A02279] '>Metaverse</span></h1>
                    <p className='text-center text-[#434343] mb-8'>
                        We provide you access to luxury and affordable
                        houses in the metaverse, get a chance to turn
                        your imagination to reality at your comfort zone
                    </p>

                {/* ### SEARCH */}
                    <form>
                        <input type='text' placeholder='Search for location' className='border-[1px] w-[100%] border-[#A3A3A3] py-2 pl-2 mb-2 rounded' />
                        <button type="submit" className='w-[100%] bg-[#A02279] text-white rounded-md py-2 hover:bg-[#b62989] transition-colors '>Search</button>
                    </form>
                </div>

                <div><img src={heroImg} alt='banner' title='Home preview' /></div>
            </div>

            <footer className='flex flex-col mt-10 Hero-footer p-3'>
                <img src={mbToken} alt='MB Token' />
                <img src={metaMask} alt='Meta mask' />
                <img src={openSea} alt='Open sea' />
            </footer>
        </section>
    );
}

export default Hero;