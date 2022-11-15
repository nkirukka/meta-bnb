import Card from "../components/Card";
import Filter from "../components/Filter";


const PlacesToStay = ({srcs}) => {
  return (
    <section>

      {/* ### FILTER */}
      <Filter/>

       <div className="flex flex-wrap gap-6 mt-12 mb-28 w-[80%] mx-auto">
      {srcs.map((item) => {
        return <Card key={item} src={item} />
      })}
    </div>
   </section>
  )
}
PlacesToStay.defaultProps = {
  srcs : [
    'places-imgs/condo.png',
    'places-imgs/magic.png',
    'places-imgs/night.png',
    'places-imgs/palms.png',
    'places-imgs/playground.png',
    'places-imgs/scraper.png',
    'places-imgs/stripes.png',
    'places-imgs/tree.png',
    'places-imgs/Frame151.png',
    'places-imgs/Frame152.png',
    'places-imgs/Frame153.png',
    'places-imgs/Frame154.png',
    'places-imgs/Frame155.png',
    'places-imgs/Frame156.png',
    'places-imgs/Frame157.png',
    'places-imgs/Frame150.png',
  ]
}

export default PlacesToStay;