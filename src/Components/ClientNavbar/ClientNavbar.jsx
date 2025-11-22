import { useState } from "react";
import { NavLink } from "react-router-dom";
import profil from '../../assets/images/profil-picture.jpg'
import logo from '../../assets/images/logo.png'
import './ClientNavbar.scss'

export default function ClientNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <aside className={`client-sidebar ${menuOpen ? "open" : ""}`}>
        
        {/* Logo */}
        <div className="csb-logo">
          <img src={logo} alt="logo" />
          <h2>NexusMind</h2>
        </div>

        {/* Menu */}
        <nav className="csb-menu">
          <NavLink to="/client-dashboard">Dashboard</NavLink>
          <NavLink to="/">Sessions</NavLink>
          <NavLink to="/">Messages</NavLink>
          <NavLink to="/">Resources</NavLink>
          <NavLink to="/">Profile</NavLink>
        </nav>

        {/* Book Button */}
        <button className="csb-book-btn">Book a Session</button>

        {/* Profile Box */}
        <div className="csb-profile">
          <img src={profil} alt="profil" />
          <div>
            <p className="name">Maria Sanchez</p>
            <p className="email">maria.sanchez@email.com</p>
          </div>
        </div>
      </aside>

      {/* Mobile Burger */}
      <div className="client-burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
