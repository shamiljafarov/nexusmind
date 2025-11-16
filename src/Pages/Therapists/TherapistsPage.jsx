import React, { useState } from "react";
import "./TherapistsPage.scss";
import TherapistCard from "../../Components/TherapistCard/TherapistCard";
import Filters from "../../Components/Filters/Filters";
import therapist1 from '../../assets/images/pschologist-1.png'
import therapist2 from '../../assets/images/pschologist-2.png'
import therapist3 from '../../assets/images/pschologist-3.png'
import therapist4 from '../../assets/images/pschologist-4.png'
import Header from '../../Components/Header/Header'
import Container from "../../Components/Container/Container";
import Footer from '../../Components/Footer/Footer'


const therapistsData = [
  {
    name: "Dr. Olivia Chen, Psy.D.",
    specialization: "Depression",
    years: "5-10",
    description:
      "Providing a safe space for healing and growth through compassionate, evidence-based care.",
    image: therapist1,
  },
  {
    name: "Dr. Isabella Rossi, LMFT",
    specialization: "Anxiety",
    years: "10+",
    description:
      "Helping individuals navigate life's challenges and discover inner resilience.",
    image: therapist2,
  },
  {
    name: "Dr. Ava Nguyen, Ph.D.",
    specialization: "Trauma",
    years: "5-10",
    description:
      "Specializing in trauma recovery and empowering clients to reclaim their lives.",
    image: therapist3,
  },
  {
    name: "Dr. Marcus Cole, LCSW",
    specialization: "Depression",
    years: "1-5",
    description:
      "A collaborative approach to therapy, focusing on your strengths and goals.",
    image: therapist4,
  },
  {
    name: "Dr. Leo Kim, Psy.D.",
    specialization: "Relationship Issues",
    years: "5-10",
    description:
      "Fostering healthier connections and communication skills for individuals and couples.",
    image: therapist1,
  },
  {
    name: "Dr. Samuel Jones, Ph.D.",
    specialization: "Anxiety",
    years: "10+",
    description:
      "Guiding you towards a calmer mind and a more fulfilling, present life.",
    image: therapist2,
  },
];

export default function TherapistsPage() {
  const [filters, setFilters] = useState({
    specialization: [],
    years: [],
    search: "",
  });

  const filteredList = therapistsData.filter((t) => {
    const specMatch =
      filters.specialization.length === 0 ||
      filters.specialization.includes(t.specialization);

    const yearsMatch =
      filters.years.length === 0 || filters.years.includes(t.years);

    const searchMatch =
      t.name.toLowerCase().includes(filters.search.toLowerCase());

    return specMatch && yearsMatch && searchMatch;
  });

  return (
    <>
      <Header/>
      <Container>
          <div className="therapists-page">
      <Filters filters={filters} setFilters={setFilters} />

      <div className="content">
        <div className="header">
          <h1>Meet Our Therapists</h1>
          <p>Connect with professionals who can support your well-being.</p>

          <input
            className="search"
            placeholder="Search by name..."
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
          />
        </div>

        <div className="grid">
          {filteredList.map((t) => (
            <TherapistCard key={t.name} therapist={t} />
          ))}
        </div>

        <div className="pagination">
          <span className="active">1</span>
          <span>2</span>
          <span>3</span>
          <span>...</span>
          <span>8</span>
        </div>
      </div>
    </div>
      </Container>
      <Footer/>
    </>
  );
}
