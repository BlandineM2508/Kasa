import { Link } from 'react-router-dom'
import LOGO from '../../public/assets/LOGO.svg'
import '../../src/style/header.scss'

function Header() {
  return (
    <div className="Header">
      <img className="Logo" src={LOGO} alt="logo du site" />
      <nav className="Navbar">
        <ul>
          <li>
            <Link className="Link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="Link" to="/a_propos">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
