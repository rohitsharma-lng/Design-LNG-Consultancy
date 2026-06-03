import styles from './bi-banner.module.css';

const features = [
  'Futuristic Apps for Better Business Growth',
  'Platform-Agnostic Mobile Apps',
  'Smooth Experience Across Devices',
  'Mobile-Focused Apps for Maximum User Engagement',
];

const BiBanner = () => {
  return (
    <section className={styles['bi-banner-section']}>
      {/* ── Background Video ── */}
      <div className={styles['bi-banner-video-wrapper']}>
        <video
          className={styles['bi-banner-video']}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          src="/videos/Bi-banner-video-2.mp4"
        />
      </div>

      {/* ── Content over video ── */}
      <div className={styles['bi-banner-content']}>
        <h1 className={`section-heading my-2 ${styles['bi-banner-heading']}`}>
          Develop Interactive, AI-Fueled Apps with{" "}
          <span className="grad">Cross-Platform App Development Services</span>
        </h1>

        <ul className={styles['bi-banner-features']}>
          {features.map((feature) => (
            <li key={feature} className={styles['bi-banner-feature']}>
              <span className={styles['bi-banner-dot']} aria-hidden="true" />
              <span className={`${styles['head-description2']} mb-0`}>{feature}</span>
            </li>
          ))}
        </ul>


        <a href="#" className="btn-gradient cta-sec-btn mt-5">
          Talk to an App Development Expert
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M0.9375 6.1875H11.4375M11.4375 6.1875L6.1875 0.9375M11.4375 6.1875L6.1875 11.4375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default BiBanner
