import Card from "./Card"

const numCard = 4;
const CardContainer = () => {
    const imgSrc = [
        { source: 'places-imgs/condo.png' },
        { source: 'places-imgs/night.png' },
        { source: 'places-imgs/palms.png' },
        { source: 'places-imgs/playground.png' },
    ];
    const imgSrc2 = [
        { source: 'places-imgs/tree.png' },
        { source: 'places-imgs/stripes.png' },
        { source: 'places-imgs/magic.png' },
        { source: 'places-imgs/scraper.png' },
    ];
    return (
        <section className="mt-10">
            <h3 className="text-center text-2xl font-black my-20 md:text-3xl">Inspiration for your next adventure</h3>
            <div className={`flex flex-row w-[90%] mx-auto flex-wrap`}>
                {[...Array(numCard)].map((item, idx) => {
                     return <Card key={idx} src={imgSrc[idx].source} />
                    
                })}
            </div>
            <div className={`flex-row w-[90%] mx-auto flex-wrap hidden md:flex`}>
                {[...Array(numCard)].map((item, idx) => {
                    return <Card key={idx} src={imgSrc2[idx].source} />
                })}
            </div>
        </section>
    );
}

export default CardContainer;