'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import styles from './stats.module.css'

const statsData = [
  {
    target: 2000,
    suffix: 'K+',
    title: 'Projects Delivered',
    description:
      'Successfully engineered and deployed enterprise-grade digital solutions across diverse industries worldwide.',
    styling: 'stat-box-styling-1',
    spacing: 'mt-0 md:mt-5',
  },
  {
    target: 8,
    suffix: '+',
    title: 'Years of Experience',
    description:
      'Nearly a decade of proven expertise building scalable AI systems, cloud architectures, and data pipelines.',
    styling: 'stat-box-styling-2',
    spacing: 'mb-0 md:mb-9',
  },
  {
    target: 97,
    suffix: '%',
    title: 'Client Retention',
    description:
      'Industry-leading retention rate driven by our commitment to delivering measurable business outcomes.',
    styling: 'stat-box-styling-3',
    spacing: 'mt-0 md:mt-5',
  },
  {
    target: 50,
    suffix: '+',
    title: 'AI Experts',
    description:
      'A world-class team of engineers, data scientists, and consultants pushing the boundaries of innovation.',
    styling: 'stat-box-styling-4',
    spacing: 'mb-0 md:mb-9',
  },
]

const Stats = () => {
  const [counts, setCounts] = useState(() => statsData.map(() => 0))
  const hasAnimated = useRef<boolean[]>(statsData.map(() => false))
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const animateCounter = useCallback((index: number) => {
    if (hasAnimated.current[index]) return
    hasAnimated.current[index] = true

    const target = statsData[index].target
    const duration = 1200
    const stepTime = 16
    const totalSteps = duration / stepTime
    const increment = target / totalSteps
    let count = 0

    const update = () => {
      count += increment
      if (count < target) {
        setCounts((prev) => {
          const next = [...prev]
          next[index] = Math.floor(count)
          return next
        })
        requestAnimationFrame(update)
      } else {
        setCounts((prev) => {
          const next = [...prev]
          next[index] = target
          return next
        })
      }
    }

    update()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setTimeout(() => animateCounter(index), i * 150)
            }
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [animateCounter])

  const formatValue = (value: number) => {
    return value >= 1000 ? Math.floor(value / 1000) : value
  }

  return (
    <section className={styles['nl-stats']}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">About us</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading mt-3">
            Where Human Cognition Meets<br />
            the <span className="grad">AI Engine</span>
          </h2>
        </div>

        <div className={`${styles['nl-stats-grid']} grid px-2 sm:px-0`}>
          {statsData.map((stat, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el }}
              className={`${styles['stat-box']} ${styles[stat.styling]} ${stat.spacing}`}
            >
              <div>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M4 3.68994H20L26 13.6899L20 23.6899H4V3.68994Z"
                      fill="#3719CA"
                      fillOpacity="0.9"
                      stroke="#5B3FE0"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M11 8.68994L17 13.6899L11 18.6899"
                      stroke="#1DD1E8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex md:flex-col flex-row flex-wrap items-end md:items-start gap-2">
                <h3
                  className={styles['stats-card-heading']}
                  data-target={stat.target}
                >
                  {formatValue(counts[index])}
                  <span className={styles['stats-card-heading-small']}>{stat.suffix}</span>
                </h3>
                <h4 className={styles['stats-sub-text']}>{stat.title}</h4>
                <p className={`${styles['stats-desc']} m-0`}>{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
