import './CardStack.scss'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function CardStack() {
  
const cards = useSelector((state) => { return state.cards });

const cardsInStore = cards.map(item => (
  <Card
    key={item.cardNumber} // Use a unique key for each card
    cardNumber={item.cardNumber} // Pass cardNumber as a prop to Card component
    cardName={item.cardName} // Pass cardName as a prop to Card component
    valid={item.valid} // Pass valid as a prop to Card component
    vendorImage={item.vendor} // Pass vendorImage as a prop to Card component
   
  />
  
));
console.log(cards)

  return (
    <div>
  
   {cardsInStore}
    </div>
  )
}

export default CardStack;