

import './Header.scss'

function Header({title, text}) {

 
  return ( 
    <header className="header">
      <h1 className="header__title">{title} </h1>
      <p className="header__text">{text}</p>
    </header>
  )
}

export default Header;