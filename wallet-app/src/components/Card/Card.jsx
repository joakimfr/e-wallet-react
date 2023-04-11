import './Card.scss'
import chipDark from '../../assets/chip-dark.svg'
import bitCoin from '../../assets/vendor-bitcoin.svg'

function Card() {
  return (
  <section className="card">
    <article className='card__images'>
      <img className='card__chip' src={chipDark} alt="" />
      <img className='card__vendor' src={bitCoin} alt="" />
    </article>
    <p>XXXX XXXX XXXX XXXX</p>
    <article>
      <p>CARDHOLDER NAME</p>
      <p>VALID THRU</p>
    </article>
    <article>
      <p>FIRSTNAME LASTNAME</p>
      <p>MM/YY</p>
    </article>
  </section>
  )
}

export default Card