import './Home.scss'
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { selectedCard, deleteCard } from '../actions/cardAction';


//nästa steg är att kunna ta bort en produkt

function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  
const selected = useSelector((state) => { return state.selectedCard})
    console.log(selected)

 function handeClick () {
   navigate(`/cards`)
  }

function handleCardClick(cardNumber) {
  dispatch(selectedCard(cardNumber));
}

function handleDeleteClick (cardNumber) {
  dispatch(deleteCard(cardNumber))
}

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
            <button className='home__delete' onClick={() => handleDeleteClick(selected.cardNumber)} >X</button>
            </div>
          )}

        </article>
        <CardStack onCardClick={handleCardClick} />
        <button className='home__button' onClick={handeClick}>add a new card</button>
        </section>
      </div>
    )
  }

export default Home;