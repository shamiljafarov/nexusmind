import Container from "../Container/Container";
import './ClientNavbar.scss'
import { useState } from "react";
import { Link } from "react-router-dom";
import profil from '../../assets/images/profil-picture.jpg'
import logo from '../../assets/images/logo.png'

export  default function ClientNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <Container> 
        <div className="header__wrapper">
          {/* Logo */}
          <a href="#" className="header__logo">
            <img src={logo} alt="Nexusmind Logo" />
          </a>

          {/* Burger button */}
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navigation */}
          <nav className={menuOpen ? "active" : ""}>
            <ul>
              <li><Link to='client-dashboard'>Dashboard</Link></li>
              <li><Link to='/'>Xidmətlər</Link></li>
              <li><Link to='/'>Resurslar</Link></li>
              <li><Link to='/'>Mesajlar</Link></li>
              <li><Link to='/'>Görüş bron et</Link></li>
            </ul>
          </nav>

          {/* Right side button */}
          <div className="hero__buttons">
            <Link to="/login" className="btn secondary">Görüş bron et</Link>
            <div className="profil">
                <Link to='/'><img src={profil}/></Link>
            </div>
          </div>
        </div>
      </Container>
    )
}