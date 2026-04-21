import Image from 'next/image'
import styles from './global.module.css'

const locations = [
  {
    img: '/images/ZA.png',
    country: 'South Africa',
    code: 'ZA',
    city: 'Cape Town',
    address: '4th Floor, Mutual Park, Pinelands, Capetown, South Africa - 7405.',
    phone: '+27-849465127',
    imgWidth: 210,
  },
  {
    img: '/images/AE.png',
    country: 'UAE',
    code: 'AE',
    city: 'Dubai',
    address: 'FZCO 421, Dubai Commercity, Dubai, United Arab Emirates.',
    phone: '+971-555079890',
    imgWidth: 210,
  },
  {
    img: '/images/IN.png',
    country: 'India',
    code: 'IN',
    city: 'Amritsar',
    address: 'SCO 6, Floor - 5, Dua Square, Ranjit Avenue, Block - B, Amritsar, Punjab, India - 143002',
    phone: '+91-7717305144',
    imgWidth: 210,
  },
]

const Global = () => {
  return (
    <section className={styles['nl-global-presence']}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col px-2 sm:px-0 mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="sec-top-line mr-1"></div>
            <span className="sec-top-heading">Where We Are</span>
            <div className="sec-dot"></div>
          </div>
          <h2 className="section-heading my-3">
            Our <span className="grad">Global Presence</span>
          </h2>
          <p className="head-description m-0">
            Delivering world-class digital solutions from three strategic locations across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0">
          {locations.map((loc) => (
            <div key={loc.code}>
              <div className={styles['nl-location-box']}>
                <Image src={loc.img} alt="" className={styles['nl-loc-img']} width={loc.imgWidth} height={120} />
                <span className={styles['nl-loc-box']}>
                  <span className={styles['nl-lc-dot-outer']}>
                    <span className={styles['nl-loc-dot']}></span>
                  </span>
                  <span className={styles['nl-loc-text']}>{loc.country}</span>
                </span>
                <div className="mt-3 flex flex-col gap-3">
                  <span className={styles['nl-loc-country']}>{loc.code}</span>
                  <span className={styles['nl-cont-name']}>{loc.city}</span>
                  <div className={styles['loc-line']}></div>
                  <p className={`${styles['loc-address']} m-0`}>
                    {loc.address}
                    {loc.phone && (
                      <>
                        {' '}Phone:{' '}
                        <a href={`tel:${loc.phone.replace(/[^+\d]/g, '')}`} className={styles['loc-phone']}>
                          {loc.phone}
                        </a>
                      </>
                    )}
                  </p>
                </div>
                <div className={styles['loc-grad-blur']}></div>
                <div className={`${styles['loc-grad-blur']} ${styles['loc-grad-blur-top']}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Global
