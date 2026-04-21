'use client'

import React from 'react'
import Image from 'next/image';
import styles from './enterprise-services.module.css';
import {
  DeepExpertiseIcon,
  AIPoweredIcon,
  HolisticIcon,
  SecureIcon,
  AgileIcon,
  NoCodeIcon,
} from './icons';

const features = [
  { id: 1, text: 'Deep Industry Expertise', Icon: DeepExpertiseIcon },
  { id: 2, text: 'AI-Powered Enterprise App Solutions', Icon: AIPoweredIcon },
  { id: 3, text: 'Holistic Product Development', Icon: HolisticIcon },
  { id: 4, text: 'Secure & Compliant Software Development', Icon: SecureIcon },
  { id: 5, text: 'Implementation of Agile Methodology', Icon: AgileIcon },
  { id: 6, text: 'No-Code & Low-Code Platforms', Icon: NoCodeIcon },
];

const EnterpriseServices = () => {
  return (
      <section className={styles['enterprise-services-section']}>
      <div className={styles['enterprise-services-container']}>
        {/* Left Side - Image */}
        <div className={styles['enterprise-services-image-wrapper']}>
          <div className={styles['enterprise-services-image-mask']}>
            <Image
              src="/images/ea-bg.jpg"
              alt="Enterprise Services"
              width={616}
              height={645}
              className={styles['enterprise-services-image']}
              priority
            />
          </div>
          <div className={styles['enterprise-services-logo-overlay']}>
            <div className={styles['enterprise-services-logo']}>
              <svg width="50" height="18" viewBox="0 0 50 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="paint0" x1="5.65" x2="10.02" y1="0" y2="3.38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2F7AF1" />
                    <stop offset="1" stopColor="#1B468B" />
                  </linearGradient>
                  <linearGradient id="paint1" x1="0.91" x2="6.04" y1="4.46" y2="16.90" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2FBAF1" />
                    <stop offset="1" stopColor="#1E4CDD" />
                  </linearGradient>
                  <linearGradient id="paint2" x1="15.53" x2="11.33" y1="14.22" y2="11.68" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3CA7F7" />
                    <stop offset="1" stopColor="#0D72E3" />
                  </linearGradient>
                </defs>
                {/* Logo paths would go here */}
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={styles['enterprise-services-content']}>
          {/* Title */}
          <h2 className={styles['enterprise-services-title']}>
            <span className={styles['enterprise-services-title-light']}>Why Choose L&G for </span>
            <span className={styles['enterprise-services-title-gradient']}>Enterprise Application</span>
            <span className={styles['enterprise-services-title-light']}> Development Services?</span>
          </h2>

          {/* Description */}
          <p className={styles['enterprise-services-description']}>
            As a reputable enterprise app development company, we deliver sophisticated software solutions using cutting-edge technologies. Our expert eye and your collaboration with our experts allow us to deliver a top-notch solution.
          </p>

          {/* Features List */}
          <div className={styles['enterprise-services-features']}>
            {features.map((feature) => {
              const IconComponent = feature.Icon;
              return (
                <div key={feature.id} className={styles['enterprise-services-feature-item']}>
                  <div className={styles['enterprise-services-icon-wrapper']}>
                    <div className={styles['enterprise-services-icon-background']}>
                      <div className={styles['enterprise-services-icon-border']} />
                      <div className={styles['enterprise-services-icon']}>
                        <IconComponent />
                      </div>
                    </div>
                  </div>
                  <span className={styles['enterprise-services-feature-text']}>{feature.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseServices
