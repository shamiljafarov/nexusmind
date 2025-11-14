import React from "react";
import "./Hero.scss";
import Container from "../Container/Container";

const Hero = () => {
  return (
    <Container>
      <div className="hero">
      <div className="hero__content">
        <h1>
          Yenilikçi psixoloji dəstək   <br />platforması ilə balanslı həyat
        </h1>
        <p>
          Duyğularını anla, düşüncəni gücləndir
        </p>

        <div className="hero__buttons">
          <button className="btn primary">Elə indi başla</button>
          <button className="btn secondary">Təlimat videosu</button>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Hero;
