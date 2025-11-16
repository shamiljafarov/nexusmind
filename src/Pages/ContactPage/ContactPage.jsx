import React from "react";
import "./ContactPage.scss";
import Header from "../../Components/Header/Header";
import Container from "../../Components/Container/Container";

export default function ContactPage() {
  return (
    <>
        <Header/>
        <Container>
            <div className="contact-page">

      {/* Header Section ------------------------------------------------ */}
      <div className="header-section">
        <h1>We're Here to Help</h1>
        <p>
          Reaching out is the first step. Please use the form below to send us a secure
          and confidential message, and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Info Cards ----------------------------------------------------- */}
      <div className="info-cards">
        <div className="card">
          <div className="icon">📞</div>
          <p className="label">Phone Number</p>
          <p className="value">+1 (555) 123-4567</p>
        </div>

        <div className="card">
          <div className="icon">📧</div>
          <p className="label">Email Address</p>
          <p className="value">contact@serenemind.com</p>
        </div>

        <div className="card">
          <div className="icon">📍</div>
          <p className="label">Clinic Address</p>
          <p className="value">
            123 Wellness Ave, Suite 100,<br />
            Tranquil City, TS 45678
          </p>
        </div>

        <div className="card">
          <div className="icon">⏰</div>
          <p className="label">Business Hours</p>
          <p className="value">Mon – Fri, 9:00 AM – 5:00 PM (EST)</p>
        </div>
      </div>

      {/* Form ----------------------------------------------------------- */}
      <div className="form-container">
        <h2>Send Us a Secure Message</h2>

        <form>
          <div className="row">
            <div className="field">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email address" />
            </div>
          </div>

          <div className="field">
            <label>Subject</label>
            <input type="text" placeholder="How can we help?" />
          </div>

          <div className="field">
            <label>Your Message</label>
            <textarea placeholder="Please describe your needs..."></textarea>
          </div>

          <p className="privacy-note">
            Your privacy is important to us. All communications are confidential and secure.
          </p>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Disclaimer ------------------------------------------------------ */}
      <div className="disclaimer">
        <span className="icon">⚠️</span>
        <div>
          <strong>Emergency Disclaimer</strong><br />
          If you are in a crisis or any other person may be in danger, please do not use this site.
          Contact your local emergency services immediately.
        </div>
      </div>

      {/* Footer ---------------------------------------------------------- */}
      <footer>
        <p>© 2024 SereneMind Support. All Rights Reserved.</p>

        <div className="links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    </div>
        </Container>
    </>
  );
}
