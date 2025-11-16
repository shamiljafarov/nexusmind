import React from "react";
import "./TeamSection.scss";
import pschologist1 from '../../../assets/images/pschologist-1.png'
import pschologist2 from '../../../assets/images/pschologist-2.png'
import pschologist3 from '../../../assets/images/pschologist-3.png'



const TeamSection = () => {
  const experts = [
    {
      name: "Dr. Alisha Grant",
      title: "Licensed Clinical Psychologist",
      img: pschologist1, 
      desc: "Specializing in anxiety, CBT, and mindfulness-based stress reduction. Dr. Grant is passionate about empowering her clients to find inner peace."
    },
    {
      name: "Michael Chen",
      title: "Licensed Marriage & Family Therapist",
      img: pschologist2,
      desc: "With over 10 years of experience, Michael helps couples and families navigate complex relationship dynamics with compassion and clarity."
    },
    {
      name: "Dr. Sarah Jenkins",
      title: "Child & Adolescent Psychologist",
      img: pschologist3,
      desc: "Dr. Jenkins creates a safe and playful environment for young clients to explore their feelings and develop healthy coping mechanisms."
    }
  ];

  return (
    <section className="team">
      <h2 className="team__title">Meet Our Team of Experts</h2>
      <p className="team__subtitle">
        Our team of licensed professionals is here to support you with a diverse
        range of specializations and a shared commitment to your well-being.
      </p>

      <div className="team__cards">
        {experts.map((ex, i) => (
          <div className="team__card" key={i}>
            <img src={ex.img} alt={ex.name} className="team__img" />
            <h3 className="team__name">{ex.name}</h3>
            <p className="team__role">{ex.title}</p>
            <p className="team__desc">{ex.desc}</p>

            <button className="team__btn">View Full Profile</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
