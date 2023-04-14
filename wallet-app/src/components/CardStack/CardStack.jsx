import './CardStack.scss'
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function CardStack() {
  
const cards = useSelector((state) => { return state.cards });

const cardsInStore = cards.map((item) => {
  return <p key={item.}>item.cardNumber</p>
})

  return (
    <div>
    <Card />
    {cardsInStore}
    </div>
  )
}

export default CardStack;