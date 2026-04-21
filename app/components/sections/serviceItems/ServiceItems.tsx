'use client'

import React from 'react'
import styles from "./serviceItems.module.css"

const ServiceItems = () => {
  return (
      <div className="size-full justify-center">
        
      <div className={styles['ser-container']}>
        <div className="container mx-auto px-0 md:px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <h2 className="section-heading text-center my-3 mx-auto" style={{ maxWidth: 1000 }}>
            Our Suite of Enterprise-Level <span className="grad">Application Development</span> Services
          
          </h2>
          <p className="head-description mb-0 mx-auto text-center" style={{ maxWidth: 700 }}>
            At L&G Consultancy, we offer an advanced, intelligent, interactive, and custom-built enterprise-level application development service for maximum user engagement.
          </p>
        </div>
      </div>
        <div className={styles['ser-grid']}>

          {/* Card 1: Enterprise Software Consulting */}
          <div className={`${styles['ser-card']} ${styles['ser-card-1']}`}>
            <div className={styles['ser-icon-wrapper']}>
              <svg className={styles['ser-icon']} viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h2 className={styles['ser-title']}>Enterprise Software Consulting</h2>
            <p className={styles['ser-description']}>
              Our vetted enterprise software development experts evaluate,
              plan, and incorporate effective strategies. This aligns with your
              pre-determined business goal for enhanced scalability,
              efficiency, and long-term digital success.
            </p>
            <svg className={`${styles['ser-decoration']} ${styles['ser-decoration-circles']}`} viewBox="0 0 200 200">
              <circle cx="50" cy="50" r="8" fill="white" opacity="0.3"/>
              <circle cx="100" cy="30" r="6" fill="white" opacity="0.2"/>
              <circle cx="150" cy="60" r="10" fill="white" opacity="0.25"/>
              <circle cx="80" cy="100" r="7" fill="white" opacity="0.2"/>
            </svg>
          </div>

          {/* Card 2: Legacy App Modernization */}
          <div className={`${styles['ser-card']} ${styles['ser-card-2']}`}>
            <div className={styles['ser-icon-wrapper']}>
              <svg className={styles['ser-icon']} viewBox="0 0 24 24">
                <rect x="2" y="3" width="20" height="14" rx="2"></rect>
                <path d="M8 21h8"></path>
                <path d="M12 17v4"></path>
              </svg>
            </div>
            <h2 className={styles['ser-title']}>Legacy App Modernization</h2>
            <p className={styles['ser-description']}>
              We transform existing business applications into next-gen
              platforms. Our app developers re-engineer legacy apps with
              smart, innovative tech stacks. This increases performance,
              security, and lowers maintenance costs.
            </p>
            <svg className={`${styles['ser-decoration']} ${styles['ser-decoration-circles']}`} viewBox="0 0 200 200">
              <circle cx="160" cy="40" r="12" fill="white" opacity="0.2"/>
              <circle cx="180" cy="100" r="8" fill="white" opacity="0.15"/>
              <circle cx="140" cy="140" r="10" fill="white" opacity="0.2"/>
            </svg>
          </div>

          {/* Card 3: Custom Enterprise Application Development */}
          <div className={`${styles['ser-card']} ${styles['ser-card-3']}`}>
            <div className={styles['ser-icon-wrapper']}>
              <svg className={styles['ser-icon']} viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h2 className={styles['ser-title']}>Custom Enterprise Application Development</h2>
            <p className={styles['ser-description']}>
              At L&G, we provide unique software solutions to meet your sophisticated enterprise requirements. This ensures robust functionality, seamless workflows and scalability while accelerating innovation across the entire development cycle.
            </p>
            <svg className={`${styles['ser-decoration']} ${styles['ser-decoration-circles']}`} viewBox="0 0 200 200">
              <circle cx="160" cy="40" r="12" fill="white" opacity="0.2"/>
              <circle cx="180" cy="100" r="8" fill="white" opacity="0.15"/>
              <circle cx="140" cy="140" r="10" fill="white" opacity="0.2"/>
            </svg>
          </div>

          {/* Card 4: Cloud Migration Services */}
          <div className={`${styles['ser-card']} ${styles['ser-card-4']}`}>
            <div className={styles['ser-icon-wrapper']}>
              <svg className={styles['ser-icon']} viewBox="0 0 24 24">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
            </div>
            <h2 className={styles['ser-title']}>Cloud Migration Services</h2>
            <p className={styles['ser-description']}>
              Our software development experts enable you to migrate existing apps, workloads, and data to secure cloud environments. This increases scalability, reduces cost and guarantees agility for faster innovation.
            </p>
            <svg className={`${styles['ser-decoration']} ${styles['ser-decoration-circles']}`} viewBox="0 0 200 200">
              <circle cx="160" cy="40" r="12" fill="white" opacity="0.2"/>
              <circle cx="180" cy="100" r="8" fill="white" opacity="0.15"/>
              <circle cx="140" cy="140" r="10" fill="white" opacity="0.2"/>
            </svg>
          </div>

          {/* Card 5: Microservices & API Development Services */}
          <div className={`${styles['ser-card']} ${styles['ser-card-5']}`}>
            <div className={styles['ser-icon-wrapper']}>
              <svg className={styles['ser-icon']} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="5" r="2"></circle>
                <circle cx="19" cy="19" r="2"></circle>
                <circle cx="5" cy="5" r="2"></circle>
                <circle cx="5" cy="19" r="2"></circle>
                <path d="M12 10V8"></path>
                <path d="M12 16v-2"></path>
                <path d="M10.5 10.5L7 7"></path>
                <path d="M17 7l-3.5 3.5"></path>
                <path d="M10.5 13.5L7 17"></path>
                <path d="M17 17l-3.5-3.5"></path>
              </svg>
            </div>
            <h2 className={styles['ser-title']}>Microservices & API Development Services</h2>
            <p className={styles['ser-description']}>
              We design and develop microservices with strong APIs to allow flexible, scalable, and maintainable enterprise systems. Foster integrations with our next-gen solutions for your business enterprise software.
            </p>
            <svg className={`${styles['ser-decoration']} ${styles['ser-decoration-circles']}`} viewBox="0 0 200 200">
              <circle cx="50" cy="50" r="8" fill="white" opacity="0.3"/>
              <circle cx="100" cy="30" r="6" fill="white" opacity="0.2"/>
              <circle cx="150" cy="60" r="10" fill="white" opacity="0.25"/>
              <circle cx="80" cy="100" r="7" fill="white" opacity="0.2"/>
            </svg>
          </div>

          {/* Card 6: Enterprise App Support and Maintenance */}
          <div className={`${styles['ser-card']} ${styles['ser-card-6']}`}>
            <div className={styles['ser-icon-wrapper']}>
              <svg className={styles['ser-icon']} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h2 className={styles['ser-title']}>Enterprise App Support and Maintenance</h2>
            <p className={styles['ser-description']}>
              Our enterprise application development services offer secure, healthy, and high-performing software. This includes bug fixes, consistent monitoring, and performance checks to keep your software running.
            </p>
            <svg className={`${styles['ser-decoration']} ${styles['ser-decoration-circles']}`} viewBox="0 0 200 200">
              <circle cx="50" cy="50" r="8" fill="white" opacity="0.3"/>
              <circle cx="100" cy="30" r="6" fill="white" opacity="0.2"/>
              <circle cx="150" cy="60" r="10" fill="white" opacity="0.25"/>
              <circle cx="80" cy="100" r="7" fill="white" opacity="0.2"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ServiceItems
