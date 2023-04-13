import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import { useNavigate } from "react-router-dom";
function Home() {

  const navigate = useNavigate();

 function handeclick () {
   navigate(`/cards`)
  }

  return (
    <div>
      <Header title='E-WALLET' text='ACTIVE CARD' />
      <h1>Home</h1>
      <Card />
      <button onClick={handeclick}>add a new card</button>
    </div>
  )
}

export default Home;