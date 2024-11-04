import { useState } from 'react'
import { Link } from 'react-scroll'
import '../../styles/components/header.scss'
import '../../styles/themes/global.scss'
import Portrait from '../../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu'

function Header() {

  const [isOpen, setIsOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header>
      <div className='nav-container'>
        <div className="logo">
          <Link to="banner" smooth={true} duration={1000}>
            <img className="portrait" src={Portrait} alt="Logo voidhidan"/>
          </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__list">
            <li>
              <Link to="apropos" smooth={true} duration={1000}>
                À propos
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={1000}>
                Compétences
              </Link>
            </li>
            <li>
              <Link to="portfolio" smooth={true} duration={1000}>
                Projets
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={1000}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="burger-menu">
          <MenuIcon className={`${isOpen ? 'open' : ''}`} style={{ color: '#F6F4F2' }} onClick={toggleMenu}/>
          <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <ul>
              <li>
                <Link to="apropos" smooth={true} duration={1000} onClick={toggleMenu}>
                  À propos
                </Link>
              </li>
              <li>
                <Link to="skills" smooth={true} duration={1000} onClick={toggleMenu}>
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={1000} onClick={toggleMenu}>
                  Projets
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={1000} onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header