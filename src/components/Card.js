import cardImg from '../assets/places-imgs/stripe2';

const Card = () => {
  return (
      <article>
          <img src={cardImg} alt='card' />
          <div>
              <h4>Desert King</h4>
              <p>2345km away</p>
          </div>
    </article>
  )
}

export default Card