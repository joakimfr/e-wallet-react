import './Home.scss'
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function Home() {

  const navigate = useNavigate();

  const [selectedCard, setSelectedCard] = useState(null);

 function handeclick () {
   navigate(`/cards`)
  }

  return (
    <div className='home'>
      <Header title='E-WALLET' text='ACTIVE CARD' />
      <article className="frame">
   
      </article>
      
      <CardStack />
     
      <button className='button' onClick={handeclick}>add a new card</button>
    
    </div>
  )
}

export default Home;