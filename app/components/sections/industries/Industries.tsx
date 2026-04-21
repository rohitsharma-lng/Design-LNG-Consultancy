'use client'

import { useState } from 'react'
import styles from './industries.module.css'

const industries = [
  {
    name: 'Banking',
    tag: 'BFSI',
    items: ['Smart digital banking app', 'Peer-to-Peer Lending app', 'Wealth management app', 'Digital lending systems'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <rect x="2" y="8" width="16" height="10" rx="1" stroke="url(#indIconGrad)" strokeWidth="1.5" />
        <path d="M4 8V6a6 6 0 0 1 12 0v2" stroke="url(#indIconGrad)" strokeWidth="1.5" />
        <rect x="8" y="11" width="4" height="4" rx="0.5" stroke="url(#indIconGrad)" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    name: 'FinTech',
    tag: 'FINTECH',
    items: ['Payment gateway solutions', 'Blockchain & crypto platforms', 'Robo-advisory apps', 'Insurance tech platforms'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="url(#indIconGrad)" strokeWidth="1.5" />
        <path d="M10 6v1.5M10 12.5V14M7.5 11a2.5 2.5 0 0 0 2.5 1.5 2 2 0 1 0 0-4 2 2 0 1 1 0-4A2.5 2.5 0 0 1 12.5 6" stroke="url(#indIconGrad)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    tag: 'HEALTH TECH',
    items: ['Telemedicine platforms', 'EHR/EMR systems', 'Health monitoring apps', 'AI-powered diagnostics'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <path d="M10 17S3 13 3 7.5A4.5 4.5 0 0 1 10 4a4.5 4.5 0 0 1 7 3.5C17 13 10 17 10 17Z" stroke="url(#indIconGrad)" strokeWidth="1.5" />
        <path d="M8 9.5h4M10 7.5v4" stroke="url(#indIconGrad)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Ecommerce',
    tag: 'E-COMMERCE',
    items: ['Custom marketplace development', 'B2B & B2C platforms', 'Headless commerce solutions', 'Inventory management systems'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <path d="M2.5 3h2l1.5 8h9l1.5-5H6" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="15.5" r="1" fill="url(#indIconGrad)" />
        <circle cx="14" cy="15.5" r="1" fill="url(#indIconGrad)" />
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    tag: 'MANUFACTURING',
    items: ['IoT-enabled factory automation', 'Supply chain management', 'Predictive maintenance systems', 'ERP & MES solutions'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <path d="M2 15V9l4-4 4 4V5l4 4v6H2Z" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="7" y="11" width="2.5" height="4" rx="0.5" stroke="url(#indIconGrad)" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: 'Travel & Transport',
    tag: 'TRAVEL TECH',
    items: ['Online booking platforms', 'Fleet management systems', 'Real-time tracking apps', 'Travel aggregator portals'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-8 3 5 2-3 5 6H3Z" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="15" cy="5" r="1.5" stroke="url(#indIconGrad)" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    name: 'Hospitality',
    tag: 'HOSPITALITY',
    items: ['Hotel management systems', 'Restaurant POS & ordering apps', 'Guest experience platforms', 'Revenue management tools'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <rect x="3" y="9" width="14" height="9" rx="1" stroke="url(#indIconGrad)" strokeWidth="1.5" />
        <path d="M6 9V7a4 4 0 0 1 8 0v2" stroke="url(#indIconGrad)" strokeWidth="1.5" />
        <path d="M10 12v3" stroke="url(#indIconGrad)" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Telecom',
    tag: 'TELECOM TECH',
    items: ['Intelligent Virtual Assistant', 'AI-based Billing', 'Robotic Process Automation', 'Fraud detection & security'],
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 20 20" fill="none">
        <path d="M5 10a7 7 0 0 0 10 0" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 12.5a4 4 0 0 0 5 0" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 15v2" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 7.5a10 10 0 0 0 15 0" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const Industries = () => {
  const [activeCard, setActiveCard] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? -1 : index))
  }

  return (
    <>
      {/* SVG gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute', overflow: 'hidden' }} aria-hidden="true">
        <defs>
          <linearGradient id="indIconGrad" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3719CA" />
            <stop offset="100%" stopColor="#1DD1E8" />
          </linearGradient>
        </defs>
      </svg>

      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col px-2 sm:px-0 mb-8">
            <div className="flex items-center justify-center gap-2">
              <div className="sec-top-line mr-1"></div>
              <span className="sec-top-heading">INDUSTRIES WE SERVE</span>
              <div className="sec-dot"></div>
            </div>
            <h2 className="section-heading my-3 mx-auto" style={{ maxWidth: 684 }}>
              Delivering Industry-Specific <span className="grad">Smart Solutions</span>
            </h2>
            <p className="head-description m-0 mx-auto" style={{ maxWidth: 857 }}>
              Our team understands your business industry and its related challenges and opportunities. Accordingly, we deliver smart solutions with pinpoint accuracy.
            </p>
          </div>

          {/* Industries Component */}
          <div className="industries-wrapper px-2 sm:px-0">

            {/* Desktop Layout — Expanding Cards */}
            <div className={styles['ind-desktop']}>
              {industries.map((ind, index) => (
                <div
                  key={index}
                  className={`${styles['ind-card']} ${activeCard === index ? styles['active'] : ''}`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className={styles['ind-card-strip']}>
                    <span className={styles['ind-card-icon']}>{ind.icon(20)}</span>
                    <span className={styles['ind-card-label']}>{ind.name}</span>
                  </div>
                  <div className={styles['ind-card-content']}>
                    <div className={styles['ind-panel-header']}>
                      <span className={styles['ind-panel-icon']}>{ind.icon(22)}</span>
                      <div className={styles['ind-panel-headings']}>
                        <h3 className={styles['ind-panel-title']}>{ind.name}</h3>
                        <span className={styles['ind-panel-tag']}>{ind.tag}</span>
                      </div>
                    </div>
                    <hr className={styles['ind-divider']} />
                    <ul className={styles['ind-panel-list']}>
                      {ind.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="#" className="ind-learn-btn" onClick={(e) => e.preventDefault()}>
                      Learn More <span className="ind-arrow">&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Accordion */}
            <div className={styles['ind-accordion']}>
              {industries.map((ind, index) => (
                <div
                  key={index}
                  className={`${styles['ind-acc-item']} ${activeAccordion === index ? styles['active'] : ''}`}
                >
                  <button className={styles['ind-acc-header']} onClick={() => toggleAccordion(index)}>
                    <span className={styles['ind-acc-left']}>
                      <span className={styles['ind-acc-icon']}>{ind.icon(18)}</span>
                      <span>{ind.name}</span>
                    </span>
                    <span className={styles['ind-acc-arrow']}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 6l4 4 4-4" stroke="url(#indIconGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <div className={styles['ind-acc-body']}>
                    <span className={styles['ind-panel-tag']}>{ind.tag}</span>
                    <hr className={styles['ind-divider']} />
                    <ul className={styles['ind-panel-list']}>
                      {ind.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <a href="#" className="ind-learn-btn" onClick={(e) => e.preventDefault()}>
                      Learn More <span className="ind-arrow">&rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Industries
