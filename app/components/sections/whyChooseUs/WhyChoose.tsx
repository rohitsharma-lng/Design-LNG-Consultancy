'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Script from 'next/script'
import styles from './why-choose.module.css'

const slides = [
  {
    number: '01 / 04',
    title: 'Intelligence at Scale',
    description:
      'We develop scalable solutions that automate business insights and streamline business operations.',
    background: '#6366f1',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d="M14 5.83333C14.9283 5.83333 15.8185 6.20208 16.4749 6.85846C17.1313 7.51484 17.5 8.40507 17.5 9.33333C17.5 10.2616 17.1313 11.1518 16.4749 11.8082C15.8185 12.4646 14.9283 12.8333 14 12.8333C13.0717 12.8333 12.1815 12.4646 11.5251 11.8082C10.8687 11.1518 10.5 10.2616 10.5 9.33333C10.5 8.40507 10.8687 7.51484 11.5251 6.85846C12.1815 6.20208 13.0717 5.83333 14 5.83333Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.8333 15.1667C19.8333 13.9275 19.341 12.7391 18.4596 11.8577C17.5782 10.9763 16.3899 10.4833 15.1507 10.4833H12.8493C11.6101 10.4833 10.4218 10.9763 9.54041 11.8577C8.65901 12.7391 8.16667 13.9275 8.16667 15.1667V22.1667" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lottiePath: '/whyChooseUsAnimation/intelligence.json',
  },
  {
    number: '02 / 04',
    title: 'Operational Efficiency',
    description:
      'Our digital transformation company works in sync with smart systems that streamline processes, reduce errors, and improve productivity through automation.',
    background: '#5b7fc8',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <circle cx="14" cy="14" r="6" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" />
        <path d="M14 8V14L17.5 16.5" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" />
      </svg>
    ),
    lottiePath: '/whyChooseUsAnimation/operational.json',
  },
  {
    number: '03 / 04',
    title: 'Hyper-Personalization',
    description:
      'We use real-time behavioral machine learning to develop personalized customer journeys. This enables you to turn user data into user-oriented, growth-driven results.',
    background: '#5ba4d6',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d="M14 23.3333C19.1547 23.3333 23.3333 19.1547 23.3333 14C23.3333 8.8453 19.1547 4.66667 14 4.66667C8.8453 4.66667 4.66667 8.8453 4.66667 14C4.66667 19.1547 8.8453 23.3333 14 23.3333Z" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" />
        <path d="M14 9.33333V14H18.6667" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" />
      </svg>
    ),
    lottiePath: '/whyChooseUsAnimation/hyperPersonalization.json',
  },
  {
    number: '04 / 04',
    title: 'Innovation & You',
    description:
      'From autonomous agents to conversational AI chatbot development, our technology consulting services are designed to make your business #1.',
    background: '#02a7bc',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 28 28">
        <path d="M17.5 16.3333C17.7333 15.1667 18.3167 14.35 19.25 13.4167C20.4167 12.3667 21 10.85 21 9.33333C21 7.47682 20.2625 5.69634 18.9497 4.38359C17.637 3.07083 15.8565 2.33333 14 2.33333C12.1435 2.33333 10.363 3.07083 9.05025 4.38359C7.7375 5.69634 7 7.47682 7 9.33333C7 10.5 7.23333 11.9 8.75 13.4167C9.56667 14.2333 10.2667 15.1667 10.5 16.3333" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 21H17.5" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.667 25.667H16.3337" stroke="white" strokeOpacity="0.9" strokeWidth="1.63333" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lottiePath: '/whyChooseUsAnimation/lightBulb.json',
  },
]

const WhyChoose = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const lottieContainersRef = useRef<Array<HTMLDivElement | null>>([])
  const lottieInstancesRef = useRef<unknown[]>([])

  const totalSlides = slides.length

  const initLottieAnimations = useCallback(async () => {
    if (typeof window === 'undefined') return
    const lottie = (window as unknown as { lottie?: { loadAnimation: (opts: unknown) => unknown } }).lottie
    if (!lottie) return

    await Promise.all(
      slides.map(async (slide, index) => {
        const container = lottieContainersRef.current[index]
        if (!container || lottieInstancesRef.current[index]) return
        try {
          const res = await fetch(slide.lottiePath)
          if (!res.ok) throw new Error(`Failed to load ${slide.lottiePath}: ${res.status}`)
          const animationData = await res.json()
          if (!lottieContainersRef.current[index] || lottieInstancesRef.current[index]) return
          lottieInstancesRef.current[index] = lottie.loadAnimation({
            container: lottieContainersRef.current[index] as HTMLDivElement,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid meet' },
          })
        } catch (err) {
          console.error('[WhyChoose] Lottie load failed', slide.lottiePath, err)
        }
      })
    )
  }, [])

  useEffect(() => {
    initLottieAnimations()
    return () => {
      lottieInstancesRef.current.forEach((inst) => {
        if (inst) (inst as { destroy: () => void }).destroy()
      })
      lottieInstancesRef.current = []
    }
  }, [initLottieAnimations])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  /* Auto-advance */
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  /* Keyboard navigation */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].screenX
    if (diff > 50) nextSlide()
    else if (diff < -50) prevSlide()
  }

  return (
    <section>
      <Script
        src="https://unpkg.com/lottie-web@5.12.2/build/player/lottie.min.js"
        strategy="afterInteractive"
        onLoad={initLottieAnimations}
      />
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">WHY Choose Us</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading text-center my-3 mx-auto" style={{ maxWidth: 684 }}>
            What Sets <span className="grad">Us Apart?</span>
          </h2>
          <p className="head-description text-center m-0 mx-auto" style={{ maxWidth: 857 }}>
            With a decade of expertise, L&amp;G presents next-gen, automated solutions.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 relative">
        <div className="w-full max-w-[1200px] flex flex-col gap-8 sm:gap-16 items-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full relative">

            {/* Previous Button */}
            <button className="whylng-nav-button" onClick={prevSlide} aria-label="Previous slide">
              <svg className="whylng-button-icon" fill="none" viewBox="0 0 24 24">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Slide Track */}
            <div className="relative w-[900px] max-w-full h-[480px] sm:h-[400px] md:h-[350px] lg:h-[381px] overflow-hidden rounded-3xl">
              <div
                className="flex h-full gap-[30px] [transition:transform_0.8s_cubic-bezier(0.4,0,0.2,1)]"
                style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 30}px))` }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="min-w-full shrink-0 h-full relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                    style={{ background: slide.background }}
                  >
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
                      <svg fill="none" preserveAspectRatio="none" viewBox="0 0 900 381.069" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 24C0 10.7452 10.7452 0 24 0H876C889.255 0 900 10.7452 900 24V357.069C900 370.324 889.255 381.069 876 381.069H24C10.7451 381.069 0 370.324 0 357.069V24Z" fill="black" />
                      </svg>
                    </div>

                    {/* Grid Overlay */}
                    <div className="absolute inset-0 opacity-[0.34] pointer-events-none">
                      <div className={styles['whylng-grid-horizontal']} />
                      <div className={styles['whylng-grid-vertical']} />
                    </div>

                    <div className={styles['whylng-glow-corner']} />
                    <div className={styles['whylng-bottom-line']} />

                    {/* Content */}
                    <div className={styles['whylng-content-wrapper']}>
                      <div className="w-14 h-14 bg-white/[0.12] border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-[10px] [animation:whylng-icon-float_3s_ease-in-out_infinite]">
                        {slide.icon}
                      </div>
                      <div className="flex flex-col gap-5 max-w-[468px]">
                        <p className="font-semibold text-[11px] tracking-[4px] uppercase text-white/60 leading-[16.5px]">{slide.number}</p>
                        <h2 className={styles['whylng-slide-title']}>{slide.title}</h2>
                        <div className={styles['whylng-title-divider']} />
                        <p className="text-base leading-[28.8px] text-white/85 max-w-[391px]">{slide.description}</p>
                      </div>
                    </div>

                    {/* Animation */}
                    <div className={styles['whylng-svg-animation']}>
                      <div
                        ref={(el) => { lottieContainersRef.current[index] = el }}
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <button className="whylng-nav-button" onClick={nextSlide} aria-label="Next slide">
              <svg className="whylng-button-icon" fill="none" viewBox="0 0 24 24">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-[10px] items-center justify-center">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`whylng-indicator ${index === currentSlide ? 'whylng-indicator-active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
