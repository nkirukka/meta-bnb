import Card from "./Card"

const numCard = 4;
const CardContainer = () => {

    return (
        <section className="mt-10">
            <h3 className="text-center text-2xl font-black mb-5">Inspiration for your next adventure</h3>
            <div className={`flex flex-row w-[90%] mx-auto flex-wrap`}>
                {[...Array(numCard)].map((item, idx) => {
                    return <Card key={idx} />
                })}
            </div>
            <div className={`flex-row w-[90%] mx-auto flex-wrap hidden md:flex`}>
                {[...Array(numCard)].map((item, idx) => {
                    return <Card key={idx} />
                })}
            </div>
        </section>
    );
}

export default CardContainer;