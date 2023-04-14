import './Card.scss'
import chipDark from '../../assets/chip-dark.svg'
import bitCoin from '../../assets/vendor-bitcoin.svg'

function Card(props) {

  const { cardNumber } = props;
  const { cardName } = props;
  const { valid } = props;
  const { vendorImage } = props;
 // console.log(vendorImage)

  const displayedCardNumber = cardNumber
    ? cardNumber.padEnd(16, 'X').match(/.{1,4}/g).join(' ')
    : 'XXXX XXXX XXXX XXXX';



  return (


  <section className="card">
    <article className='card__box'>
      <img className='card__chip' src={chipDark} alt="" />
      { vendorImage? 
      <img className='card__vendor' src={vendorImage} alt="" />
      : <img className='card__vendor' src={bitCoin} alt="" />
      }
    </article>
    <p className='card__number'>{displayedCardNumber}</p>
    <article className='card__box'>
      <p className='card__titles'>CARDHOLDER NAME</p>
      <p className='card__titles'>VALID THRU</p>
    </article>
    <article className='card__box'>
      { cardName?
      <p className='card__info'>{cardName}</p>
      : <p className='card__info'>FIRSTNAME LASTNAME</p>
      }
      <p className='card__info'>MM/YY</p>
    </article>
  </section>
  )
}

export default Card