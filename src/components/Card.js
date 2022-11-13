
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/fontawesome-free-solid';

const Card = (src) => {

    const numStars = 5;
    return (
        <article className='my-2 border-2 border-[#D7D7D7] w-[22em] mx-auto rounded-2xl text-sm'>
            <img src={src} alt='card' className='w-[90%] mx-auto my-4' />

            {/* ### DETAILS */}
            <div className='flex justify-between gap-6 w-[90%] mx-auto mt-8 mb-5'>
              
                {/* First part details */}
                <div>
                    <h4 className='mb-2'>Desert King</h4>
                    <p className='mb-2'>2345KM away</p>
                    <div className='flex gap-3'>
                        {[...Array(numStars)].map((star, index) => {
                            return <FontAwesomeIcon key={index} icon={faStar} className='text-[#A02279]' />
                        })}
                    </div>
                </div>

                {/* Second part details */}
                <div>
                    <h4 className='font-black mb-2'>1MBT per night</h4>
                    <p className='pr-8'>Available for 2weeks stay</p>
                </div>
            </div>

        </article>
    );
}

export default Card