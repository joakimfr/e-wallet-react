import './CardStack.scss'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function CardStack() {
  
const cards = useSelector((state) => { return state.cards });

const cardsInStore = cards.map((item) => {
  return <div key={item.cardNumber}>
    <p></p>
  </div>
 
})

  return (
    <div>
    <Card />
   {cardsInStore}
    </div>
  )
}

export default CardStack;