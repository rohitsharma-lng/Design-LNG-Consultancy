'use client'

import React, { useState, useCallback, useEffect, useRef } from 'react'
import styles from './case-study.module.css'

const slides = [
  {
    caseNumber: 'Case 001',
    tags: ['Fintech', 'React', 'UX Strategy', 'Digital Banking'],
    title: 'Sitecore : SA Sitecore success story in the Personal Loan sector.',
    description:
      'A Well-established banking firm specializing in personal loans aimed to enhance customer engagement and increase loan application conversions through a more tailored digital experience.',
    image: '/images/cs-2.png',
  },
  {
    caseNumber: 'Case 002',
    tags: ['E-commerce', 'Vue.js', 'Design System'],
    title: 'E-commerce Platform: Scaling Success in Retail Digital Transformation',
    description:
      'A major retail brand sought to modernize their online presence and create a seamless shopping experience across all devices, resulting in increased conversions and customer satisfaction.',
    image: '/images/cs-1.png',
  },
  {
    caseNumber: 'Case 003',
    tags: ['Healthcare', 'Angular', 'Mobile First'],
    title: 'Healthcare Portal: Patient Engagement Through Digital Innovation',
    description:
      'A leading healthcare provider partnered with us to develop a comprehensive patient portal that streamlines appointment booking, medical records access, and telehealth consultations.',
    image: '/images/cs-2.png',
  },
  {
    caseNumber: 'Case 004',
    tags: ['SaaS', 'React Native', 'Cloud'],
    title: 'SaaS Platform: Revolutionizing Team Collaboration and Productivity',
    description:
      'A fast-growing startup needed a scalable, cloud-based solution to help teams collaborate more effectively. We delivered a comprehensive platform that increased user adoption by 300%.',
    image: '/images/cs-1.png',
  },
  {
    caseNumber: 'Case 005',
    tags: ['EdTech', 'Machine Learning', 'Gamification'],
    title: 'Education Platform: Transforming Learning Through AI-Powered Insights',
    description:
      'An innovative education company partnered with us to create an adaptive learning platform that uses AI to personalize content, resulting in 85% improved student engagement and retention rates.',
    image: '/images/cs-2.png',
  },
]

function getPositionClass(index: number, currentSlide: number): string {
  const total = slides.length
  let position = index - currentSlide

  if (position > total / 2) position -= total
  else if (position < -total / 2) position += total

  switch (position) {
    case 0:
      return styles['cs-center']
    case -1:
      return styles['cs-left-1']
    case -2:
      return styles['cs-left-2']
    case 1:
      return styles['cs-right-1']
    case 2:
      return styles['cs-right-2']
    default:
      return styles['cs-hidden']
  }
}

const CaseStudy = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const dragStartX = useRef(0)
  const dragEndX = useRef(0)
  const isDragging = useRef(false)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  /* Auto-play: advance every 5s, pause on hover */
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide])

  /* Keyboard navigation */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  /* Mouse drag */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      dragEndX.current = e.clientX
    }
    const handleMouseUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      if (trackRef.current) trackRef.current.style.cursor = 'grab'

      const diff = dragStartX.current - dragEndX.current
      if (Math.abs(diff) > 50) {
        diff > 0 ? nextSlide() : prevSlide()
      }
      dragStartX.current = 0
      dragEndX.current = 0
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [nextSlide, prevSlide])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    if (trackRef.current) trackRef.current.style.cursor = 'grabbing'
    e.preventDefault()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide()
    }
  }

  return (
    <section className={styles['cs-section']}>
      <div className={styles['cs-container']}>

        {/* Section heading */}
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Case Study</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading mt-3">
            Projects and Their <span className="grad">Visible Results</span>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className={styles['cs-carousel-wrapper']}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* Prev button */}
          <button className="cs-nav-button" aria-label="Previous slide" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Carousel container */}
          <div className={styles['cs-carousel-container']}>
            <div
              className={styles['cs-carousel-track']}
              ref={trackRef}
              style={{ cursor: 'grab' }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`${styles['cs-carousel-slide']} ${getPositionClass(index, currentSlide)}`}
                >
                  <div
                    className={styles['cs-card']}
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className={styles['cs-card-content']}>
                      <div className={styles['cs-case-number']}>{slide.caseNumber}</div>
                      <div className={styles['cs-tags']}>
                        {slide.tags.map((tag) => (
                          <span key={tag} className={styles['cs-tag']}>{tag}</span>
                        ))}
                      </div>
                      <h2 className={styles['cs-card-title']}>{slide.title}</h2>
                      <p className={styles['cs-card-description']}>{slide.description}</p>
                    </div>
                    <button className="cs-cta-button">Dive Deeper Now!</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next button */}
          <button className="cs-nav-button" aria-label="Next slide" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className={styles['cs-pagination']}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles['cs-pagination-dot']} ${index === currentSlide ? styles['cs-active'] : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default CaseStudy
