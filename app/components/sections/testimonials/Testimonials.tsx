'use client'

import Image from 'next/image'
import styles from './testimonial.module.css'

const testimonials = [
  {
    logo: '/images/idm-logo-white.png',
    text: "Working with L&G has been a fantastic experience. In addition to moving our business in the new direction, I have learnt an incredible amount from them. I have to commend each and every member of their team for their dedication to client satisfaction, their professionalism and their ability to solve any challenge that they are presented with.",
    initials: 'GW',
    name: 'Geoffrey Wylde',
    title: 'Product Owner',
  },
  {
    logo: '/images/idm-logo-white.png',
    text: "The team's expertise and dedication have transformed our business operations completely. Their innovative approach and commitment to excellence are truly remarkable. Every interaction has been professional and productive.",
    initials: 'SM',
    name: 'Sarah Mitchell',
    title: 'CEO',
  },
  {
    logo: '/images/idm-logo-white.png',
    text: 'Outstanding service and support throughout our entire project. The attention to detail and ability to understand our needs made all the difference. Highly recommend their services to anyone looking for top-tier solutions.',
    initials: 'MC',
    name: 'Michael Chen',
    title: 'Director of Operations',
  },
  {
    logo: '/images/idm-logo-white.png',
    text: "Working with L&G has been a fantastic experience. In addition to moving our business in the new direction, I have learnt an incredible amount from them. I have to commend each and every member of their team for their dedication to client satisfaction, their professionalism and their ability to solve any challenge that they are presented with.",
    initials: 'GW',
    name: 'Geoffrey Wylde',
    title: 'Product Owner',
  },
  {
    logo: '/images/idm-logo-white.png',
    text: "The team's expertise and dedication have transformed our business operations completely. Their innovative approach and commitment to excellence are truly remarkable. Every interaction has been professional and productive.",
    initials: 'SM',
    name: 'Sarah Mitchell',
    title: 'CEO',
  },
]

const TestiCard = ({ t }: { t: (typeof testimonials)[0] }) => (
  <div className={styles['testi-card']}>
    <div className={styles['testi-card-inner']}>
      <div className={styles['testi-header']}>
        <Image src={t.logo} alt="Logo" width={80} height={30} className={styles['testi-logo']} />
      </div>
      <div className={styles['testi-content']}>
        <p className={styles['testi-text']}>{t.text}</p>
      </div>
      <div className={styles['testi-footer']}>
        <div className={styles['testi-avatar']}>
          <span className={styles['testi-initials']}>{t.initials}</span>
        </div>
        <div className={styles['testi-author']}>
          <div className={styles['testi-name']}>{t.name}</div>
          <div className={styles['testi-title']}>{t.title}</div>
        </div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section style={{ backgroundColor: '#0D1120' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Testimonials</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading text-center my-3 mx-auto" style={{ maxWidth: 684 }}>
            Let&apos;s hear from <span className="grad">Our Clients</span>
          </h2>
          <p className="head-description mb-0 mx-auto text-center" style={{ maxWidth: 700 }}>
            We prioritize our clients&apos; feedback to ensure we deliver top-notch quality work.
          </p>
        </div>
      </div>

      <div className={styles['testi-app']}>
        <div className={styles['testi-container']}>
          <div className={styles['testi-track']}>
            {/* First set */}
            {testimonials.map((t, i) => (
              <TestiCard key={`a-${i}`} t={t} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((t, i) => (
              <TestiCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
