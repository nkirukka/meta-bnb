import ctaImg from '../assets/cta-img.png';


const Cta = () => {
    return (
        <section>
            <div>
                <h4>Metabnb NFTs</h4>
                <p>
                    Discover our NFT gift cards collection.
                    Loyal customers gets amazing gift cards
                    which are traded as NFTs. These NFTs gives
                    our cutomer access to loads of our
                    exclusive services.
                </p>
                <a href='/'>Learn more</a>
            </div>
            <img src={ctaImg} alt='homes' />
        </section>
    );
}

export default Cta;