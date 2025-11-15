import "./_Header.scss";
import Container from "../Container/Container";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Container> 
        <div className="header__wrapper">
          {/* Logo */}
          <a href="#" className="header__logo">
            <img src="src/assets/images/logo.png" alt="Nexusmind Logo" />
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
              <li><a href="#home">Ana səhifə</a></li>
              <li><a href="#about">Haqqımızda</a></li>
              <li><a href="#psychologists">Psixoloqlar</a></li>
              <li><a href="#services">Xidmətlər</a></li>
              <li><a href="#faq">Əlaqə</a></li>
              <li><a href="#login">Daxil ol</a></li>
            </ul>
          </nav>

          {/* Right side button */}
          <div className="hero__buttons">
            <Link to="/login" className="btn secondary">Daxil ol</Link>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
