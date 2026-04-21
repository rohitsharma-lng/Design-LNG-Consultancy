'use client'

import React from 'react'
import styles from "./service.module.css"

const Services = () => {
  return (
      <section className="container mx-auto px-4 py-20">

        {/* Section heading — sticky while cards scroll past */}
        <div className="flex flex-col mb-16 px-2 sm:px-0 sticky top-20">
            <div className="flex items-center justify-center gap-2">
                <div className="sec-top-line mr-1"></div>
                <span className="sec-top-heading">Services</span>
                <div className="sec-dot"></div>
            </div>
            <h2 className="section-heading mt-3">Technology <span className="grad">Solutions</span><br/>Designed for Impact</h2>
        </div>

        {/* Cards container */}
        <div className={styles['service-cards-container']} id="serviceCardsContainer">

            {/* Card 1: Enterprise Application Development */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-1']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="140" cy="50" r="80" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="200" cy="140" r="60" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="100" cy="200" r="50" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M50 50 L230 230 M230 50 L50 230" stroke="white" strokeWidth="1" opacity="0.2"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>Enterprise Application<br/>Development</h3>
                    <p className={styles['service-card-description']}>Empower your business with next-gen, automated and interactive software development services to streamline business operations</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Card 2: Product Architecture & Design */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-2']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="60" y="60" width="80" height="80" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <rect x="140" y="140" width="80" height="80" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M100 100 L180 180 M140 60 L60 140" stroke="white" strokeWidth="1" opacity="0.2"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>Product Architecture & Design</h3>
                    <p className={styles['service-card-description']}>As an innovative software development and technology consulting firm, we design scalable, multi-dimensional product architectures to ensure maximum business value.</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Card 3: Data Engineering & Analytics */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-3']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="140,30 240,90 240,210 140,270 40,210 40,90" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="140" cy="140" r="50" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>Data Engineering & Analytics</h3>
                    <p className={styles['service-card-description']}>Our experts develop platforms on Azure, Databricks, Power BI, and Snowflake to create a robust enterprise data strategy. This leads towards maximizing customer experience.</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Card 4: Cloud & DevOps Solutions */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-4']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 140 Q90 80 140 140 T230 140" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M50 100 Q90 40 140 100 T230 100" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M50 180 Q90 120 140 180 T230 180" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>Cloud & DevOps Solutions</h3>
                    <p className={styles['service-card-description']}>L&G, a cloud-centric, CX-focused Enterprise Solutions company, leverages the latest DevOps technologies to modernize legacy systems and apply best practices across Azure, AWS, and on-premises environments.</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Card 5: AI-Enabled Applications Development */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-5']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M140 50 L180 90 L140 130 L100 90 Z" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M140 150 L180 190 L140 230 L100 190 Z" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="230" cy="140" r="30" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>AI-Enabled Applications Development</h3>
                    <p className={styles['service-card-description']}>We develop advanced, intelligent, convenient apps with predictive analytics, conversational AI, and machine learning. From legacy platform modernization to developing state-of-the-art business solutions, our goal is to help you gain 3X value with each business app.</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Card 6: Remote Engineering Teams */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-6']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="80" cy="80" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="200" cy="80" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <circle cx="140" cy="180" r="40" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <path d="M80 120 L140 140 M200 120 L140 140" stroke="white" strokeWidth="2" opacity="0.3"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>Remote Engineering Teams</h3>
                    <p className={styles['service-card-description']}>Unleash the power of remote collaboration with our vetted, solution-focused engineering team. This allows you to overcome geographic barriers and achieve measurable business outcomes.</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Card 7: UX/UI Design */}
            <a href="#" className={`${styles['service-card']} ${styles['service-card-bg-7']}`} onClick={(e) => e.preventDefault()}>
                <svg className={styles['service-card-bg-pattern']} viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="80" y="40" width="120" height="80" rx="10" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <rect x="80" y="140" width="120" height="100" rx="10" stroke="white" strokeWidth="2" fill="none" opacity="0.3"/>
                    <line x1="100" y1="160" x2="180" y2="160" stroke="white" strokeWidth="2" opacity="0.3"/>
                    <line x1="100" y1="180" x2="160" y2="180" stroke="white" strokeWidth="2" opacity="0.3"/>
                </svg>
                <div className={styles['service-card-content']}>
                    <h3 className={styles['service-card-title']}>UX/UI Design</h3>
                    <p className={styles['service-card-description']}>As a renowned UI/UX design company, L&G Consultancy develops visually enthralling, high-performance mobile/web interfaces. This enables your business to drive more conversions.</p>
                </div>
                <div className={styles['service-card-icon']}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 4.5L21 12M21 12L13.5 19.5M21 12H3" stroke="#3719CA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </a>

            {/* Scroll sentinel */}
            <div className={styles['service-scroll-sentinel']} id="serviceSentinel"></div>
        </div>

    </section>
  )
}

export default Services
