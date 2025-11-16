import React from "react";
import "./CallToAction.scss";

const CallToAction = () => {
  return (
    <section className="cta">
      <div className="cta__box">
        <h2 className="cta__title">Ready to Take the Next Step?</h2>

        <p className="cta__text">
          Your journey towards mental wellness is unique, and we’re here to
          support you every step of the way. Reach out to schedule a
          consultation and discover how we can help.
        </p>

        <button className="cta__btn">Book a Free Consultation</button>
      </div>
    </section>
  );
};

export default CallToAction;
