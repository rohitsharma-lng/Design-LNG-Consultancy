'use client'

import React from 'react'
import styles from "./service-ai.module.css"

const ServiceAI = () => {
  return (
    <div className={styles['aihld-wrapper']}>

      {/* Main Content */}
      <div className={styles['aihld-content-container']}>
        {/* Heading Section */}
        <header className={styles['aihld-heading-section']}>
          <h2 className={styles['aihld-heading']}>
            <span className={styles['aihld-heading-light']}>
              Reshaping Business Landscape with{' '}
            </span>
            <span className={styles['aihld-gradient-text']}>
              Next Gen AI
            </span>{' '}
            <span className={styles['aihld-heading-light']}>
              Integration
            </span>
          </h2>
        </header>

        {/* Description */}
        <p className={styles['aihld-description']}>
          At L&G Consultancy, we incorporate the power of artificial intelligence to reshape your enterprise software into an efficient, automated solution. From predictive analytics to intelligent automation, our expert team offers a range of AI integration services.
        </p>

        {/* Features Grid */}
        <div className={styles['aihld-features-grid']}>
          <div className={styles['aihld-feature-item']}>
            <div className={styles['aihld-feature-icon']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M0.41 13.41L6 19L7.41 17.58L1.83 12M22.24 5.58L11.66 16.17L7.5 12L6.07 13.41L11.66 19L23.66 7M18 7L16.59 5.58L10.24 11.93L11.66 13.34L18 7Z" fill="#2693DE" />
              </svg>
            </div>
            <p className={styles['aihld-feature-text']}>
              AI Software Development
            </p>
          </div>

          <div className={styles['aihld-feature-item']}>
            <div className={styles['aihld-feature-icon']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M0.41 13.41L6 19L7.41 17.58L1.83 12M22.24 5.58L11.66 16.17L7.5 12L6.07 13.41L11.66 19L23.66 7M18 7L16.59 5.58L10.24 11.93L11.66 13.34L18 7Z" fill="#2693DE" />
              </svg>
            </div>
            <p className={styles['aihld-feature-text']}>
              AI Consulting
            </p>
          </div>

          <div className={styles['aihld-feature-item']}>
            <div className={styles['aihld-feature-icon']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M0.41 13.41L6 19L7.41 17.58L1.83 12M22.24 5.58L11.66 16.17L7.5 12L6.07 13.41L11.66 19L23.66 7M18 7L16.59 5.58L10.24 11.93L11.66 13.34L18 7Z" fill="#2693DE" />
              </svg>
            </div>
            <p className={styles['aihld-feature-text']}>
              Smart, Automated AI Analytics
            </p>
          </div>

          <div className={styles['aihld-feature-item']}>
            <div className={styles['aihld-feature-icon']}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M0.41 13.41L6 19L7.41 17.58L1.83 12M22.24 5.58L11.66 16.17L7.5 12L6.07 13.41L11.66 19L23.66 7M18 7L16.59 5.58L10.24 11.93L11.66 13.34L18 7Z" fill="#2693DE" />
              </svg>
            </div>
            <p className={styles['aihld-feature-text']}>
              AI in legacy software modernization
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a href="#" className="btn-gradient cta-sec-btn">
              Discuss Your AI Project
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M0.9375 6.1875H11.4375M11.4375 6.1875L6.1875 0.9375M11.4375 6.1875L6.1875 11.4375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
      </div>

      {/* Hero Image */}
      <div className={styles['aihld-hero-image-container']}>
        <div className={styles['aihld-hero-image-mask']}>
          <img
            src="/images/ai-service-bg.png"
            alt="AI Technology - Human and Robot Hand Interaction"
            className={styles['aihld-hero-image']}
          />
        </div>
      </div>

      {/* Decorative Bottom Overlay */}
      <div className={styles['aihld-decorative-overlay']}></div>
    </div>
  );
}

export default ServiceAI