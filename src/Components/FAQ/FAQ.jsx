import { useState } from "react";
import "./FAQ.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const faqData = [
  {
    question: "What is online therapy and how does it work?",
    answer:
      "Online therapy allows you to talk to a licensed therapist using video, audio, or chat-based sessions through our secure platform."
  },
  {
    question: "Is online therapy as effective as in-person therapy?",
    answer:
      "Yes, numerous studies show that online therapy can be just as effective as traditional in-person sessions."
  },
  {
    question: "How much does a session cost?",
    answer:
      "Session costs vary depending on the therapist and type of service. You can view details on the pricing page."
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Absolutely. All communication is encrypted and adheres to strict confidentiality policies."
  },
  {
    question: "How do I get started?",
    answer:
      "Simply create an account, choose a therapist, and schedule your first session."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqSection">
      <div className="header">
            <p className="subtitle">Tez-tez verilən</p>
            <p>suallar</p>
        </div>

      <div className="faqWrapper">
        {faqData.map((item, index) => (
          <div key={index} className="faqItem">
            <div className="questionRow" onClick={() => toggleFAQ(index)}>
              <p>{item.question}</p>
              <span className={`icon ${openIndex === index ? "rotate" : ""}`}>+</span>
            </div>

            <div className={`answerWrapper ${openIndex === index ? "open" : ""}`}>
              <p>{item.answer}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
