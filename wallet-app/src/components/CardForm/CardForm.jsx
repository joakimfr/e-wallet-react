import './CardForm.scss'
import { useState } from 'react';
import Select from 'react-select';
import bitCoin from '../../assets/vendor-bitcoin.svg'
import ninjaBank from '../../assets/vendor-ninja.svg'
import blockChain from '../../assets/vendor-blockchain.svg'
import evilCorp from '../../assets/vendor-evil.svg'

function CardForm() {

  const [vendor, setVendor] = useState();
  console.log(vendor)

 



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
     
  }));

 
  
  return(
    <form className='form' action="">
      <label className='form__label' htmlFor="card number">card number</label>
      <input className='form__input' type="text" />
      <label className='form__label' htmlFor="cardholder name">cardholder name</label>
      <input className='form__input' type="text" />
      <article className='form__dobule'>
        <label className='form__label' htmlFor="">valid thru 
          <input className='form__input' type="text" />
        </label>
        <label className='form__label' htmlFor="ccv">ccv
          <input className='form__input' type="text" />
        </label>
        
      </article>
      <label className='form__label' htmlFor="vendor">vendor</label>
      <Select 
        classNamePrefix="select"
        options={ optionVendors }
        isSearchable={ false }
        onChange={setVendor}
        placeholder=''
        />
      </form>
  )
}

export default CardForm;