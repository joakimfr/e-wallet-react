

import './Header.scss'

function Header({title, texts}) {

 
  return ( 
    <header className="header">
      <h1 className="header__title">{title} </h1>
      <p className="header__text">{texts}</p>
    </header>
  )
}

export default Header;