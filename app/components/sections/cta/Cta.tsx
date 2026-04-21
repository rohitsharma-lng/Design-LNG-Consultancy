import styles from './cta.module.css'

const Cta = () => {
  return (
    <section>
      <div className={`${styles['cta-container']} mx-auto px-4`}>
        <div className="px-2 sm:px-0">
          <div className={`${styles['cta-sec']} flex justify-center items-center flex-col gap-3`}>
            <h2 className={`${styles['cta-heading']} m-0`}>
              Let&apos;s Innovate, Collaborate,
              Build <span className="grad">Your Product Together!</span>
            </h2>
            <p className={styles['cta-desc']}>
              We turn your unique ideas into exceptional results. Contact us to
              scale your tech capacity and accelerate business growth.
            </p>

            <a href="#" className="btn-gradient cta-sec-btn">
              Let&apos;s Talk!
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M0.9375 6.1875H11.4375M11.4375 6.1875L6.1875 0.9375M11.4375 6.1875L6.1875 11.4375" stroke="white" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta
