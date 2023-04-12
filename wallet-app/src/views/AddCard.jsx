import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardForm from "../components/CardForm/CardForm";

function AddCard() {
  return (
    <div>
      <Header title='ADD A NEW BANK CARD' text='NEW CARD' />
      <Card />
      <CardForm />
    </div>
  )
}

export default AddCard;