import { useState } from "react";
import "./FAQ.scss";
import SectionHeader from "../SectionHeader/SectionHeader";

const faqData = [
  {
    "question": "Onlayn terapiya nədir və necə işləyir?",
    "answer": "Onlayn terapiya sizə lisenziyalı terapevtlə təhlükəsiz platformamız vasitəsilə video, audio və ya çat seansları vasitəsilə danışmağa imkan verir."
  },
  {
    "question": "Onlayn terapiya ənənəvi canlı terapiya qədər təsirlidirmi?",
    "answer": "Bəli, çoxsaylı araşdırmalar göstərir ki, onlayn terapiya ənənəvi terapiya qədər təsirli ola bilər."
  },
  {
    "question": "Bir seansın qiyməti nə qədərdir?",
    "answer": "Seansın qiyməti terapevtə və xidmət növünə görə dəyişir. Ətraflı məlumatı qiymət səhifəsindən görə bilərsiniz."
  },
  {
    "question": "Məlumatlarım gizli saxlanılırmı?",
    "answer": "Əlbəttə. Bütün yazışmalar şifrələnir və ciddi məxfilik qaydalarına uyğun şəkildə qorunur."
  },
  {
    "question": "Necə başlamaq olar?",
    "answer": "Sadəcə hesab yaradın, terapevt seçin və ilk seansınızı planlaşdırın."
  }
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
              <p className="openAnswer">{item.answer}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
