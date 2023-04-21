import './CardForm.scss'
import Card from '../Card/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { addCard } from '../../actions/cardAction';
import Select from 'react-select';
import bitCoin from '../../assets/vendor-bitcoin.svg'
import ninjaBank from '../../assets/vendor-ninja.svg'
import blockChain from '../../assets/vendor-blockchain.svg'
import evilCorp from '../../assets/vendor-evil.svg'

function CardForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [valid, setValid] = useState('');
  const [verification, setVerification] = useState('');
  const [vendor, setVendor] = useState('');

  const cardNumbersInStore = useSelector((state) => { return state.cards });
  const cardNumberExists = cardNumbersInStore.some(card => card.cardNumber === cardNumber) 
  
 
  const handleCardNumber = (e) => {
   setCardNumber(e.target.value.replace(/\D/g,''));  //Gör så att bara siffror kan skrivas, använder den funktionen för att kunna använda maxLength{} i input som inte fungerar om man har type=number
  };

  const handleCardName = (e) => {
    setCardName(e.target.value.toUpperCase());
  }

  const handleValid = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    let seperatedValue = value;
    if (value.length > 2) {
      seperatedValue = value.substring(0, 2) + '/' + value.substring(2);
    }
    setValid(seperatedValue);
  };

  const handleVerification = (e) => {
    setVerification(e.target.value.replace(/\D/g,''));
  }

  const handleVendor = (selectedOption) => {
    setVendor(selectedOption)
  };


  function handleFormClick (event) {
    event.preventDefault();
    if (cardNumber.length !==16 || !cardName || valid.length !==5 || verification.length !==3 || !vendor ) {
      alert('All fields need to be filled')
      return;
    }
    if (cardNumberExists) {
      alert('You already have a card with that card number')
      return
    }
      const formData = {
      cardNumber: cardNumber,
      cardName: cardName,
      valid: valid,
      verification: verification,
      vendor: vendor.image,
      color: vendor.color
    };
      dispatch(addCard(formData));
      navigate(`/`)
    }

  const options = [
    { value: 'bitcoin', label: 'BITCOIN INC', image: bitCoin, color: '#FFAE34' },
    { value: 'ninjabank', label: 'NINJA BANK', image: ninjaBank, color: '#222222' },
    { value: 'blockchain', label: 'BLOCK CHAIN INC', image: blockChain, color: '#8B58F9' },
    { value: 'evilcorp', label: 'EVIL CORP', image: evilCorp, color: '#F33355' },
  ];

  const optionVendors = options.map((option) => ({
    value: option.value,
    label: (
      <div className='option'>
        { option.label }
        <article className='option__circle' style={{ background: option.color }}>
          <img className='option__image' src={ option.image } alt="" />
        </article>
      </div>
    ),
    image: option.image, //behövs för att kunna skicka med image till handleVendor funktionen
    color: option.color
  }));

  return (

          <section className='cardform'>
            <Card cardNumber={cardNumber} cardName={cardName} valid={valid} vendorImage={vendor.image} vendorColor={vendor.color}  />
            <form className='form' action="">
              <label className='form__label' htmlFor="card number">card number</label>
              <input className='form__input' type="text" maxLength={16} value={cardNumber} onChange={handleCardNumber} />
              <label className='form__label' htmlFor="cardholder name">cardholder name</label>
              <input className='form__input' type="text" value={cardName} onChange={handleCardName} />
              <article className='form__dobule'>
                <label className='form__label' htmlFor="">valid thru 
                  <input className='form__input' type="text" maxLength={5} value={valid} onChange={handleValid} />
                </label>
                <label className='form__label' htmlFor="ccv">ccv
                  <input className='form__input' type="text" maxLength={3} value={verification} onChange={handleVerification} />
                </label>
              </article>
              <label className='form__label' htmlFor="vendor">vendor</label>
              <Select 
                classNamePrefix="select"
                options={ optionVendors }
                isSearchable={ false }
                onChange={handleVendor}
                placeholder=''
              />
            </form>
            <button className='form__button' onClick={handleFormClick}>add card</button>
          </section>
          )
        }

export default CardForm;