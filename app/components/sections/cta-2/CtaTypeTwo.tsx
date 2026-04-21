import Image from 'next/image'
import styles from './cta2.module.css'

const CtaTypeTwo = () => {
  return (
    <section>
      <div className="mx-auto px-4">
        <div className={`${styles['cta2-body']} flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 px-6 sm:px-10 md:px-12 py-8 md:py-6`}>
          <div className={`${styles['cta2-content']} flex flex-col items-start gap-5 md:gap-6 w-full md:w-auto md:flex-1`}>
            <h2 className={styles['cta2-heading']}>
              Ready to Develop Digitally Backed Software for Modern Banking?
            </h2>
            <a href="#" className="btn-gradient cta-2-btn">
              Connect me with Banking App Developers
            </a>
          </div>
          <div className={styles['cta2-image']}>
            <Image
              src="/images/cta-2-img.png"
              alt="Banking app development"
              width={420}
              height={220}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaTypeTwo
