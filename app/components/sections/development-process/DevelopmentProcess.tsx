'use client'

import { useState, ReactNode } from 'react'
import Image from 'next/image'
import styles from './development-process.module.css'

type Feature = { icon: ReactNode; label: string }

type Tab = {
  id: string
  label: string
  tabIcon: ReactNode
  cardIcon: ReactNode
  title: string
  description: string
  tags: string[]
  features: Feature[]
  image: string
}

/* ------------------------- Icons ------------------------- */

const IconPhone = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconTeam = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconCode = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m9 18-6-6 6-6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconCheck = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconRocket = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4s5 1 5 6-6 9-6 9-3-1-5-3-3-5-3-5 4-1 6 0 3 3 3 3M9 17l-3 3M5 14l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14.5" cy="9.5" r="1.5" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
)

const IconWrench = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.7 6.3a4 4 0 0 0-5.2 5.2L3 18l3 3 6.5-6.5a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.7-.4-.4-2.7 2.7-2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* Feature icons */
const FIChart = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FIEye = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" stroke="currentColor" strokeWidth="1.7"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)
const FIMap = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
    <path d="M9 4v14M15 6v14" stroke="currentColor" strokeWidth="1.7"/>
  </svg>
)
const FIList = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FIBolt = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FILayers = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FIBug = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="7" y="7" width="10" height="13" rx="5" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M3 12h4M17 12h4M5 5l3 3M19 5l-3 3M12 7V4M12 20v-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
)
const FICheck = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const FICloud = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 18a5 5 0 1 1 1.5-9.8A6 6 0 0 1 20 11a4 4 0 0 1 0 8H7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)
const FISync = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const FIServer = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
    <rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M7 7h.01M7 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)
const FIUserCheck = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.7"/>
    <path d="m16 11 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)
const FIShield = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
  </svg>
)

/* ------------------------- Tabs data ------------------------- */

const TABS: Tab[] = [
  {
    id: 'discovery',
    label: 'Discovery Call',
    tabIcon: IconPhone,
    cardIcon: IconPhone,
    title: 'Discovery Call',
    description:
      'We start with a deep-dive discovery call to understand your banking business needs, goals, and constraints. This shapes a clear, strategic blueprint before any code is written.',
    tags: ['Requirements', 'KPI Mapping', 'Scope'],
    features: [
      { icon: FIChart, label: 'Market Analysis' },
      { icon: FIEye, label: 'Gap Assessment' },
      { icon: FIMap, label: 'Process Mapping' },
    ],
    image: '/images/Discovery-call.png',
  },
  {
    id: 'team-formation',
    label: 'Team Formation',
    tabIcon: IconTeam,
    cardIcon: IconTeam,
    title: 'Team Formation',
    description:
      'We assemble a cross-functional squad tailored to your project — engineers, designers, and domain experts — with clearly defined roles and a rapid onboarding plan.',
    tags: ['Squad Setup', 'Roles', 'Onboarding'],
    features: [
      { icon: FIUserCheck, label: 'Right Skills' },
      { icon: FIList, label: 'Clear Roles' },
      { icon: FIBolt, label: 'Fast Onboarding' },
    ],
    image: '/images/TEAM%20FORMATION.png',
  },
  {
    id: 'development',
    label: 'Development',
    tabIcon: IconCode,
    cardIcon: IconCode,
    title: 'Agile Development',
    description:
      'Cross-functional squads ship banking features in two-week sprints. We pair-program, peer-review, and automate quality gates from day one.',
    tags: ['Microservices', 'API First', 'CI/CD'],
    features: [
      { icon: IconCode, label: 'Clean Code' },
      { icon: FILayers, label: 'Modular Build' },
      { icon: FISync, label: 'Continuous Delivery' },
    ],
    image: '/images/development.png',
  },
  {
    id: 'testing',
    label: 'Testing',
    tabIcon: IconCheck,
    cardIcon: IconCheck,
    title: 'Quality Assurance',
    description:
      'Automated unit, integration, and load tests, paired with exploratory QA, ensure every release is reliable, performant, and audit-ready.',
    tags: ['Automation', 'Load Testing', 'UAT'],
    features: [
      { icon: FIBug, label: 'Defect Triage' },
      { icon: FICheck, label: 'Test Automation' },
      { icon: FIBolt, label: 'Stress Testing' },
    ],
    image: '/images/testing.png',
  },
  {
    id: 'deployment',
    label: 'Deployment',
    tabIcon: IconRocket,
    cardIcon: IconRocket,
    title: 'Cloud Deployment',
    description:
      'We launch on resilient cloud infrastructure with blue-green rollouts, observability, and 24/7 support so your platform scales without surprises.',
    tags: ['Blue-Green', 'Observability', 'Auto-scaling'],
    features: [
      { icon: FICloud, label: 'Cloud Setup' },
      { icon: FIServer, label: 'Infrastructure' },
      { icon: FISync, label: 'Monitoring' },
    ],
    image: '/images/DEPLOYMENT.png',
  },
  {
    id: 'maintenance',
    label: 'Post-Deployment',
    tabIcon: IconWrench,
    cardIcon: IconWrench,
    title: 'Post-Deployment Maintenance',
    description:
      'After launch we keep your platform healthy with proactive monitoring, security patches, and continuous improvements — backed by dedicated support.',
    tags: ['Monitoring', 'Support', 'Updates'],
    features: [
      { icon: FIShield, label: 'Security Patches' },
      { icon: FIBolt, label: 'Performance Tuning' },
      { icon: FISync, label: 'Continuous Improvement' },
    ],
    image: '/images/POST%20DEPLOYMENT%20MAINTENANCE.png',
  },
]

/* ------------------------- Component ------------------------- */

const DevelopmentProcess = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tab = TABS[activeTab]

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-10">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Process</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading text-center my-3">
            End-to-End Banking Software<br />
            <span className="grad">Development Process</span>
          </h2>
          <p className="head-description text-center mx-auto" style={{ maxWidth: 760 }}>
            Our custom banking and financial software development services serve multiple banking segments.
            This enables the banking business to cut through the noise.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles['dp-tabs']}>
          {TABS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`dp-tab ${i === activeTab ? 'dp-tab-active' : ''}`}
              aria-pressed={i === activeTab}
              suppressHydrationWarning
            >
              <span className="dp-tab-icon">{t.tabIcon}</span>
              <span className="dp-tab-label">{t.label}</span>
            </button>
          ))}
        </div>

        {/* Body */}
        <div className={`${styles['dp-body']} ${styles['dp-card-wrap']}`}>
          {/* Left card */}

          <div className={styles['dp-card']} key={tab.id}>
            <div className={styles['dp-card-icon']}>{tab.cardIcon}</div>
            <h3 className={styles['dp-card-title']}>{tab.title}</h3>
            <p className={styles['dp-card-desc']}>{tab.description}</p>

            {/* <div className={styles['dp-tags']}>
              {tab.tags.map((tag) => (
                <span key={tag} className={styles['dp-tag']}>{tag}</span>
              ))}
            </div> */}

            {/* <div className={styles['dp-features']}>
              {tab.features.map((f) => (
                <div key={f.label} className={styles['dp-feature']}>
                  <div className={styles['dp-feature-icon']}>{f.icon}</div>
                  <div className={styles['dp-feature-label']}>{f.label}</div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right image */}
          <div className={styles['dp-image-wrap']}>
            <Image
              key={tab.id}
              src={tab.image}
              alt={tab.title}
              fill
              sizes="(max-width: 960px) 100vw, 50vw"
              className={styles['dp-image']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentProcess
