import React from "react";
import "./GuidingPrinciples.scss";

const GuidingPrinciples = () => {
  const items = [
    {
      icon: "🚀",
      title: "Our Mission",
      text: "To provide accessible, high-quality psychological support that empowers individuals to navigate life's challenges and foster mental wellness."
    },
    {
      icon: "👁️",
      title: "Our Vision",
      text: "A world where everyone has the tools and support to achieve mental and emotional balance, free from stigma."
    },
    {
      icon: "💙",
      title: "Our Values",
      text: "We uphold the highest standards of confidentiality, empathy, and evidence-based practice in every interaction."
    }
  ];

  return (
    <section className="guiding">
      <h2 className="guiding__title">Our Guiding Principles</h2>
      <p className="guiding__subtitle">
        Our commitment is to guide you with empathy, professionalism, and a deep
        understanding of the human experience. We were founded on the belief
        that everyone deserves access to quality mental healthcare in an
        environment of trust and respect.
      </p>

      <div className="guiding__cards">
        {items.map((item, i) => (
          <div className="guiding__card" key={i}>
            <div className="guiding__icon">{item.icon}</div>
            <h3 className="guiding__card-title">{item.title}</h3>
            <p className="guiding__card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuidingPrinciples;
