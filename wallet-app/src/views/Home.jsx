import './Home.scss'
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { selectedCard } from '../actions/cardAction';
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

return (
    <div className='home'>
      <Header title='E-WALLET' text='ACTIVE CARD' />
        <article className="home__frame" >
          {selected && (
            <Card
              cardNumber={selected.cardNumber}
              cardName={selected.cardName} 
              valid={selected.valid}
              vendorImage={selected.vendor} 
              vendorColor={selected.color}
            />
          )}
        </article>
        <CardStack onCardClick={handleCardClick} />
        <button className='home__button' onClick={handeClick}>add a new card</button>
      </div>
    )
  }

export default Home;