import './Header.scss'
import { useNavigate, useLocation } from 'react-router-dom';
import arrow from '../../assets/vector.png'

function Header({title, text}) {

  const navigate = useNavigate();
  const location = useLocation();

  function handleNavigate () {
    navigate(`/`)
  }

  return ( 
    <header className="header">
      <h1 className="header__title">{title} </h1>
      <p className="header__text">{text}</p>
      {location.pathname === '/cards' && (
      <article className='header__button' onClick={handleNavigate}>
        <img className='header__arrow' src={arrow} alt="" />
      </article>
    )}
    </header>
  )
}

export default Header;