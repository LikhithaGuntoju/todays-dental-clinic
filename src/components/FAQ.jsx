import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide general dentistry, orthodontics, cosmetic procedures, and pediatric care."
  },
  {
    question: "Are you accepting new patients?",
    answer: "Yes, we welcome new patients. You can book an appointment online or call us."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major dental insurance plans."
  },
  {
    question: "Where are you located?",
    answer: "We are located in downtown, near Central Park."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{item.question}</div>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
