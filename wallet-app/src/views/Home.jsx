import './Home.scss'
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { selectedCard, deleteCard, loadCardsLocalStorage, loadActiveCard } from '../actions/cardAction';


//nästa steg är att kunna ta bort en produkt

function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  
const selected = useSelector((state) => { return state.selectedCard})


 function handeClick () {
   navigate(`/cards`)
  }

function handleCardClick(cardNumber) {
  dispatch(selectedCard(cardNumber));
}

function handleDeleteClick (cardNumber) {
  dispatch(deleteCard(cardNumber))
}

useEffect (() => {
  dispatch(loadCardsLocalStorage());
  dispatch(loadActiveCard());
}, []);

return (
    <div className='home'>
      <Header title='E-WALLET' text='ACTIVE CARD' />
      <section className='home__container'>
        <article className="home__frame" >
          {selected && (
            <div>
            <Card 
              cardNumber={selected.cardNumber}
              cardName={selected.cardName} 
              valid={selected.valid}
              vendorImage={selected.vendor} 
              vendorColor={selected.color}
            />
            <article className='home__delete-container'>
            <button className='home__delete' onClick={() => handleDeleteClick(selected.cardNumber)}>X</button>
            <p>Remove card from wallet</p>
          </article>
        </div> 
      )}
    </article>
      <CardStack onCardClick={handleCardClick} />
      <button className='home__button' onClick={handeClick}>add a new card</button>
    </section>
  </div>
)};

export default Home;