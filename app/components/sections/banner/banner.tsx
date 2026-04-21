'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import lottie from 'lottie-web'
import styles from './banner.module.css'
const AnimatedAiSparkle = dynamic(
  () => import('@/app/components/ui/AnimatedAiSparkle/AnimatedAiSparkle'),
  { ssr: false }
)

const Banner = () => {
  const lottieContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lottieContainer.current) return

    const animation = lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/bannerAnimation.json',
    })

    return () => {
      animation.destroy()
    }
  }, [])

  return (
    <section className={styles["nl-banner"]}>
      {/* Background radial gradient blob */}
      <div className={styles["ban-grad"]}></div>
      <div
        ref={lottieContainer}
        className="absolute right-0 max-[567px]:-right-[198px] max-[567px]:top-[57px] w-[363px] h-[379px] max-w-full overflow-hidden pointer-events-none"
      />

      {/* Main content */}
      <div className="mx-auto max-w-[1360px] px-4 w-full overflow-hidden">
        <div className="flex flex-col items-center px-2 sm:px-0 mb-16">

          {/* Section label row */}
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Digital Solutions</span>
            <div className="sec-dot"></div>
          </div>

          {/* Heading */}
          <h1 className="section-heading my-3 mx-auto max-w-[714px]">
            Engineering{" "}
            <span className="grad">AI-Fueled Digital Systems</span>{" "}
            that Perform!
          </h1>

          {/* Description */}
          <p className="head-description mb-0 mx-auto max-w-[524px]">
            We develop smart, secure, scalable digital systems by combining
            AI capabilities, data engineering and robust architecture.
          </p>

          {/* Search bar */}
          <div className={`${styles["banner-search-bar"]} mx-auto mt-10`}>
            {/* Animated AI sparkle icon */}
            <AnimatedAiSparkle size={18} className="shrink-0" />

            <input type="text" className={styles["banner-search-input"]}
              placeholder="Show me your case studies" />

            <a href="#" className="search-arrow-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.33337 8H12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66663 4L12.6666 8L8.66663 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Banner
