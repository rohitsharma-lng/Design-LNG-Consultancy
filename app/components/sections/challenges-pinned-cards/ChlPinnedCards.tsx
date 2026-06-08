'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import aiStyles from '../ai-specailization/ai-specialization.module.css'
import styles from './chl-pinned-cards.module.css'

/* ================= DATA ================= */

const sections = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M6.667 18.667V14.667C6.667 12.191 7.65 9.817 9.4 8.067C11.15 6.317 13.524 5.334 16 5.334C18.476 5.334 20.85 6.317 22.6 8.067C24.35 9.817 25.334 12.191 25.334 14.667V18.667" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M25.333 20V21.334C25.333 22.04 25.052 22.72 24.552 23.22C24.052 23.72 23.374 24 22.667 24H17.333" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 18.667H6.667C5.96 18.667 5.28 18.386 4.78 17.886C4.28 17.386 4 16.708 4 16V16C4 15.293 4.28 14.614 4.78 14.114C5.28 13.614 5.96 13.334 6.667 13.334H8C8.354 13.334 8.693 13.474 8.943 13.724C9.193 13.975 9.333 14.314 9.333 14.667V17.334C9.333 17.687 9.193 18.026 8.943 18.276C8.693 18.527 8.354 18.667 8 18.667Z" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M24 18.667H25.333C26.04 18.667 26.72 18.386 27.22 17.886C27.72 17.386 28 16.708 28 16V16C28 15.293 27.72 14.614 27.22 14.114C26.72 13.614 26.04 13.334 25.333 13.334H24C23.646 13.334 23.307 13.474 23.057 13.724C22.807 13.975 22.667 14.314 22.667 14.667V17.334C22.667 17.687 22.807 18.026 23.057 18.276C23.307 18.527 23.646 18.667 24 18.667Z" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="25" r="1.5" stroke="#1DD1E8" stroke-width="1.87"/></svg>`,
    title: 'Disoriented customer support due to increasing call volumes',
    solution: 'We develop an AI-powered platform to automate customer support and reduce dependence on manual processes.',
    image: '/images/ind-pinned-1.png',
    stats: [
      { value: '30%', label: 'Spike in customer satisfaction score' },
      { value: '42%', label: 'Decrease in manual process' },
    ],
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 3.334L27.333 9.334V22.667L16 28.667L4.667 22.667V9.334L16 3.334Z" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 16V28.667" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M27.333 9.334L16 16" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M4.667 9.334L16 16" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.333 6.334L21.667 12.667" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Regulatory compliance gaps leading to operational risk',
    solution: 'We implement automated compliance monitoring systems that ensure real-time adherence to banking regulations.',
    image: '/images/ind-pinned-2.png',
    stats: [
      { value: '55%', label: 'Reduction in compliance violations' },
      { value: '38%', label: 'Faster audit processing' },
    ],
    cardBg: 'linear-gradient(108deg, rgba(55, 25, 202, 0.33) 2.63%, rgba(55, 25, 202, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M5.333 6.667H26.667C27.374 6.667 28.052 6.948 28.552 7.448C29.052 7.948 29.333 8.626 29.333 9.334V22.667C29.333 23.374 29.052 24.052 28.552 24.552C28.052 25.052 27.374 25.334 26.667 25.334H5.333C4.626 25.334 3.948 25.052 3.448 24.552C2.948 24.052 2.667 23.374 2.667 22.667V9.334C2.667 8.626 2.948 7.948 3.448 7.448C3.948 6.948 4.626 6.667 5.333 6.667Z" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.667 29.334H21.333" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 25.334V29.334" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.667 20H29.333" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/><path d="M9.333 13.334L12.667 16L17.333 12L22.667 16" stroke="#1DD1E8" stroke-width="1.87" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    title: 'Legacy infrastructure limiting digital transformation',
    solution: 'We modernize core banking platforms with cloud-native architectures while ensuring zero-downtime migration.',
    image: '/images/ind-pinned-3.png',
    stats: [
      { value: '60%', label: 'Improvement in system performance' },
      { value: '45%', label: 'Reduction in maintenance costs' },
    ],
    cardBg: 'linear-gradient(108deg, rgba(29, 209, 232, 0.33) 2.63%, rgba(29, 209, 232, 0.09) 40.95%, rgba(29, 209, 232, 0.00) 56.27%), rgba(17, 22, 48, 1)',
  },
]

const total = sections.length

/* ================= COMPONENT ================= */

const ChlPinnedCards = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardContainerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageSrc, setImageSrc] = useState(sections[0].image)
  const [imageAlt, setImageAlt] = useState(sections[0].title)
  const stat1ValueRef = useRef<HTMLSpanElement>(null)
  const stat1LabelRef = useRef<HTMLSpanElement>(null)
  const stat2ValueRef = useRef<HTMLSpanElement>(null)
  const stat2LabelRef = useRef<HTMLSpanElement>(null)
  const dotsRef = useRef<(HTMLSpanElement | null)[]>([])
  const currentRef = useRef(-1)
  const gsapReadyRef = useRef(false)

  /* ================= UPDATE CONTENT ================= */
  const updateContent = useCallback((index: number) => {
    const data = sections[index]
    if (iconRef.current) iconRef.current.innerHTML = data.icon
    if (titleRef.current) titleRef.current.textContent = data.title
    if (descRef.current) descRef.current.textContent = data.solution
    setImageSrc(data.image)
    setImageAlt(data.title)
    if (stat1ValueRef.current) stat1ValueRef.current.textContent = data.stats[0].value
    if (stat1LabelRef.current) stat1LabelRef.current.textContent = data.stats[0].label
    if (stat2ValueRef.current) stat2ValueRef.current.textContent = data.stats[1].value
    if (stat2LabelRef.current) stat2LabelRef.current.textContent = data.stats[1].label
    if (wrapperRef.current) wrapperRef.current.style.background = data.cardBg
  }, [])

  /* ================= INIT FIRST SECTION ================= */
  useEffect(() => {
    updateContent(0)
    currentRef.current = 0
    dotsRef.current[0]?.classList.add(aiStyles['active'])
  }, [updateContent])

  /* ================= GSAP SCROLL TRIGGER ================= */
  const initGsap = useCallback(() => {
    if (gsapReadyRef.current) return
    const w = window as any
    if (!w.gsap || !w.ScrollTrigger) return

    gsapReadyRef.current = true
    const gsap = w.gsap
    const ScrollTrigger = w.ScrollTrigger
    gsap.registerPlugin(ScrollTrigger)

    const animatedEls = [
      iconRef.current,
      titleRef.current,
      descRef.current,
      imageRef.current,
      stat1ValueRef.current,
      stat2ValueRef.current,
    ].filter(Boolean)

    const onUpdate = (self: any) => {
      const progress = self.progress * total
      const index = Math.min(Math.floor(progress), total - 1)

      if (index === currentRef.current) return
      currentRef.current = index

      gsap.to(animatedEls, {
        opacity: 0,
        y: 40,
        duration: 0.25,
        ease: 'power1.out',
        overwrite: true,
        onComplete: () => {
          updateContent(index)

          gsap.fromTo(animatedEls, { opacity: 0, y: 40 }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
          })
        },
      })

      dotsRef.current.forEach((dot) => dot?.classList.remove(aiStyles['active']))
      dotsRef.current[index]?.classList.add(aiStyles['active'])
    }

    const createTrigger = (trigger: Element | null, pin: Element | boolean, start: string) => {
      ScrollTrigger.create({
        trigger,
        start,
        end: () => '+=' + window.innerHeight * (total - 1),
        scrub: 1,
        pin,
        pinSpacing: true,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (total - 1),
          duration: { min: 0.2, max: 0.4 },
          delay: 0.05,
          ease: 'power1.inOut',
        },
        onUpdate,
      })
    }

    // ≤390px: pin only the card so the heading scrolls away normally
    // (avoids it sticking under the fixed navbar). Above that: pin the section.
    const mm = gsap.matchMedia()

    mm.add('(max-width: 390px)', () => {
      createTrigger(cardContainerRef.current, cardContainerRef.current, 'center center')
    })

    mm.add('(min-width: 391px)', () => {
      createTrigger(sectionRef.current, true, 'top top')
    })
  }, [updateContent])

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js"
        strategy="afterInteractive"
        onReady={initGsap}
      />

      <section ref={sectionRef} className={`${aiStyles['nl-scroll-section']} ${styles['chl-section']}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col px-2 sm:px-0 mb-4">
            <h2 className="section-heading my-2 mx-auto" style={{ maxWidth: 780 }}>
              Common Challenges Faced by{' '}
              <span className="grad">Customers in Banking</span>
            </h2>
            <p className="head-description mx-auto" style={{ maxWidth: 640 }}>
              As a trusted custom banking solutions provider, we ensure quality code, compliance, and customer trust while enhancing user engagement across modern and legacy platforms.
            </p>
          </div>
        </div>

        {/* Scroll Card */}
        <div ref={cardContainerRef} className={aiStyles['nl-card-container']}>
          <div className={aiStyles['nl-card-border']}>
            <div ref={wrapperRef} className={styles['chl-wrapper']}>
              {/* Content Row */}
              <div className={styles['chl-content-row']}>
                <div className={styles['chl-left']}>
                  <div ref={iconRef} className={aiStyles['nl-ai-icon']}></div>
                  <h2 ref={titleRef} className={styles['chl-title']}></h2>
                  <span className={styles['chl-solution-label']}>SOLUTION</span>
                  <p ref={descRef} className={styles['chl-desc']}></p>
                </div>

                <div ref={imageRef} className={styles['chl-right']}>
                  <Image src={imageSrc} alt={imageAlt} width={260} height={260} className={styles['chl-image']} />
                </div>
              </div>

              {/* Impact Row */}
              <div className={styles['chl-impact']}>
                <div className={styles['chl-impact-header']}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6.625 10.375C6.576 10.184 6.477 10.01 6.336 9.869C6.195 9.728 6.021 9.629 5.83 9.58L2.66 8.71C2.602 8.694 2.551 8.66 2.514 8.612C2.476 8.564 2.456 8.506 2.456 8.445C2.456 8.385 2.476 8.327 2.514 8.279C2.551 8.231 2.602 8.197 2.66 8.18L5.83 7.31C6.021 7.261 6.195 7.162 6.336 7.021C6.477 6.88 6.576 6.706 6.625 6.515L7.495 3.345C7.511 3.287 7.545 3.236 7.593 3.199C7.641 3.161 7.699 3.141 7.76 3.141C7.82 3.141 7.878 3.161 7.926 3.199C7.974 3.236 8.009 3.287 8.025 3.345L8.895 6.515C8.944 6.706 9.043 6.88 9.184 7.021C9.325 7.162 9.499 7.261 9.69 7.31L12.86 8.18C12.918 8.197 12.969 8.231 13.006 8.279C13.044 8.327 13.064 8.385 13.064 8.445C13.064 8.506 13.044 8.564 13.006 8.612C12.969 8.66 12.918 8.694 12.86 8.71L9.69 9.58C9.499 9.629 9.325 9.728 9.184 9.869C9.043 10.01 8.944 10.184 8.895 10.375L8.025 13.545C8.009 13.603 7.974 13.654 7.926 13.692C7.878 13.729 7.82 13.749 7.76 13.749C7.699 13.749 7.641 13.729 7.593 13.692C7.545 13.654 7.511 13.603 7.495 13.545L6.625 10.375Z" stroke="#1DD1E8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>IMPACT</span>
                </div>
                <div className={styles['chl-stats']}>
                  <div className={styles['chl-stat']}>
                    <span ref={stat1ValueRef} className={styles['chl-stat-value']}></span>
                    <span ref={stat1LabelRef} className={styles['chl-stat-label']}></span>
                  </div>
                  <div className={styles['chl-stat']}>
                    <span ref={stat2ValueRef} className={styles['chl-stat-value']}></span>
                    <span ref={stat2LabelRef} className={styles['chl-stat-label']}></span>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className={aiStyles['nl-dots']}>
                {sections.map((_, i) => (
                  <span
                    key={i}
                    ref={(el) => { dotsRef.current[i] = el }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <span className={`${aiStyles['scroll-down-info']} mx-auto mt-5`}>SCROLL TO EXPLORE ↓</span>
      </section>
    </>
  )
}

export default ChlPinnedCards
