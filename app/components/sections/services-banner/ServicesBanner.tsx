import styles from './services-banner.module.css';

export default function SerHeroBanner() {
  return (
    <section className={styles['ser-banner-section']}>

      {/* ── Background Video ── */}
      <div className={styles['ser-banner-video-wrapper']}>
        <video
          className={styles['ser-banner-video']}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          /**
           * Replace the src below with your actual video file path or URL.
           * Recommended: provide both .webm (smaller) and .mp4 (fallback).
           * Example using Next.js public folder:
           *   src="/videos/hero-bg.mp4"
           */
          src="/videos/services-banner.mp4"
          poster="/images/hero-poster.jpg" // shown while video loads
        >
          {/*
            Provide multiple formats for best browser support.
            Uncomment and update paths as needed:

            <source src="/videos/hero-bg.webm" type="video/webm" />
            <source src="/videos/hero-bg.mp4"  type="video/mp4"  />
          */}
          {/* Fallback image for browsers that don't support video */}
          <img
            src="/images/hero-poster.jpg"
            alt="Enterprise application development background"
            className={styles['ser-banner-video-fallback']}
          />
        </video>
      </div>

      {/* ── Dark Overlay ── */}
      <div className={styles['ser-banner-overlay']} aria-hidden="true" />

      {/* ── Content ── */}
      <div className={styles['ser-banner-content']}>

        {/* Heading */}
        <h1 className={styles['ser-banner-heading']}>
          <span className={styles['ser-banner-heading-highlight']}>Enterprise</span>
          {' '}Application Development
        </h1>

        {/* Subheading */}
        <p className={styles['ser-banner-subheading']}>
          AI-Powered Enterprise Application Development Services for{' '}
          <span className={styles['ser-banner-subheading-bold']}>3X Business Growth</span>
        </p>

        {/* CTA Button */}
        <div className={styles['ser-banner-cta-wrapper']}>
          <a
            href="#contact"
            className="btn-gradient ser-banner-cta-btn"
            role="button"
            aria-label="Consult App Developers"
          >
            Consult App Developers
            <span className="ser-banner-cta-arrow" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M0.9375 6.1875H11.4375M11.4375 6.1875L6.1875 0.9375M11.4375 6.1875L6.1875 11.4375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
