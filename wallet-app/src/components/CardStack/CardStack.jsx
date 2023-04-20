import './CardStack.scss'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function CardStack({ onCardClick }) {
  
const cards = useSelector((state) => { return state.cards });

function handleCardClick(cardNumber) {
  onCardClick(cardNumber)
}

const cardsInStore = cards.map((item) => (
  
  <div className='card-stacked__card' onClick={() => handleCardClick(item.cardNumber)} key={item.cardNumber} >
    <Card
      key={item.cardNumber} // props som skickas till min card component
      cardNumber={item.cardNumber} 
      cardName={item.cardName} 
      valid={item.valid}
      vendorImage={item.vendor} 
      vendorColor={item.color}
    />
  </div>

));


  return (
    <div className='card-stacked'>
      { cardsInStore }
    </div>
  )
}

export default CardStack;