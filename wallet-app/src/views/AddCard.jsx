import './AddCard.scss'
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardForm from "../components/CardForm/CardForm";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadCardsLocalStorage } from '../actions/cardAction';

function AddCard() {

  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(loadCardsLocalStorage());
  }, []);

return (
    <div className='add-card'>
      <Header title='ADD A NEW BANK CARD' text='NEW CARD' />
      <CardForm />
    </div>
  )
}

export default AddCard;