'use client';

import { useState } from 'react';
import styles from './faq.module.css';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'How much does banking software development cost?',
    answer: 'This depends on the project scope. However, simple applications may take 3–6 months, and the complex ones may take 16–18 months.',
  },
  {
    id: 2,
    question: 'What is the timeframe for developing banking software?',
    answer: 'This depends on the project scope. However, simple applications may take 3–6 months, and the complex ones may take 16–18 months.',
  },
  {
    id: 3,
    question: 'Does L&G Consultancy provide customized banking solutions?',
    answer: 'This depends on the project scope. However, simple applications may take 3–6 months, and the complex ones may take 16–18 months.',
  },
  {
    id: 4,
    question: 'Do you follow the latest compliance requirements for banking software development?',
    answer: 'This depends on the project scope. However, simple applications may take 3–6 months, and the complex ones may take 16–18 months.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles['faqhld-container']}>
      <div className={styles['faqhld-wrapper']}>
        {/* Left Section - CTA Card and Heading */}
        <div className={styles['faqhld-left-section']}>
          {/* FAQ Label */}
          <div className={styles['faqhld-label-wrapper']}>
            <div className={styles['faqhld-divider-left']}></div>
            <div className={styles['faqhld-label']}>FAQ</div>
            <div className={styles['faqhld-dot']}></div>
          </div>

          {/* Heading */}
          <div className={styles['faqhld-heading-wrapper']}>
            <h2 className={styles['faqhld-heading']}>
              <span className={styles['faqhld-heading-text']}>Frequently </span>
              <span className={styles['faqhld-heading-gradient']}>Asked </span>
              <span className={styles['faqhld-heading-text']}>Questions</span>
            </h2>
          </div>

          {/* CTA Card */}
          <div className={styles['faqhld-cta-card']}>
            <div className={styles['faqhld-cta-blur']}></div>
            <div className={styles['faqhld-cta-content']}>
              <div className={styles['faqhld-icon-wrapper']}>
                 <img width="18" height="18" src="/images/icon-faq.png" alt="FAQ" />
              </div>
              <h3 className={styles['faqhld-cta-title']}>Still have questions about L&G?</h3>
              <p className={styles['faqhld-cta-description']}>
                We're here to help you understand how we work, what we offer, and how we can build your banking solution together.
              </p>
              <a href="#" className="btn-gradient cta-sec-btn self-start">
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M0.9375 6.1875H11.4375M11.4375 6.1875L6.1875 0.9375M11.4375 6.1875L6.1875 11.4375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
              
            </div>
          </div>
        </div>

        {/* Right Section - FAQ Items */}
        <div className={styles['faqhld-right-section']}>
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`${styles['faqhld-item']} ${openIndex === index ? styles['faqhld-item-open'] : ''}`}
            >
              <button
                className={styles['faqhld-question-button']}
                onClick={() => toggleAccordion(index)}
              >
                <p className={`${styles['faqhld-question']} ${openIndex === index ? styles['faqhld-question-active'] : ''}`}>
                  {faq.question}
                </p>
                <div className={`${styles['faqhld-toggle-icon']} ${openIndex === index ? styles['faqhld-toggle-icon-active'] : ''}`}>
                  <svg fill="none" viewBox="0 0 14 14">
                    <path
                      d="M2.91667 7H11.0833"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity={openIndex === index ? '1' : '0.55'}
                      strokeWidth="1"
                    />
                    {openIndex !== index && (
                      <path
                        d="M7 2.91699V11.0837"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity="0.55"
                        strokeWidth="1"
                      />
                    )}
                  </svg>
                </div>
              </button>

              {openIndex === index && (
                <>
                  <div className={styles['faqhld-gradient-line']}></div>
                  <div className={styles['faqhld-answer']}>
                    <p>{faq.answer}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
