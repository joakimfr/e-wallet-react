import './Card.scss'
import chipDark from '../../assets/chip-dark.svg'
import bitCoin from '../../assets/vendor-bitcoin.svg'
import chipLight from '../../assets/chip-light.svg'

function Card({ cardNumber = '', cardName = '', valid = '', vendorImage = bitCoin, vendorColor }) {

 // const { cardNumber } = props;
 // const { cardName } = props;
 // const { valid } = props;
//  const { vendorImage } = props;
 // console.log(vendorImage)

  const displayedCardNumber = cardNumber
    ? cardNumber.padEnd(16, 'X').match(/.{1,4}/g).join(' ')
    : 'XXXX XXXX XXXX XXXX';


  
  return (


  <section className="card" style={{ background: vendorColor }}>
    <article className='card__box'>
      <img className='card__chip' src={chipDark} alt="" />
     
      <img className='card__vendor' src={vendorImage} alt="" />
     
      
    </article>
    <p className='card__number'>{displayedCardNumber}</p>
    <article className='card__box'>
      <p className='card__titles'>CARDHOLDER NAME</p>
      <p className='card__titles'>VALID THRU</p>
    </article>
    <article className='card__box'>
      <p className='card__info'>{cardName || 'FIRSTNAME LASTNAME'}</p>
      <p className='card__info'>{valid || 'MM/YY'}</p>
    </article>
  </section>
  )
}

export default Card