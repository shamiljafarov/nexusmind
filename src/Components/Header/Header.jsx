import './_Header.scss'
import Container from '../Container/Container' 
import { useState } from "react";  

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Container>
        <div className="header__wrapper">
          <a href="#">
            <img className="header__logo" src="src/assets/images/logo.png" alt="logo" />
          </a>

          {/* Бургер кнопка */}
          <div
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Навигация */}
          <nav className={menuOpen ? "active" : ""}>
            <ul>
              <li><a href="#home">Ana səhifə</a></li>
              <li><a href="#about">Haqqımızda</a></li>
              <li><a href="#psychologists">Psixoloqlar</a></li>
              <li><a href="#services">Xidmətlər</a></li>
              <li><a href="#contact">Əlaqə</a></li>
            </ul>
          </nav>

          <div className="header__login">
            <button className="header__signUp__btn">Sign Up</button>
            <button className="header__login__btn">Login</button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header; 