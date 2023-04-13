import './CardForm.scss'
import Card from '../Card/Card';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import bitCoin from '../../assets/vendor-bitcoin.svg'
import ninjaBank from '../../assets/vendor-ninja.svg'
import blockChain from '../../assets/vendor-blockchain.svg'
import evilCorp from '../../assets/vendor-evil.svg'

function CardForm() {

  const navigate = useNavigate();
  

  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [valid, setValid] = useState('');
  const [verification, setVerification] = useState('');
  const [vendor, setVendor] = useState('');
 
  const handleCardNumber = (e) => {
    const limit = 16;
    setCardNumber(e.target.value.slice(0, limit));
  };

  const handleCardName = (e) => {
    setCardName(e.target.value);
  }


  const handleValid = (e) => {
    setValid(e.target.value);
  }

  const handleVerification = (e) => {
    setVerification(e.target.value);
  }

  const handleVendor = (selectedOption) => {
    
    setVendor(selectedOption)
  
  };

  function handeclick () {
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
    image: option.image //behövs för att kunna skicka med image till handleVendor funktionen
  }));

 
  
  return(
  <section>
    <Card cardNumber={cardNumber} cardName={cardName} valid={valid} vendorImage={vendor.image}  />
    <form className='form' action="">
      <label className='form__label' htmlFor="card number">card number</label>
      <input className='form__input' type="number" value={cardNumber} onChange={handleCardNumber} />
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
      <button className='form__button' onClick={handeclick}>add card</button>
      </form>
      </section>
  )
}

export default CardForm;